import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useScrollTrigger } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo/logo2.png';


const drawerWidth = 240;
const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
];

const UnderlinedButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    color: '#fff',
    margin: '0 8px',
    textDecoration: 'none',
    '&:after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: -5,
        width: '0%',
        height: '2px',
        backgroundColor: 'white',
        transition: 'width 0.3s ease, left 0.3s ease',
    },
    '&:hover:after': {
        width: '100%',
        left: 0,
    },
}));

const SearchBar = styled('input')(({ theme, visible }) => ({
    width: visible ? '200px' : '0',
    opacity: visible ? '1' : '0',
    transition: 'width 0.3s ease, opacity 0.3s ease',
    marginLeft: '0px',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: '#fff',
}));

function ElevationScroll(props) {
    const { children, defaultColor } = props;
    const trigger = useScrollTrigger();

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        sx: {
            transition: '0.3s',
            backgroundColor: trigger ? '#062229' : defaultColor,
        },
    });
}

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [searchVisible, setSearchVisible] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredItems, setFilteredItems] = React.useState([]);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const toggleSearch = () => {
        setSearchVisible((prevState) => !prevState);
        setSearchQuery('');
        setFilteredItems([]);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query) {
            const filtered = navItems.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
        }
    };

    const handleItemClick = (path) => {
        navigate(path);
        setSearchQuery('');
        setFilteredItems([]);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ height: '100%',backgroundColor: '#062229',textAlign: 'left' }}>
            <Typography color='white' sx={{ fontSize: '1rem',fontFamily: 'Share Tech Mono',my: 2, mx: 2 }}>
                Vizo software solutions
            </Typography>
            <Divider style={{ backgroundColor: 'white' }}/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left' }}>
                            <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemText >
                                <text style={{ color:'white',fontFamily: 'Share Tech Mono' }} >{item.name}</text>
                                </ListItemText>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <ElevationScroll defaultColor="transparent">
                <AppBar component="nav" sx={{ borderBottom: '2px solid white' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, marginLeft: 'auto', marginRight: '12px' }}>
                            <img src={logo} alt="Logo" style={{ height: '40px' }} />
                        </Box>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, mt: 1, fontFamily: 'Share Tech Mono', display: { xs: 'none', sm: 'block' } }}
                        >
                            VIZO SOFTWARE SOLUTIONS
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <UnderlinedButton key={item.name}>
                                    <Link to={item.path} style={{ fontFamily: "Share Tech Mono", color: 'inherit', textDecoration: 'none' }}>
                                        {item.name}
                                    </Link>
                                </UnderlinedButton>
                            ))}
                            <IconButton color="inherit" onClick={toggleSearch}>
                                <SearchIcon />
                            </IconButton>
                            <SearchBar
                                type="text"
                                placeholder="Search..."
                                visible={searchVisible}
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            {searchVisible && filteredItems.length > 0 && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        backgroundColor: 'white',
                                        zIndex: 1,
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                                        top: '100%',
                                        right: '0',
                                        marginRight: '20px',
                                        width: '20%',
                                    }}
                                >
                                    {filteredItems.map((item) => (
                                        <ListItem
                                            button
                                            key={item.name}
                                            onClick={() => handleItemClick(item.path)}
                                            sx={{ color: 'black' }}
                                        >
                                            <ListItemText primary={item.name} />
                                        </ListItem>
                                    ))}
                                </Box>
                            )}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, marginLeft: 'auto' }}>
                            <img src={logo} alt="Logo" style={{ height: '40px' }} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
