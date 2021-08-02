import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import useStyles from './FilteredStyle'


const FilteredArea = ({
  values,
  selectedValue,
  title,
  name,
  handleAreaChange,
}) => {
  const classes = useStyles()
  
  return (
    <>
      <FormControl
        variant='outlined'
        className='optionControl'
        style={{ width: 150 , margin : "0 6px"}}
      >
        <InputLabel id='demo-simple-select-outlined-label'>{title}</InputLabel>

        <Select
          className={classes.select}
          name={name}
          value={selectedValue}
          label={title}
          onChange={(e) => handleAreaChange(e)}
          style={{ height: '100%'}}
        >
          {values &&
            values.map((item) => {
              const { name } = item
              return (
                <MenuItem key={name} value={name} >
                  {name}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>
    </>
  )
}

export default FilteredArea
