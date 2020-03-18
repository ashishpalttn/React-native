/**
 * @format
 */

import {AppRegistry} from 'react-native';
import app from './routers/stack_router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => app);
