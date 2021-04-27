import { Box, Container, Grid, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import categoryApi from "api/categoryApi";
import productApi from "api/productApi";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import FilterViewer from "../components/FilterViewer";
import ProductFilterMobile from "../components/ProductFilterMobile";
import ProductFilters from "../components/ProductFilters";
import ProductFiltersSkeletonList from "../components/ProductFiltersSkeletonList";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import './css/index.css';
import './css/responsive.css';


ListPage.propTypes = {};

// const useStyles = makeStyles((theme) => ({
//     // pagination: {
//     //     display: "flex",
//     //     flexFlow: "row nowrap",
//     //     justifyContent: "center",

//     //     marginTop: "20px",
//     //     paddingBottom: "20px",
//     // },
// }));

function ListPage(props) {
    //const classes = useStyles();

    const history = useHistory();
    const location = useLocation();

    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search); //cac gia tri tren URL

        return {
            ...params, //Moi khi load trang ,ta se lấy các giá tri tren URL bind vào làm default value cho filter
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 12,
            _sort: params._sort || "salePrice:ASC",
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true',
        }
    }, [location.search]);

    //console.log(queryParams);

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    });

    //loading san pham ban đầu mac dinh hiện
    const [loading, setLoading] = useState(true);
    const [loading_filter, setLoading_filter] = useState(true);

    //Danh mục đã chọn
    const [categoryPicked, setCategoryPicked] = useState();

    useEffect(() => {
        (async () => {
            //goi api nen dat trong try catch
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                //console.log({ data, pagination });
                //cap nhat danh sach san pham
                setProductList(data);
                //cap nhat trang
                setPagination(pagination);
                //console.log({ response });
                //console.log({ data, pagination });
            } catch (error) {
                console.log("Failed to fetch product list:", error);
            }

            //dù cho thành công hay thất bại ta đều ẩn loading đi
            setLoading(false);
            setLoading_filter(false);
        })();
    }, [queryParams]);

    useEffect(() => {
        (async () => {
            try {
                if (!queryParams['category.id']) {
                    return;
                } else {
                    const list = await categoryApi.get(Number.parseInt(queryParams['category.id']));
                    //console.log(list);
                    setCategoryPicked(list);
                }
            } catch (error) {
                console.log('Failed to fetch category list!', error);
            }
        })();
    }, [queryParams]);

    const handlePageChange = (e, page) => {
        const filters = {
            ...queryParams,
            _page: page,
        }

        //update query params(noi cach khac là push tới query params moi)
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
                    <Grid item className="left hide-on-mobile-tablet">
                        <Paper elevation={0}>
                            {loading_filter ? (
                                <ProductFiltersSkeletonList length={6} />
                            ) : (
                                <ProductFilters filters={queryParams} onChange={handleFilterChange} />
                            )}
                        </Paper>
                    </Grid>
                    {/* Right Column */}
                    <Grid item className="right">
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />

                            <FilterViewer
                                filters={queryParams}
                                onChange={setNewFilters}
                                categoryPicked={categoryPicked}
                            />

                            <ProductFilterMobile filters={queryParams} onChange={handleFilterChange} />

                            {loading ? <ProductSkeletonList length={12} /> : <ProductList data={productList} />}
                            {/* count:tong so trang */}
                            <Box className="pagination">
                                <Pagination
                                    color={"primary"}
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                    className="pagination__item"
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
