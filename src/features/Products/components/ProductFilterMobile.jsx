import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategotyMobile from './Filters/FilterByCategotyMobile';

ProductFilterMobile.propTypes = {
    filters: PropTypes.object.isRequired, //nhung gia tri filter hien tai  
    onChange: PropTypes.func,
};

function ProductFilterMobile({ filters, onChange = null }) {
    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return;

        const newfilters = {
            "category.id": newCategoryId,
        }

        onChange(newfilters);
    }

    return (
        <Box style={{margin: '0'}} className="product__filter">
            <FilterByCategotyMobile onChange={handleCategoryChange} />
        </Box>
    );
}

export default ProductFilterMobile;