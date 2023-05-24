import React, { useEffect, createContext, Dispatch, SetStateAction, useRef, useState } from 'react'
import CategoryMain from '../Category/CategoryMain'

import Footer from '../Footer'
import HeaderBottomLine from '../Header/HeaderBottomLine'
import HaeaderTopLine from '../Header/HeaderTopLine'
import SectionBonus from '../Section/SectionBonus';
import { useRouter } from 'next/router'

import styled from 'styled-components'
import { Div } from '../../styles/components/component'
import ModalAuthAndRegistration from '../Modal/ModalAuthAndRegistration'
import HelpBlock from '../HelpBlock'
import ModalHelpChat from '../Modal/ModalHelpChat'
import { fetchAllCategories } from '../../redux/slices/categoriesSlice'
import { useDispatch } from 'react-redux'
import { AsyncThunk } from '@reduxjs/toolkit'
import { check } from '../../http/userApi'
import { authStatus, getcurrentUser } from '../../redux/slices/userSlice'

const Container = styled(Div)`
  position: relative;
  z-index: 1;
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 0 15px;
  overflow: visible;
  @media(max-width: 1242px) {
    max-width: 960px;
  }
  @media(max-width: 998px) {
    padding: 0 5px;
  }

`
type AppContext = {

  authAndRegistBtn: any,
  setAuthAndRegistBtn: Dispatch<SetStateAction<any>>
}

export const AppContent = createContext<AppContext>({} as AppContext);
const SectionBonusNone = ['/personal/basket', '/club/user_profile', '/personal/wish-list', '/personal/club/offers', '/personal/orders', '/personal/club/operations', '/personal/subScribe', '/personal/reclamation', '/personal/profiles']
const Layout = ({ children }: any) => {
  const [visibleAuthAndRegistModal, setVisibleAuthAndRegistModal] = useState(false);
  const [authAndRegistBtn, setAuthAndRegistBtn] = useState<any>();
  const appContent = {
    authAndRegistBtn, setAuthAndRegistBtn,
  }
  const { asPath } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const datas = check().then(data => {
        if (data) {
          // dispatch(getcurrentUser(data));
          dispatch(authStatus(true))
        }
      });

    } catch (error) {
      console.log(error, 1213)
    }
  }, [])


  return (
    <AppContent.Provider value={appContent}>
      <Container>
        <HaeaderTopLine />
        <HeaderBottomLine />
        <CategoryMain />
        <main>{children}</main>
        {(SectionBonusNone.includes(asPath)) ? '' : <SectionBonus />}
      </Container>
      <Footer />
      {visibleAuthAndRegistModal && <ModalAuthAndRegistration onClose={() => { setVisibleAuthAndRegistModal(false) }} />}
    </AppContent.Provider>
  )
}
// export const getServerSideProps = wrapper.getServerSideProps((store) => async (da) => {
//   const { user } = cookie.parse(da.req.headers.cookie);
//   const { tel } = JSON.parse(user);
//   const responseUser = await fetch("http://localhost:3001/api/user/currentUser", {
//     method: "post",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }, body: JSON.stringify({ tel })
//   })
//   const { data } = await responseUser.json();
//   store.dispatch(getcurrentUser(data))
//   const resp = await axios("https://63eb65cefb6b6b7cf7dd974b.mockapi.io/product");
//   const resData = resp.data[0].categories
//   store?.dispatch(addCategories(resData));
//   return {
//     props: {}
//   };
// }
// );
export default Layout

{/* <ModalBonusWithShop/> */ }