import React from 'react'
import Select from 'react-select';
import styles from './HeaderSelect.module.scss';

const selectOptions = [{label:'Москва',value:'Москва'},{label:'Питер',value:'Питер'},{label:'Тула',value:'Тула'},{label:'Москва',value:'Москва'},{label:'Питер',value:'Питер'},{label:'Тула',value:'Тула'}] 

const HeaderSelect = () => {

const colorStyles = {
  control:(styles:any) => ({...styles,backgroundColor:'transparent',width:'200px',border:'none',outline:'none'}),
  multiValue:(styles:any) => ({...styles,backgroundColor:'red',color:'yellow'}),
  multiValueLabel:(styles:any) => ({...styles,backgroundColor:'green',color:'red'}),
  option:(styles:any) => ({...styles,width:'100%',position:'relative',zIndex:111111,backgroundColor:'yellow'}),
  // selectContainer:(styles:any) => ({...styles,width:'200px',position:'relative',zIndex:11111,backgroundColor:'red'}),
  menuPortal: (styles:any) => ({ ...styles, zIndex: 9999 }),
  
}



  return (
    <Select
        menuPosition={'fixed'} 
        className = {`basic-single ${styles.select}`}
        classNamePrefix="select"
        isClearable
        isSearchable={false}
        name="color"
        isMulti
        options={selectOptions}
        styles={colorStyles}
      />
  )
}

export default HeaderSelect