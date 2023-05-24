import React, { useState } from 'react'
import styled from 'styled-components';
//сделать валидацию форм
// разобраться с добавлением файла в форме
type LabelProps = {
    requiredStar?:boolean;
}
type SpanProps = {
    nomargin?:boolean;
}
type InputProps = {
    type?:string;
}
const Wrapper = styled.div`
    margin-top:40px; 
    margin-bottom:40px;
    margin-left:40px;
    width:520px;
`
const Form = styled.form``

const WrapperLine = styled.div`
    display:flex;
    align-items:flex-start;
    margin-bottom:20px;
`

const Label = styled.label<LabelProps>`
    position:relative;
    padding-right:${props=>props.requiredStar ? '30px' : '25px'};
    font-size:12px;
    font-weight:600;
    max-width:150px;
    width:100%;
    text-align:right;
    white-space:nowrap;
    display: flex;
    flex-direction: column;
    &:before{
        display:${props=>props.requiredStar ? 'flex' :'none'};
        position:absolute;
        content:'*';
        width:5px;
        height:5px;
        color:red;
        top:0;
        right:25px;
    }
`
const Span = styled.span<SpanProps>`
    margin-right:${props => props.nomargin ? '0px' : '5px'};
`
const Input = styled.input<InputProps>`
    opacity:${props=>props.type === 'file' && 0};
    position:${props=>props.type === 'file' && 'absolute'};;
    padding:6px 10px;
    width: 100%;
    height:35px;
    outline-color:#76bc21;
`
const InputBtn = styled.input.attrs({type:'button'})`
   border:none;
   background-color:#76bc21;
   color:#fff;
   padding:10px 30px;
   border-radius:5px;
   width:200px;
   
`
const InputBtnAbsolute = styled(Input)`
    position:absolute;
    top:0;
    right:0;
    width:108px;
    padding:0 15px;
    text-align:center;
    user-select:none;
`
const InputSmall = styled(Input)`
    max-width:40px;
    margin-right:20px;
    display:flex;
    justify-content:center;
    padding-left:6px;
    padding-right:6px;
`
const WrapperBox = styled.div`
    display:flex;
    align-items:center;
    max-width:390px;
    width:100%;
    height:100%;
    position:relative;
`
const TextArea = styled.textarea`
resize:none;
width:100%;
height:140px;
padding:10px;
outline-color:#76bc21;
position:relative;
`
const ReclamationForm = () => {
    const [name,setName] = useState('');
    const [fam,setFam] = useState('');
    const [sity,setSity] = useState('');
    const [email,setEmail] = useState('');
    const [birsthday,setBirsthday] = useState('');
    const [mobileNumberOperator,setMobileNumberOperator] = useState('');
    const [mobileNumber,setMobileNumber] = useState('');
    const [homeNumberOperator,setHomeNumberOperator] = useState('');
    const [homeNumber,setHomeNumber] = useState('');
    const [file,setFile] = useState('');
  return (
    <Wrapper>
        <Form>
            <WrapperLine>
                <Label requiredStar={true}>Ваше Имя</Label>
                <WrapperBox><Input type="text"  placeholder='Вася' defaultValue={name} onChange={(e)=>{setName(e.target.value)}}></Input></WrapperBox> 
            </WrapperLine>
            <WrapperLine>
                <Label requiredStar={true}>Ваша фамилия</Label>
                <WrapperBox><Input type="text"  placeholder='Петров' defaultValue={fam} onChange={(e)=>{setFam(e.target.value)}}></Input></WrapperBox>
            </WrapperLine>
            <WrapperLine>
                <Label>Город</Label>
                <WrapperBox><Input type="text"  placeholder='' defaultValue={sity} onChange={(e)=>{setSity(e.target.value)}}></Input></WrapperBox>
            </WrapperLine>
            <WrapperLine>
                <Label>E-mail</Label>
                <WrapperBox><Input type="text"  placeholder='vasyapetrov@mail.ru' defaultValue={email} onChange={(e)=>{setEmail(e.target.value)}}></Input></WrapperBox>
            </WrapperLine>
            <WrapperLine>
                <Label>День рождения</Label>
                <WrapperBox><Input type="text"  placeholder='' defaultValue={birsthday} onChange={(e)=>{setBirsthday(e.target.value)}}></Input></WrapperBox>
            </WrapperLine>
            <WrapperLine>
                <Label>Мобильный телефон</Label>
                <WrapperBox>
                    <Span>+7</Span>
                    <InputSmall type="text"  placeholder='905' maxLength={3} defaultValue={mobileNumberOperator} onChange={(e)=>{setMobileNumberOperator(e.target.value)}}/>
                    <Input type="text"  defaultValue={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}/>
                </WrapperBox>
            </WrapperLine>
            <WrapperLine>
                <Label>Домашний телефон</Label>
                <WrapperBox>
                    <Span>+7</Span>
                    <InputSmall type="text"  placeholder='' maxLength={3} defaultValue={homeNumberOperator} onChange={(e)=>{setHomeNumberOperator(e.target.value)}}/>
                    <Input type="text"  defaultValue={homeNumber} onChange={(e)=>{setHomeNumber(e.target.value)}}/>
                </WrapperBox>
            </WrapperLine>
            <WrapperLine>
                <Label requiredStar>Текст сообщений</Label>
                <WrapperBox><TextArea /></WrapperBox>
            </WrapperLine>
            <WrapperLine>
                <Label>Прикрепить файл <Span nomargin>(до 1мб)</Span></Label>
                <WrapperBox><Input type='file' defaultValue={file} onChange={(e)=>{setFile(e.target.value)}}/><Input /><InputBtnAbsolute defaultValue={file} onChange={(e)=>{setFile(e.target.value)}}/></WrapperBox>
            </WrapperLine>
            <InputBtn defaultValue='отправить' onClick={()=>{console.log("Отправили форму")}}></InputBtn>
        </Form>
    </Wrapper>
  )
}

export default ReclamationForm



