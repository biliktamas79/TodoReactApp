import * as React from "react";

export interface IProps {
    name: string;
};

export const TodoApp = ({ name }: IProps): JSX.Element => {
    return (
        <div>{name}</div>
    );
};
