import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';


ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort(props) {
    const { currentSort, onChange } = props;
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
        >
            <Tab label="Giá từ thấp đến cao" value="salePrice:ASC" />
            <Tab label="Giá từ cao đến thấp" value="salePrice:DESC" />
        </Tabs>
    );
}

export default ProductSort;