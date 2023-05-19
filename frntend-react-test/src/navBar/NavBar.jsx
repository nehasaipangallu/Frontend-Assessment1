import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SwitchTheme from '../switchtheme/SwitchTheme'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    
    <AppBar position="static"
   className='nav-bar'>
      <Container maxWidth="xl">
      <Row>
      <Col>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img src="/assets/images/v.png" />
          <Typography
          sx={{
         fontSize:"14px"
          }}
          >
           iral Nation
          </Typography>
         
         
           
          
     
        </Toolbar>
        </Col>
        <Col>
        <SwitchTheme/>
        </Col>
        </Row>
      </Container>
    </AppBar>
  
  );
}
export default ResponsiveAppBar;