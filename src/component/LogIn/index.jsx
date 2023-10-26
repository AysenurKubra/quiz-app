import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const LogIn = ({ handleLogIn }) => {
  return (
    <div className="login-card">
      <Card sx={{ maxWidth: 300 }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <CardContent>
            <Typography variant="h4" component="div">
              WELCOME!
            </Typography>
            <Typography sx={{ mb: 1.3 }} color="text.secondary">
              Please Login
            </Typography>

            <TextField
              required
              id="filled-required"
              label="Name"
              variant="filled"
            />
            <TextField
            required
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
          </CardContent>
        </Box>
        <CardActions>
          <Button size="small" onClick={handleLogIn}>
            LOGIN
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
