import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Footer } from './Layouts'
import MainPage from './Pages'
import SecondPageLayout from './Pages/page2'

export default class extends Component {
	render() {
		return <Fragment>
			<Header />

			<Router>
				<Route exact path="/" component={ MainPage } />
				<Route path="/page2" component={ SecondPageLayout } />
			</Router>

			<Footer />
		</Fragment>
	}
}
