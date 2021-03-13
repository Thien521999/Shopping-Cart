import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';


ProductList.propTypes = {
    data: PropTypes.array,
};

ProductList.defaultProps = {
    data: [],
}

function ProductList({ data }) {
    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        {/* do component làm trong đây sẽ rất phức tạp nên tao ra 1 component mới */}
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;