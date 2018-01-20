import React, {Component} from 'react'
import Classes from './Modal.css'

import Aux from '../../../HOC/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showProp !== this.props.showProp;
    }


    render() {
        return (
            <Aux>
                <Backdrop dismiss={this.props.dismiss} showProp={this.props.showProp}/>
                <div
                    className={Classes.Modal} style={{
                    transform: this.props.showProp ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.showProp ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
            </Aux>

        );
    }
}

export default Modal;