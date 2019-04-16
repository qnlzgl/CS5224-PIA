import TemplateService from './services/template-service';
import getter from './utils/getter';
import map from './utils/map';

function defaultGroupHeaderTemplate(data) {
    return ((data.title) + ": " + (data.value));
}

function createArray(length, callback) {
    var result = [];

    for (var idx = 0; idx < length; idx++) {
        result.push(callback(idx));
    }

    return result;
}

var ExcelExporter = function ExcelExporter(options) {
    options.columns = this._trimColumns(options.columns || []);

    this.allColumns = map(this._leafColumns(options.columns || []), this._prepareColumn);

    this.columns = this.allColumns.filter(function(column) { return !column.hidden; });

    this.options = options;
    this.data = options.data || [];
    this.aggregates = options.aggregates || {};
    this.groups = [].concat(options.groups || []);
    this.hierarchy = options.hierarchy;
};

ExcelExporter.prototype.workbook = function workbook () {
    var workbook = {
        sheets: [ {
            columns: this._columns(),
            rows: this.hierarchy ? this._hierarchyRows() : this._rows(),
            freezePane: this._freezePane(),
            filter: this._filter()
        } ]
    };

    return workbook;
};

ExcelExporter.prototype._trimColumns = function _trimColumns (columns) {
        var this$1 = this;

    return columns.filter(function (column) {
        var result = Boolean(column.field);

        if (!result && column.columns) {
            result = this$1._trimColumns(column.columns).length > 0;
        }

        return result;
    });
};

ExcelExporter.prototype._leafColumns = function _leafColumns (columns) {
        var this$1 = this;

    var result = [];

    for (var idx = 0; idx < columns.length; idx++) {
        if (!columns[idx].columns) {
            result.push(columns[idx]);
        } else {
            result = result.concat(this$1._leafColumns(columns[idx].columns));
        }
    }

    return result;
};

ExcelExporter.prototype._prepareColumn = function _prepareColumn (column) {
    if (!column.field) {
        return null;
    }

    var value = function(dataItem) {
        return getter(column.field, true)(dataItem);
    };

    var values = null;

    if (column.values) {
        values = {};

        column.values.forEach(function(item) {
            values[item.value] = item.text;
        });

        value = function(dataItem) {
            return values[getter(column.field, true)(dataItem)];
        };
    }

    return Object.assign({}, column, {
        value: value,
        values: values,
        groupHeaderTemplate: column.groupHeaderTemplate ? TemplateService.compile(column.groupHeaderTemplate) : defaultGroupHeaderTemplate,
        groupFooterTemplate: column.groupFooterTemplate ? TemplateService.compile(column.groupFooterTemplate) : null,
        footerTemplate: column.footerTemplate ? TemplateService.compile(column.footerTemplate) : null
    });
};

ExcelExporter.prototype._filter = function _filter () {
    if (!this.options.filterable) {
        return null;
    }

    var depth = this._depth();

    return {
        from: depth,
        to: depth + this.columns.length - 1
    };
};

ExcelExporter.prototype._createPaddingCells = function _createPaddingCells (length) {
        var this$1 = this;

    return createArray(length, function () { return Object.assign({
        background: "#dfdfdf",
        color: "#333"
    }, this$1.options.paddingCellOptions); });
};

ExcelExporter.prototype._dataRow = function _dataRow (dataItem, level, depth) {
        var this$1 = this;

    var cells = this._createPaddingCells(level);

    // grouped
    if (depth && dataItem.items) {
        var column = this.allColumns.filter(function(column) {
            return column.field === dataItem.field;
        })[0];

        var title = column && column.title ? column.title : dataItem.field;
        var template = column ? column.groupHeaderTemplate : null;
        var group = Object.assign({
            title: title,
            field: dataItem.field,
            value: column && column.values ? column.values[dataItem.value] : dataItem.value,
            aggregates: dataItem.aggregates,
            items: dataItem.items
        }, dataItem.aggregates[dataItem.field]);

        var value = title + ": " + (dataItem.value);

        if (template) {
            value = template(group);
        }

        cells.push(Object.assign({
            value: value,
            background: "#dfdfdf",
            color: "#333",
            colSpan: this.columns.length + depth - level
        }, (column || {}).groupHeaderCellOptions));

        var rows = this._dataRows(dataItem.items, level + 1);

        rows.unshift({
            type: "group-header",
            cells: cells,
            level: this.options.collapsible ? level : null
        });

        return rows.concat(this._footer(dataItem, level));
    }

    var dataCells = [];

    for (var cellIdx = 0; cellIdx < this.columns.length; cellIdx++) {
        dataCells[cellIdx] = this$1._cell(dataItem, this$1.columns[cellIdx]);
    }

    if (this.hierarchy) {
        dataCells[0].colSpan = depth - level + 1;
    }

    return [ {
        type: "data",
        cells: cells.concat(dataCells),
        level: this.options.collapsible ? level : null
    } ];
};

