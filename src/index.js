import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducers/reducer";
import {Operations} from "./reducers/data/data";
import App from "./components/common/app/app";

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

store.dispatch(Operations.loadPeople());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
