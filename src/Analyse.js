import React, { Component } from 'react';
import { Label, Button, Container, Form, FormGroup, Input} from "reactstrap";
import MainMenu from "./components/MainMenu";
import Results from "./components/Results";

class Analyse extends Component {
	constructor(props) {
	super(props);
	this.state = {
		folder_path: "",
		ps_content: "",
		response_data_received: false,
		response_data: {}
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleAnalyse = this.handleAnalyse.bind(this);
	this.reset = this.reset.bind(this)
	}

 
	handleChange(event) {
		this.myspan.textContent = event.target.files.length + " files selected"


		const file = event.target.files[0];
		console.log(file)
        if (!file) {
            return;
        }

        const reader = new FileReader();
        // Asynchronous function
        reader.onloadend = () => {
        	const content = reader.result;
        	this.setState({ps_content: content});
		}
		reader.readAsText(file);
	}

	handleAnalyse(event) {
		event.preventDefault();

		// Upload formdata to api
		const url = 'http://personality-insights.shahabqamar.com/api/';
		const form = new FormData();
		form.append('raw-text-content', this.state.ps_content);
		    // console.log(form)

		fetch(url, {
		    method: 'POST',
		    body: form
		})
		    .then(function(response) {
			    return response.json();
			    })
		    .then(
				function(data) {
					console.log("Response data received!")
					console.log(data)
					if (data.error) {
					  	this.setState(
						  {
							response_data_received: false
						  },
						  function() {
							alert(data.error + ". Please try again.");
						  }
						 );
					} else {
						this.setState({
						  response_data: data,
						  response_data_received: true
						});
					}
				}.bind(this)
			);
	}

	
	reset(event){
		window.location.reload();
	}

    tryAgain() {
	    this.setState({
			folder_path: "",
			ps_content: "",
			response_data_received: false,
			response_data: {}
	    });
  	}

	render() {
		return (
		  <div>
		  	<MainMenu />
		  	<div className="container_choose-file">
		  		{!this.state.response_data_received && (
		  			<Container className="choose-file">
						<Form onSubmit={this.handleSubmit}>
				    		<FormGroup>
								<h1 >Please select one Personal Statements (PS) or Cover Letter (CL) to be uploaded and ranked</h1>
								<Container>
									<Input onChange={this.handleChange} type="file" accept=".txt" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" />
									<Label for="file-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
											<path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
										</svg> 
										<span ref={(span) => this.myspan = span}>Choose a file&hellip;</span>
									</Label>
								</Container>
				    		</FormGroup>		
						</Form>
						<Button color="primary" size="lg" block className="analyse-button" onClick={this.handleAnalyse}>Analyse Now</Button>
					</Container>
				)}

				{this.state.response_data_received && (
					<Results
						resultData={this.state.response_data}
						rawText={this.state.ps_content}
						tryAgain={this.tryAgain}
					/>
				)}
			</div>
		  </div>
	    );
    }
 }

export default Analyse;