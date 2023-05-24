
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import CategoryProfile from '../../../../components/Category/CategoryProfile'

import OperationBlock from '../../../../components/UserProfile/Operations/OperationBlock'
import { checkAuthUser } from '../../../../hooks/checkAuthUser'
import { check } from '../../../../http/userApi'
import { authStatus, getcurrentUser } from '../../../../redux/slices/userSlice'
import { Div } from '../../../../styles/components/component'
import { wrapper } from '../../../../redux/store'
import * as cookie from 'cookie'

const Wrapper = styled(Div)`
  
`
const Operations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    check().then(data => {
      if (data) {

        dispatch(authStatus(true))
      }
    });
  }, [])
  return (
    <Wrapper>
      <CategoryProfile path={0} />
      <OperationBlock />
    </Wrapper>
  )
}
export const getServerSideProps = wrapper.getServerSideProps((store) => async (da) => {
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
  return {
    props: {}
  };
}
);
export default Operations