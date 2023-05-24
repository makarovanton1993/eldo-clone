import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GrFormClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { generateCode } from '../../http/userApi'
import { auth } from '../../redux/slices/userSlice'

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
`
const ModalButtonEdit = styled.button`
    color:#397812;
    background-color:transparent;
    border:none;
    font-size:16px;
    padding-left:5px;
`

const FormRegistAndAuthGetTel = ({ setVisibleModalCode }: any) => {
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
    const [inputValue, setInputValue] = useState('');

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
    const clearInp = (e: any) => {
        e.preventDefault();
        setInputValue('');
    }
    const onHandleCloseModal = (e: any) => {
        e.preventDefault();
        setVisibleAuthAndRegistModal(false);
    }
    const onSubmit: SubmitHandler<any> = async info => {
        await generateCode(info.numberPhone);
        setVisibleModalCode(true);
    }
    return (
        <ModalForm ref={formRef} onSubmit={handleSubmit(onSubmit)} onClick={onHandleCloseInp} >
            <ModalSubTitle>
                Вход или регистрация
            </ModalSubTitle>
            <ModalTitle>
                Введите номер телефона
            </ModalTitle>
            <ModalText>
                Мы отправим вам код в уведомлении на телефон или позвоним
            </ModalText>
            <ModalInputTelWrap >
                <ModalHiddenBlock ref={inputRef} onClick={onVisibleInp}>
                    <ModalSpan visibleNumber={inputOpen} >
                        Мобильный телефон*1
                    </ModalSpan >
                    <ModalInput
                        {...register('numberPhone', { required: "Обязательное поле", minLength: { value: 5, message: 'Не менее 4 символов' } })} inputOpen={inputOpen} />
                    {errors.numberPhone && <ModalErrorSpan>{errors.numberPhone.message}</ModalErrorSpan>}
                    {inputValue && <ModalButtonS onClick={clearInp}>close</ModalButtonS>}
                </ModalHiddenBlock>
            </ModalInputTelWrap>
            <ModalButton >
                Получить код
            </ModalButton>
            <ModalLink>
                Вход или регистрация для юредических лиц
            </ModalLink>
            <ModalBlock>
                Возникли проблемы? Посетите раздел
                <ModalLinkFaq href={'/promo/prm-faq-authorization-registration/'}>
                    FAQ
                </ModalLinkFaq>
            </ModalBlock>
        </ModalForm >
    )
}

export default FormRegistAndAuthGetTel