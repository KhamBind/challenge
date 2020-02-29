import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import Health from './Health'
import * as machineAction from './store/machine'
class Machines extends React.Component {
	
	componentDidMount() {
		this.props.actions.getMachines();
	}

	// handleClick(id) {
	// 	console.log(this.props.history);
	// 	this.props.history.push('/machines/' + id);
	// }

	render() {
		const { machines } = this.props;
		return (
			<div>
				<table className="mtable">
					<thead>
					<tr>
						<th>Name</th>
						<th>IP Address</th>
						<th>Health</th>
					</tr>
					</thead>
					<tbody>
					{
						machines.map((item, index) => (
							<tr key={index} >
								{/* <td><div onClick={() => this.handleClick(item.id)}>{item.name}</div></td> */}
								<td><Link to={'/machines/' + item.id}>{item.name}</Link></td>
								<td>{item.ip_address}</td>
								<td>
									<Health value={item.health} />
								</td>
							</tr>	
						))
					}
					</tbody>
				</table>
			</div>
		);	
	}
}

const mapStateToProps = (state) => ({machines: state.machine.machines});
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({...machineAction}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Machines);
