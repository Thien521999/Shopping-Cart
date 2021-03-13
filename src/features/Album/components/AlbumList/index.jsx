import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {//props là albumlist
    return (
        <ul className="album-list">
            {
                albumList.map(album => (
                    <li key={album.id}>
                        <Album album={album} />
                    </li>
                ))
            }
        </ul>
    );
}

export default AlbumList;