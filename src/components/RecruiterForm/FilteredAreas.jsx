import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAditionalData } from '../../store/aditionalData/actions'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { getAllRecruiters } from './recruiterTableData'

function FilteredArea({ setSelectedArea, setRecruiters, recruiters }) {
  const dispatch = useDispatch()

  const { areas } = useSelector((state) => state.aditionalData)

  useEffect(() => {
    dispatch(getAllAditionalData())
  }, [dispatch])

  const handleInputChange = (e) => {
    const { value, name } = e.target
    setSelectedArea(value)
    getAllRecruiters()
      .then((data) => {
        setRecruiters(data)
        recruiters = data
      })
      .then(() => {
        const filtered = recruiters.filter(
          (recruiter) => recruiter.favoriteArea1 === value
        )
        setRecruiters(filtered)
      })
  }

  return (
    <>
      <FormControl variant='outlined' style={{ width: 160 }}>
        <InputLabel id='demo-simple-select-outlined-label'>
          Favourite Area 1
        </InputLabel>
        <Select
          name='favoriteArea'
          label='Favourite Area'
          onChange={(e) => handleInputChange(e)}
        >
          {areas &&
            areas.map((area) => {
              const { name, id } = area
              return <MenuItem value={name}>{name}</MenuItem>
            })}
        </Select>
      </FormControl>
    </>
  )
}

export default FilteredArea
