export const fetchInfo = async (endpoint) => {
  const url = `http://localhost:3001/api/v1/${endpoint}/`
  const response = await fetch(url)
  if (response.status == 200) {
    const body = await response.json()
    return body
  }; 
};

