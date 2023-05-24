import React from 'react'
import styled from 'styled-components';
import { Div } from '../../styles/components/component';
import HeaderNav from './HeaderNav'
import HeaderSelect from './HeaderSelect'
// import styles from './HeaderTop.module.scss';

const WrapHeaderTop = styled(Div) <any>`
  padding:18px 0 15px 0;
  display: flex;
  justify-content: space-between;
  align-items:center;
  @media(max-width: 1242px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items:flex-start;
  }
  @media(max-width: 998px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
  }
`
interface HeaderTopProps {
  visibleHelpModal: boolean,
  setVisibleHelpModal: () => void
}

const HaeaderTop = () => {
  return (
    <WrapHeaderTop>
      <HeaderSelect />
      <HeaderNav />
    </WrapHeaderTop>
  )
}

export default HaeaderTop

