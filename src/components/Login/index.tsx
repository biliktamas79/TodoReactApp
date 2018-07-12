import * as React from "react";
import { Button, Card, CardActions, CardText, CardTitle, Cell, TextField } from "react-md";
import FullHeightGrid from "../FullHeightGrid";
import PageContent from "../PageContent";

interface ILoginState {
    email: string;
    password: string;
}

// tslint:disable-next-line:variable-name
class Login extends React.Component<{}, ILoginState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };

        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.login = this.login.bind(this);
    }

    // tslint:disable-next-line:variable-name
    private onEmailChanged(email: React.ReactText, _event: Event) {
        this.setState({
            email: email.toString(),
        });
    }

    // tslint:disable-next-line:variable-name
    private onPasswordChanged(password: React.ReactText, _event: Event) {
        this.setState({
            password: password.toString(),
        });
    }

    private login() {
        // tslint:disable-next-line:no-console
        console.log("Logging in...");
    }

    // tslint:disable-next-line:member-ordering
    public render() {
        return (
            <PageContent>
                <FullHeightGrid>
                    <Card className={ `.${Cell.getClassName({ size: 4, position: "center", align: "middle" })}` }>
                        <CardTitle title="My Super App" subtitle="Login to my super app" />
                        <CardText>
                            <TextField
                                id="x1"
                                label="Email"
                                onChange={this.onEmailChanged}
                                value={this.state.email}
                            />
                            <TextField
                                id="x2"
                                label="Password"
                                type="password"
                                onChange={this.onPasswordChanged}
                                value={this.state.password}
                            />
                        </CardText>
                        <CardActions>
                            <div className={`.${Cell.getClassName({ position: "right" })}`}>
                                <Button
                                    primary
                                    flat
                                    swapTheming
                                    disabled={this.state.password === "" || this.state.email === ""}
                                    onClick={this.login}
                                >
                                    Login
                                </Button>
                            </div>
                        </CardActions>
                    </Card>
                </FullHeightGrid>
            </PageContent>
        );
    }
}

export default Login;
