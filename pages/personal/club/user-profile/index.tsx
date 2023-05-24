
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CategoryProfile from '../../../../components/Category/CategoryProfile'
import CategoryProfileInner from '../../../../components/Category/CategoryProfileInner';
import MyProfileFormBlock from '../../../../components/UserProfile/Profile/MyProfileBlock/MyProfileFormBlock';
import { authStatus, getcurrentUser, user } from '../../../../redux/slices/userSlice';
import { wrapper } from '../../../../redux/store';
import { Div } from '../../../../styles/components/component';
import styles from './UserProfile.module.scss'
import { check, findUser } from '../../../../http/userApi';
import axios from 'axios';
import * as cookie from 'cookie'
import Cookies from 'js-cookie'
import { $authHost, $host } from '../../../../http';
const Wrapper = styled(Div)`
  
`
const ContainerUserProfile = styled(Div)`
  display: flex;
  margin-bottom: 70px;
`
const UserProfile = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    check().then(data => {
      if (data) {
        // findUser(data).then(data => console.log(data))
        // // const aaaaa = Cookies.get("user");
        // // console.log(aaaaa);
        // dispatch(getcurrentUser(data));
        dispatch(authStatus(true))
      }
    });
  }, [])


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
  try {
    const { user } = cookie.parse(da.req.headers.cookie);
    const { tel } = JSON.parse(user);
    const responseUser = await fetch("http://localhost:3001/api/user/currentUser", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ tel })
    })
    const data = await responseUser.json();
    console.log(data)
    store.dispatch(getcurrentUser(data))
  } catch (error) {
    console.log(error)
  }
  return {
    props: {}
  };
}
);

export default UserProfile