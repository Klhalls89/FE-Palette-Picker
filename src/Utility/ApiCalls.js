export const fetchProjects = async () => {
  const url = 'http://localhost:3001/api/v1/projects/'
  const response = await fetch(url)
  if (response.status == 200) {
    const body = await response.json()
    return body
  }; 
};