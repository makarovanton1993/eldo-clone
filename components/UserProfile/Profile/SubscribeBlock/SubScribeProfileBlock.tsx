import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import CheckBox from '../../../CheckBox';

const Wrapper = styled.div`
    width:660px;
`
const Title = styled.h3`
    font-size:22px;
    font-family:500;
    margin-bottom:30px;
`
const Text = styled.p`
    font-size:15px;
    font-weight:600;
    margin-bottom:30px;
`
const FormBox = styled.form`
    margin-bottom:20px;
`;
const LabelBox = styled.div`
    margin-bottom:40px;
    width:240px;
`
const Label = styled.label`
    display:flex;
    align-items:center;
    font-size:14px;
    margin-bottom:15px;
    align-self:flex-start;
    width:100%;
    &:last-child{
        margin-bottom:0;
    }
`
const Button = styled.button`
    color:#fff;
    background-color:var(--main-color);
    padding:5px 10px;
    font-size:14px;
    width:150px;
    height:30px;
    border:0;
    border-radius:4px;
`
const Span = styled.span`
`

const SubScribeProfile = () => {

    const [isCall,setIsCall] = useState<boolean>(false);
    const [mailing,setMailing] = useState(false);
    const [sms,setSms] = useState(false);

  return (
    <Wrapper>
        <Title>Подписка</Title>
        <Text>В данный момент вы подписаны на следующие каналы для получения информации об акциях и персональных предложениях:</Text>
        <FormBox>
            <LabelBox>
                <Label><CheckBox  checked={isCall} onChange={()=>{setIsCall(!isCall)}} /><Span >Звонок операторов</Span></Label>
                <Label><CheckBox  checked={mailing} onChange={()=>{setMailing(!mailing)}} /><Span >Рассылка по электронной почте</Span></Label>
                <Label><CheckBox  checked={sms} onChange={()=>{setSms(!sms)}} /><Span >SMS - уведомление</Span></Label>
            </LabelBox>
            <Button>Сохранить</Button>
        </FormBox>
    </Wrapper>
  )
}

export default SubScribeProfile