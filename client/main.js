import {createApp} from 'mantra-core';
import initContext from './configs/context';

// sass rubix lib
import './sass/main.scss';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
