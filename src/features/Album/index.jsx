import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';


AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name : 'VPOP Nhạc Mới Nỗi Loạn',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/e/b/9/3eb9223a485cbd7785859bfb5f82fc86.jpg'
        },
        {
            id: 2,
            name: 'Nhạc Việt Đầy Hứa Hẹn',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/7/f/8/e/7f8e0703a2d5d1c8fae81441d71ed56d.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Việt Hôm Nay Nghe Gì',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/f/3/3/1/f3317d07e9cb9cfd9a7f17d7dc36c96c.jpg'
        }
    ];

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;