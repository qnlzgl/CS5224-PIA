import React, { Component } from "react";
import {
  Button,
} from "reactstrap";
import Icon from "react-fontawesome";
import ResultsSummary from "../components/ResultsSummary";
import ResultsBigFive from "../components/ResultsBigFive";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warnings: {},
      activeTab: "1",
      sourceModal: false
    };

    this.toggleTabs = this.toggleTabs.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleTabs(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleModal() {
    this.setState({
      sourceModal: !this.state.sourceModal
    });
  }

  render() {
    return (
      <div className="results-wrapper">

        <ResultsSummary resultData={this.props.resultData} />

        <ResultsBigFive resultData={this.props.resultData["personality"]} />
      </div>
    );
  }
}

export default Results;
