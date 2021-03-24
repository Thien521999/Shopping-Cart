import { Box, Typography, makeStyles } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/index";
import PropTypes from "prop-types";
import React from "react";


const useStyle = makeStyles(theme => ({
    root: {
        
        "&:hover": {
            cursor: 'pointer',
            border: `1px solid ${theme.palette.grey[300]}`,
            transition: 'all 0.45s ease 0s',
            
        }
    },
    // url: {
    //     '&:hover': {
    //         tranform: scale(1.2),
    //     }
    // }
}))

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product = {} }) {
    const classes = useStyle();

    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER;

    return (
        <Box padding={1} className={classes.root}>
            <Box padding={1} minHeight="215px">
                <img
                    src={thumbnailUrl}
                    alt={product.name}
                    width="100%"
                    
                />
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? `- ${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;
