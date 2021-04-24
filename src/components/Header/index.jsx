import { Badge, Box, IconButton, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AccountCircle, Close } from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import MenuIcon from "@material-ui/icons/Menu";
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import Login from "features/Auth/components/Login";
import Register from "features/Auth/components/Register";
import { logout } from "features/Auth/userSlice";
import { hideMiniCart } from "features/Cart/cartSlice";
import ShowMiniCart from "features/Cart/components/ShowMiniCart";
import { cartItemCountSelector } from "features/Cart/selectors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import "./index.css";
import './responsive.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    closeButton: {
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
        zIndex: 1,
    },
}));

const MODE = {
    LOGIN: "login",
    REGISTER: "register",
};

export default function Header() {
    const dispatch = useDispatch();
    const history = useHistory();

    //Kiem tra user dang nhap hay chua dang nhap
    const loggedInUser = useSelector((state) => state.user.current);
    // console.log(loggedInUser);
    const isLoggedIn = !!loggedInUser.id; //neu có id tức là đã đănng nhập và nguoc lai

    const cartItemsCount = useSelector(cartItemCountSelector);

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEL, setAnchorEL] = useState(null);

    const showCart = useSelector(state => state.cart.showMiniCart);
    console.log(showCart);

    const handleUserClick = (e) => {
        setAnchorEL(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEL(null);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
        history.push('/');
    };

    const handleClickCart = () => {
        history.push('/cart');
    };

    const handleClickHome = () => {
        history.push('/');
    }
    const handleClickTodo = () => {
        history.push('/todos');
    }
    const handleClickAlbum = () => {
        history.push('/albums');
    }

    const handleCartClose = () => {
        dispatch(hideMiniCart());
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className="nav__header">
                <Toolbar className="app">
                    <Box component="label" className="menuButton" htmlFor="nav-mobile-input">
                        <MenuIcon className="menuButton" />
                    </Box>

                    <Typography variant="h6" className="title">
                        <Link className="title__header" to="/">
                            Nice Shop
                        </Link>
                    </Typography>

                    <NavLink className="link" to="/todos">
                        <Button color="inherit">Todos</Button>
                    </NavLink>

                    <NavLink className="link" to="/albums">
                        <Button color="inherit">Albums</Button>
                    </NavLink>

                    {/* Chưa đăng nhập */}
                    {!isLoggedIn && (
                        <Box component="span" className="icon-login">
                            <Button color="inherit" onClick={handleClickOpen}>
                                Login
                            </Button>
                        </Box>
                    )}

                    <Box className="cart">
                        <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleClickCart}>
                            <Badge badgeContent={cartItemsCount} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>

                    {/*show Icon đã đăng nhập */}
                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleUserClick}>
                            <AccountCircle />
                        </IconButton>
                    )}

                    {/* show mini cart */}
                    <Box className="cartMini">
                        {showCart && (
                            <ShowMiniCart onClose={handleCartClose} />
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Xu ly nav-mobile */}
            <input type="checkbox" hidden name="" id="nav-mobile-input" className="nav-input" />

            <label component="div" className="nav__overlay" htmlFor="nav-mobile-input"></label>
            <nav className="nav__mobile">
                <header className="nav__mobile-title">
                    <span className="nav__mobile-text">Nice Shop</span>
                    <label htmlFor="nav-mobile-input" className="nav__icon--close">
                        <Close />
                    </label>
                </header>
                <ul className="nav__mobile-list">
                    <li className="nav__mobile-item" onClick={handleClickHome}>
                        <label className="icon__item" htmlFor="nav-mobile-input"><HomeIcon /></label>
                        <label className="text__item" htmlFor="nav-mobile-input">Home</label>
                    </li>
                    <li className="nav__mobile-item" onClick={handleClickTodo}>
                        <label className="icon__item" htmlFor="nav-mobile-input"><WorkOutlineIcon /></label>
                        <label className="text__item" htmlFor="nav-mobile-input">Todos</label>
                    </li>
                    <li className="nav__mobile-item" onClick={handleClickAlbum}>
                        <label className="icon__item" htmlFor="nav-mobile-input"><PhotoAlbumIcon /></label>
                        <label className="text__item" htmlFor="nav-mobile-input">Albums</label>
                    </li>
                    <li className="nav__mobile-item" onClick={handleClickOpen}>
                        <label className="icon__item" htmlFor="nav-mobile-input"><HowToRegIcon /></label>
                        <label className="text__item" htmlFor="nav-mobile-input">Login</label>
                    </li>
                    <li className="nav__mobile-item" onClick={handleLogoutClick}>
                        <label className="icon__item" htmlFor="nav-mobile-input"><ExitToAppIcon /></label>
                        <label className="text__item" htmlFor="nav-mobile-input">Logout</label>
                    </li>

                </ul>
            </nav>

            {/* dialog - log out - My Account */}
            <Menu
                id="demo-positioned-menu"
                keepMounted
                anchorEl={anchorEL}
                open={Boolean(anchorEL)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: "bottom", //theo chieu doc
                    horizontal: "right", //nam ngang
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>

            {/* dialog - Sign in - Sign up */}
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                {/* Icon x goc tren ben phai */}
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close />
                </IconButton>

                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} /> {/** closeDialog: dùng de dong dialog */}
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account. Login here.
                                </Button>
                            </Box>
                        </>
                    )}

                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Don't have an account. Register here.
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
