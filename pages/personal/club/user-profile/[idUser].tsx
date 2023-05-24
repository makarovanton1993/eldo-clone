
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styled from 'styled-components';
import CategoryProfile from '../../../../components/Category/CategoryProfile'
import CategoryProfileInner from '../../../../components/Category/CategoryProfileInner';
import MyProfileFormBlock from '../../../../components/UserProfile/Profile/MyProfileBlock/MyProfileFormBlock';
import { Div } from '../../../../styles/components/component';
import styles from './UserProfile.module.scss'
import { wrapper } from '../../../../redux/store';

const Wrapper = styled(Div)`
  
`
const ContainerUserProfile = styled(Div)`
  display: flex;
  margin-bottom: 70px;
`
const UserProfile = (data: any) => {
    console.log(data)
    // const {asPath} = useRouter();
    return (
        <Wrapper>
            <CategoryProfile path={4} />
            <ContainerUserProfile>
                <CategoryProfileInner selectCat={1} />
                <MyProfileFormBlock />
            </ContainerUserProfile>
        </Wrapper>
    )
}
export const getServerSideProps = wrapper.getServerSideProps((store) => async (da) => {
    console.log(da.query)
    return {
        props: {},
    };
}
);

export default UserProfile