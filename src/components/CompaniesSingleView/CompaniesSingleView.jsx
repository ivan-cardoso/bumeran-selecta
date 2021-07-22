import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "../RecruiterSingleView/index.module.css";
import BtnGoBack from "../UX/Buttons/BtnGoBack";
import AddJob from '../Jobs/AddJob'
import { getAllJobsByCompany } from "../../store/companies/jobsCompany";

function SingleViewCompany() {
  
  const history = useHistory();
  const { singleCompany } = useSelector((state) => state);
  const { name, email, state, img, contactName, description, area } =
    singleCompany;

  const dispatch= useDispatch()
  
  React.useEffect(()=>{
    dispatch(getAllJobsByCompany());
}, [dispatch])

  return (
    <div>
      {singleCompany.id ? (
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
            <AddJob></AddJob>
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
