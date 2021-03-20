import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },
    range: {
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: 'center',

        margin: theme.spacing(1, 0, 1),

        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }

    },
    button: {
        display: "flex",
        flexFlow: 'row nowrap',
        justifyContent: 'space-around',
    }
}))

function FilterByPrice({ onChange = null }) {
    const classes = useStyles();

    const [values, setValues] = useState({
        salePrice_lte: 0,
        salePrice_gte: 0,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const handleSubmit = () => {
        // console.log(values);
        if (!onChange) return;
        onChange(values);
    };

    const handleReset = () => {
        setValues({
            salePrice_lte: 0,
            salePrice_gte: 0,
        })
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>
            <Box className={classes.range}>
                <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                <span>-</span>
                <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
            </Box>
            <Box className={classes.button}>
                <Button variant="outlined" color="primary" onClick={handleSubmit} size="small">
                    Áp dụng
                </Button>
                <Button variant="outlined" color="primary" onClick={handleReset} size="small">
                    Reset
                </Button>
            </Box>
        </Box>
    );
}

export default FilterByPrice;