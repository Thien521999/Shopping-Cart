import { Box, Button, Grid, Paper } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { formatPrice } from 'features/utils';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';

CartPay.propTypes = {
    cartTotal: PropTypes.number,
};

function CartPay({ cartTotal = 0 }) {
    const { enqueueSnackbar } = useSnackbar();

    const handleChooseColor = () => {
        return enqueueSnackbar('Mình chưa làm chức năng này,hehe', { variant: 'info' });
    };

    return (
        <Grid item className="wrapper__right">
            <Box component="div" className="right" >
                <Paper elevation={0} >
                    <Box component="div" className="title-top" >
                        <Box component="div" className="title-usage" >
                            <p className="counpon-title">NiceShop khuyến mãi</p>
                            <p className="max-usage">
                                <span>Có thể chọn 2</span>
                                <span className="max-usage__info">
                                    <ErrorIcon /></span>
                            </p>
                        </Box>

                        <Box component="div" className="show-more" onClick={handleChooseColor}>
                            {/* <span className="show-more__icon"><ConfirmationNumberIcon /></span> */}
                            <img className="show-more__icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_icon.svg" alt="more" />
                            <span className="show-more__text">Chọn hoặc nhập mã khuyến mãi</span>
                        </Box>
                    </Box>
                </Paper>
                <Paper elevation={0} style={{ margin: '16px 0px' }}>
                    <Box component="div" className="title-bottom" >
                        <Box component="div" className="prices__items" >
                            <span className="prices__text">Tạm tính</span>
                            <span className="prices__values">{formatPrice(cartTotal)}</span>
                        </Box>
                        <Box component="div" className="prices__total" >
                            <span className="prices__text">Thành tiền</span>
                            <span className="prices__value--final">
                                {formatPrice(cartTotal)}
                                <i>(Đã bao gồm VAT nếu có)</i>
                            </span>
                        </Box>
                    </Box>
                </Paper>
                <Button variant="contained" color="primary" className="cart__submit" onClick={handleChooseColor}>
                    Tiến hành đặt hàng
                </Button>
            </Box>
        </Grid>
    );
}

export default CartPay;