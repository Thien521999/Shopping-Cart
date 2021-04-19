import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import DOMPurify from 'dompurify';

ProductDescription.propTypes = {
    product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
    const safeDescription = DOMPurify.sanitize(product.description);
    return (
        // Trong react co 1 thuoc tính dangerouslySetInnerHTML, product.description la chuoi html ta can render len front end
        <Paper elevation={0} style={{padding: '15px'}}>
            <div dangerouslySetInnerHTML={{ __html:  safeDescription}} />
        </Paper>

    );
}

export default ProductDescription;