import { Box } from "@material-ui/core";
import categoryApi from "api/categoryApi";
import 'index.css';
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

FilterByCategotyMobile.propTypes = {
    onChange: PropTypes.func,
};

//const useStyles = makeStyles(theme => ({
// root: {
//     padding: theme.spacing(2),
// },

// menu: {
//     margin: 0,
//     padding: 0,
//     listStyleType: 'none',
//     '& > li': {
//         marginTop: theme.spacing(1),
//         transition: 'all 0.45s ease 0s',

//         '&:hover': {
//             cursor: 'pointer',
//             color: theme.palette.primary.dark,
//         }
//     }
// },
//}))

function FilterByCategotyMobile({ onChange = null }) {
    //const classes = useStyles();

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();
                // console.log(list);
                setCategoryList(
                    list.map((x) => ({
                        id: x.id,
                        name: x.name,
                    }))
                );
            } catch (error) {
                console.log("Failed to fetch category list:", error);
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {
        if (!onChange) return;
        onChange(category.id);
    };

    return (
        <Box className="root" >
            <ul className="mobile-category__list">
                {categoryList.map((category) => (
                    <li className="mobile-category__item" key={category.id} onClick={() => handleCategoryClick(category)}>
                        {/* <Typography className="name__category" >{category.name}</Typography> */}
                        <span className="mobile-category__link">{category.name}</span>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategotyMobile;
