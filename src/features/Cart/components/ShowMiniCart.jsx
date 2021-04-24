import { Box, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useDispatch } from 'react-redux';
import { hideMiniCart } from '../cartSlice';

ShowMiniCart.propTypes = {
    onClose: PropTypes.func,
};

function ShowMiniCart({onClose = null}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClickIconClose = () => {
        console.log('haha');
        if(!onClose) return ;
        onClose();
    }

    const moveToCartPage = () => {
        history.push('/cart');
        dispatch(hideMiniCart());
    }

    return (

        <Box component="div" className="cart__dialog">
            <Box component="div" className="icon">
                <CloseIcon 
                    fontSize="small" 
                    className="icon__close"
                    onClick = {handleClickIconClose}    
                />
            </Box>

            <ul className="text">
                <li className="icon__success">
                    <CheckCircleOutlineIcon />
                </li>
                <li>Thêm vào giỏ hàng thành công!</li>
            </ul>

            <Button 
                variant="contained" 
                color="secondary" 
                className="btn" 
                size="small"
                onClick={moveToCartPage}
                
            >
                Xem giỏ hàng và thanh toán
            </Button>
        </Box>

    );
}

export default ShowMiniCart;