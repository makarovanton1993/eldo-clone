import Link from 'next/link';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import styled from 'styled-components';

import { allCartItems, addItemCart } from "../../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import type { NextPage } from "next";

import AuthUser from './AuthUser';

import { Button, Div, Span } from '../../../styles/components/component';
import ModalAuthAndRegistration from '../../Modal/ModalAuthAndRegistration';
import AuthBlock from './AuthBlock';
import { auth } from '../../../redux/slices/userSlice';

const WrapAuthCart = styled(Div)`
    display: flex;
    align-items:center;
    font-size: 15px;
    font-weight: 400;
    line-height: 17px;
    @media(max-width: 998px) {
      display: none;
  }
  `
const AuthButton = styled(Button) <any>`
    display: flex;
    align-items:center;
    border:none;
    background-color:transparent;
    margin-right: 50px;
    cursor: pointer;
    & svg{
        margin-right: 9px;
    }
    &:hover{
        color:var(--main-color);
    }
    @media(max-width: 1242px) {
        position: absolute;
        top:-37px;
        right: 0;
        margin-right: 0;
  }
  `

const CartSpan = styled(Span)`
    position: absolute;
    top: -15px;
    left: -9px;
    width: 18px;
    height: 18px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #fff;
  `

// interface AuthAndRegistrProps {
//   visibleAuthAndRegistModal: boolean,
//   setVisibleAuthAndRegistModal: Dispatch<SetStateAction<boolean>>
// }

const AuthAndRegistr = () => {

  const isAuth = useSelector(auth);



  return (
    <WrapAuthCart >
      {
        isAuth ? <AuthUser isAuth={isAuth} /> :
          <AuthBlock />
      }
    </WrapAuthCart>
  )
}

export default AuthAndRegistr