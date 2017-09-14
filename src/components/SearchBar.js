import React, { Component } from 'react';
import { render } from 'react-dom';

class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = {
			term: ''
		};
	}

	static displayName = 'SearchBar';

	handleInputChange = (e) => {
		//console.log(e.target.value);
		const termState = this.state.term;
		this.setState({term: e.target.value});
	}


	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render() {

		const currTerm = this.state.term;

		return (
			<div className="search-bar">
			<label>Search:&nbsp;
			<input type="text" 
				value={currTerm} 
				onChange={e => this.onInputChange(e.target.value)}/>
			</label>
			</div>
		);
	}
}

export default SearchBar;
