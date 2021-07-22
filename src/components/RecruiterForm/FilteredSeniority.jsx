import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAditionalData } from '../../store/aditionalData/actions'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { getAllRecruiters } from './recruiterTableData'

function FilteredSeniority({
  setSelectedSenoirity,
  selectedArea,
  setRecruiters,
  recruiters,
  selectedSeniority,
}) {
  const dispatch = useDispatch()

  const { seniorities } = useSelector((state) => state.aditionalData)

  useEffect(() => {
    dispatch(getAllAditionalData())
  }, [dispatch])

  const handleInputChange = (e) => {
    const { value, name } = e.target
    setSelectedSenoirity(value)
    getAllRecruiters()
      .then((data) => {
        setRecruiters(data)
        recruiters = data
      })
      .then(() => {
        const filtered = recruiters.filter((recruiter) => {
          if (selectedArea) {
            return (
              recruiter.seniority1 === value &&
              recruiter.favoriteArea1 === selectedArea
            )
          } else {
            return recruiter.seniority1 === value
          }
        })
        setRecruiters(filtered)
      })
  }

  return (
    <>
      <FormControl variant='outlined' style={{ width: 160 }}>
        <InputLabel id='demo-simple-select-outlined-label'>
          Seniority
        </InputLabel>
        <Select
          name='seniority'
          label='Seniority'
          value={selectedSeniority}
          onChange={(e) => handleInputChange(e)}
        >
          {seniorities &&
            seniorities.map((area) => {
              const { name, id } = area
              return <MenuItem value={name}>{name}</MenuItem>
            })}
        </Select>
      </FormControl>
    </>
  )
}

export default FilteredSeniority
