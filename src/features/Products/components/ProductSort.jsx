import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';
import { LanguageContext } from 'context/LanguageContext';
// import 'responsive.css';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired, //các value hiên tại
    onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange = null }) {
    const { defaultLanguage } = useContext(LanguageContext);
    const handleSortChange = (e, newValue) => {
        console.log(newValue);
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
            <Tab label={defaultLanguage.Price_from_low_to_high} value="salePrice:ASC" className="sale__price" />
            <Tab label={defaultLanguage.Price_from_high_to_low} value="salePrice:DESC" className="sale__price" />
        </Tabs>
    );
}

export default ProductSort;