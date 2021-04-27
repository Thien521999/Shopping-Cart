import { Box, Paper } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER_130 } from "constants/index";
import { formatPrice } from 'features/utils';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../cartSlice';
import './index.css';
import './responsive.css';

CartItem.propTypes = {
    product: PropTypes.object,
};

function CartItem({ product = {}, onDelete = null, idx = 0 }) {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    // Mảng cac san pham,


    const handleClickRemove = (item, idx) => {
        // console.log(item, idx);

        const action = removeFromCart(idx);
        dispatch(action);
    }

    const handleChooseColor = () => {
        return enqueueSnackbar('Mình chưa làm chức năng này,hehe', { variant: 'info' });
    };


    // const { enqueueSnackbar } = useSnackbar();
    // const handleClickRemove = (item) => {
    //     if (!onDelete) return;
    //     onDelete(item);
    // }

    // const handleChooseColor = () => {
    //     return enqueueSnackbar('Mình chưa làm chức năng này,hehe', { variant: 'info' });
    // };
    // const schema = yup.object().shape({
    //     quantity: yup.number()
    //         .required('Please enter quantity')
    //         .min(1, 'Minimum value is 1')
    //         .typeError('Please enter a number'),
    // });
    // const form = useForm({
    //     defaultValues: {
    //         quantity: 1,
    //     },
    //     resolver: yupResolver(schema),
    // });
    return (
        <Paper elevation={0} style={{ marginBottom: '16px' }}>
            <Box component="div" className="cart">
                <Box component="div" className="cart-product">
                    <Box component="div" className="cart-product__img">
                        <a href={`/products/${product.id}`}>
                            <img
                                src={product.product.thumbnail
                                    ? `${STATIC_HOST}${product.product.thumbnail?.url}`
                                    : THUMBNAIL_PLACEHOLDER_130
                                }
                                alt=""
                                className="cart-product__thumbnail"
                            />
                        </a>
                    </Box>
                    {/* PC */}
                    <Box component="div" className="cart-product__content">
                        <Box component="div" className="cart-product__content--inner">
                            <Box component="div" className="cart-product__desc">
                                <a href={`/products/${product.id}`} className="cart-product__name">{product.product.name}</a>
                                <p className="cart-product__note"> Chỉ còn 1 sản phẩm</p>
                                <p className="cart-product__actions">
                                    <span className="cart-product__del" onClick={() => handleClickRemove(product, product.id)}>Xóa</span>
                                    <span className="cart-product__buy-later" onClick={handleChooseColor} >Để dành mua sau</span>
                                </p>
                            </Box>
                            <Box component="div" className="cart-product__details">
                                <Box component="div" className="cart-product__price">
                                    <p className="cart-products__real-prices">{formatPrice(product.product.salePrice * product.quantity)}</p>
                                    <p className="cart-products__discount-prices">
                                        <del>{product.product.originalPrice}</del>
                                        <span className="cart-products__percent-prices">-{product.product.promotionPercent}%</span>
                                    </p>
                                </Box>
                                <Box component="div" className="cart-product__qty">
                                    <Box component="div" className="qty">
                                        <span className="qty__decrease qty--disable">-</span>
                                        <input type="tel" className="qty__input" placeholder={product.quantity} />
                                        <span className="qty__increase qty--disable">+</span>
                                    </Box>

                                    {/* <form>
                                        <QuantityField
                                            name="quantity"
                                            label="Quantity"
                                            form={form}
                                        // onSubmit={handleSubmit}
                                        />
                                    </form> */}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* Mobile */}
                    <Box component="div" className="cart-product-mobile__content">
                        <Box component="div" className="cart-product-mobile__content--inner">
                            <Box component="div" className="cart-product-mobile__desc">
                                <a href={`/products/${product.id}`} className="cart-product-mobile__name">{product.product.name}</a>

                                <Box component="span" className="cart-product-mobile__price">
                                    <p className="cart-product-mobile__real-prices">{formatPrice(product.product.salePrice * product.quantity)}</p>
                                    <p className="cart-product-mobile__discount-prices">
                                        <del>{product.product.originalPrice}</del>
                                        <span className="cart-products__percent-prices">-{product.product.promotionPercent}%</span>
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
                                        <input type="tel" className="mobile__qty--input" placeholder={product.quantity} />
                                        <span className="mobile__qty--increase mobile__qty--disable">+</span>
                                    </Box>
                                </Box>
                                <p className="cart-product-mobile__actions">
                                    <span className="cart-product-mobile__del" onClick={() => handleClickRemove(product, product.id)}>Xóa</span>
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
    );
}

export default CartItem;