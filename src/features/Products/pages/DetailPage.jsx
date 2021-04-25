import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddToCartForm from '../components/AddToCartForm';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReview from '../components/ProductReview';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import { addToCart, showMiniCart } from 'features/Cart/cartSlice';
// import './index.css';
// import './responsive.css';

DetailPage.propTypes = {

};

const useStyles = makeStyles(theme => ({
    // root: {
    //     paddingBottom: theme.spacing(3),
    // },
    // left: {
    //     width: "444px",
    //     height: 'auto',
    //     padding: theme.spacing(1.5),
    //     borderRight: `1px solid ${theme.palette.grey[300]}`,
    // },
    // right: {
    //     padding: theme.spacing(1.5),
    //     flex: '1 1 0',
    // },
    loading: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        width: '100%',
    },
    // container: {
    //     display: 'flex',
    // },
}));

function DetailPage(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { params: { productId }, url } = useRouteMatch(); //object destusturing (nested 2 lần)

    //Thay vi goi api lay du lieu trong day thi tach ra 1 file khac dùng custom hooks (de su dung lai cho nhung lan sau)
    //custom hooks useProductDetail
    //Lay data ve de render
    const { product, loading } = useProductDetail(productId);

    if (loading) {
        return  <Box className={classes.loading}>
                    <LinearProgress />
                </Box>;
    }

    const handleAddToCartSubmit = (formValues) => {
        // console.log('Form submit: ', formValues);
        const action = addToCart({
            id: product.id,
            product,
            quantity: formValues.quantity
        });
        //console.log(action);
        dispatch(action);
        dispatch(showMiniCart());
    }

    return (
        <Box className="detail__page">
            <Container>
                <Paper elevation={0} >
                    <Grid container className="container">
                        <Grid item className="detail__left">
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className="detail__right">
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />

                <Switch>
                    <Route exact path={url}>
                        <ProductDescription product={product} /> {/* do thang nay no truyen props vao nen viet z,con 2 thang duoi ko co truyen props */}
                    </Route>

                    <Route path={`${url}/additional`} component={ProductAdditional} />
                    <Route path={`${url}/review`} component={ProductReview} />
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;