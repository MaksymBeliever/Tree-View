import data from "../data.json";

const projectsData = [data];

export const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 100, projectsData);
    });
};
