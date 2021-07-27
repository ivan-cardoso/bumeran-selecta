import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs, getJobsSearch } from "../../store/jobs/jobs";
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'


const FilteredArea = ({areaSelected, setAreaSelected, values, setValues, handleAreaChange}) => {
    const { areas } = useSelector((state) => state.aditionalData)
    const dispatch = useDispatch()

    
    
    return (
        <>
            <FormControl
                variant='outlined'
                className='optionControl'
                style={{ width: 150 }}
                >
                <InputLabel id='demo-simple-select-outlined-label'>
                Area Favorita
                </InputLabel>
                <Select
                name='areaId'
                label='Area Favorita'
                onChange={(e) => handleAreaChange(e)}
                >
                {areas &&
                    areas.map((area) => {
                    const { name, id } = area
                    return <MenuItem value={id}>{name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </>
    )
}

export default FilteredArea
