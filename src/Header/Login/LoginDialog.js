import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField, Button } from '@material-ui/core';

const LoginDialog = (props) => {
    return (
        <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close} color="primary">
                    Cancel
                </Button>
                <Button color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog;
