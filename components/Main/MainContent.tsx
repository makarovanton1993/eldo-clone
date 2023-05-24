import React from 'react'
import styled from 'styled-components';
import { Div } from '../../styles/components/component';
import Slider from '../sliders/Slider';
import MainProductDay from './MainProductDay';
import MainRecommed from './MainRecommend';
import MainStock from './MainStock';
import styles from './MainContent.module.scss';


const Wrap = styled(Div)`
  width: 920px;
  margin-left: 250px;
  @media(max-width: 1242px) {
    margin-left: 0;
  }
  @media(max-width: 998px) {
    width: 100%;
    padding: 20px 0;
  }
  @media(max-width: 760px) {
    padding: 0;
  }
`
const WrapInner = styled(Div)`
  display: flex;
  @media(max-width: 998px) {
    margin-bottom: 20px;
  }
`
const WrapInnerTop = styled(Div)`
`
const WrapSlider = styled(Div)`
`
const Title = styled(Div)`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: #262626;
  margin-bottom: 22px;
  @media(max-width: 998px) {
    display: none;
  }
`
const MainContent = () => {
  return (
    <Wrap>
        <WrapInner>
          <WrapInnerTop>
            <Title>
                Новые Акции
            </Title>
            <WrapSlider>
              <Slider />
            </WrapSlider>
          </WrapInnerTop>
          <MainStock/>
        </WrapInner>
        <MainProductDay/>
        <MainRecommed/>
    </Wrap>
  )
}

export default MainContent