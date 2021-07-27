import React from 'react';
import styles from '../RecruiterForm/index.module.css'
import FilteredAreas from "./FilteredAreas";

export default function InputSearch({ setValues, handleChange}) {
    

  
     return (

        <div>
    <div className={styles.inputSearchContainer}>
      <form onChange={handleChange} onSubmit={(e)=>e.preventDefault()}>
        <input
        style={{ height: 55, border: '1px solid grey' }}
          className={styles.inputSearch}
          type='text'
          placeholder='Buscar por nombre...'
        />
        {/* ={
          { width: 160, marginRight: 155, marginTop: 50 }}> */}
        <div />
      {/*   <FilteredAreas  setValues={setValues} handleChange={handleChange}/> */}

      </form>
        </div>
      
      
      

    </div>
  )
}