import Fluxible from 'fluxible';
import { PropTypes } from 'react';
import Routes from './components/Routes.jsx';
import ApplicationStore from './stores/ApplicationStore';

const assetUrl = require('./libs/assetUrl');

const app = new Fluxible({
    component: Routes,
});

app.plug(assetUrl);

app.customContexts = {
    assetUrl: PropTypes.func.isRequired,
    siteUrl: PropTypes.func.isRequired,
};

app.registerStore(ApplicationStore);

export default app;
