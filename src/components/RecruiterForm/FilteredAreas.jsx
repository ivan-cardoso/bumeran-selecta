import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAditionalData } from '../../store/aditionalData/actions'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

function FilteredArea({ setSelectedArea, setRecruiters, recruiters }) {
  const [recruitersBackup, setrecruitersBackup] = useState((data) => recruiters)
  const dispatch = useDispatch()

  const { areas } = useSelector((state) => state.aditionalData)

  useEffect(() => {
    dispatch(getAllAditionalData())
  }, [])

  const handleInputChange = (e) => {
    setRecruiters(recruiters)
    console.log('recruitersBackup')

    console.log(recruitersBackup)
    const { value, name } = e.target
    setSelectedArea(value)

    const filtered = recruitersBackup.filter(
      (recruiter) => recruiter.favoriteArea1 === value
    )

    console.log(filtered)
    setRecruiters(filtered)
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
