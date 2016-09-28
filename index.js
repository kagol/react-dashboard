import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import DashBoard from './components/DashBoard'

class DashBoardContainer extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<DashBoard number="80" arr={[30, 70, 100]} />
				<Footer />
			</div>
		)
	}
}

render(
	<DashBoardContainer />,
	document.querySelector('#content')
)
