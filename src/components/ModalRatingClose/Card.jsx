import React, { useState } from "react";
import BTN from "../UX/Buttons/BtnGoBack";
import RatingStar from "./RatingStar";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { getSingleJob } from "../../store/jobs/getSingleJob";

const Card = ({ setOpen, singleJob }) => {
  const { id, name, surname, img } = singleJob.recruiter;
  const [rating, setRating] = useState(0);
  const [valueInput, setValueInput] = useState(0);
  const dispatch = useDispatch();

  const handleConfirmRating = () => {
    axios
      .put(`/api/jobs/ratingrecruiter`, {
        recruiterId: id,
        rating: rating,
        candidates: valueInput,
        jobId: singleJob.id,
      })
      .then((res) => res.data)
      .then((jobModificated) => {
        dispatch(getSingleJob({ ...singleJob, ...jobModificated }));
        setOpen(false);
        message.success("Busqueda cerrada");
      });
  };

  const onChangeInput = (e) => {
    let { value } = e.target;
    setValueInput(value);
  };
  return (
    <>
      <h1>
        {name} {surname}
      </h1>
      <img src={img} alt={name} />
      <RatingStar setRating={setRating} />
      <h3>Ingrese cuantos candidatos brindó el reclutador</h3>
      <input type="number" onChange={onChangeInput} defaultValue={0} />
      <BTN name="Confirmar" onClick={() => handleConfirmRating()} />
      <BTN name="Cancelar" onClick={() => setOpen(false)} />
    </>
  );
};

export default Card;
