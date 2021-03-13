import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value,
            }
            onSubmit(formValue);
        }, 300)
    }

    return (
        <div>
            <hr />
            <h3>Search terms</h3>
            <form>
                <input type="text" value={searchTerm} onChange={handleSearchChange} />
            </form>
            
        </div>


    );
}

export default PostFilterForm;