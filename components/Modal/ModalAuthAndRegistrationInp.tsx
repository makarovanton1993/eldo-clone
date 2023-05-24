import React, { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import InputMask from 'react-input-mask';
const ModalAuthAndRegistrationInputWrap = styled.div<any>`
    padding:6px 10px;
    width:100%;
    height:50px;
    margin-bottom:30px;
    border:1px solid #cdcdcd;
    position:relative;
    
`
const ModalAuthAndRegistrationInput = styled(InputMask) <any>`
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
const ModalAuthAndRegistrationButton = styled.button`
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
    height:100%;
    /* opacity:${({ visibleNumber }) => visibleNumber ? 1 : 0}; */
`
const ModalAuthAndRegistrationErrorSpan = styled.span`
  position: absolute;
    z-index: 18;
    color: red;
    top: 51px;
`
type Inputs = {
    numberPhone: string,
    exampleRequired: string,
};
const ModalAuthAndRegistrationInp = ({ register, errors, reset }: any, ref: any) => {
    const [inputValue, setInputValue] = useState('');
    const [inputOpen, setInputOpen] = useState(false);
    // const inputRefBox = useRef(null);
    // const inputRef = useRef(null);
    const [inputValueMask, setInputValueMask] = useState();

    const onVisibleInp = () => {
        setInputOpen(true);
    }

    const clearInp = (e: any) => {
        e.preventDefault();
        setInputValue('');
    }

    useEffect(() => {
        const onHandleClick = (e: any) => {
            if (inputRefBox.current !== null) {
                if (!inputRefBox.current.contains(e.target)) {
                    setInputOpen(false);
                    // setInputValue('')

                }
            }
        }
        document.addEventListener("click", onHandleClick);
        return () => document.removeEventListener("click", onHandleClick);
    }, [])
    console.log(errors.numberPhone)
    return (
        <ModalAuthAndRegistrationInputWrap ref={inputRefBox}>
            <ModalAuthAndRegistrationSpanHidden hidden={inputOpen} onClick={onVisibleInp}>
                Мобильный телефон*2
            </ModalAuthAndRegistrationSpanHidden>
            <ModalAuthAndRegistrationHiddenBlock >
                <ModalAuthAndRegistrationSpan visibleNumber={inputOpen}>
                    Мобильный телефон*1
                </ModalAuthAndRegistrationSpan >
                <ModalAuthAndRegistrationInput   {...register('numberPhone', { required: 'true' })} />
                {errors.numberPhone && <ModalAuthAndRegistrationErrorSpan>X</ModalAuthAndRegistrationErrorSpan>}
                <ModalAuthAndRegistrationButton onClick={clearInp}>close</ModalAuthAndRegistrationButton>
            </ModalAuthAndRegistrationHiddenBlock>

        </ModalAuthAndRegistrationInputWrap>
    )
}

export default ModalAuthAndRegistrationInp;