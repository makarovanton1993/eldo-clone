import React from 'react'
import styled from 'styled-components';
import CategoryProfile from '../../../components/Category/CategoryProfile';
import CategoryProfileInner from '../../../components/Category/CategoryProfileInner';
import FormProfile from '../../../components/UserProfile/Profile/MyProfileBlock/MyProfileFormBlock';
import SubScribeProfile from '../../../components/UserProfile/Profile/SubscribeBlock/SubScribeProfileBlock';

const Wrapper = styled.div`
    margin-bottom:60px;
`

const ContainerSubscribe = styled.div`
    display:flex;
`

const Subscribe = () => {
  return (
    <Wrapper>
      <CategoryProfile path={4}/>
      <ContainerSubscribe>
        <CategoryProfileInner selectCat ={3}/>
        <SubScribeProfile/>
      </ContainerSubscribe>
    </Wrapper>
  )
}

export default Subscribe