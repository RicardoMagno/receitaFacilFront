import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Login">
      <div className="root">
        <form>
          <TextField
            id="standard-full-width"
            label="Seu email "
            style={{ margin: 8 }}
            placeholder="Email"
            fullWidth
            margin="normal"
            variant="filled"
            dense="true"
            InputLabelProps={{
                shrink: true,
            }}
            />
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 10 }}
            placeholder="Password"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
                shrink: true,
            }}
            />
            <Button variant="outlined" className="button">
              Login
            </Button>
        </form>
      </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Login;