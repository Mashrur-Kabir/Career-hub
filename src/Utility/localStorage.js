const getStoredApplication = () => {
    const storageApplication = localStorage.getItem("job-applications");
    if (storageApplication) {
        return JSON.parse(storageApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storedApplications = getStoredApplication();
    const exists = storedApplications.find(jobId => jobId === id); // both strings
    if (!exists) {
        storedApplications.push(id);
        localStorage.setItem("job-applications", JSON.stringify(storedApplications));
    }
}

export { getStoredApplication ,saveJobApplication }