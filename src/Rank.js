import React, { Component } from 'react';
import { Label, Button, Container, Form, FormGroup, Input} from "reactstrap";
import ReactTable from 'react-table'
import "react-table/react-table.css"
import { Progress, Row, Col } from 'reactstrap';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import MainMenu from "./components/MainMenu";



class Rank extends Component {
    _exporter;
    export = () => {
        this._exporter.save();
    }

	constructor(props) {
	super(props);
	this.state = {
		folder_path: "",
		ps_content: "",
		candidate_data: [],
		ranked_flag: false,
		ranked_candidate_data:[],
		upload_progress: 0,
		ideal_openness: 1,
		ideal_conscientiousness: 1,
		ideal_extraversion: 1,
		ideal_agreeableness: 1,
		ideal_neuroticism: 1
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleRank = this.handleRank.bind(this);
	this.handleIdealOpenness = this.handleIdealOpenness.bind(this)
	this.handleIdealConscientiousness = this.handleIdealConscientiousness.bind(this)
	this.handleIdealExtraversion = this.handleIdealExtraversion.bind(this)
	this.handleIdealAgreeableness = this.handleIdealAgreeableness.bind(this)
	this.handleIdealEmotionalRange = this.handleIdealEmotionalRange.bind(this)
	this.reset = this.reset.bind(this)
	}


	handleChange(event) {
		this.setState({upload_progress: 0})
		this.myspan.textContent = event.target.files.length + " files selected"
		for (var i = 0; i < event.target.files.length; i++) {
			this.setState({upload_progress: i * 100 / event.target.files.length})
			console.log(i * 100 / event.target.files.length)
			const file = event.target.files[i];

	        if (!file) {
	            return;
	        }

	        const reader = new FileReader();
	        // Asynchronous function
	        reader.onloadend = () => {
	        	const content = reader.result;
	        	// console.log(content)
	        	this.setState({ps_content: content});

				// Upload formdata to api
		        const url = 'http://personality-insights.shahabqamar.com/api/';
		        const form = new FormData();
		        form.append('raw-text-content', content);
		        // console.log(form)
		        const self = this;
		        fetch(url, {
		            method: 'POST',
		            body: form
		        })
		        .then(function(response) {
			        return response.json();
			        })
		        .then(
			        function(data) {
		        	  // add more content here
			          console.log(data);
			          let temp_data = {
			          		name: file.name.replace(".txt",''),
						    openness: parseFloat(Math.round(data["personality"][0]["percentile"] * 100) / 100),
						    conscientiousness: parseFloat(Math.round(data["personality"][1]["percentile"] * 100) / 100),
						    extraversion: parseFloat(Math.round(data["personality"][2]["percentile"] * 100) / 100),
						    agreeableness: parseFloat(Math.round(data["personality"][3]["percentile"] * 100) / 100),
						    neuroticism: parseFloat(Math.round(data["personality"][4]["percentile"] * 100) / 100)
						};

		          	  console.log(temp_data);

		          	  // append to candidate_data

	          	  		var newArr = self.state.candidate_data;
	          	  		newArr.push(temp_data)
		          	  	self.setState({candidate_data: newArr})
		          	  	console.log(self.state.candidate_data)
		          	  
			        }
	      		)
	        }
	        reader.readAsText(file);
		}
		this.setState({upload_progress: 100})
	}

	handleRank(event) {
		// Modify the table and add in similarity score
		var temp_candidate_data = []
		var curr_candidate;
		for (var i = 0; i < this.state.candidate_data.length; i++) {
			let score = Math.pow(this.state.ideal_openness/5 - this.state.candidate_data[i].openness, 2) + 
						Math.pow(this.state.ideal_conscientiousness/5 - this.state.candidate_data[i].conscientiousness, 2) +
						Math.pow(this.state.ideal_extraversion/5 - this.state.candidate_data[i].extraversion, 2) + 
						Math.pow(this.state.ideal_agreeableness/5 - this.state.candidate_data[i].agreeableness, 2) + 
						Math.pow(this.state.ideal_neuroticism/5 - this.state.candidate_data[i].neuroticism, 2)
			curr_candidate = this.state.candidate_data[i]
			curr_candidate["score"] = Math.round(score * 100) / 100
			temp_candidate_data.push(curr_candidate)
		}
		console.log(temp_candidate_data)
		this.setState({ranked_candidate_data: temp_candidate_data})
		this.setState({ranked_flag: true})
	}

	handleIdealOpenness(event) {
		this.setState({ideal_openness: event.target.value})
		console.log(event.target.value)
	}

	handleIdealConscientiousness(event) {
		this.setState({ideal_conscientiousness: event.target.value})
		console.log(event.target.value)
	}

	handleIdealExtraversion(event) {
		this.setState({ideal_extraversion: event.target.value})
		console.log(event.target.value)
	}

	handleIdealAgreeableness(event) {
		this.setState({ideal_agreeableness: event.target.value})
		console.log(event.target.value)
	}

	handleIdealEmotionalRange(event) {
		this.setState({ideal_neuroticism: event.target.value})
		console.log(event.target.value)
	}

	reset(event){
		window.location.reload();
	}

	render() {
		return (
		  <div>
		  <MainMenu />
		  	<Container className="choose-file">
				<Form onSubmit={this.handleSubmit}>
				    <FormGroup>
						<h1 >Please select multiple Personal Statements (PS) or Cover Letter (CL) to be uploaded and ranked</h1>
						<Container>
							<Input onChange={this.handleChange} type="file" accept=".txt" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
							<Label for="file-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
									<path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
								</svg> 
								<span ref={(span) => this.myspan = span}>Choose files&hellip;</span>
							</Label>
						</Container>
				    </FormGroup>
				</Form>
				<Progress value={this.state.upload_progress} />
			</Container>
			<Container>
				<h1 >Please type in your ideal candidate personality (Score out of 5)</h1>
		        <Row>
					<Col>				
						<Label for="exampleSelect">Openness</Label>
		        		<Input onChange= {this.handleIdealOpenness} value = {this.state.ideal_openness} type="select" name="select" id="openness-select">
				            <option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
		          		</Input>
	          		</Col>
					<Col>				
						<Label for="exampleSelect">Conscientiousness</Label>
		        		<Input onChange= {this.handleIdealConscientiousness} value = {this.state.ideal_conscientiousness} type="select" name="select" id="conscientiousness-select">
				            <option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
		          		</Input>
	          		</Col>
					<Col>				
						<Label for="exampleSelect">Extraversion</Label>
		        		<Input onChange= {this.handleIdealExtraversion} value = {this.state.ideal_extraversion} type="select" name="select" id="extraversion-select">
				            <option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
		          		</Input>
	          		</Col>
	          		<Col>				
						<Label for="exampleSelect">Agreeableness</Label>
		        		<Input onChange= {this.handleIdealAgreeableness} value = {this.state.ideal_agreeableness} type="select" name="select" id="agreeableness-select">
				            <option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
		          		</Input>
	          		</Col>
	          		<Col>				
						<Label for="exampleSelect">Emotional Range</Label>
		        		<Input onChange= {this.handleIdealEmotionalRange} value = {this.state.ideal_neuroticism} type="select" name="select" id="emotional-range-select">
				            <option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
		          		</Input>
	          		</Col>
			    </Row>
				<Button color="primary" size="lg" block className="rank-button" onClick={this.handleRank}>Rank Now</Button>

			</Container>

			<Container className="rank-table">
		        <ReactTable
					columns= {this.state.ranked_flag ? 
						[
						{
						  Header: "Name",
						  accessor: "name"
						},
						{
						  Header: "Openness",
						  accessor: "openness",
						},
						{
						  Header: "Conscientiousness",
						  accessor: "conscientiousness",
						},
						{
						  Header: "Extraversion",
						  accessor: "extraversion"
						},
						{
						  Header: "Agreeableness",
						  accessor: "agreeableness"
						},
						{
						  Header: "Emotional Range",
						  accessor: "neuroticism"
						},
						{
						  Header: "Score",
						  accessor: "score"
						}
						] : 
						[
						{
						  Header: "Name",
						  accessor: "name"
						},
						{
						  Header: "Openness",
						  accessor: "openness",
						},
						{
						  Header: "Conscientiousness",
						  accessor: "conscientiousness",
						},
						{
						  Header: "Extraversion",
						  accessor: "extraversion"
						},
						{
						  Header: "Agreeableness",
						  accessor: "agreeableness"
						},
						{
						  Header: "Emotional Range",
						  accessor: "neuroticism"
						}
						]

					}
					defaultSorted={this.state.ranked_flag ? [{id: "score", desc: true}] : [{id: "name", desc: true}]}
					data={this.state.ranked_flag ? this.state.ranked_candidate_data : this.state.candidate_data}
					defaultPageSize={10}
					className="-striped -highlight"
				/>
			</Container>
			<Label></Label>

            <ExcelExport
                    data={this.state.ranked_candidate_data}
                    fileName="Export.xlsx"
                    ref={(exporter) => { this._exporter = exporter; }}
                >
                    <ExcelExportColumn field="name" title="Name" />
                    <ExcelExportColumn field="openness" title="Openness"/>
                    <ExcelExportColumn field="conscientiousness" title="Conscientiousness"/>
                    <ExcelExportColumn field="extraversion" title="Extraversion"/>
                    <ExcelExportColumn field="agreeableness" title="Agreeableness"/>
                    <ExcelExportColumn field="neuroticism" title="Emotional Range"/>
                    <ExcelExportColumn field="score" title="Score"/>

                </ExcelExport>

			<Container className="bottom-buttons">
	        	<Row>
					<Col>	
						<Button color="success" size="lg" block className="export-button" onClick={this.export}>Export to Excel</Button>
					</Col>
					<Col>
						<Button color="info" size="lg" block className="reset-button" onClick={this.reset}>Reset</Button>
					</Col>
				</Row>
			</Container>

		  </div>
		);
	}
}

export default Rank;
