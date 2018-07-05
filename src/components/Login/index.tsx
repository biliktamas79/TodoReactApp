import * as React from "react";
import { Button, Card, CardActions, CardText, CardTitle, TextField } from "react-md";

// tslint:disable-next-line:variable-name
const Login = () => (
    <Card>
        <CardTitle title="Lorem ipsum" subtitle="dolor sit amet" />
        <CardText>
            <TextField label="Email" />
            <TextField label="Password" type="password" />
        </CardText>
        <CardActions>
            <div>
                <Button primary flat swapTheming>Login</Button>
            </div>
        </CardActions>
    </Card>
);

export default Login;
