import axios from 'axios'

const companiesColums = [
  "",
  'Nombre',
  'Email',
  'Provincia',
  'Area',
]

export const getAllCompanies = () => {
  return axios.get('/api/companies').then((res) => res.data)
}

export default companiesColums
