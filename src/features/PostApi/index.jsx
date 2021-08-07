import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import queryString from 'query-string';
import PostFilterForm from './components/PostFilterForm';

PostListFeature.propTypes = {

};

function PostListFeature(props) {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 11
    })

    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
        title_like: '',
    })

    const handlePageChange = (newPage) => {
        // console.log('New Page', newPage);
        setFilter({
            ...filter,
            _page: newPage,
        })
    }


    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramString = queryString.stringify(filter);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch post list', error.message);
            }
        }
        fetchPostList();
    }, [filter]);

    const handleFilterChange = (newFilters) => {
        // console.log('New Filters', newFilters);
        setFilter({
            ...filter,
            _page: 1,
            title_like: newFilters.search,
        })
    }


    return (
        <div>
            <PostFilterForm onSubmit={handleFilterChange} />
            <PostList posts={postList} />
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
    );
}

export default PostListFeature;