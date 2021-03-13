import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

JobList.propTypes = {
    jobList: PropTypes.array,
    onJobClick: PropTypes.func,
};

JobList.defaultProp = {
    jobList: [],
    onJobClick: null,
}



function JobList(props) {
    const { jobList, onJobClick } = props;
    const handleJobList = (job, idx) => {
        if (!onJobClick) return;
        onJobClick(job, idx);
    }
    return (
        <ul className="job-list">
            {
                jobList.map((job, idx) => (
                    <li
                        key={job.id}
                        className={
                            classnames(
                                {
                                    'job-item': true,
                                    completed: job.status === 'completed'
                                })
                        }
                        onClick={() => handleJobList(job, idx)}
                    >
                        {job.title}
                    </li>
                ))
            }
        </ul>
    );
}

export default JobList;