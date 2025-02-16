let projectId = "66e2db81cb3d9f4f044cfc54"; // Default Project ID (change dynamically if needed)

export const getProjectId = () => projectId;

export const setProjectId = (newId) => {
    if (newId) {
        projectId = newId;
    }
};