ExcelExporter.prototype._dataRows = function _dataRows (dataItems, level) {
        var this$1 = this;

    var depth = this._depth();
    var rows = [];

    for (var idx = 0; idx < dataItems.length; idx++) {
        rows.push.apply(rows, this$1._dataRow(dataItems[idx], level, depth));
    }

    return rows;
};

ExcelExporter.prototype._hierarchyRows = function _hierarchyRows () {
        var this$1 = this;

    var depth = this._depth();
    var data = this.data;
    var itemLevel = this.hierarchy.itemLevel;
    var hasFooter = this._hasFooterTemplate();
    var rows = [];
    var parents = [];
    var previousLevel = 0;
    var previousItemId;

    for (var idx = 0; idx < data.length; idx++) {
        var item = data[idx];
        var level = itemLevel(item);

        if (hasFooter) {
            if (level > previousLevel) {
                parents.push({ id: previousItemId, level: previousLevel });
            } else if (level < previousLevel) {
                rows.push.apply(rows, this$1._hierarchyFooterRows(parents, level, depth));
            }

            previousLevel = level;
            previousItemId = item.id;
        }

        rows.push.apply(rows, this$1._dataRow(item, level + 1, depth));
    }

    if (hasFooter) {
        rows.push.apply(rows, this._hierarchyFooterRows(parents, 0, depth));

        var rootAggregate = data.length ? this.aggregates[data[0].parentId] : {};
        rows.push(this._hierarchyFooter(rootAggregate, 0, depth));
    }

    this._prependHeaderRows(rows);

    return rows;
};

ExcelExporter.prototype._hierarchyFooterRows = function _hierarchyFooterRows (parents, currentLevel, depth) {
        var this$1 = this;

    var rows = [];
    while (parents.length && parents[parents.length - 1].level >= currentLevel) {
        var parent = parents.pop();
        rows.push(this$1._hierarchyFooter(this$1.aggregates[parent.id], parent.level + 1, depth));
    }

    return rows;
};

ExcelExporter.prototype._hasFooterTemplate = function _hasFooterTemplate () {
    var columns = this.columns;
    for (var idx = 0; idx < columns.length; idx++) {
        if (columns[idx].footerTemplate) {
            return true;
        }
    }
};

ExcelExporter.prototype._hierarchyFooter = function _hierarchyFooter (aggregates, level, depth) {
    var cells = this.columns.map(function(column, index) {
        var colSpan = index ? 1 : depth - level + 1;
        if (column.footerTemplate) {
            return Object.assign({
                background: "#dfdfdf",
                color: "#333",
                colSpan: colSpan,
                value: column.footerTemplate(Object.assign({}, (aggregates || {})[column.field]))
            }, column.footerCellOptions);
        }

        return Object.assign({
            background: "#dfdfdf",
            color: "#333",
            colSpan: colSpan
        }, column.footerCellOptions);
    });

    return {
        type: "footer",
        cells: this._createPaddingCells(level).concat(cells)
    };
};

ExcelExporter.prototype._footer = function _footer (dataItem, level) {
    var rows = [];
    var footer = this.columns.some(function (column) { return column.groupFooterTemplate; });

    var templateData, group;
    if (footer) {
        group = {
            group: { items: dataItem.items,
                     field: dataItem.field,
                     value: dataItem.value }
        };
        templateData = {};
        Object.keys(dataItem.aggregates).forEach(function (key) {
            templateData[key] = Object.assign({}, dataItem.aggregates[key], group);
        });
    }

    var cells = this.columns.map(function (column) {
        if (column.groupFooterTemplate) {
            var data = Object.assign({}, templateData, dataItem.aggregates[column.field], group);
            return Object.assign({
                background: "#dfdfdf",
                color: "#333",
                value: column.groupFooterTemplate(data)
            }, column.groupFooterCellOptions);
        }

        return Object.assign({
            background: "#dfdfdf",
            color: "#333"
        }, column.groupFooterCellOptions);
    });

    if (footer) {
        rows.push({
            type: "group-footer",
            cells: this._createPaddingCells(this.groups.length).concat(cells),
            level: this.options.collapsible ? level : null
        });
    }

    return rows;
};

ExcelExporter.prototype._isColumnVisible = function _isColumnVisible (column) {
    return this._visibleColumns([ column ]).length > 0 && (column.field || column.columns);
};

ExcelExporter.prototype._visibleColumns = function _visibleColumns (columns) {
        var this$1 = this;

    return columns.filter(function (column) {
        var result = !column.hidden;
        if (result && column.columns) {
            result = this$1._visibleColumns(column.columns).length > 0;
        }
        return result;
    });
};

