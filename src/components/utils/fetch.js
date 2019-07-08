
export const fetchProjects = async () => {
  const url = 'http://localhost:3001/api/v1/projects/'
  const response = await fetch(url)
  if (response.status == 200) {
    return response.body
  } 
}

// export const fetchPalettes = () => {
//   const url = 'http://localhost:3001/api/v1/pa/'
//   console.log('fetchPalettes was called')
// }

 