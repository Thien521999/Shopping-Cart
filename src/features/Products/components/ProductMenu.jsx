import { Box, Link } from '@material-ui/core';
import { LanguageContext } from 'context/LanguageContext';
import React, { useContext } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {

};

function ProductMenu(props) {
    const { url } = useRouteMatch();
    const { defaultLanguage } = useContext(LanguageContext);

    return (
        <Box component="ul" className="menu__wrapper">
            <li className="menu__item">
                {/* Link de lay style, con NavLink de lay behavior */}
                <Link component={NavLink} to={url} exact>
                    {defaultLanguage.Description}
                </Link>
            </li>
            <li className="menu__item">
                <Link component={NavLink} to={`${url}/additional`} exact>
                    {defaultLanguage.Additional_Information}
                </Link>
            </li>
            <li className="menu__item">
                <Link component={NavLink} to={`${url}/review`} exact>
                    {defaultLanguage.Reviews}
                </Link>
            </li>
        </Box>
    );
}

export default ProductMenu;