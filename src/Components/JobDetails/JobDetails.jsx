import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {jobId} = useParams(); // will be string (id: '4')
    
    const job = jobs.find(job => job.id === parseInt(jobId));

    console.log(job);

    return (
        <div>
            <h2 className="my-24 text-center text-3xl font-bold">Job Details of: {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4 mb-10">
                <div className="border md:col-span-3"></div>
                <div className="border"></div>
            </div>
        </div>
    );
};

export default JobDetails;