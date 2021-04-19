import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';
// import 'responsive.css';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired, //các value hiên tại
    onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange = null }) {
    const handleSortChange = (e, newValue) => {
        if (!onChange) return;
        onChange(newValue);
    }
    
    return (
        <Tabs
            value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
            className="sale"
        >
            <Tab label="Giá từ thấp đến cao" value="salePrice:ASC" className="sale__price"/>
            <Tab label="Giá từ cao đến thấp" value="salePrice:DESC" className="sale__price" />
        </Tabs>
    );
}

export default ProductSort;