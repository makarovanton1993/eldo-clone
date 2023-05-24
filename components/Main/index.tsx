import React from 'react'
import MainCategory from './MainCategories'
// import styles from './Main.module.scss';
import MainContent from './MainContent';
import MainStock from './MainStock';
import { Div } from '../../styles/components/component';
import styled from 'styled-components';

const Wrap = styled(Div)`
  margin-bottom: 20px;
  @media(max-width: 568px) {
    justify-content: flex-start;
    overflow: hidden;
  }
`

const Main = () => {
  return (
    <Wrap>
      <MainCategory />
      <MainContent />
    </Wrap>

  )
}

export default Main