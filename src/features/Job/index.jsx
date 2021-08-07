import React, { useState } from 'react';
import JobList from './components/JobList';

JobFeatures.propTypes = {

};

function JobFeatures(props) {
    const initJobList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'code',
            status: 'completed',
        },
        {
            id: 3,
            title: 'sleep',
            status: 'new',
        },
    ]

    const [jobList, setJobList] = useState(initJobList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleJobClick = (job, idx) => {
        //console.log(job, idx);

        const newJobList = [...jobList];
        const newJob = {
            ...newJobList[idx],
            status: newJobList[idx].status === 'new' ? 'completed' : 'new',
        };
        newJobList[idx] = newJob;
        setJobList(newJobList)
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all')
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed')
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new')
    }

    const renderedStatus = jobList.filter(job => filteredStatus === 'all' || filteredStatus === job.status);

    return (
        <div>
            <h1>Job List</h1>
            <JobList jobList={renderedStatus} onJobClick={handleJobClick} />
            <div>
                <button onClick={handleShowAllClick}>Show all</button>
                <button onClick={handleShowCompletedClick}>Show completed</button>
                <button onClick={handleShowNewClick}>Show new</button>
            </div>
        </div>
    );
}

export default JobFeatures;