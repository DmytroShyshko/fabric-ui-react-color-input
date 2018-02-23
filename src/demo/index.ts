import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from './App';

const element: React.ReactElement<{} > = React.createElement(App, {});

ReactDom.render(element, document.getElementById('app'));