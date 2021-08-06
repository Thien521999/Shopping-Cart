import { Box } from '@material-ui/core';
// import ListPage from 'features/Products/pages/ListPage';

import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';


ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const match = useRouteMatch();//Lam viec voi nested routing

    return (
        <Box pt={4} >
            <Switch>
                <Route path={match.url} component={ListPage} exact />
                <Route path={`${match.url}/:productId`} component={DetailPage} />
            </Switch>
        </Box>
    );
}

export default ProductFeature;