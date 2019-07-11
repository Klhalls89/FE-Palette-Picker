/* eslint-disable no-console */
import {baseUrl} from './Config/BaseUrl';

export const fetchInfo = async (endpoint) => {
  const url = `${baseUrl}/api/v1/${endpoint}/`;
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

export const newFolder = async (folder) => {
  const url = `${baseUrl}/api/v1/palettes`;
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(folder)
  };
  const response = await fetch(url, options);
};

export const removePalete = async (id) => {
  const url = `${baseUrl}/api/v1/palettes/${id}`;
  const options = {
    method: 'DELETE'
  };
  const response = await fetch(url, options);
};

export const updateProject = async (update, id) => {
  const url = `${baseUrl}/api/v1/projects/${id}`;
  const options = {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(update)
  }; 
  const response = await fetch(url, options);
};