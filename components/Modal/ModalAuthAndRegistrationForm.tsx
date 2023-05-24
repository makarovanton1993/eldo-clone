import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GrFormClose } from 'react-icons/gr'
import styled from 'styled-components'
import ModalAuthAndRegistrationInp from './ModalAuthAndRegistrationInp'
const ModalAuthAndRegistrationWrap = styled.div<any>`
    position:fixed;
    z-index:1111;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    background-color:rgba(43, 43, 43, 0.4);
    justify-content:center;
`
const ModalAuthAndRegistrationClose = styled.button`
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
const ModalAuthAndRegistrationF = styled.form`
    font-size:16px;
`
const ModalAuthAndRegistrationTitle = styled.h3`
    margin-bottom:30px;
`

const ModalAuthAndRegistrationButton = styled.button`
   width:100%;
   background-color:#56c228;
   border:none;
   padding:15px 0;
   color:#fff;
   font-size:16px;
   border-radius:2px;
   margin-bottom:20px;
`
const ModalAuthAndRegistrationLink = styled.button`
   color:#56c228;
   font-size:12px;
   margin-bottom:30px;
   background-color:transparent;
   border:none;
   cursor:poiner;
`
const ModalAuthAndRegistrationText = styled.p`
   font-size:12px;
   margin-bottom:30px;
   padding-left:5px;
`
const ModalAuthAndRegistrationLinkFaq = styled(Link)`
   color:#56c228;
   font-size:12px;
   margin-left:5px;
   border-bottom:1px dotted #56c228;
`
const ModalAuthAndRegistrationBox = styled.div<any>`
    position:relative;
    top:10%;
    background-color:#fff;
    height:320px;
    width:380px;
    border-radius:4px;
    padding:40px 30px;
`
const ModalAuthAndRegistrationInputWrap = styled.div<any>`
    padding:6px 10px;
    width:100%;
    height:50px;
    margin-bottom:30px;
    border:1px solid #cdcdcd;
    position:relative;
    overflow: hidden;
`
const ModalAuthAndRegistrationInput = styled.input<any>`
    border:none;
    width:100%;
    height:100%;
    outline:none;
    position:absolute;
    top:0;
    
`
const ModalAuthAndRegistrationSpan = styled.span<any>`
    display:flex;
    align-items:center;
    opacity:${({ visibleNumber }) => visibleNumber ? 1 : 0};
    color:#cdcdcd;
    position: absolute;
    top:20%;
    transform:translateY(-50%);
    z-index: 2;
    ${({ visibleNumber }) => visibleNumber && "animation: move .1s;"}
    font-size:14px;
    white-space:nowrap;
    @keyframes move {
        from {
            top:50%;
            font-size:16px;
  }

  to {
    top:20%;
    font-size:14px
  }
    }

`
const ModalAuthAndRegistrationSpanHidden = styled.span<any>`
    display:flex;
    align-items:center;
    display:${({ hidden }) => hidden ? "none" : "flex"};
    color:#cdcdcd;
    position: absolute;
    top:50%;
    transform:translateY(-50%);
    left:10px;
    z-index: 2;
    font-size:14px;
    white-space:nowrap;
    height:100%;
    width:100%;
`
const ModalAuthAndRegistrationBtn = styled.button`
    position:absolute;
    right:10px;
    width:20px;
    height:20px;
    border-radius:50%;
    overflow:hidden;
    top:50%;
    transform:translateY(-50%);
`
const ModalAuthAndRegistrationHiddenBlock = styled.div<any>`
    opacity:${({ visibleNumber }) => visibleNumber ? 1 : 0};
`
type Inputs = {
    numberPhone: string
};
const ModalAuthAndRegistrationForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({ mode: "onChange" });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const [inputValue, setInputValue] = useState('');
    const [inputOpen, setInputOpen] = useState(false);
    console.log(errors.numberPhone)
    return (
        <ModalAuthAndRegistrationWrap>
            <ModalAuthAndRegistrationBox >
                <ModalAuthAndRegistrationF onSubmit={handleSubmit(onSubmit)}>
                    <ModalAuthAndRegistrationTitle>
                        Вход или регистрация
                    </ModalAuthAndRegistrationTitle>
                    <ModalAuthAndRegistrationInputWrap >
                        <ModalAuthAndRegistrationSpanHidden hidden={inputOpen} onClick={() => { setInputOpen(true) }}>
                            Мобильный телефон*2
                        </ModalAuthAndRegistrationSpanHidden>
                        <ModalAuthAndRegistrationHiddenBlock visibleNumber={inputOpen}>
                            <ModalAuthAndRegistrationSpan >
                                Мобильный телефон*1
                            </ModalAuthAndRegistrationSpan>
                            <ModalAuthAndRegistrationInput  {...register('numberPhone', { required: 'true', minLength: { value: 4, message: 'Не менее 4 символов' } })} value={inputValue} onChange={(e: any) => { setInputValue(e.target.value) }} placeholder={`${inputOpen ? '+7 (___) ___ __ __' : ''}`} />

                            <ModalAuthAndRegistrationBtn >close</ModalAuthAndRegistrationBtn>
                        </ModalAuthAndRegistrationHiddenBlock>

                    </ModalAuthAndRegistrationInputWrap>
                    {errors.numberPhone && <div>{errors.numberPhone.message}</div>}
                    <ModalAuthAndRegistrationButton >
                        Получить код
                    </ModalAuthAndRegistrationButton>
                    <ModalAuthAndRegistrationLink>
                        Вход или регистрация для юредических лиц
                    </ModalAuthAndRegistrationLink>
                    <ModalAuthAndRegistrationText>
                        Возникли проблемы? Посетите раздел
                        <ModalAuthAndRegistrationLinkFaq href={'/promo/prm-faq-authorization-registration/'}>
                            FAQ
                        </ModalAuthAndRegistrationLinkFaq>
                    </ModalAuthAndRegistrationText>
                </ModalAuthAndRegistrationF>
                <ModalAuthAndRegistrationClose >
                    <GrFormClose />
                </ModalAuthAndRegistrationClose>
            </ModalAuthAndRegistrationBox >
        </ModalAuthAndRegistrationWrap>
    )
}

export default ModalAuthAndRegistrationForm