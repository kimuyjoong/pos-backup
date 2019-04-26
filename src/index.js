import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './mobile/style/reset.scss';
import './mobile/style/layout.scss';
import './mobile/style/base.scss';
import Container from './mobile/containers/Container';
import * as serviceWorker from './serviceWorker';
import reducer from './mobile/reducers';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Container />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
