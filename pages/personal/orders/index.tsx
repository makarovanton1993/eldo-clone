import React, { useState } from 'react'
import CategoryProfile from '../../../components/Category/CategoryProfile'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { Div } from '../../../styles/components/component';
import OrdersBlock from '../../../components/UserProfile/Orders/OrdersBlock';

const Wrapper = styled(Div)`
  
`
const Orders = () => {
  // const {asPath} = useRouter();
  return (
    <Wrapper>
      <CategoryProfile path={1}/>
      <OrdersBlock/>
    </Wrapper>
  )
}

export default Orders