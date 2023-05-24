import React from 'react'
import styled from 'styled-components';
import { Div, Span, TypographyH2 } from '../../styles/components/component';
import SliderProduct from '../sliders/SliderProductRecommed';
import styles from './SectionEldoSale.module.scss';

const WrapSectionEldoSale = styled(Div)`
  @media(max-width: 998px) {
    overflow: hidden;
    max-width: 1300px;
    width: 100%;
  }
`
const WrapSectionEldoSaleInner = styled(Div)`
  
`
const Title = styled(TypographyH2)`
`
const SupTitle = styled(Span)`
`
const SectionEldoSale = () => {
  return (
    <WrapSectionEldoSale>
        <WrapSectionEldoSaleInner>
            <Title>#ЭльдоSALE</Title>
            <SupTitle>Успей купить выгодно</SupTitle>
        </WrapSectionEldoSaleInner>
        <WrapSectionEldoSaleInner>
            <SliderProduct arrProducts={[0,1,2,3,4,5]}/>
        </WrapSectionEldoSaleInner>
    </WrapSectionEldoSale>
  )
}

export default SectionEldoSale