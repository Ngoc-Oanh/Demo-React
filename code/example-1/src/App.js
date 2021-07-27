import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Layout from './UI/Layout';
import ScrollToTop from './Components/ScrollToTop';

function App(props) {
	return (
		<>
			<Router>
				<ScrollToTop />
				<Layout />
			</Router>
		</>
	);
}

export default App;
