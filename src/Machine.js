import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as machineAction from './store/machine'
import Health from './Health'

class Machine extends React.Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleClick() {
        this.props.actions.putMachine(this.props.machine.id, this.state.name)
        this.props.history.push('/machines');

    }
    componentDidMount() {
        let machineid = this.props.match.params.machineid;
        if (machineid) this.props.actions.getMachine(machineid);
    }
    render() {
        const {machine} = this.props;
        if (!machine) return(<div></div>);
        return(
            <div className="detail">
                <div className="left-side">
                    <h2>{machine.name}</h2>
                    <h3>Update Device</h3>
                    <h4>Name:</h4>
                    <input
                        placeholder={machine.name}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <button onClick={() => this.handleClick()}>SUBMIT</button>
                </div>
                <div className="right-side">
                    <div className="center">
                        <h1> {machine.health} </h1>
                        <Health value={machine.health} />
                    </div>
                    <h3>Stats</h3>
                    <h4>IP Adress: {machine.ip_address}</h4>
                </div>
            </div>
        )    
    }
}

const mapStateToProps = (state) => ({machine: state.machine.machine});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...machineAction}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Machine);

