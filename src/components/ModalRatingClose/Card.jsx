import React, { useState } from 'react'
import BTN from '../UX/Buttons/BtnGoBack'
import RatingStar from './RatingStar'
import axios from 'axios'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { getSingleJob } from '../../store/jobs/getSingleJob'
import s from './index.module.css'
import { TextField } from '@material-ui/core'

const Card = ({ setOpen, singleJob }) => {
  const { id, name, surname, img, email } = singleJob.recruiter
  const [rating, setRating] = useState(2)
  const [valueInput, setValueInput] = useState({
    candidates: 0,
    recruiterComment: '',
  })
  const dispatch = useDispatch()

  const handleConfirmRating = () => {
    if (valueInput < 0) {
      message.warning('Los candidatos no pueden ser menor a 0')
    } else {
      axios
        .put(`/api/jobs/ratingrecruiter`, {
          recruiterId: id,
          rating: rating,
          candidates: valueInput.candidates || 0,
          jobId: singleJob.id,
          recruiterComment: valueInput.recruiterComment,
          email: email,
          name: name,
          surname: surname,
          title: singleJob.title,
          company: singleJob.company.name,
        })
        .then((res) => res.data)
        .then((data) => {
          const { job, recruiter } = data
          dispatch(getSingleJob({ ...singleJob, ...job, recruiter }))
          setOpen(false)
          message.success('Busqueda cerrada')
        })
    }
  }

  const onChangeInput = (e) => {
    const { value, name } = e.target
    setValueInput({ ...valueInput, [name]: value })
  }
  return (
    <>
      <div className={s.cardSection}>
        <div className={s.cardContainer}>
          <h2 className={s.recruiterName}>
            {name} {surname}
          </h2>
          <div className={s.topContainer}>
            <img className={s.cardImg} src={img} alt={name} />
            <div className={s.detailsContainer}>
              <h3>Califique de 1 al 5 el desempeño del reclutador</h3>
              <RatingStar setRating={setRating} />
              <div className={s.candidatesContainer}>
                <h3>Ingrese cuantos candidatos brindó el reclutador</h3>
                <input
                  min='0'
                  required
                  className={s.candidatesInput}
                  type='number'
                  onChange={onChangeInput}
                  // defaultValue={0}
                  name='candidates'
                  value={valueInput.candidates}
                />
              </div>
            </div>
          </div>

          <div className={s.commentContainer}>
            <h3>Comentario sobre el reclutador (opcional)</h3>

            <TextField
              label='Comentario'
              multiline
              rows={3}
              variant='outlined'
              className={s.commentInput}
              autoComplete='disabled'
              onChange={onChangeInput}
              // defaultValue={''}
              name='recruiterComment'
              value={valueInput.recruiterComment}
            />
          </div>
        </div>

        <div className={s.btnContainer}>
          <div className={s.singleBtn}>
            <BTN name='Confirmar' onClick={() => handleConfirmRating()} />
          </div>
          <div className={s.singleBtn}>
            <BTN name='Cancelar' onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
