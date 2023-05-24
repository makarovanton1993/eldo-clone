import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { user } from '../../redux/slices/userSlice'
import { checkAllEmailСoincidence, generateCode, generateCodeEmail } from '../../http/userApi'
import { Input, Label, Link } from '../../styles/components/component'
import ModalProfileUserConfirmEditEmail from './ModalProfileUserConfirmEditEmail'
const Wrap = styled.div<any>`
position:fixed;
    z-index:11111;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    background-color:rgba(43, 43, 43, 0.4);
    justify-content:center;
    align-items:center;
    transition:opacity ease .9s;
    visibility:${({ visibleModalEditEmail }) => visibleModalEditEmail ? 'visible' : 'hidden'};
    opacity:${({ visibleModalEditEmail }) => visibleModalEditEmail ? 1 : 0};
    
    pointer-events: ${({ visibleModalEditEmail }) => visibleModalEditEmail == false && 'none'};
`
const Container = styled.div`
    width:500px;
    background-color:#fff;
    border-radius:5px;
    padding:25px;
    position: relative;
`
const Form = styled.form`
`
const Title = styled.h3`
    
    margin-bottom:5px;
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
const BoxCurrentEmail = styled.div`
    background-color:#e3e3e3;
    display:flex;
    align-items:center;
    border:none;
    min-height:58px;
    margin-bottom:10px;
    padding:0 20px;
    color:#c3c3c3;
`
const InputBoxEmail = styled(InputBox)`
    background-color:#ffffff;
    margin-bottom:60px;
    
`
const InputDefault = styled.input`
    border:none;
    background-color:transparent;
    width:100%;
    outline:none;
    
`
const Div = styled.div`
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
const BtnClose = styled.button`
    position:absolute;
    top:10px;
    right:10px;
    border:none;
    background-color:transparent;
    font-size:20px;
    cursor:pointer;
`
const Text = styled.p<any>`
    margin-bottom:${({ secondary }) => secondary && '20px'};
    color:#b4b4b4;
    font-size:12px;
`

const ModalProfileUserEditMail = ({ visibleModalEditEmail, setVisibleModalEditEmail }: any) => {
    const { email, tel } = useSelector(user);
    const [newEmail, setNewEmail] = useState('');
    const [visibleInjectCode, setVisibleInjectCode] = useState(false);
    const handleCloseModal = () => {
        setVisibleModalEditEmail(false);

    }
    const handleNewEmail = (e: any) => {
        setNewEmail(e.target.value);
    }
    const handleEditEmail = async (e) => {
        e.preventDefault();

        try {
            const res = await checkAllEmailСoincidence(email, newEmail);
            console.log(res)
            if (res?.data) {
                if (+newEmail && +email !== +newEmail) {
                    await generateCode(tel);
                    setVisibleInjectCode(true)
                } else {
                    alert('Такой email уже есть')
                }
            } else {
                alert('Такой Email уже существует')
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Wrap visibleModalEditEmail={visibleModalEditEmail} >
            <Container>
                <BtnClose onClick={handleCloseModal}>X</BtnClose>

                {visibleInjectCode ?

                    <ModalProfileUserConfirmEditEmail newEmail={newEmail} setVisibleModalEditEmail={setVisibleModalEditEmail} setVisibleInjectCode={setVisibleInjectCode} />
                    :
                    <>
                        <Form>
                            <Title>Изменение адреса электронной почты</Title>
                            <BoxCurrentEmail>{email ? email : "makarovanton2020@yandex.ru"}</BoxCurrentEmail>
                            <InputBoxEmail>
                                <InputDefault placeholder='Введите новый email' onChange={e => handleNewEmail(e)} />
                            </InputBoxEmail>
                            <Button onClick={e => handleEditEmail(e)}>Отправить СМС с кодом подтверждения</Button>
                            <Text>Код подтверждения будет выслан на номер +7 (960) 602-47-38. Если вы не используете этот номер телефона, для изменения обратитесь в любой розничный магазин Эльдорадо.</Text>
                        </Form>
                    </>
                }

            </Container>

        </Wrap >
    )
}

export default ModalProfileUserEditMail