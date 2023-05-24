import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Label, Link } from '../../styles/components/component'
import { useDispatch, useSelector } from 'react-redux'
import { getcurrentUser, user } from '../../redux/slices/userSlice'
import { checkAddPolicySecurity, checkConfirmEdit, findUser } from '../../http/userApi'
import Cookies from 'js-cookie';
const Title = styled.h3`
    
    margin-bottom:5px;
`
const Form = styled.form`
`
const InputBox = styled.div`
    width:100%;
    border-radius:2px;
    border:1px solid #616161;
    position:relative;
    padding:10px;
    min-height:58px;
    display: flex;
`
const InputDefault = styled.input`
    border:none;
    background-color:transparent;
    width:100%;
    outline:none;
    
`
const InputCodeConfirmBox = styled.div`
    border-radius:2px;
    border:1px solid #616161;
    position:relative;
    padding:10px;
    min-height:58px;
    display: flex;
    width:100px;
    margin-top:20px;
`
const Div = styled.div`
display:flex;
align-items:center;
margin:20px 0;

`
const Span = styled.span`
`
const Button = styled.button`
    width:100%;
    text-align:center;
    background-color:#a7e07e;
    border:none;
    color:#fff;
    font-size:20px;
    font-weight:600;
    line-height: 50px;
    border-radius:3px;
    margin-bottom: 20px;
    cursor:pointer;
`
const ButtonRepeat = styled(Button)`
    margin:0;
    width:inherit;
    background-color:transparent;
    color:#3a56e0;
    font-size:14px;
    margin-right:10px;
    line-height:0;
`
const Text = styled.p<any>`
    margin-bottom:${({ secondary }) => secondary && '20px'};
    color:#b4b4b4;
    font-size:12px;
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
const ModalProfileUserConfirmEditEmail = ({ newEmail, setVisibleModalEditEmail, setVisibleInjectCode }: any) => {
    const { email, tel, isProcessingPersonalData, id } = useSelector(user);
    const [pin, setPin] = useState('');
    const [handleConfirmPD, setHandleConfirmPD] = useState(isProcessingPersonalData);
    const dispatch = useDispatch();
    const handleStatusAgreementDataProcessing = (e) => {
        setHandleConfirmPD(!handleConfirmPD);
    }
    const handlePin = (e) => {
        setPin(e.target.value);
    }
    const handleSubmit = async (e) => {


        e.preventDefault();
        if (handleConfirmPD) {
            try {

                const res = await checkAddPolicySecurity(handleConfirmPD, tel);
                console.log(res)
                // console.log(123)
                await checkConfirmEdit(pin, tel, id, newEmail);
                setVisibleModalEditEmail(false);
                setPin('');
                setVisibleInjectCode(false)
                const datas = JSON.parse(Cookies.get('user'));
                const currentTel = datas.tel
                await findUser({ tel: currentTel }).then(({ data }) => {
                    dispatch(getcurrentUser(data))
                })
            } catch (error) {
                console.log(error, 'error')
            }
        } else {
            alert("Подтвердите политику персональных данных")
        }

    }
    return (
        <Form>
            <Title>Изменение адреса электронной почты</Title>
            <Text>На ваш старый номер мобильного телефона отправлено SMS с кодом подтверждения изменения</Text>
            <InputCodeConfirmBox>
                <InputDefault onChange={e => handlePin(e)} />
            </InputCodeConfirmBox>
            <Div>
                <ButtonRepeat >Отправить еще раз</ButtonRepeat>
                <Span>20</Span>
            </Div>
            <Button onClick={e => handleSubmit(e)}>Подтвердить</Button>
            <SectionItemConfirmSecurityPolicy>
                <SectionItemConfirmSecurityPoliceBox onClick={handleStatusAgreementDataProcessing}>
                    <SectionItemConfirmSecurityPolicyCheck checked={handleConfirmPD} onChange={handleStatusAgreementDataProcessing} type="checkbox" />
                    <SectionItemConfirmSecurityPolicyText >Согласен на обработку моих</SectionItemConfirmSecurityPolicyText>
                </SectionItemConfirmSecurityPoliceBox>
                <SectionItemConfirmSecurityPolicyLink href={''}>персональных данных</SectionItemConfirmSecurityPolicyLink>
            </SectionItemConfirmSecurityPolicy>
        </Form>


    )
}

export default ModalProfileUserConfirmEditEmail