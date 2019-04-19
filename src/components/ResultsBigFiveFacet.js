import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class ResultsBigFiveFacet extends Component {
  constructor(props) {
    super(props);

    this.getOtion = this.getOtion.bind(this);
  }

  convertToPercentage(num) {
    return (num * 100).toFixed(2);
  }

  getOtion() {
    const option = {
      tooltip: {},
      scale: false,
      radar: {
        name: {
          textStyle: {
            color: "#fff",
            fontSize: 13
          }
        },
        //shape: "circle",
        indicator: [
          {
            name: this.props.resultData[0]["name"],
            max: 100
          },
          { name: this.props.resultData[1]["name"], max: 100 },
          { name: this.props.resultData[2]["name"], max: 100 },
          { name: this.props.resultData[3]["name"], max: 100 },
          { name: this.props.resultData[4]["name"], max: 100 },
          { name: this.props.resultData[5]["name"], max: 100 }
        ]
      },
      series: [
        {
          name: this.props.chartTitle,
          type: "radar",
          symbolSize: "7",
          areaStyle: {
            normal: {
              opacity: 0.3
            }
          },
          data: [
            {
              value: [
                this.convertToPercentage(this.props.resultData[0]["percentile"]),
                this.convertToPercentage(this.props.resultData[1]["percentile"]),
                this.convertToPercentage(this.props.resultData[2]["percentile"]),
                this.convertToPercentage(this.props.resultData[3]["percentile"]),
                this.convertToPercentage(this.props.resultData[4]["percentile"]),
                this.convertToPercentage(this.props.resultData[5]["percentile"])
              ]
            }
          ]
        }
      ]
    };

    return option;
  }
  render() {
    return (
      <div>
        <ReactEcharts
          option={this.getOtion()}
          style={{ width: "100%", height: 400 }}
          className="react_for_echarts"
        />
      </div>
    );
  }
}

export default ResultsBigFiveFacet;
