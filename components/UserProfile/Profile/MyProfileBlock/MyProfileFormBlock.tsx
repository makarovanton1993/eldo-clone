import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import styles from './FormProfile.module.scss'

import { AiOutlineCheck, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { Button, Div, Input, Label, Span, TypographyH4 } from '../../../../styles/components/component';
import styled, { css } from 'styled-components';
import Select from 'react-select/dist/declarations/src/Select';
import { useDispatch, useSelector } from 'react-redux';
import { editProcessingPersonalData, getcurrentUser, isPersonalDataStatus, user } from '../../../../redux/slices/userSlice';
import ModalProfileUserEditTel from '../../../Modal/ModalProfileUserEditTel';
import ModalProfileUserEditEmail from '../../../Modal/ModalProfileUserEditEmail';
import { wrapper } from '../../../../redux/store';
import * as cookie from 'cookie'
import { addFieldUser, check, checkAddPolicySecurity, findUser } from '../../../../http/userApi';
import axios from 'axios';


const WrapFormProfile = styled.section`
  padding: 20px;
  width: 100%;
  border: 1px solid rgb(190, 188, 188);
`
const Form = styled.form`
  
`
const FormInner = styled.div`
  
`
const WrapInput = styled(Input)`
  width: 100%;
  padding: 16px 13px;
  outline: none;
  border-radius: 2px;
  border:1px solid rgb(92, 91, 91);
  height: 54px;
`
const WrapSelect = styled.select`
  height: inherit;
  padding: 16px 45px 16px 13px;
`
const SectionItem = styled(Div)`
  position: relative;
  margin-bottom: 35px;
  max-width: 405px;
  width: 100%;
`
const SectionItemDefault = styled(SectionItem)`
  
`
const SectionItemDefaultInput = styled(WrapInput)`
  background-color:rgb(225, 225, 225);
  user-se
  &::placeholder{
    color:rgb(122, 122, 122);
  }
`
const SectionItemLabel = styled(Label)`
  position: absolute;
  top: 2px;
  left: 16px;
  font-size: 12px;
  color:rgb(122, 122, 122);
`
const SectionItemInput = styled(WrapInput)`
  &::placeholder{
    font-size: 14px;
    color:rgb(92, 91, 91);
  }
`
const SectionItemLink = styled(Link)`
  position: absolute;
  width: 54px;
  height: 54px;
  top: 0;
  right: -54px;
  display: flex;
  justify-content: center;
  align-items:center;
  svg{
   circle,path{
    stroke:rgb(122, 122, 122)
    } 
  }
  &:hover{
    background-color:rgb(8, 224, 8);
    svg{
      circle,path{
      stroke:rgb(255, 255, 255)
      } 
    }
  }
`
const SectionItemInnerBtn = styled(Button)`
  position: absolute;
  width: 54px;
  height: 54px;
  top: 0;
  right: -54px;
  display: flex;
  justify-content: center;
  align-items:center;
  svg{
    width:28px;
    height:28px;
   circle,path{
    stroke:rgb(122, 122, 122)
    } 
  }
  &:hover{
    background-color:rgb(8, 224, 8);
    svg{
      circle,path{
      stroke:rgb(255, 255, 255)
      } 
    }
  }
`
const SectionItemConfirmImg = styled(Div)`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  svg{
    fill:rgb(8, 224, 8); ;
  }
`
const SectionItemConfirmText = styled(Div)`
  position: absolute;
  bottom: -25px;
  left: 0;
  color:rgb(8, 224, 8);
`
const SectionItemSelectOne = styled.select`
  margin-right: 20px;
  width: 52%;
`
const SectionItemSelectTwo = styled.select`
  width: 43%;
`
const SectionItemNewPass = styled(Div)`
  
`
const SectionItemTitle = styled(TypographyH4)`
  margin-bottom: 10px;
  font-size: 20px;
`
const SectionItemNewPassInner = styled(Div)`
  display: flex;
`
const SectionItemNewPassInnerItem = styled(Div)`
  position: relative;
`
const SectionItemNewPassInnerItemSpan = styled(Span)`
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  svg{
    width: 20px;
    height: 20px;
  }
`
const SectionItemConfirmSecurityPoliceBox = styled(Div)`
  display:flex;
  align-items:center;
`
const SectionItemConfirmSecurityPolicy = styled(Div)`
  display: flex;
  align-items:center;
`
const SectionItemConfirmSecurityPolicyCheck = styled(Input)`
  height: 100%;
  width: inherit;
  margin-right: 5px;
`
const SectionItemConfirmSecurityPolicyText = styled(Label)`
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;
`
const SectionItemConfirmSecurityPolicyLink = styled(Link)`
  position: inherit;
  color:rgb(83, 172, 6);
`
const SectionItemBtnDisabled = css`
  background-color:grey;
  color:#000;
  cursor:default;
`
const SectionItemBtn = styled(Button)`
  width: 100%;
  padding: 15px 20px;
  border:none;
  background-color: var(--main-color);
  border-radius:2px;
  color:#fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  ${({ disabled }) => disabled === true && SectionItemBtnDisabled}
`
const FormProfile = (data: any) => {
  const { name, patronymic, fam, email, floor, marital_status, birthday, tel, telConfirm, emailConfirm, isProcessingPersonalData } = useSelector(user);
  const [visiblePass, setVisiblePass] = useState(false);
  const [visibleСonfirmPass, setVisibleСonfirmPass] = useState(false);
  // const [confirmPD, setConfirmPD] = useState(false);
  const dispatch = useDispatch();
  const [isEditTel, setIsEditTel] = useState(false);
  const [nameUser, setNameUser] = useState(name);
  const [patronumicUser, setPatronumicUser] = useState(patronymic);
  const [famUser, setFamUser] = useState(fam);
  const [birthdayUser, setBirthdayUser] = useState(birthday);
  const [seminalPosition, setSeminalPosition] = useState(marital_status);
  const [floors, setFloors] = useState(floor);
  const [visibleModalEditTel, setVisibleModalEditTel] = useState(false);
  const [visibleModalEditEmail, setVisibleModalEditEmail] = useState(false);
  const [handleConfirmPD, setHandleConfirmPD] = useState(isProcessingPersonalData);

  const onHandleVisiblePass = () => {
    setVisiblePass(!visiblePass);
  }
  const onHandleVisibleConfirmPass = () => {
    setVisibleСonfirmPass(!visibleСonfirmPass);
  }
  const handleStatusAgreementDataProcessing = () => {
    setHandleConfirmPD(!handleConfirmPD)

  }
  const handlerNameUser = (e: any) => {
    setNameUser(e.target.value);
  }
  const handlerFamUser = (e: any) => {
    setFamUser(e.target.value);
  }
  const handlerPatronumicUser = (e: any) => {
    setPatronumicUser(e.target.value);
  }
  const handlerBirthdayUser = (e: any) => {
    setBirthdayUser(e.target.value);
  }
  const handleVisibleModalEditTel = (e: any) => {
    e.preventDefault();
    setVisibleModalEditTel(true);
  }
  const handleVisibleModalEditEmail = (e: any) => {
    e.preventDefault();
    setVisibleModalEditEmail(true);
  }
  const saveUserInfo = (e) => {
    e.preventDefault();
    try {
      if (handleConfirmPD) {
        const userData = {
          isProcessingPersonalData: handleConfirmPD,
          name: nameUser,
          fam: famUser,
          patronymic: patronumicUser,
          birthday: birthdayUser,
          marital_status: seminalPosition,
          floor: floors,
          tel
        }
        console.log(userData)
        addFieldUser(userData);
      }
    } catch (error) {

    }
  }
  const handleChangeSeminalPosition = (e) => {
    setSeminalPosition(e.target.value);
  }
  const handleChangeFloor = (e) => {
    setFloors(e.target.value)
  }
  console.log(handleConfirmPD, "Статус ПД")
  return (
    <WrapFormProfile>
      <Form action="">
        <FormInner>

          <SectionItemDefault>
            <SectionItemLabel >
              Телефон
            </SectionItemLabel>
            <SectionItemDefaultInput type="text" placeholder='' defaultValue={tel} value={tel} disabled />
            <SectionItemInnerBtn onClick={handleVisibleModalEditTel}><FiSettings /></SectionItemInnerBtn>
            <SectionItemConfirmImg><AiOutlineCheck /></SectionItemConfirmImg>
            {tel ? telConfirm ? '' : <SectionItemConfirmText>Подтвердите email</SectionItemConfirmText> : ''}
          </SectionItemDefault>
          <SectionItemDefault>
            <SectionItemLabel>
              Email
            </SectionItemLabel>
            <SectionItemDefaultInput type="text" placeholder='' defaultValue={email} value={email} disabled />
            <SectionItemInnerBtn onClick={handleVisibleModalEditEmail}><FiSettings /></SectionItemInnerBtn>
            <SectionItemConfirmImg><AiOutlineCheck /></SectionItemConfirmImg>
            {email ? emailConfirm ? '' : <SectionItemConfirmText>Подтвердите email</SectionItemConfirmText> : ''}
          </SectionItemDefault>
          <SectionItem>
            <SectionItemLabel>
              Имя
            </SectionItemLabel>
            <SectionItemInput type="text" placeholder='Вася' value={nameUser} onChange={handlerNameUser} />
          </SectionItem>
          <SectionItem>
            <SectionItemLabel >
              Отчество
            </SectionItemLabel>
            <SectionItemInput type="text" placeholder='Отчество' value={patronumicUser} onChange={handlerPatronumicUser} />
          </SectionItem>
          <SectionItem>
            <SectionItemLabel>
              Фамилия
            </SectionItemLabel>
            <SectionItemInput type="text" placeholder='Пупкин' value={famUser} onChange={handlerFamUser} />
          </SectionItem>
          <SectionItem>
            <SectionItemLabel>
              Дата рождения
            </SectionItemLabel>
            <SectionItemInput type="date" value={birthdayUser} onChange={handlerBirthdayUser} />
          </SectionItem>
          <SectionItem>
            <SectionItemSelectOne value={seminalPosition} onChange={e => handleChangeSeminalPosition(e)} >
              <option value="seminalPosition" selected hidden>Семейное положение</option>
              <option value="married">Женат</option>
              <option value="no_married">Не женат</option>
            </SectionItemSelectOne>
            <SectionItemSelectTwo value={floors} onChange={e => handleChangeFloor(e)}>
              <option value="" selected hidden>Пол</option>
              <option value="man">Мужской</option>
              <option value="women">Женский</option>
            </SectionItemSelectTwo>
          </SectionItem>
          <SectionItem>
            <SectionItemNewPass>
              <SectionItemTitle>Новый пароль</SectionItemTitle>
              <SectionItemNewPassInner>
                <SectionItemNewPassInnerItem>
                  <WrapInput type="password" placeholder='Пароль' />
                  <SectionItemNewPassInnerItemSpan onClick={onHandleVisiblePass}>{visiblePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</SectionItemNewPassInnerItemSpan>
                </SectionItemNewPassInnerItem>
                <SectionItemNewPassInnerItem>
                  <WrapInput type="password" placeholder='Подтвердите пароль' />
                  <SectionItemNewPassInnerItemSpan onClick={onHandleVisibleConfirmPass}>{visibleСonfirmPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</SectionItemNewPassInnerItemSpan>
                </SectionItemNewPassInnerItem>
              </SectionItemNewPassInner>
            </SectionItemNewPass>
          </SectionItem>
          <SectionItem>
            <SectionItemConfirmSecurityPolicy>
              <SectionItemConfirmSecurityPoliceBox onClick={handleStatusAgreementDataProcessing}>
                <SectionItemConfirmSecurityPolicyCheck checked={isProcessingPersonalData} onChange={handleStatusAgreementDataProcessing} type="checkbox" />
                <SectionItemConfirmSecurityPolicyText >Согласен на обработку моих</SectionItemConfirmSecurityPolicyText>
              </SectionItemConfirmSecurityPoliceBox>
              <SectionItemConfirmSecurityPolicyLink href={''}>персональных данных</SectionItemConfirmSecurityPolicyLink>
            </SectionItemConfirmSecurityPolicy>
          </SectionItem>
          <SectionItem>
            <SectionItemBtn disabled={!isProcessingPersonalData} onClick={e => saveUserInfo(e)}>Сохранить анкету</SectionItemBtn>
          </SectionItem>
        </FormInner>
      </Form>
      <ModalProfileUserEditTel visibleModalEditTel={visibleModalEditTel} setVisibleModalEditTel={setVisibleModalEditTel} />
      <ModalProfileUserEditEmail visibleModalEditEmail={visibleModalEditEmail} setVisibleModalEditEmail={setVisibleModalEditEmail} />
    </WrapFormProfile>
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
  const { data } = await responseUser.json();
  console.log(data)
  store.dispatch(getcurrentUser(data))
  return {
    props: {}
  };
}
);
export default FormProfile