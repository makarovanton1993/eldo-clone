import React from 'react'

import { IoClose } from "react-icons/io5";
import styled from 'styled-components';
import { Div } from '../../styles/components/component';
// import styles from './ModalHelpChat.module.scss';
export interface ModalHelpChatProps{
    visibleChatHelp: boolean;
    setVisibleChatHelp: (value: boolean ) => void;
}

const WrapModalHelpChat = styled(Div)`
    position: fixed;
    bottom:20px;
    right: 20px;
    z-index: 1111111;
    max-width: 310px;
    width: 100%;
    min-height: 410px;
    background-color:#ffffff;
    box-shadow: 0px 0px 10px rgb(78 78 78);
    border-radius:6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Header = styled(Div)`
    height:39px;
        width: 100%;
        background-color:rgb(29, 21, 21);
        display: flex;
        align-items:center;
        justify-content: flex-end;
        padding: 10px;
        & svg{
            fill:#fff;
            width: 25px;
            height: 25px;
        }
`
const Dialog = styled(Div)`
    min-height: 310px;
    max-height: 310px;
    width: 100%;
`
const CodingText = styled(Div)`
    border-top: 1px solid rgb(73, 73, 73);
    height: 100%!important;
    width: 100%;
    height: 75px!important;
`
const CodingTextArea = styled.textarea`
    width: 100%;
    height: inherit;
    border:none;
    padding: 10px;
`
const ModalHelpChat = ({visibleChatHelp,setVisibleChatHelp}:ModalHelpChatProps) => {
    const onClickClose = () => {
        setVisibleChatHelp(false);
    }
  return (
    <WrapModalHelpChat>
        <Header>
            <IoClose onClick={onClickClose}/>
        </Header>
        <Dialog>
        </Dialog>
        <div>
            <CodingText>
                <CodingTextArea name="" id="" placeholder='Введите текст...' ></CodingTextArea>
            </CodingText>
        </div>
    </WrapModalHelpChat>
  )
}

export default ModalHelpChat