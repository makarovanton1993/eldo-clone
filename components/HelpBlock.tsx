import React, { useContext, useState } from 'react'

import { SlBubble } from "react-icons/sl";
import { FaTelegramPlane, FaViber } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Button, Div, Li, Span, Ul } from '../styles/components/component';
import ModalHelpChat from './Modal/ModalHelpChat';
import { AppContent } from './Layout/Layout';
// import styles from './HelpBlock.module.scss';
export interface HelpBlockProps {
    visibleMenuHelp: boolean;
    setVisibleMenuHelp: (value: boolean) => void;
    visibleChatHelp: boolean;
    setVisibleChatHelp: (value: boolean) => void;
}

const WrapHelpBlock = styled(Div)`
    position: fixed;
    bottom: 25px;
    right: 25px;
`
const btnVisibleMenu = css`
    background-color:transparent;
        position: relative;
        &:before{
            content:'';
            position: absolute;
            top: 50%;
            transform: translateY(-50%) rotate(125deg) ;
            left: 50%;
            width: 1px;
            height: 70%;
            background-color:var(--main-color);
            
        }
        &:after{
            content:'';
            position: absolute;
            top: 50%;
            transform: translateY(-50%) rotate(50deg) ;
            left: 50%;
            width: 1px;
            height: 70%;
            background-color:var(--main-color);
            
        }
        & svg{
            display: none;
        }
`
const Btn = styled(Button) <any>`
    width: 60px;
    height: 60px;
    border:1px solid var(--main-color);
    border-radius:50%;
    background-color:var(--main-color);
    display: flex;
    align-items:center;
    justify-content: center;
    & svg{
        width: 70%;
        height: 70%;
        fill: var(--white-color);
    }
    ${({ visible }: any) => visible && btnVisibleMenu}
`
const BtnMenu = styled(Div)`
    position: absolute;
    bottom: 75px;
    right: 50%;
    transform: translateX(15%);
`
const BtnMenuList = styled(Ul)`
`
const BtnMenuItem = styled(Li)`
    margin-bottom: 20px;
    text-align: start;
`
const BtnMenuItemButton = styled(Button)`
    background-color:transparent;
    border:none;
    white-space: nowrap;
    display: flex;
    align-items:center;
    justify-content: flex-end;
`
const BtnMenuItemLink = styled(Link)`
    display: flex;
    align-items:center;
    justify-content: flex-end;
                
`
const BtnMenuItemSpan = styled(Span)`
    display: flex;
    padding: 2px 6px;
    border-radius:5px 0 0 5px;
    margin-right: -1px;
    background-color:var(--white-color);
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: rgb(85, 85, 85);
                
`
const BtnMenuItemWrapImg = styled(Div)`
    width: 40px;
    height: 40px;
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content: center;
    & svg{
        width: 20px;
        height: 20px;
    }
`
const BtnMenuItemWrapImgTelegram = styled(BtnMenuItemWrapImg)`
    background-color:rgb(59, 172, 238);
`
const BtnMenuItemWrapImgViber = styled(BtnMenuItemWrapImg)`
    background-color:rgb(89, 5, 122);
`
const BtnMenuItemWrapImgChat = styled(BtnMenuItemWrapImg)`
    background-color:rgb(13, 153, 0);
`
const HelpBlock = ({ visibleHelpMenu, setVisibleHelpMenu }: any) => {
    // const { visibleHelpModal, setVisibleHelpModal } = useContext(AppContent);
    const onClickBtnMenu = () => {
        setVisibleHelpMenu(!visibleHelpMenu);

    }
    const [visibleChatHelp, setVisibleChatHelp] = useState<boolean>(false);
    return (
        <WrapHelpBlock>
            <Btn visible={visibleHelpMenu} onClick={onClickBtnMenu}>
                <SlBubble />
            </Btn>
            {visibleHelpMenu &&
                <BtnMenu>
                    <BtnMenuList>
                        <BtnMenuItem onClick={() => setVisibleChatHelp(true)}>
                            <BtnMenuItemButton>
                                <BtnMenuItemSpan>Онлайн чат</BtnMenuItemSpan>
                                <BtnMenuItemWrapImgChat>
                                    <BsFillChatLeftTextFill style={{ fill: 'rgb(255, 255, 255)' }} />
                                </BtnMenuItemWrapImgChat>
                            </BtnMenuItemButton>
                        </BtnMenuItem>
                        <BtnMenuItem>
                            <BtnMenuItemLink href={'/viber'}>
                                <BtnMenuItemSpan>Viber</BtnMenuItemSpan>
                                <BtnMenuItemWrapImgViber>
                                    <FaViber style={{ fill: 'rgb(255, 255, 255)' }} />
                                </BtnMenuItemWrapImgViber>
                            </BtnMenuItemLink>
                        </BtnMenuItem>
                        <BtnMenuItem>
                            <BtnMenuItemLink href={'/telegtam'}>
                                <BtnMenuItemSpan>Telegram</BtnMenuItemSpan>
                                <BtnMenuItemWrapImgTelegram>
                                    <FaTelegramPlane style={{ fill: 'rgb(255, 255, 255)' }} />
                                </BtnMenuItemWrapImgTelegram>
                            </BtnMenuItemLink>
                        </BtnMenuItem>
                    </BtnMenuList>
                </BtnMenu>
            }
            {visibleChatHelp && <ModalHelpChat visibleChatHelp={visibleChatHelp} setVisibleChatHelp={setVisibleChatHelp} />}
        </WrapHelpBlock>
    )
}

export default HelpBlock


