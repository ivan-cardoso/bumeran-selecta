import axios from 'axios'

export const recruitersColums = [
  "",
  'Nombre',
  'Apellido',
  'email',
  'Pais',
  'Provincia',
  'Rating',
  'Area Favorita',
  'Seniority',
]

export const getAllRecruiters = () => {
  return axios.get('/api/recruiters').then((res) => res.data)
}
