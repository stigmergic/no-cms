import polyfill from 'babel-polyfill'; // eslint-disable-line no-unused-vars

import d from 'debug';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './components/Routes';
import app from './app';
import fetchRouteData from './utils/fetchRouteData';
import { provideContext } from 'fluxible-addons-react';

const debug = d('App');

d.enable('App, Fluxible, Fluxible:*');

debug('Rehydrating...');

app.rehydrate(window.App, (err, context) => {
    let isRehydrating = true;

    if (err) {
        throw err;
    }

    debug('React Rendering');

    const RouterWithContext = provideContext(Router, app.customContexts);

    ReactDOM.render(
        <RouterWithContext
            context={context.getComponentContext()}
            history={browserHistory}
            onUpdate={ () => {
                if (isRehydrating) {
                    isRehydrating = false;
                    return;
                }
                fetchRouteData(context, this.state)
                    .then(() => {})
                    .catch(_err => {
                        console.error(_err.stack);
                    });
            }}
        >{routes}</RouterWithContext>,
        document.getElementById('app'),
        () => { debug('React Rendered'); }
    );

});
