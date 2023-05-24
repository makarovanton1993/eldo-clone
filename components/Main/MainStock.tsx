import React from 'react'
import styled from 'styled-components';
import { Div, TypographyH3 } from '../../styles/components/component';
import SectionGoodProductdayLg from '../Section/SectionGoodProductDayLg';
import GoodProductdaySlider from '../sliders/GoodProductdaySlider';
import styles from './MainStock.module.scss';

const Wrap = styled(Div)`
  max-width: 220px;
  width: 100%;
  margin-left: auto;
  @media(max-width: 998px) {
    display: none;
  }
`
const Title = styled(TypographyH3)`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: #262626;
  margin-bottom: 22px;
`
const MainStock = () => {
  return (
    <Wrap>
      <Title>
        Товар для
      </Title>
        <GoodProductdaySlider/>
    </Wrap>
  )
}

export default MainStock