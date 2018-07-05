import * as React from "react";
import { Button, Card, CardActions, CardText, CardTitle, TextField } from "react-md";
import FullHeightGrid from "../FullHeightGrid";

// tslint:disable-next-line:variable-name
const Login = () => (
    <FullHeightGrid>
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
    </FullHeightGrid>
);

export default Login;
