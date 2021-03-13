import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import productApi from "api/productApi";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: { width: "250px" },
  right: {
    flex: "1 1 0",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
}));

function ListPage(props) {
  const classes = useStyles();

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 10,
    page: 1,
  });
  //loading ban đầu mac dinh hiện
  const [loading, setLoading] = useState(true);
  //Những giá trị filter mặc định
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
  });

  useEffect(() => {
    (async () => {
      //goi api nen dat trong try catch
      try {
        const { data, pagination } = await productApi.getAll(filters);
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
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? <ProductSkeletonList length={12} /> : <ProductList data={productList} />}
              {/* count:tong so trang */}
              <Pagination
                className={classes.center}
                color={"primary"}
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                onChange={handlePageChange}
              ></Pagination>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
