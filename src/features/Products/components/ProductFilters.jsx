import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategoty from './Filters/FilterByCategoty';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired, //nhung gia tri filter hien tai  
    onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange = null }) {
    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return;

        const newfilters = {
            "category.id": newCategoryId,
        }

        onChange(newfilters);
    }

    const handleChange = (values) => {
        console.log(values);
        if (!onChange) return;
        onChange(values);
    }

    return (
        <Box>
            <FilterByCategoty onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange} />
            <FilterByService filters={filters} onChange={handleChange} />
        </Box>
    );
}

export default ProductFilters;