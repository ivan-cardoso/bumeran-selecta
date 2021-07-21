import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { TableBody, TableRow, TableCell} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility'
import {getAllJobs, deleteJob} from "../../store/jobs/jobs"

const JobsTableBody = ({ setShowTable, setUpdateInfo}) => {

    const {jobs} = useSelector((state)=> state)

    const dispatch = useDispatch()

    const handleDelete = (id) =>{
        dispatch(deleteJob(id))
        dispatch(getAllJobs())
    }
    
    return (
            <TableBody>
                {jobs.length ? jobs.map((job)=>{
                    return (
                    <TableRow >
                    {console.log(job)}
                    <TableCell align='right'>{job.title}</TableCell>
                    <TableCell align='right'>{job.company.name}</TableCell>
                    <TableCell align='right'>{job.area.name}</TableCell>
                    <TableCell align='right'>{job.seniority.name}</TableCell>
                    <TableCell align='right'>{job.typeemloyed.name}</TableCell>
                    {/* 
                    <TableCell align='right'>{job.modality.name}</TableCell>
                    <TableCell align='right'>{job.country}</TableCell>
                    <TableCell align='right'>{job.state.name}</TableCell>
                    <TableCell align='right'>{job.salary}</TableCell>
                    <TableCell align='right'>{job.description}</TableCell>  */}
                    <TableCell align='right'>
                        <button
                        // onClick={() => {
                        //     setShowTable(false)
                        //     setUpdateInfo(company)
                        // }}
                        >
                            <EditIcon />
                        </button>
                    </TableCell>

                    <TableCell align='right'>
                        <button onClick={() => handleDelete(job.id)} >
                            <DeleteIcon />
                        </button>
                    </TableCell>

                    <TableCell align='right'>
                        <button /* onClick={() => handleSingleView(recruiter)} */>
                            {<VisibilityIcon />}
                        </button>
                    </TableCell>
                </TableRow>
                )
                
            }) : <>Nada</>}

            </TableBody>
    )
}

export default JobsTableBody
