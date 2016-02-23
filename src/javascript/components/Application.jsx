import React, { PropTypes } from 'react';
import Navigation from './Navigation';
import { connectToStores } from 'fluxible-addons-react';

class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            user: this.props.appState.user,
        };
    }

    render() {
        console.log({appState: this.props.appState});
        return (
            <div>
                <nav>
                    <Navigation loggedIn={this.props.appState.login} />
                </nav>
                <main>
                    {React.cloneElement(this.props.children, { appState: this.props.appState })}
                </main>
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.node,
    appState: PropTypes.object,
};


Application.childContextTypes = {
    user: PropTypes.object,
};

Application = connectToStores(Application, ['ApplicationStore'], (context) => ({
    appState: context.getStore('ApplicationStore').getState(),
}));

export default Application;
