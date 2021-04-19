import { Box, Link } from '@material-ui/core';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {

};

function ProductMenu(props) {
    const { url } = useRouteMatch();
    //console.log({ url }); // {url: "/products/18528920"}

    return (
        <Box component="ul" className="menu__wrapper">
            <li className="menu__item">
                {/* Link de lay style, con NavLink de lay behavior */}
                <Link component={NavLink} to={url} exact>
                    Description
                </Link>
            </li>
            <li className="menu__item">
                <Link component={NavLink} to={`${url}/additional`} exact>
                    Additional Information
                </Link>
            </li>
            <li className="menu__item">
                <Link component={NavLink} to={`${url}/review`} exact>
                    Reviews
                </Link>
            </li>
        </Box>
    );
}

export default ProductMenu;