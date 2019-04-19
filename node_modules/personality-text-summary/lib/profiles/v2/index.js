/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonalityProfile = function () {
  function PersonalityProfile(profile) {
    _classCallCheck(this, PersonalityProfile);

    this._traits = profile.tree.children[0].children[0].children;
    this._needs = profile.tree.children[1].children[0].children;
    this._values = profile.tree.children[2].children[0].children;
  }

  _createClass(PersonalityProfile, [{
    key: 'traits',
    value: function traits() {
      return this._traits.map(function (t) {
        return {
          id: t.id,
          name: t.name,
          category: t.category,
          score: t.percentage,
          facets: t.children.map(function (f) {
            return {
              //id: f.id,
              id: f.id.replace(/_/g, '-').replace(/ /g, '-'),
              name: f.name,
              category: f.category,
              score: f.percentage
            };
          })
        };
      });
    }
  }, {
    key: 'needs',
    value: function needs() {
      return this._needs.map(function (n) {
        return {
          id: n.id,
          name: n.name,
          category: n.category,
          score: n.percentage
        };
      });
    }
  }, {
    key: 'values',
    value: function values() {
      return this._values.map(function (v) {
        return {
          //id: v.id,
          id: v.id.replace(/_/g, '-').replace(/ /g, '-'),
          name: v.name,
          category: v.category,
          score: v.percentage
        };
      });
    }
  }]);

  return PersonalityProfile;
}();

module.exports = PersonalityProfile;