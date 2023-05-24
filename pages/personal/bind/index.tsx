import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import CategoryProfile from '../../../components/Category/CategoryProfile'
import CategoryProfileInner from '../../../components/Category/CategoryProfileInner';
import styles from './Bind.module.scss';
import YandexCaptha from '../../../components/yandexCaptcha';
import { Div } from '../../../styles/components/component';
import styled from 'styled-components';
import BindCardBlock from '../../../components/UserProfile/Profile/BindCardBlock';

const Wrapper = styled(Div)`
  
`
const ContainerBind = styled(Div)`
  display: flex;
`
const Bind = () => {

  return (
    <Wrapper>
        <CategoryProfile path={4}/>
        <ContainerBind>
            <CategoryProfileInner selectCat={0}/>
            <BindCardBlock/>
        </ContainerBind>
    </Wrapper>
  )
}

export default Bind