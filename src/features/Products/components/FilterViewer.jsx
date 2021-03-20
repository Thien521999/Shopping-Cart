import React from "react";
import PropTypes from "prop-types";
import { Box, Chip, makeStyles } from "@material-ui/core";
import { useMemo } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",

        padding: 0,
        margin: theme.spacing(2, 0),
        listStyleType: "none",

        "& > li": {
            margin: 0,
            padding: theme.spacing(1),
        },
    },
}));

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => "Giao hàng miễn phí",
        isActive: (filters) => filters.isFreeShip, //chỉ active khi isFreeShip = true
        isVisible: () => true, //luon luon show
        isRemovable: false,
        onRemove: () => { }, //ko làm gì cả cơ bản là ko remove dc
        onToggle: (filters) => {
            const newFilters = { ...filters };
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip;
            } else {
                newFilters.isFreeShip = true;
            }
            return newFilters;
        },
    },
    {
        id: 2,
        getLabel: () => "Có khuyến mãi",
        isActive: () => true, //cơ bản là luon luon active
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.isPromotion;
            return newFilters;
        },
        onToggle: () => { },
    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.salePrice_lte;
            delete newFilters.salePrice_gte;
            return newFilters;
        },
        onToggle: () => { },
    },
    {
        id: 4,
        getLabel: (filters) => 'Danh mục',
        isActive: () => true,
        isVisible: (filters) => Object.keys(filters).includes('name'),
        isRemovable: true,
        onRemove: (filters) => { },
        onToggle: (filters) => { },
    },
];

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
    const classes = useStyles();

    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter((x) => x.isVisible(filters));
    }, [filters]);

    return (
        <Box className={classes.root} component="ul">
            {visibleFilters.map((x) => (
                <li key={x.id}>
                    <Chip
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? "primary" : "default"}
                        clickable={!x.isRemovable} //tra ve true or false => nếu click dc thì ko remove dc và ngc lai
                        onClick={
                            x.isRemovable
                                ? null
                                : () => {
                                    //Nếu remove dc thì ko làm gì cả,ko remove dc có nghia là toggle
                                    if (!onChange) return;

                                    const newFilters = x.onToggle(filters);
                                    onChange(newFilters);
                                }
                        }
                        onDelete={
                            x.isRemovable
                                ? () => {
                                    if (!onChange) return;
                                    const newFilters = x.onRemove(filters);
                                    onChange(newFilters);
                                }
                                : null
                        }
                        size="small"
                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterViewer;
