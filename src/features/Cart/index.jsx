import { Box, Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './cartSlice';
import CartPay from './components/CartPay';
import InfoCart from './components/InfoCart';
import { cartItemCountSelector, cartTotalSelector } from './selectors';

CartFeature.propTypes = {

};

function CartFeature(props) {
    const dispatch = useDispatch();

    const cartTotal = useSelector(cartTotalSelector);
    const numberItemInCart = useSelector(cartItemCountSelector);
    const infoProduct = useSelector(state => state.cart.cartItems);

    const [productList, setProductList] = useState(infoProduct);
    console.log(productList);

    const handleDelete = (item, idx) => {
        console.log(item, idx);
        const action = removeFromCart(idx);
        dispatch(action);

        const newProduct = [...productList];
        newProduct.splice(idx, 1);

        setProductList(newProduct);
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={1} style={{ marginTop: "6px" }} className="product">

                    {/* Left column */}
                    <InfoCart infoProduct={productList} cartTotal={cartTotal} numberItemInCart={numberItemInCart} onDelete={handleDelete} />

                    {/* Right column */}
                    <CartPay cartTotal={cartTotal} />

                </Grid>
            </Container>
        </Box>
    )
}

export default CartFeature;