import PropTypes from 'prop-types';

const Job = ({job}) => {

    const {logo} = job;

    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,  // Assuming job is an object with logo property
}

export default Job;