import * as React from "react";

export interface IProps {
    name: string;
};

export const TodoApp = ({ name }: IProps): JSX.Element => {
    return (
        <div>
            <h1>{name}</h1>
            <button className="button is-success">Button is-loading</button>
            <input className="input is-success" type="text" placeholder="Success input" />
        </div>
    );
};
