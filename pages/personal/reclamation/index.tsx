import React from 'react'
import styled from 'styled-components';

import CategoryProfile from '../../../components/Category/CategoryProfile';
import CategoryProfileInner from '../../../components/Category/CategoryProfileInner';
import ReclamationProfileBlock from '../../../components/UserProfile/Profile/ReclamationBlock/ReclamationProfileBlock';


const Wrapper = styled.div`
    margin-bottom:60px;
`
const ContainerReclamation = styled.div`
    display:flex;
`

const Reclamation = () => {
  return (
    <Wrapper>
      <CategoryProfile path={4}/>
      <ContainerReclamation>
        <CategoryProfileInner selectCat ={4}/>
        <ReclamationProfileBlock/>
      </ContainerReclamation>
    </Wrapper>
  )
}

export default Reclamation









