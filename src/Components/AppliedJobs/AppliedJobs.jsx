import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/localStorage";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]); // showcasing saved jobs from localStorage

    const [displayJobs, setDisplayJobs] = useState([]); // for filter

    const handleFilter = filter => {
        if (filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJob);
        }
        else if (filter === 'onsite'){
            const onsiteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJob);
        }
    }

     useEffect(() => {
        const storedJobIds = getStoredApplication();
        if (jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id.toString())); //
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
     }, [jobs])

    return (
        <div>
            <h2 className="my-20 text-center text-3xl font-bold">Jobs I applied: {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="btn m-1 rounded-md">Filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <ul>
                {
                    displayJobs.map((job, index) => (
                        <li key={index} className="py-4">
                            <h3 className="text-lg font-semibold">{job.job_title}: {job.remote_or_onsite}</h3>
                            <p>{job.company_name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

/* From your getStoredApplication function, the job IDs retrieved from localStorage are stored as strings because localStorage only stores string data. However, in your jobs array, the id values are numbers. hence toString method */

export default AppliedJobs;