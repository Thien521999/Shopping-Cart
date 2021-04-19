import { Box, Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

ProductFiltersSkeletonList.propTypes = {
    length: PropTypes.number,
};

ProductFiltersSkeletonList.defaultProps = {
    length: 1,
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.grey[300]}`,

        '&:last-child': {
            borderBottom: 'none',
        }
    },
}));

function ProductFiltersSkeletonList({ length }) {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.root} >
                <Grid container >
                    <Skeleton width="80%" height="25px" />
                    {Array.from(new Array(length)).map((x, index) => (
                        <Grid item key={index} xs={12} sm={12} md={12} lg={12}>
                            <Box marginTop={1}>
                                <Skeleton width="40%" />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box className={classes.root}>
                <Skeleton width="60%" height="25px" />
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Skeleton width="100%" />
                    <Skeleton width="100%" />
                </Grid>
            </Box>

            <Box className={classes.root}>
                <Skeleton width="25%" height="25px" />
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Skeleton width="80%" />
                    <Skeleton width="80%" />
                </Grid>
            </Box>
        </Box>

    );
}

export default ProductFiltersSkeletonList;