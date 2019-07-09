export const fetchInfo = async (url) => {
  const response = await fetch(url)
  if (response.status == 200) {
    const body = await response.json()
    return body
  }; 
};

