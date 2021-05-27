import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#98c5e9',
          boxShadow: 'none',
          padding: '10px 0',
          borderButtom: '2px solid #00285e'
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <Typography variant="h4">Product list</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
