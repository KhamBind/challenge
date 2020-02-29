import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as machineAction from './store/machine'

class Header extends Component {
    ws = new WebSocket('ws://localhost:1337');
    constructor(props) {
        super(props);
        this.ws.onopen = () => {
            // console.log('websocket client connected');
        }
        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data)			
            this.props.actions.updateMachines(message);
        }	
    }

    render() {
        return(
            <div>
                <header className='App-header'>
                    <img alt='logo' height='272' width='800' src='https://i.imgur.com/jcvsFKh.png' />
                </header>
                <nav className='App-nav'>
                    <Link to='/'>Home</Link>
                    <Link to='/machines'>Machines</Link>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({machines: state.machine.machines});
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({...machineAction}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);