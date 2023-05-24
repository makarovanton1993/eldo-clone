import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { GrFormClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { auth } from '../../redux/slices/userSlice'
import TemporaryCodeBlock from '../Blocks/TemporaryCodeBlock'


const ModalForm = styled.form`
    font-size:16px;
    position:fixed;
    top:10%;
    left:50%;
    transform:translateX(-50%);
    background-color:#fff;
    width:380px;
    border-radius:4px;
    padding:40px 30px;
    text-align:center;
    
`
const ModalTitle = styled.h3`
    margin-bottom:15px;
`
const ModalSubTitle = styled.h3`
    font-size:14px;
    margin-bottom:15px; 
`
const ModalText = styled.p`
    font-size:16px;
    font-weight:400;
    margin-bottom:15px;
`
const ModalTextGrey = styled(ModalText)`
    color:#c4c4c4;
    margin-bottom:0;
`
const ModalBlock = styled.div`
   font-size:12px;
   margin-bottom:20px;
   display:flex;
   align-items:center;
   text-align:center;
   justify-content: center;
`
const ModalLinkFaq = styled(Link)`
   color:#56c228;
   font-size:12px;
   margin-left:5px;
   border-bottom:1px dotted #56c228;
`
const ModalButtonEdit = styled.button`
    color:#397812;
    background-color:transparent;
    border:none;
    font-size:16px;
    padding-left:5px;
`
type Inputs = {
    numberPhone: string
};

const FormRegistAndAuthGetCode = () => {
    const inputRef = useRef(null);
    const inputTelRef = useRef(null);
    const formRef = useRef(null);
    const [inputOpen, setInputOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();
    const isAuth = useSelector(auth);
    const [visibleGetCode, setVisbleGetCode] = useState(false);
    const [currentInfoUser, setCurrentInfoUser] = useState<any>({});


    const onVisibleInp = (e: any) => {
        if (inputTelRef) {
            if (inputRef.current.contains(e.target)) {
                setInputOpen(true);
                inputRef.current.focus();
            }
        }
    }
    const clearInp = (e: any) => {
        e.preventDefault();
        setInputValue('');
    }
    const onHandleInputChange = (e: any) => {
        setInputValue(e.target.value)
    }
    const onHandleCloseInp = (e: any) => {
        if (inputOpen) {
            if (!inputRef.current.contains(e.target) && !errors.numberPhone?.message) {
                setInputOpen(false);

            }
        }
    }

    return (
        <ModalForm ref={formRef} onClick={onHandleCloseInp} >
            <ModalSubTitle>
                {visibleGetCode ? "Подтверждение" : "Вход или регистрация"}
            </ModalSubTitle>
            <ModalTitle>
                {visibleGetCode ? "Введите код" : "Введите номер телефона"}
            </ModalTitle>
            <ModalBlock>
                <ModalTextGrey>Ваш номер {currentInfoUser?.numberPhone}</ModalTextGrey><ModalButtonEdit onClick={(e) => { e.preventDefault(); setVisbleGetCode(false); reset() }}>Изменить</ModalButtonEdit>
            </ModalBlock>
            <ModalText>
                Введите код из уведомления или последние 4 цифры входящего номера
            </ModalText>
            <ModalBlock><ModalTextGrey>Например +7 XXX XXX </ModalTextGrey></ModalBlock>
            <TemporaryCodeBlock currentInfoUser={currentInfoUser} />
            <ModalBlock>
                Возникли проблемы? Посетите раздел
                <ModalLinkFaq href={'/promo/prm-faq-authorization-registration/'}>
                    FAQ
                </ModalLinkFaq>
            </ModalBlock>
        </ModalForm >
    )
}

export default FormRegistAndAuthGetCode