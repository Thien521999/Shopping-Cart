import { Box, Typography, makeStyles } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/index";
import { formatPrice } from "features/utils";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";

const useStyle = makeStyles(theme => ({
    root: {

        "&:hover": {
            cursor: 'pointer',
            border: `1px solid ${theme.palette.grey[300]}`,
            boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 20px',
            transition: 'all 0.45s ease 0s',

            zIndex: '1',
        }
    },
}))

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product = {} }) {
    const classes = useStyle();
    const history = useHistory();

    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER;

    const handleClick = () => {
        history.push(`/products/${product.id}`);
    };

    return (
        <Box padding={1} className={classes.root} onClick={handleClick}>
            <Box padding={1} minHeight="215px">
                <img
                    src={thumbnailUrl}
                    alt={product.name}
                    width="100%"
                />
            </Box>
            <Typography 
                variant="body2" 
                style={{ overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '1' }}
            >
                    {product.name}
            </Typography>

            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {formatPrice(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? `- ${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;
