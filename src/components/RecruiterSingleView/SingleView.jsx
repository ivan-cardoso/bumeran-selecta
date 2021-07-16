import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function SingleView() {
  const history = useHistory()
  const { recruiter } = useSelector((state) => state)
  const {
    name,
    surname,
    email,
    country,
    state,
    bio,
    img,
    rating,
    favoriteArea1,
    favoriteArea2,
    favoriteArea3,
    seniority1,
    seniority2,
    seniority3,
  } = recruiter


  return (
    
    <div>
      {recruiter.id ? (
        <div>
          <img src={img} alt={surname} />
          <p>Nombre: {name}</p>
          <p>Apellido: {surname}</p>
          <p>email: {email}</p>
          <p>Pais: {country}</p>
          <p>Provincia: {state}</p>
          <p>bio: {bio}</p>
          <p>Rating: {rating}</p>
          <p>Area Favorita 1: {favoriteArea1}</p>
          <p>Area Favorita 2:{favoriteArea2}</p>
          <p>Area Favorita 3:{favoriteArea3}</p>
          <p>Seniority 1: {seniority1}</p>
          <p>Seniority 2: {seniority2}</p>
          <p>Seniority 3: {seniority3}</p>
        </div>
      ) : (
        history.push('/recruiters')
      )}

      <button onClick={() => history.goBack()}>go Back</button>
    </div>
  )
}

export default SingleView
