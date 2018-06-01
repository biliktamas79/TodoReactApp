import React from "react";
import ReactDOM from "react-dom";

import { TodoApp } from "./components/main";

ReactDOM.render(
    <TodoApp name="My TODO app" />,
    document.getElementById("root") as HTMLElement
);
