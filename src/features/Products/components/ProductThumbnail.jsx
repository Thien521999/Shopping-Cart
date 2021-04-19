import { Box } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/index";
import PropTypes from 'prop-types';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product = {} }) {
    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER;

    return (
        <Box className="thumbnails">
            <img className="thumbnail__mobile" src={thumbnailUrl} alt={product.name} width="100%" />

            <Carousel autoPlay className="thumbnail__PC">
                <Box component="div">
                    <img src={thumbnailUrl} alt={product.name} />
                </Box>
                <Box component="div">
                    <img src={thumbnailUrl} alt={product.name} />
                </Box>
                <Box component="div">
                    <img src={thumbnailUrl} alt={product.name} />
                </Box>
                <Box component="div">
                    <img src={thumbnailUrl} alt={product.name} />
                </Box>
                <Box component="div">
                    <img src={thumbnailUrl} alt={product.name} />
                </Box>
            </Carousel >
        </Box>

    );
}

export default ProductThumbnail;