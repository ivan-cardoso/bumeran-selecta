import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import BtnGoBack from '../UX/Buttons/BtnGoBack'

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
        <div className={styles.container}>
          <div className={styles.picture}>
            <h2>
              Rating: <span>{rating}</span>
            </h2>
            <img src={img} alt={surname} />
            <div className={styles.bio}>
              <h2>
                <span>{bio}</span>
              </h2>
            </div>
          </div>
          <div className={styles.info}>
            <p>
              Nombre: <span>{name}</span>
            </p>
            <p>
              Apellido: <span>{surname}</span>
            </p>
            <p>
              Email: <span>{email}</span>
            </p>
            <p>
              Pais: <span>{country}</span>
            </p>
            <p>
              Provincia: <span>{state}</span>
            </p>
            <p>
              Area Favorita 1: <span>{favoriteArea1}</span>
            </p>
            <p>
              Area Favorita 2: <span>{favoriteArea2}</span>
            </p>
            <p>
              Area Favorita 3: <span>{favoriteArea3}</span>
            </p>
            <p>
              Seniority 1: <span>{seniority1}</span>
            </p>
            <p>
              Seniority 2: <span>{seniority2}</span>
            </p>
            <p>
              Seniority 3: <span>{seniority3}</span>
            </p>
          </div>
        </div>
      ) : (
        history.push('/recruiters')
      )}
        <BtnGoBack onClick={history.goBack} name='Go Back'></BtnGoBack>
      </div>
  )
}

export default SingleView
