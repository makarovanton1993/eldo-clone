import React from 'react'
import styled from 'styled-components'
import { Div } from '../../styles/components/component'
import CategoryLg from '../Category/CategoryLg'
import MainStock from './MainStock'
// import styles from './MainProductDay.module.scss'

const Wrap = styled(Div)`
  display: none;
  @media(max-width: 998px) {
    display: block;
    margin-bottom: 10px;
  }
`

const MainProductDay = () => {
  return (
   <Wrap>
     <CategoryLg/>
     <MainStock/>
   </Wrap>
  )
}

export default MainProductDay