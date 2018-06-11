import * as React from "react";
import { connect } from "react-redux";

interface IProps {
    name: string;
}

const todoApp = ({ name }: IProps): JSX.Element => (
    <div>
        <h1>{name}</h1>
        <button className="button is-success">Button is-loading</button>
        <input className="input is-success" type="text" placeholder="Success input" />
    </div>
);

const mapStateToProps = (state: any) => ({
    items: state.items,
});

export default connect(mapStateToProps)(todoApp);
