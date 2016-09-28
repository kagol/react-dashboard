import React from 'react'

class DashBoard extends React.Component {
	constructor(props) {
		super(props)
		var { arr, number } = props;
		var status = number <= arr[0] ? 'low' : (number >= arr[1] ? 'high' : 'medium');
		this.state = {
			number: number,
			status: status
		}
	}
	changeNumber(e) {
		var value = e.target.value === '' ? 0 : e.target.value;
		var current_num = parseInt(value)
		var arr = this.props.arr;
		if(current_num <= arr[0]){
			this.setState({
				number: current_num,
				status: 'low'
			})
		}else if(current_num >= arr[1]){
			this.setState({
				number: current_num,
				status: 'high'
			})
		}else{
			this.setState({
				number: current_num,
				status: 'medium'
			})
		}
	}
	render() {
		return (
			<div className="dashboard">
				<div className="db-header">
					<h3>{ this.state.number }</h3>
					<p>Impression number</p>
				</div>
				<div className="wrap_content">
					<div className="db-content">
						<div className="dial"></div>
						<div className={this.state.status}></div>
						<div className="low_num">Specific</div>
						<div className="high_num">Brood</div>
					</div>
				</div>
				<div className="db-footer">
					Audience scope is fairly board
				</div>
				<div className="operation-area">
					<input type="text" value={this.state.number} onChange={this.changeNumber.bind(this)} />
				</div>
			</div>
		)
	}
}

export default DashBoard