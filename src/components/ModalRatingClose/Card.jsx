import React, { useState } from "react";
import BTN from "../UX/Buttons/BtnGoBack";
import RatingStar from "./RatingStar";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { getSingleJob } from "../../store/jobs/getSingleJob";
import s from "./index.module.css";

const Card = ({ setOpen, singleJob }) => {
  const { id, name, surname, img } = singleJob.recruiter;
  const [rating, setRating] = useState(0);
  const [valueInput, setValueInput] = useState(0);
  const dispatch = useDispatch();

  const handleConfirmRating = () => {
    if (valueInput < 0) {
      message.warning("Los candidatos no pueden ser menor a 0");
    } else {
      axios
        .put(`/api/jobs/ratingrecruiter`, {
          recruiterId: id,
          rating: rating,
          candidates: valueInput,
          jobId: singleJob.id,
        })
        .then((res) => res.data)
        .then((data) => {
          const { job, recruiter } = data;
          dispatch(getSingleJob({ ...singleJob, ...job, recruiter }));
          setOpen(false);
          message.success("Busqueda cerrada");
        });
    }
  };

  const onChangeInput = (e) => {
    let { value } = e.target;
    setValueInput(value);
  };
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
<<<<<<< HEAD
                <input min="0"  pattern="^[0+]" required className={s.candidatesInput} type="number" onChange={onChangeInput} defaultValue={0} />
=======
                <input
                  min="0"
                  required
                  className={s.candidatesInput}
                  type="number"
                  onChange={onChangeInput}
                  defaultValue={0}
                />
>>>>>>> ce95539fab3226e5396219225831d64cd8d1a616
              </div>
            </div>
          </div>
        </div>

        <div className={s.btnContainer}>
          <div className={s.singleBtn}>
            <BTN name="Confirmar" onClick={() => handleConfirmRating()} />
          </div>
          <div className={s.singleBtn}>
            <BTN name="Cancelar" onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
