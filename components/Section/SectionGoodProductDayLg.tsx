import React from 'react'
import styled from 'styled-components'
import { Div, Li, Ul } from '../../styles/components/component'
import CardProductDiscount from '../Card/CardProductDiscount'
import styles from './SectionGoodProductDayLg.module.scss'

const WrapSectionGoodProductDayLg = styled(Div)`
  display: none;
  @media(max-width: 998px) {
    display: block;
  }
`
const WrapSectionGoodProductDayLgList = styled(Ul)`
  display: flex;
  align-items:center;
  overflow: scroll;
  width: 1000px;
`
const WrapSectionGoodProductDayLgItem = styled(Li)`
`
const SectionGoodProductDayLg = () => {
  return (
    <WrapSectionGoodProductDayLg>
        <WrapSectionGoodProductDayLgList>
          <WrapSectionGoodProductDayLgItem>
            <CardProductDiscount/>
          </WrapSectionGoodProductDayLgItem>
          <WrapSectionGoodProductDayLgItem>
            <CardProductDiscount/>
          </WrapSectionGoodProductDayLgItem>
          <WrapSectionGoodProductDayLgItem>
            <CardProductDiscount/>
          </WrapSectionGoodProductDayLgItem>
          <WrapSectionGoodProductDayLgItem>
            <CardProductDiscount/>
          </WrapSectionGoodProductDayLgItem>
          <WrapSectionGoodProductDayLgItem>
            <CardProductDiscount/>
          </WrapSectionGoodProductDayLgItem>
        </WrapSectionGoodProductDayLgList>
      </WrapSectionGoodProductDayLg>
  )
}

export default SectionGoodProductDayLg