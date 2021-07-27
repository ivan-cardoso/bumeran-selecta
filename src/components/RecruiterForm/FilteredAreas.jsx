import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAditionalData } from '../../store/aditionalData/actions'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { getAllRecruiters } from './recruiterTableData'

function FilteredArea({
  setSelectedArea,
  selectedSeniority,
  setRecruiters,
  recruiters,
  selectedArea,
}) {
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
        const filtered = recruiters.filter((recruiter) => {
          if (selectedSeniority) {
            return (
              recruiter.favoriteArea1 === value &&
              recruiter.seniority1 === selectedSeniority
            )
          } else {
            return recruiter.favoriteArea1 === value
          }
        })
        setRecruiters(filtered)
      })
  }


  return (


    
    <>
      <FormControl
        variant='outlined'
        className='optionControl'
        style={
          { width: 160, marginLeft: 60, marginTop: 20,   }}
      >
        <InputLabel id='demo-simple-select-outlined-label'>
          Area Favorita
        </InputLabel>
        <Select
          name='favoriteArea'
          label='Area Favorita'
          value={selectedArea}
          onChange={(e) => handleInputChange(e)}
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
