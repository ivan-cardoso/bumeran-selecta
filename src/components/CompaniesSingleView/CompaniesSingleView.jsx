import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "../RecruiterSingleView/index.module.css";
import BtnGoBack from "../UX/Buttons/BtnGoBack";
import BtnCreateNewJobs from "../UX/Buttons/BtnCreateNewJobs";

function SingleViewCompany() {
  const history = useHistory();
  const { companies } = useSelector((state) => state);
  const { name, email, state, img, contactName, description, area } = companies;

  return (
    <div>
      {companies.id ? (
        <div className={styles.container}>
          <div className={styles.picture}>
            <h1>{name}</h1>
            <img src={img} alt={name} />
            <div className={styles.bio}>
              <h2>
                <span>{description}</span>
              </h2>
            </div>
          </div>
          <div className={styles.info}>
            <p>
              Email: <span>{email}</span>
            </p>
            <p>
              Nombre de contacto: <span>{contactName}</span>
            </p>
            <p>
              Provincia: <span>{state.name}</span>
            </p>
            <p>
              Area: <span>{area.name}</span>
            </p>
            <BtnCreateNewJobs
              onClick={history.goBack}
              name="Crear un nuevo anuncio"
            ></BtnCreateNewJobs>
          </div>
        </div>
      ) : (
        history.push("/companies")
      )}
      <BtnGoBack onClick={history.goBack} name="Go Back"></BtnGoBack>
    </div>
  );
}

export default SingleViewCompany;
