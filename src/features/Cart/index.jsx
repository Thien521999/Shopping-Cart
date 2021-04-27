import { Box, Button, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CartItem from './components/CartItem';
import CartPay from './components/CartPay';
import { cartItemCountSelector, cartTotalSelector } from './selectors';

CartFeature.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    left: { width: "910px" },
}));

function CartFeature(props) {
    const classes = useStyles();

    //const dispatch = useDispatch();
    const history = useHistory();

    // Tong so san pham
    const cartTotal = useSelector(cartTotalSelector);

    // So san pham trong gio hang
    const numberItemInCart = useSelector(cartItemCountSelector);

    // Mảng cac san pham,
    const infoProduct = useSelector(state => state.cart.cartItems);
    //console.log(infoProduct);

    //const [productList, setProductList] = useState(infoProduct);
    //console.log(productList[0].id);

    // const handleDelete = (item, idx) => {
    //     console.log(item, idx);

    //     const action = removeFromCart(idx);
    //     dispatch(action);

    //     const newProduct = [...productList];
    //     newProduct.splice(idx, 1);

    //     setProductList(newProduct);
    // }

    const handleClickContinueBuy = () => {
        history.push('/');
    };

    return (
        <Box>
            <Container>
                <Grid container spacing={1} style={{ marginTop: "6px" }} className="product">

                    {/* Left column */}
                    <Grid item className={classes.left} >
                        <Box component="div">
                            <h2 className="title">
                                GIỎ HÀNG
                                <span className="product-count"> ({numberItemInCart} sản phẩm)</span>
                            </h2>
                        </Box>

                        {
                            infoProduct.length > 0 && (
                                infoProduct.map((product, idx) => (
                                    <CartItem
                                        key={product.id}
                                        product={product}                                    
                                    />
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
                    </Grid>

                    {/* Right column */}
                    <CartPay cartTotal={cartTotal} />

                </Grid>
            </Container>
        </Box>
    )
}

export default CartFeature;