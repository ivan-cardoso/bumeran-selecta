import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./index.module.css";
import BTN from "../UX/Buttons/BtnGoBack";
import SimpleRating from "../RecruiterSingleView/RatingView";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { SiWheniwork } from "react-icons/si";
import { MdPersonPin } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { message } from "antd";

function Card({ selectedJob, setOpenRecruiter }) {
  const { id, area, seniority } = selectedJob;
  const [recruiters, setRecruiters] = useState([]);
  const [activeSelection, setActiveSelection] = useState({});

  useEffect(() => {
    axios
      .post("/api/jobs/findrecomendation", selectedJob)
      .then((res) => res.data)
      .then((recruitersWithPoints) => setRecruiters(recruitersWithPoints));
  }, []);

  const areaMatch = (recruiter) => {
    if (recruiter.favoriteArea1 === area)
      return <span> Area 1: {recruiter.favoriteArea1} </span>;

    if (recruiter.favoriteArea2 === area)
      return <span> Area 2: {recruiter.favoriteArea2} </span>;

    if (recruiter.favoriteArea3 === area)
      return <span> Area 3: {recruiter.favoriteArea3} </span>;
    else return <span> No hay match de Area Favorita </span>;
  };
  const seniorityMatch = (recruiter) => {
    if (recruiter.seniority1 === seniority)
      return <span> Seniority 1: {recruiter.seniority1} </span>;

    if (recruiter.seniority2 === seniority)
      return <span> Seniority 2: {recruiter.seniority2} </span>;

    if (recruiter.seniority3 === seniority)
      return <span> Seniority 3: {recruiter.seniority3} </span>;
    else return <span> No hay match de Seniority </span>;
  };

  const handleClick = (index, recruiter) => {
    for (let i = 0; i < 3; i++) {
      const element = document.getElementById(`${i}`);
      element.classList = s.cardcontainer;
    }

    //add selected
    const element = document.getElementById(`${index}`);
    element.classList.add(s.active);
    setActiveSelection({ recruiterId: recruiter.id, jobId: id });
  };

  const handleClose = () => {
    setOpenRecruiter(false);
  };

  const handleConfirm = () => {
    axios
      .post("/api/jobs/assignrecruiter", activeSelection)
      .then(() => {
        setOpenRecruiter(false)
      message.success("Recruta asignado correctamente");
      });
  };

  return (
    <>
      <div className={s.divcontainer}>
        {recruiters.map((selectedRecruiter, index) => {
          const { porcentajeMatch, totalPoints, recruiter } = selectedRecruiter;

          return (
            <div
              className={s.cardcontainer}
              id={index}
              key={recruiter.id}
              onClick={() => handleClick(index, recruiter)}
            >
              <h1 className={s.maintitle}>
                {recruiter.name} {recruiter.surname}
              </h1>
              {/* <h1>{totalPoints}</h1> */}
              <div className={s.top}>
                <img
                  src={recruiter.img}
                  alt={recruiter.name}
                  className={s.topimage}
                ></img>
                <div className={s.topright}>
                  <h1>Rating: {<SimpleRating rating={recruiter.rating} />}</h1>
                  <h1>Match: {porcentajeMatch}%</h1>
                </div>
              </div>
              <h1>
                <BsSearch />
                {"   "}
                {!recruiter.activeSearch
                  ? "No tiene busq. activas..."
                  : recruiter.activeSearch === 1
                  ? `${recruiter.activeSearch} busqueda activa`
                  : `${recruiter.activeSearch} busquedas activas`}
              </h1>
              <h1>
                <GoLocation /> {"   "} {recruiter.country} - {recruiter.state}
              </h1>
              <h1>
                <AiOutlineMail /> {recruiter.email}
              </h1>
              <h1>
                <SiWheniwork /> {"   "} {areaMatch(recruiter)}
              </h1>
              <h1>
                <MdPersonPin /> {"   "}
                {seniorityMatch(recruiter)}
              </h1>
            </div>
          );
        })}
      </div>
      <div className={s.btncontainer}>
        <BTN
          style={{ width: "200px", height: "50px", fontSize: "20px" }}
          name="Confirmar"
          onClick={handleConfirm}
        ></BTN>
        <BTN
          style={{ width: "200px", height: "50px", fontSize: "20px" }}
          name="Cancelar"
          onClick={handleClose}
        ></BTN>
      </div>
    </>
  );
}

export default Card;
