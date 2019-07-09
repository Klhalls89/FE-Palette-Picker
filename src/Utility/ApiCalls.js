import {baseUrl} from './Config/BaseUrl';

export const fetchProjects = async () => {
  const url = 'http://localhost:3001/api/v1/projects/';
  const response = await fetch(url);

  if (response.status == 200) {
    const body = await response.json();

    return body;
  } 
};

export const newProject = async (projectName) => {
  const url = `${baseUrl}/api/v1/projects`;
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(projectName)
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    return response.statusText;
  }
};