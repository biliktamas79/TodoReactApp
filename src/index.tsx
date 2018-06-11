import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import TodoApp from "./components/main";

import { Provider } from "react-redux";
import * as State from "./state";

const state = createStore(State.mainReducer);

ReactDOM.render(
    <Provider store={state}>
        <TodoApp name="My TODO app" />
    </Provider>,
    document.getElementById("root") as HTMLElement,
);
