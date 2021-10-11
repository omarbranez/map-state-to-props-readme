import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux' // gets data from the store's state. it will also re-render when the state changes

class App extends Component {
	handleOnClick = () => {
		// this.props.store.dispatch({
		this.props.dispatch({
			type: 'INCREASE_COUNT',
		});
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				{/* <p>{this.props.store.getState().clicks}</p> */}
				<p>{this.props.clicks}</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {clicks: state.clicks}
}
// export default App;
export default connect(mapStateToProps)(App)
