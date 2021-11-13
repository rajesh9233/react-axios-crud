import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserContext } from "./UserWrapper";

export default function Header() {
  const userContext = useContext(UserContext);
  const { redirectToUser } = userContext;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users Dashboard
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={() => redirectToUser()}
          >
            Create User
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