ExcelExporter.prototype._headerRow = function _headerRow (row, groups) {
        var this$1 = this;

    var headers = row.cells.map(function(cell) {
        return Object.assign(cell, {
            colSpan: cell.colSpan > 1 ? cell.colSpan : 1,
            rowSpan: row.rowSpan > 1 && !cell.colSpan ? row.rowSpan : 1
        });
    });

    if (this.hierarchy) {
        headers[0].colSpan = this._depth() + 1;
    }

    return {
        type: "header",
        cells: createArray(groups.length, function () { return Object.assign({
            background: "#7a7a7a",
            color: "#fff"
        }, this$1.options.headerPaddingCellOptions); }).concat(headers)
    };
};

ExcelExporter.prototype._prependHeaderRows = function _prependHeaderRows (rows) {
        var this$1 = this;

    var groups = this.groups;

    var headerRows = [ { rowSpan: 1, cells: [], index: 0 } ];

    this._prepareHeaderRows(headerRows, this.options.columns);

    for (var idx = headerRows.length - 1; idx >= 0; idx--) {
        rows.unshift(this$1._headerRow(headerRows[idx], groups));
    }
};

ExcelExporter.prototype._prepareHeaderRows = function _prepareHeaderRows (rows, columns, parentCell, parentRow) {
        var this$1 = this;

    var row = parentRow || rows[rows.length - 1];
    var childRow = rows[row.index + 1];
    var totalColSpan = 0;

    for (var idx = 0; idx < columns.length; idx++) {
        var column = columns[idx];
        if (this$1._isColumnVisible(column)) {

            var cell = Object.assign({
                background: "#7a7a7a",
                color: "#fff",
                value: column.title || column.field,
                colSpan: 0
            }, column.headerCellOptions);
            row.cells.push(cell);

            if (column.columns && column.columns.length) {
                if (!childRow) {
                    childRow = { rowSpan: 0, cells: [], index: rows.length };
                    rows.push(childRow);
                }
                cell.colSpan = this$1._trimColumns(this$1._visibleColumns(column.columns)).length;
                this$1._prepareHeaderRows(rows, column.columns, cell, childRow);
                totalColSpan += cell.colSpan - 1;
                row.rowSpan = rows.length - row.index;
            }
        }
    }

    if (parentCell) {
        parentCell.colSpan += totalColSpan;
    }
};

ExcelExporter.prototype._rows = function _rows () {
        var this$1 = this;

    var rows = this._dataRows(this.data, 0);

    if (this.columns.length) {
        this._prependHeaderRows(rows);
        var footer = false;

        var cells = this.columns.map(function (column) {
            if (column.footerTemplate) {
                footer = true;

                return Object.assign({
                    background: "#dfdfdf",
                    color: "#333",
                    value: column.footerTemplate(Object.assign({}, this$1.aggregates, this$1.aggregates[column.field]))
                }, column.footerCellOptions);
            }

            return Object.assign({
                background: "#dfdfdf",
                color: "#333"
            }, column.footerCellOptions);
        });

        if (footer) {
            rows.push({
                type: "footer",
                cells: this._createPaddingCells(this.groups.length).concat(cells)
            });
        }
    }

    return rows;
};

ExcelExporter.prototype._headerDepth = function _headerDepth (columns) {
        var this$1 = this;

    var result = 1;
    var max = 0;

    for (var idx = 0; idx < columns.length; idx++) {
        if (columns[idx].columns) {
            var temp = this$1._headerDepth(columns[idx].columns);
            if (temp > max) {
                max = temp;
            }
        }
    }
    return result + max;
};

ExcelExporter.prototype._freezePane = function _freezePane () {
    var columns = this._visibleColumns(this.options.columns || []);

    var colSplit = this._visibleColumns(this._trimColumns(this._leafColumns(columns.filter(function(column) {
        return column.locked;
    })))).length;

    return {
        rowSplit: this._headerDepth(columns),
        colSplit: colSplit ? colSplit + this.groups.length : 0
    };
};

ExcelExporter.prototype._cell = function _cell (dataItem, column) {
    return Object.assign({
        value: column.value(dataItem)
    }, column.cellOptions);
};

ExcelExporter.prototype._depth = function _depth () {
    var depth = 0;

    if (this.hierarchy) {
        depth = this.hierarchy.depth;
    } else {
        depth = this.groups.length;
    }

    return depth;
};

ExcelExporter.prototype._columns = function _columns () {
    var depth = this._depth();
    var columns = createArray(depth, function () { return ({ width: 20 }); });

    return columns.concat(this.columns.map(function(column) {
        return {
            width: parseInt(column.width, 10),
            autoWidth: column.width ? false : true
        };
    }));
};

export default ExcelExporter;
