import Link from 'next/link';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Div } from '../../styles/components/component';
import CartBlock from '../Blocks/CartBlock';
import AuthAndRegistr from './Autification/AuthAndRegistr';
import HeaderSearch from './HeaderSearch';
import { check } from '../../http/userApi';
import { authStatus } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
// import styles from './HeaderBottom.module.scss';

const WrapHeaderBotton = styled(Div) <any>`
  position: sticky;
  top:0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 11111;
  background-color:#fff;
  margin-bottom: 20px;
`
const WrapLogoLink = styled(Link)`
  max-width: 193px;
  width: 100%;
  display: flex;
  margin-right: 20px;
  @media(max-width: 760px) {
    position: absolute;
    top: -108px;
    left: 0;
  }
`
// interface HeaderBottomProps {
//   visibleAuthAndRegistModal: boolean,
//   setVisibleAuthAndRegistModal: Dispatch<SetStateAction<boolean>>
// }

const HeaderBottom = () => {
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
  })
  return (
    <WrapHeaderBotton>
      <WrapLogoLink href="/" >
        <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.4-UDkpWRt9VoJiG7xD0mOBC/static_spa/assets/logo.dc65dadd.svg" alt="Логотип Эльдорадо" width="198" height="54" />
      </WrapLogoLink>
      <HeaderSearch />
      <AuthAndRegistr />
      <CartBlock />
    </WrapHeaderBotton>
  )
}

export default HeaderBottom;