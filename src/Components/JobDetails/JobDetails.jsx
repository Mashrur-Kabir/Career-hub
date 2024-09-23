import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {jobId} = useParams(); // will be string (id: '4')
    
    const job = jobs.find(job => job.id === parseInt(jobId));

    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(jobId);
        toast('Successfully applied for job');
    } 

    return (
        <div>
            <h2 className="my-24 text-center text-3xl font-bold">Job Details of: {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4 mb-10">
                <div className="border md:col-span-3"></div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full rounded-md">Apply Now</button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default JobDetails;