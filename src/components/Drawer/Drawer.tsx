import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import {
    Outlet, Link,
} from "react-router-dom";
import { modulesApp } from './modules';
import Img from '../../assets/bot.png';
import './Drawer.css';

const drawerWidth = 274;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: '#E5E5E5',
  marginLeft: `-${drawerWidth}px`,
  height: 'auto',
  minHeight: '100vh',
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: '#E5E5E5',
  color: '#000000',
  boxShadow: 'none',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DrawerCustom() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [modules, setModules] = useState(modulesApp);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(9.11deg, #0B0E19 -2.91%, #455492 100%)'
          },
          background: 'linear-gradient(9.11deg, #0B0E19 -2.91%, #455492 100%)'
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className='content'>
            <div className='content-top'>
                <div className='content-top-head'>
                    <IconButton className='arrow-drawer' onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    <div className='content-top-head-logo'>
                        <img src={Img} />
                        <h2 className='nameApp'>Concilbot</h2>
                    </div>
                </div>
                <Link to='/report' style={{ textDecoration: 'none' }}>
                  <Button className='btn-informe'>
                      <span className='btn-informe-text'>Nuevo informe</span>
                  </Button>
                </Link>
                <List className='list'>
                    {modules.map((module, index) => (
                        <Link 
                            className='list-link'
                            style={{ textDecoration: 'none', color: '#fff'}}
                            to={module.path} 
                            key={module.path}>
                            <ListItem  disablePadding>
                                <ListItemButton>
                                    <Icon>{ module.icon }</Icon>
                                    <ListItemText className='list-link-text' primary={module.name} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
            <div className='content-bottom'>
                <Button  variant="text">
                    <Icon className='content-bottom-icon'>logout</Icon>
                    <span className='content-bottom-text'>Cerrar sesión</span>
                </Button>
            </div>
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}