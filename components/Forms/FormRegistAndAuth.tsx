import axios, { AxiosRequestConfig } from 'axios';
import Link from 'next/link';
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { GrFormClose } from 'react-icons/gr';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../redux/slices/userSlice';
import { authorization, generateCode } from '../../http/userApi'
import TemporaryCodeBlock from '../Blocks/TemporaryCodeBlock';

const ModalBtnClose = styled.button`
    position:absolute;
    top:10px;
    right:10px;
    width:20px;
    border:none;
    background-color:transparent;
    cursor: pointer;
    width:30px;
    height:30px;
    svg{
        width:100%;
        height:100%;
        path{
            width:100%;
            height:100%;
            stroke:#adadad;
        }
    }
`
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
const ModalButton = styled.button.attrs({ type: "submit" })`
   width:100%;
   background-color:#56c228;
   border:none;
   padding:15px 0;
   color:#fff;
   font-size:16px;
   border-radius:2px;
   margin-bottom:20px;
`
const ModalLink = styled.button`
   color:#56c228;
   font-size:12px;
   margin-bottom:30px;
   background-color:transparent;
   border:none;
   cursor:poiner;
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
const ModalInputTelWrap = styled.div<any>`
    width:100%;
    height:50px;
    margin-bottom:30px;
    border:1px solid #cdcdcd;
    position:relative;
    
`
const ModalInput = styled.input <any>`
    border:none;
    width:100%;
    height:100%;
    outline:none;
    position:absolute;
    top:0;
    left:0;
    padding:6px 10px;
    /* visibility:${({ inputOpen }) => inputOpen ? 'visible' : 'hidden'}; */
`
const ModalInputSubmit = styled.input <any>`
    width:100%;
   background-color:#56c228;
   border:none;
   padding:15px 0;
   color:#fff;
   font-size:16px;
   border-radius:2px;
   margin-bottom:20px;
`
const ModalSpan = styled.span<any>`
    display:flex;
    align-items:center;
    /* opacity:${({ visibleNumber }) => visibleNumber ? 1 : 0}; */
    color:#cdcdcd;
    position: absolute;
    top:${({ visibleNumber }) => visibleNumber ? "20%" : "50%"};
    left:3%;
    transform:translateY(-50%);
    z-index: 2;
    animation:${({ visibleNumber }) => visibleNumber ? "move .1s" : "moveHidden .1s"};
    font-size:${({ visibleNumber }) => visibleNumber ? "12px" : "16px"};
    white-space:nowrap;
    transition:top linear .1s, font-size linear .1s;
    pointer-events:none;
    @keyframes move {
        from {
            top:50%;
            
        }
        to {
            top:20%;
            
        }
    }
    @keyframes moveHidden {
        from {
            top:20%;
            
        }
        to {
            top:50%;
        }
    }
`
const ModalButtonS = styled.button`
    position:absolute;
    right:10px;
    width:20px;
    height:20px;
    border-radius:50%;
    overflow:hidden;
    top:50%;
    transform:translateY(-50%);
    z-index:5;
`
const ModalHiddenBlock = styled.div<any>`
    height:100%;
    position:relative;
    z-index:6;
`
const ModalErrorSpan = styled.span`
  position: absolute;
    z-index: 18;
    color: red;
    top: 51px;
    right:0px;
    white-space:nowrap;
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

const FormRegistAndAuth = ({ visibleAuthAndRegistModal, setVisibleAuthAndRegistModal }: any) => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            numberPhone: ""
        }
    });
    const inputRef = useRef(null);
    const inputTelRef = useRef(null);
    const formRef = useRef(null);
    const [inputOpen, setInputOpen] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const isAuth = useSelector(auth);
    const [visibleGetCode, setVisbleGetCode] = useState(false);
    const [currentInfoUser, setCurrentInfoUser] = useState<any>({});

    let numberPhone = watch("numberPhone");
    const onHandleCloseModal = (e: any) => {
        e.preventDefault();
        setVisibleAuthAndRegistModal(false);
    }
    const onVisibleInp = (e: any) => {
        if (inputTelRef) {
            if (inputRef.current.contains(e.target)) {
                setInputOpen(true);
                inputRef.current.focus();
            }
        }
    }
    const onHandleCloseInp = (e: any) => {
        if (inputOpen) {
            if (!inputRef.current.contains(e.target) && !errors.numberPhone?.message) {
                setInputOpen(false);

            }
        }
    }
    const onSubmit: SubmitHandler<any> = async info => {
        const data = await generateCode(info.numberPhone);
        setCurrentInfoUser(data);
        setVisbleGetCode(true);

    }
    const clearInp = (e: any) => {
        e.preventDefault();
        reset();
    }

    useEffect(() => {
        if (visibleAuthAndRegistModal) {
            setInputOpen(false);
            reset();
        }

    }, [visibleAuthAndRegistModal]);

    return (
        <ModalForm ref={formRef} onSubmit={handleSubmit(onSubmit)} >
            <div onClick={onHandleCloseInp} >
                <ModalSubTitle>
                    {visibleGetCode ? "Подтверждение" : "Вход или регистрация"}
                </ModalSubTitle>
                <ModalTitle>
                    {visibleGetCode ? "Введите код" : "Введите номер телефона"}
                </ModalTitle>
                {visibleGetCode ?
                    <>
                        <ModalBlock>
                            <ModalTextGrey>Ваш номер {currentInfoUser?.numberPhone}</ModalTextGrey><ModalButtonEdit onClick={(e) => { e.preventDefault(); setVisbleGetCode(false); setInputOpen(true) }}>Изменить</ModalButtonEdit>
                        </ModalBlock>
                        <ModalText>
                            Введите код из уведомления или последние 4 цифры входящего номера
                        </ModalText>
                        <ModalBlock><ModalTextGrey>Например +7 XXX XXX </ModalTextGrey></ModalBlock>
                        <TemporaryCodeBlock currentInfoUser={currentInfoUser} />
                    </>
                    :
                    <>
                        <ModalText>
                            Мы отправим вам код в уведомлении на телефон или позвоним
                        </ModalText>
                        <ModalInputTelWrap >
                            <ModalHiddenBlock ref={inputRef} onClick={onVisibleInp}>
                                <ModalSpan visibleNumber={inputOpen} >
                                    Мобильный телефон*1
                                </ModalSpan >
                                <ModalInput
                                    {...register('numberPhone', { required: "Введите номер телефона", minLength: { value: 5, message: 'Не менее 4 символов' } })} inputOpen={inputOpen} />
                                {errors.numberPhone && <ModalErrorSpan>{errors.numberPhone.message}</ModalErrorSpan>}
                                {numberPhone && <ModalButtonS onClick={clearInp}>close</ModalButtonS>}
                            </ModalHiddenBlock>
                        </ModalInputTelWrap>
                        <ModalInputSubmit type="submit" />
                        <ModalLink>
                            Вход или регистрация для юредических лиц
                        </ModalLink>
                    </>}
                <ModalBlock>
                    Возникли проблемы? Посетите раздел
                    <ModalLinkFaq href={'/promo/prm-faq-authorization-registration/'}>
                        FAQ
                    </ModalLinkFaq>
                </ModalBlock>
                <ModalBtnClose onClick={onHandleCloseModal}>
                    <GrFormClose />
                </ModalBtnClose>
            </div>
        </ModalForm >

    )
}

export default FormRegistAndAuth