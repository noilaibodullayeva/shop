import './style.css';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import axios from "axios"
import Img1 from "./download.svg"
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const URL = " http://localhost:7887/";
    const [pages, setPages] = useState(["home"])

    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = useState(null);

    useEffect(() => {
        axios.get(URL + "categories").then(r => {
            setPages(r.data)
        })
    }, [])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div>
            <AppBar position="sticky" className='kkk'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={Img1} alt="" style={{ width: "120px", height: "60px" }} />

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.id} onClick={handleCloseNavMenu} >
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key="lklklk"
                                onClick={() => navigate("/",{ state:{id: 0}})}
                                sx={{ my: 2, color: 'black', display: 'block', marginLeft: "90px" }}
                            >
                                Hammasi
                            </Button>
                            {pages.map((page) => (
                                <Button
                                    key={page.id}
                                    onClick={() => navigate("/", {state: {id: page.id}})}
                                    sx={{ my: 2, color: 'black', display: 'block', marginLeft: "90px" }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}


export default Navbar;
