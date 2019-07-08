
export const fetchProjects = () => {
  const url = 'http://localhost:3001/api/v1/projects/';

  return fetch(url)
    .then(results => results.json())   
    .catch(error => console.log(error));
};

export const fetchPalettes = () => {
  const url = 'http://localhost:3001/api/v1/pa/';

  console.log('fetchPalettes was called');
};

