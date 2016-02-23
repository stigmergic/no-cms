import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { login, logout } from '../actions/application';


export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }


    onLogin() {
        this.context.executeAction(login, {});
    }

    onLogout() {
        this.context.executeAction(logout, {});
    }


    render() {
        const loggedIn = this.props.loggedIn;

        return (
            <ul className="navigation">
                <li><IndexLink to="/" activeClassName="selected">Home</IndexLink></li>
                {(loggedIn) ?
                    <li><button activeClassName="selected" onClick={this.onLogout}>Log Out {this.context.user.name}</button></li>
                    :
                    <li><button activeClassName="selected" onClick={this.onLogin}>Login</button></li>
                }
            </ul>
        );
    }

}


Navigation.propTypes = {
    loggedIn: PropTypes.bool,
};

Navigation.contextTypes = {
    executeAction: PropTypes.func.isRequired,
    user: PropTypes.object,
};
