import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // a lesser effective way to load all data ("view all")
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
        .then((response) => response.json())
        .then((data) => setJobs(data))
    }, []);

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map((job, idx) => <Job key={idx} job={job}></Job> )
                }
            </div>
            <div className={`${dataLength === jobs.length ? 'hidden' : 'flex justify-center items-center my-8'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary rounded-lg font-bold text-white h-14 bg-gradient-to-r from-sky-500 to-indigo-500 hover:brightness-75 hover:shadow-lg transition-all duration-200 ease-in-out">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;