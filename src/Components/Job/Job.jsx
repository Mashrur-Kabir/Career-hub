import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Job = ({job}) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-10">
            <figure>
                <img
                className='w-32'
                src={logo}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className='text-[#757575] font-semibold'>{company_name}</p>
                <div>
                    <button className='px-5 py-2 text-[#7E90FE] font-bold border border-[#7E90FE] rounded-md mr-4 hover:bg-[#7E90FE] hover:text-white'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 text-[#7E90FE] font-bold border border-[#7E90FE] rounded-md mr-4 hover:bg-[#7E90FE] hover:text-white'>{job_type}</button>
                </div>
                <div className='mt-4 flex items-center gap-6'>
                    <h2 className='flex items-center'> <SlLocationPin className='text-lg mr-1.5'></SlLocationPin> {location} </h2>
                    <h2 className='flex items-center'> <HiOutlineCurrencyDollar className='text-xl mr-1.5'></HiOutlineCurrencyDollar> {salary} </h2>
                </div>
                <div className="card-actions justify-start mt-6">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary rounded-lg font-bold text-white h-14 bg-gradient-to-r from-sky-500 to-indigo-500 hover:brightness-75 hover:shadow-lg transition-all duration-200 ease-in-out">
                        View Details </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,  // Assuming job is an object with logo property
}

export default Job;