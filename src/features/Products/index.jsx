import { Box } from '@material-ui/core';
import ListPage from 'features/Products/pages/ListPage';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const match = useRouteMatch();

    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPage} exact />
            </Switch>
        </Box>
    );
}

export default ProductFeature;