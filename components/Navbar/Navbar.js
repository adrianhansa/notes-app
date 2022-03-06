import React from "react";
import { CssBaseline, AppBar, Toolbar, Typography } from "@material-ui/core";
import { PhotoCamera } from "@mui/icons-material";

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
