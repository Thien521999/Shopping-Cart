import { Box, Button, Grid, makeStyles, Paper } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { formatPrice } from 'features/utils';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER_130 } from "constants/index";
import PropTypes from 'prop-types';
import React from 'react';
import './index.css';
import './responsive.css';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router';

InfoCart.propTypes = {
    infoProduct: PropTypes.array,
    cartTotal: PropTypes.number,
    numberItemInCart: PropTypes.number,
    onDelete: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    left: { width: "910px" },
}));

function InfoCart({ infoProduct = [], cartTotal = 0, numberItemInCart = 0, onDelete = null }) {
    const classes = useStyles();
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const handleClickRemove = (item, idx) => {
        if (!onDelete) return;
        onDelete(item, idx);
    }

    const handleChooseColor = () => {
        return enqueueSnackbar('Mình chưa làm chức năng này,hehe', { variant: 'info' });
    };

    const handleClickContinueBuy = () => {
        history.push('/');
    }

    return (
        <Grid item className={classes.left} >
            <Box component="div">
                <h2 className="title">
                    GIỎ HÀNG
                    <span className="product-count"> ({numberItemInCart} sản phẩm)</span>
                </h2>
            </Box>

            {
                infoProduct.length > 0 && (
                    infoProduct.map((item, idx) => (
                        <Paper elevation={0} key={item.id} style={{ marginBottom: '16px' }}>
                            <Box component="div" className="cart">
                                <Box component="div" className="cart-product">
                                    <Box component="div" className="cart-product__img">
                                        <a href={`/products/${item.id}`}>
                                            <img
                                                src={item.product.thumbnail ? `${STATIC_HOST}${item.product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER_130}
                                                alt=""
                                                className="cart-product__thumbnail"
                                            />
                                        </a>
                                    </Box>
                                    {/* PC */}
                                    <Box component="div" className="cart-product__content">
                                        <Box component="div" className="cart-product__content--inner">
                                            <Box component="div" className="cart-product__desc">
                                                <a href={`/products/${item.id}`} className="cart-product__name">{item.product.name}</a>
                                                <p className="cart-product__note"> Chỉ còn 1 sản phẩm</p>
                                                <p className="cart-product__actions">
                                                    <span className="cart-product__del" onClick={() => handleClickRemove(item, idx)}>Xóa</span>
                                                    <span className="cart-product__buy-later" onClick={handleChooseColor} >Để dành mua sau</span>
                                                </p>
                                            </Box>
                                            <Box component="div" className="cart-product__details">
                                                <Box component="div" className="cart-product__price">
                                                    <p className="cart-products__real-prices">{formatPrice(item.product.salePrice * item.quantity)}</p>
                                                    <p className="cart-products__discount-prices">
                                                        <del>{item.product.originalPrice}</del>
                                                        <span className="cart-products__percent-prices">-{item.product.promotionPercent}%</span>
                                                    </p>
                                                </Box>
                                                <Box component="div" className="cart-product__qty">
                                                    <Box component="div" className="qty">
                                                        <span className="qty__decrease qty--disable">-</span>
                                                        <input type="tel" className="qty__input" placeholder={item.quantity} />
                                                        <span className="qty__increase qty--disable">+</span>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    {/* Mobile */}
                                    <Box component="div" className="cart-product-mobile__content">
                                        <Box component="div" className="cart-product-mobile__content--inner">
                                            <Box component="div" className="cart-product-mobile__desc">
                                                <a href={`/products/${item.id}`} className="cart-product-mobile__name">{item.product.name}</a>

                                                <Box component="span" className="cart-product-mobile__price">
                                                    <p className="cart-product-mobile__real-prices">{formatPrice(item.product.salePrice * item.quantity)}</p>
                                                    <p className="cart-product-mobile__discount-prices">
                                                        <del>{item.product.originalPrice}</del>
                                                        <span className="cart-products__percent-prices">-{item.product.promotionPercent}%</span>
                                                    </p>
                                                </Box>
                                            </Box>
                                            <Box component="div" className="cart-product-mobile__note">
                                                Chỉ còn 1 sản phẩm
                                            </Box>
                                            <Box component="div" className="cart-product-mobile__details">
                                                <Box component="div" className="cart-product-mobile__qty">
                                                    <Box component="div" className="mobile__qty">
                                                        <span className="mobile__qty--decrease mobile__qty--disable">-</span>
                                                        <input type="tel" className="mobile__qty--input" placeholder={item.quantity} />
                                                        <span className="mobile__qty--increase mobile__qty--disable">+</span>
                                                    </Box>
                                                </Box>
                                                <p className="cart-product-mobile__actions">
                                                    <span className="cart-product-mobile__del" onClick={() => handleClickRemove(item, idx)}>Xóa</span>
                                                    <span className="cart-product-mobile__buy-later" onClick={handleChooseColor} >Mua sau</span>
                                                </p>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="code-discount" component="div">
                                    <Box component="div" className="wrapper" onClick={handleChooseColor}>
                                        <span className="description">Mã khuyến mãi</span>
                                        <span className="icon__description">
                                            <ArrowDropDownIcon />
                                        </span>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    ))
                )
            }

            {
                infoProduct.length <= 0 && (
                    <Paper elevation={0} >
                        <Box component="div" className="empty">
                            <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" className="empty__img" />
                            <p className="empty__note">Không có sản phẩm nào trong giỏ hàng của bạn</p>
                            <Button variant="contained" color="secondary" className="empty__btn" size="medium" onClick={handleClickContinueBuy}>
                                Tiếp tục mua sắm
                            </Button>
                        </Box>
                    </Paper>
                )
            }
        </Grid >
    );
}

export default InfoCart;