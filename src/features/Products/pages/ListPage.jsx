import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import productApi from "api/productApi";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import FilterViewer from "../components/FilterViewer";
import ProductFilters from "../components/ProductFilters";
import ProductFiltersSkeletonList from "../components/ProductFiltersSkeletonList";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import queryString from "query-string";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {},
    left: { width: "250px" },
    right: {
        flex: "1 1 0",
    },
    pagination: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",

        marginTop: "20px",
        paddingBottom: "20px",
    },
}));

function ListPage(props) {
    const classes = useStyles();

    const history = useHistory();
    const location = useLocation();

    const queryParams = useMemo(()=>{
        const params = queryString.parse(location.search);

        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 12,
            _sort: params._sort || "salePrice:ASC",
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true',
        }
    },[location.search]);

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    });

    //loading san pham ban đầu mac dinh hiện
    const [loading, setLoading] = useState(true);
    const [loading_filter, setLoading_filter] = useState(true);

    useEffect(() => {
        (async () => {
            //goi api nen dat trong try catch
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                //cap nhat danh sach san pham
                setProductList(data);
                //cap nhat trang
                setPagination(pagination);
                //console.log({ response });
                console.log({ data, pagination });
            } catch (error) {
                console.log("Failed to fetch product list:", error);
            }

            //dù cho thành công hay thất bại ta đều ẩn loading đi
            setLoading(false);
            setLoading_filter(false);
        })();
    }, [queryParams]);

    const handlePageChange = (e, page) => {

        const filters = {
            ...queryParams,
            _page: page,
        }

        history.push({
            pathname: history.location.pathname, //duong dan hien tai
            search: queryString.stringify(filters) //chuoi sau dấu ? tren URL. chuyen từ object sang chuoi
        })
    };

    const handleSortChange = (newSortValue) => {
        const filters = {
            ...queryParams,
            _sort: newSortValue,
        }

        history.push({
            pathname: history.location.pathname, //duong dan hien tai
            search: queryString.stringify(filters) //chuoi sau dấu ? tren URL. chuyen từ object sang chuoi
        })
    };

    const handleFilterChange = (newFilters) => {
        const filters = {
            ...queryParams,
            ...newFilters,
        }

        history.push({
            pathname: history.location.pathname, //duong dan hien tai
            search: queryString.stringify(filters) //chuoi sau dấu ? tren URL. chuyen từ object sang chuoi
        })
    };

    const setNewFilters = (newFilters) => {
        history.push({
            pathname: history.location.pathname, //duong dan hien tai
            search: queryString.stringify(newFilters) //chuoi sau dấu ? tren URL. chuyen từ object sang chuoi
        })
    };

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    {/* Left Column */}
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            {loading_filter ? (
                                <ProductFiltersSkeletonList length={6} />
                            ) : (
                                <ProductFilters filters={queryParams} onChange={handleFilterChange} />
                            )}
                        </Paper>
                    </Grid>
                    {/* Right Column */}
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />

                            <FilterViewer filters={queryParams} onChange={setNewFilters} />

                            {loading ? <ProductSkeletonList length={12} /> : <ProductList data={productList} />}
                            {/* count:tong so trang */}
                            <Box className={classes.pagination}>
                                <Pagination
                                    color={"primary"}
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                ></Pagination>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;
