import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components';
import CategoryProfile from '../../../../components/Category/CategoryProfile'
import OffersBlock from '../../../../components/UserProfile/Offers/OffersBlock';
import { Div } from '../../../../styles/components/component';
import styles from './Offers.module.scss'

const Wrapper = styled(Div)`
  
`

const Offers = () => {
  // const {asPath} = useRouter();
  return (
    <Wrapper>
      <CategoryProfile path={2}/>
      <OffersBlock/>
    </Wrapper>
  )
}

export default Offers