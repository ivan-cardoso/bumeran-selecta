import React, { useEffect } from 'react'
import {useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {Button} from '@material-ui/core'
import {closeJob} from "../../store/jobs/jobs"
import style from "./index.module.css"
const JobSingleView = () => {
    
    const {singleJob} = useSelector((state)=> state)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleSetClose = (id) =>{
        dispatch(closeJob(id)).then(()=>{
            history.push(`/jobs/`);
        })
    }

    // useEffect(()=>{
    //     dispatch(singleJob())
    // }, [singleJob])
    
    return (
        <>
        {singleJob ? console.log(singleJob) : null}
        <div className={style.jobDetailsSection}>
            <div className={style.jobDetailsContainer} >
                <div className={style.singleCompanyImg} >
                    <img  className={style.singleImg} src={singleJob.company.img} alt="" />
                </div>
                <div className={style.singleJobDetails} >
                    <div className={style.singleJobTitleContainer} >
                        <h3 className={style.singleJobTitle}>{singleJob.title}</h3>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.9995C11.173 10.9995 10.5 10.3265 10.5 9.4995C10.5 8.6725 11.173 7.9995 12 7.9995C12.827 7.9995 13.5 8.6725 13.5 9.4995C13.5 10.3265 12.827 10.9995 12 10.9995ZM12 5.9995C10.07 5.9995 8.5 7.5695 8.5 9.4995C8.5 11.4295 10.07 12.9995 12 12.9995C13.93 12.9995 15.5 11.4295 15.5 9.4995C15.5 7.5695 13.93 5.9995 12 5.9995ZM12 19.646C10.325 18.062 6 13.615 6 9.922C6 6.657 8.691 4 12 4C15.309 4 18 6.657 18 9.922C18 13.615 13.675 18.062 12 19.646ZM12 2C7.589 2 4 5.553 4 9.922C4 15.397 11.049 21.501 11.349 21.758C11.537 21.919 11.768 22 12 22C12.232 22 12.463 21.919 12.651 21.758C12.951 21.501 20 15.397 20 9.922C20 5.553 16.411 2 12 2Z" fill="#222B45"/>
                        </svg>
                        <p>{singleJob.country}, {singleJob.state.name}</p>
                    </div>
                    <h3>{singleJob.company.name}</h3>
                    <h3>{singleJob.area.name}</h3>
                </div>
            </div>

            <div className={style.singleJobData} >
                <h3>Publicado: {singleJob.date.slice(0, 10)}</h3>
                <h3>{singleJob.country}, {singleJob.state.name}</h3>
                <h3>{singleJob.typeemloyed.name}</h3>
                <h3>{singleJob.modality.name}</h3>
                <h3>$ {singleJob.salary ? singleJob.salary : "No especificado"}</h3>
            </div>

            <div className={style.singleJobDescriptionContainer}>
                <div className={style.singleJobDescription} >
                    <h2>Descripción del empleo</h2>
                    <span className={style.singleJobDescriptionText} >{singleJob.description}</span>
                </div>
                <div className={style.singleJobCloseJob} >
                    <h3>{singleJob.title}</h3>
                    <h3>{singleJob.company.name}</h3>
                    <h3>{singleJob.country}</h3>
                    <h3>Estado: {singleJob.isOpen ? "Abierta" : "Cerrada"}</h3>
                    <Button color='primary' variant='contained' onClick={()=>handleSetClose(singleJob.id)}>
                        Cerrar búsqueda
                    </Button>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default JobSingleView
