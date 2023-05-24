
import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr';
import styled from 'styled-components'

import FormRegistAndAuth from '../Forms/FormRegistAndAuth';
import FormRegistAndAuthGetCode from '../Forms/FormRegistAndAuthGetCode';
import FormRegistAndAuthGetTel from '../Forms/FormRegistAndAuthGetTel';

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
    opacity:${({ visibleAuthAndRegistModal }) => visibleAuthAndRegistModal ? 1 : 0};
    visibility:${({ visibleAuthAndRegistModal }) => visibleAuthAndRegistModal ? 'visible' : "hidden"};
    transition:opacity ease .6s;
    pointer-events: ${({ visibleAuthAndRegistModal }) => visibleAuthAndRegistModal == false && 'none'}; 
`
const ModalAuthAndRegistrationContainer = styled.div`
    position:relative;
    
`

const ModalAuthAndRegistration = ({ visibleAuthAndRegistModal, setVisibleAuthAndRegistModal }: any) => {
    function onHandleCloseModal(e: any) {
        setVisibleAuthAndRegistModal(false);
    }
    return (
        <ModalAuthAndRegistrationWrap visibleAuthAndRegistModal={visibleAuthAndRegistModal} onClick={(e: any) => onHandleCloseModal(e)}>
            <ModalAuthAndRegistrationContainer onClick={(e) => e.stopPropagation()}>
                <FormRegistAndAuth visibleAuthAndRegistModal={visibleAuthAndRegistModal} setVisibleAuthAndRegistModal={setVisibleAuthAndRegistModal} />
            </ModalAuthAndRegistrationContainer>
        </ModalAuthAndRegistrationWrap >
    )
}
export default ModalAuthAndRegistration;