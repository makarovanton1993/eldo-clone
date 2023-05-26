import React from 'react'
import styled from 'styled-components';
import CategoryProfile from '../../../components/Category/CategoryProfile';
import CategoryProfileInner from '../../../components/Category/CategoryProfileInner';
import ProfileDeliveryBlock from '../../../components/UserProfile/Profile/ProfileDeliveryBlock';
import { Div } from '../../../styles/components/component';


const Wrapper = styled(Div)`
  
`
const ContainerProfileDelivery = styled(Div)`
  display: flex;
  margin-bottom: 50px;
`
const Profiles = () => {

  return (
    <Wrapper>
      <CategoryProfile path={4} />
      <ContainerProfileDelivery>
        <CategoryProfileInner selectCat={2} />
        <ProfileDeliveryBlock />
      </ContainerProfileDelivery>
    </Wrapper>
  )
}

export default Profiles