import * as React from "react";
import { connect } from "react-redux";
import Login from "../Login";

interface IProps {
    name: string;
}

const todoApp = ({ name }: IProps): JSX.Element => (
    <div>
        <Login />
        { name }
    </div>
);

const mapStateToProps = (state: any) => ({
    items: state.items,
});

export default connect(mapStateToProps)(todoApp);
