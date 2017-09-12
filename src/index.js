import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyCEKuv3Lnz2ueOvMt8gqQNHs66wFT8FCnE';



class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		 };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			//console.log(data);
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});

	}

	// videoSearch(term) {
		
	// }

	render() {
		return (
	    		<div>
	        	<SearchBar />
	        	<VideoDetail video={this.state.selectedVideo} />
	        	<VideoList 
	        		onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
	        		videos={this.state.videos} />
	        	</div>
	        	);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));