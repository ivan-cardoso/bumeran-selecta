import React, {useState} from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import jobsColums from "./JobsData"
import JobsTableBody from "./JobsTableBody"
import {useSelector} from "react-redux"



const JobsTable = ({jobs}) => {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      })
    const classes = useStyles()

    const [showTable, setShowTable] = useState(true)
    const [updateInfo, setUpdateInfo] = useState('')
  

    return (
        <>
            <TableContainer component={Paper}>
                <Table
                className={classes.table}
                size='small'
                aria-label='a dense table'
                >                
                <TableHead>
                    <TableRow>
                        {jobsColums.map((column, index) => {
                        return (
                            <TableCell key={index} align='right'>
                                {column}
                            </TableCell>
                        )
                        })}
                    </TableRow>
                </TableHead>
                

                <JobsTableBody setShowTable={setShowTable} setUpdateInfo={setUpdateInfo} />

                </Table>
            </TableContainer>
        </>
    )
}

export default JobsTable
