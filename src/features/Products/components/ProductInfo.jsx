import { Box, Typography } from '@material-ui/core';
import { formatPrice } from 'features/utils';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';

ProductInfo.propTypes = {
    product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
    const { enqueueSnackbar } = useSnackbar();

    //Lay thuoc tinh cua object product(xem trong api tra ve)
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;

    const handleChooseColor = () => {
        return enqueueSnackbar('Mình chưa làm chức năng này,hehe', { variant: 'info' });
    };

    return (
        <Box className="root">
            <Typography variant="h5" className="name__product">{name}</Typography>
            <Typography variant="body2" className="description__text">{shortDescription}</Typography>

            {/* box */}
            <Box className="box">
                <Box className="priceBox">
                    <Box className="salePrice" component="span">
                        {formatPrice(salePrice)}
                    </Box>

                    {/* Gia goc va phan tram chi show khi phan tram lon hon 0 */}
                    {
                        promotionPercent > 0 && (
                            <>
                                <Box className="originalPrice" component="span">
                                    {formatPrice(originalPrice)}
                                </Box>
                                <Box className="promotionPercent" component="span">
                                    {`-${promotionPercent}%`}
                                </Box>
                            </>
                        )
                    }
                </Box>
                <Box className="color">
                    <Box component="span" className="titleColor">Chọn màu: </Box>
                    <Box component="span" className="nameColor">Space Grey</Box>
                    <Box component="div" style={{ display: 'flex' }}>
                        <Box component="div" style={{ margin: '8px 12px 0 0' }}>
                            <button className="chooseColor" onClick={handleChooseColor}>
                                Silver
                                <img className="image" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/attribute.svg" alt="img"></img>
                            </button>
                        </Box>
                        <Box component="div" style={{ marginTop: '8px' }} >
                            <button onClick={handleChooseColor} className="chooseColor">Space Grey</button>
                        </Box>
                    </Box>
                </Box>
                <Box className="boxFreeship">
                    <Box component="div" className="titleFree"> Mã giảm giá </Box>
                    <Box component="div" className="boxFree">
                        <Box component="div" className="freeship" onClick={handleChooseColor}>Freeship</Box>
                        <img className="imgFree" src="https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png" alt="anh" />
                    </Box>
                </Box>
            </Box>
            
            {/* box mobile */}
            <Box className="box__mobile" >
                <Box className="priceBox__mobile">
                    <Box className="salePrice__mobile" component="span">
                        {formatPrice(salePrice)}
                    </Box>

                    {/* Gia goc va phan tram chi show khi phan tram lon hon 0 */}
                    {
                        promotionPercent > 0 && (
                            <>
                                <Box className="originalPrice__mobile" component="span">
                                    {formatPrice(originalPrice)}
                                </Box>
                                <Box className="promotionPercent__mobile" component="span">
                                    {`-${promotionPercent}%`}
                                </Box>
                            </>
                        )
                    }
                </Box>
            </Box>
        </Box >
    );
}

export default ProductInfo;