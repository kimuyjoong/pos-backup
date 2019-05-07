import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import '../mobile/style/base.scss';
import App from '../mobile/app/App';
// import * as serviceWorker from './serviceWorker';
import reducer from '../mobile/reducers';
import { CookiesProvider } from 'react-cookie';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <CookiesProvider>
                    <App />
                </CookiesProvider>
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// serviceWorker.unregister();
