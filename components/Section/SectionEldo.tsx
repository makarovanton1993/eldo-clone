import React from 'react'
import styles from './EldoProduct.module.scss';
import {BsBell} from  "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from 'styled-components';
import { Div, TypographyH2,Text, Button, Ul, Li } from '../../styles/components/component';
import Link from 'next/link';

const WrapEldoProduct = styled.section`
`
const EldoProductInner = styled(Div)`
    display: flex;
    @media(max-width: 1240px) {
        justify-content: space-between;
    }
    @media(max-width: 998px) {
        overflow: scroll;
    }
`
const EldoBlock = styled(Div)`
    flex: 0 0 280px;
    margin-right: 50px;
    @media(max-width: 1240px) {
        margin-right: 0;
    }
    @media(max-width: 998px) {
        margin-right: 20px;
    }
`
const Title = styled(TypographyH2)`
    font-size: 24px;
    font-weight: 500;
    &:hover{
        color:#76bc21;
        cursor: pointer;
    }
`
const SupTitle = styled(Text)`
    color:#555555;
    font-size: 12px;
    margin-bottom: 14px;
`
const EldoImg = styled(Div)`
    position: relative;
        border-radius: 6px;
        overflow: hidden;
        &:before{
            content:'';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            transition: opacity .9s;
            opacity: 0;
            background-color:rgba(12, 17, 5, 0.4);
            background-image: url('/images/eldoBlockImg-1.svg');
            background-repeat: no-repeat;
            background-position: 50% 50%;
            width: 100%;
            height: 100%;
        }
        & img{
            display: block;
            object-fit: cover;
            width: 100%;
            margin: 0;
        }
`
const PromoBlockBtnDesc = styled(Text)`
    transition: color .9s;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    cursor: pointer;
`
const PromoBlockBtn = styled(Button)`
    border: none;
    background-color: transparent;
    text-align: left;
    margin-bottom: 20px;
    &:hover{
        cursor: pointer;
        ${EldoImg}::before{
                opacity: 1;
    }
        ${PromoBlockBtnDesc}{
            color:#76bc21;  
    }
    }
`
const PromoBlockBtnBig = styled(PromoBlockBtn)`
    margin-bottom: 10px;
    ${EldoImg}{
        margin-bottom: 10px;
    }
`
const PromoBlockBtnSmall = styled(PromoBlockBtn)`
    display: flex;
    margin-bottom: 40px;
    ${EldoImg}{
        display: block;
            max-width: 80px;
            width: 100%;
            height: 54px;
            margin-right: 10px;
            &:before{
                background-size: 25px 25px;
            } 
    }
    ${PromoBlockBtnDesc}{
        transition: color .9s;
        font-size: 13px;
        line-height: 18px;
        font-weight: 500;
        cursor: pointer;
    }
`
const EldoBlockFooter = styled(Div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    height: 36px;
`
const EldoBlockFooterBtn = styled(Div)`
    
`
const EldoBlockFooterBtnSubscribe = styled(EldoBlockFooterBtn)`
        background-color:#d0472e;
        color:#FFF;
        padding: 8px 18px;
        border:none;
        border-radius:5px;
        display: flex;
        align-items:center;
        transition: background-color .7s;
        font-size: 16px;
        &:hover{
            background-color:rgb(133, 9, 9);
        }
        & span{
            margin-right: 8px;
        }
        & svg{
            width: 16px;
            height: 18px
        }
`
const EldoBlockFooterLinkAll = styled(Link)`
        display: flex;
        align-items:center;
        font-size: 13px;
        transition:color .7s;
        &:hover{
            color:#76bc21;
        }
        svg{
            height: 14px ;
            width: 20px;
            margin-left: 4;
        }
`
const Hashtags = styled(Div)`
    margin-left: auto;
    padding-top: 70px;
    @media(max-width: 1240px) {
        display:none;
    }
`
const HashtagsList = styled(Ul)`
   display: flex;
    flex-direction: column;
`
const HashtagsListItem = styled(Li)`
   display: flex;
        align-self: flex-start;
        background-color: #f5f5f5;
        padding: 5px 15px;
        margin-bottom: 10px;
        font-size: 12px;
        padding: 10px 8px;
        &:hover{
            color: #76bc21;
        }
`
const HashtagsListLink = styled(Link)`
   
`
const EldoProduct = () => {
  return (
    <WrapEldoProduct>
        <EldoProductInner>
            <EldoBlock>
                <Title>
                ЭльдоTUBE
                </Title>
                <SupTitle>
                Канал, где о технике говорят много и со знанием дела
                </SupTitle>
                <PromoBlockBtnBig>
                    <EldoImg>
                        <img src="//static.eldorado.ru/upload/iblock/d14/d14770e256e7fc412778a3393332ffa1.jpg/resize/280x200/" alt="" />
                    </EldoImg>
                    <PromoBlockBtnDesc>
                    Лимитированная линейка ROWENTA x KARL LAGERFELD
                    </PromoBlockBtnDesc>
                </PromoBlockBtnBig>
                <PromoBlockBtnSmall>
                    <EldoImg>
                        <img src="//static.eldorado.ru/upload/iblock/6b4/6b4bdee81b61cfa009d6e972a6c2b9c4.jpg/resize/85x55/" alt="" />
                    </EldoImg>
                    <PromoBlockBtnDesc>
                    Паровая система для ухода за одеждой Tefal CARE FOR YOU YT3040E1
                    </PromoBlockBtnDesc>
                </PromoBlockBtnSmall>
                <PromoBlockBtnSmall>
                    <EldoImg>
                        <img src="//static.eldorado.ru/upload/iblock/6b4/6b4bdee81b61cfa009d6e972a6c2b9c4.jpg/resize/85x55/" alt="" />
                    </EldoImg>
                    <PromoBlockBtnDesc>
                    Посудомоечная машина Midea MFD45S110Si
                    </PromoBlockBtnDesc>
                </PromoBlockBtnSmall>
                <EldoBlockFooter>
                    <EldoBlockFooterBtnSubscribe>
                        <span>Подписывайся</span> 
                        <div><BsBell /></div>
                    </EldoBlockFooterBtnSubscribe>
                    <EldoBlockFooterLinkAll href="/123">Смотреть все <AiOutlineArrowRight/></EldoBlockFooterLinkAll>
                </EldoBlockFooter>
            </EldoBlock>
            <EldoBlock>
                <Title>
                ЭльдоTUBE
                </Title>
                <SupTitle>
                Канал, где о технике говорят много и со знанием дела
                </SupTitle>
                <PromoBlockBtnBig>
                    <EldoImg>
                        <img src="//static.eldorado.ru/upload/iblock/d14/d14770e256e7fc412778a3393332ffa1.jpg/resize/280x200/" alt="" />
                    </EldoImg>
                    <PromoBlockBtnDesc>
                    Лимитированная линейка ROWENTA x KARL LAGERFELD
                    </PromoBlockBtnDesc>
                </PromoBlockBtnBig>
             <PromoBlockBtnSmall>
                    <EldoImg>
                        <img src="//static.eldorado.ru/upload/iblock/6b4/6b4bdee81b61cfa009d6e972a6c2b9c4.jpg/resize/85x55/" alt="" />
                    </EldoImg>
                    <PromoBlockBtnDesc>
                    Паровая система для ухода за одеждой Tefal CARE FOR YOU YT3040E1
                    </PromoBlockBtnDesc>
                </PromoBlockBtnSmall>
                <PromoBlockBtnSmall>
                    <EldoImg>
                        <img src="//static.eldorado.ru/upload/iblock/6b4/6b4bdee81b61cfa009d6e972a6c2b9c4.jpg/resize/85x55/" alt="" />
                    </EldoImg>
                    <PromoBlockBtnDesc>
                    Посудомоечная машина Midea MFD45S110Si
                    </PromoBlockBtnDesc>
                </PromoBlockBtnSmall>
                <EldoBlockFooter>
                    <EldoBlockFooterLinkAll href="/123">Смотреть все <AiOutlineArrowRight/></EldoBlockFooterLinkAll>
                </EldoBlockFooter>
            </EldoBlock>
            <EldoBlock>
                <Title>
                ЭльдоTUBE
                </Title>
                <SupTitle>
                Канал, где о технике говорят много и со знанием дела
                </SupTitle>
                <PromoBlockBtnBig>
                    <EldoImg>
                        <img src="//static.eldorado.ru/upload/iblock/d14/d14770e256e7fc412778a3393332ffa1.jpg/resize/280x200/" alt="" />
                    </EldoImg>
                    <PromoBlockBtnDesc>
                    Лимитированная линейка ROWENTA x KARL LAGERFELD
                    </PromoBlockBtnDesc>
                </PromoBlockBtnBig>
             <PromoBlockBtnSmall>
                    <EldoImg>
                        <img src="//static.eldorado.ru/upload/iblock/6b4/6b4bdee81b61cfa009d6e972a6c2b9c4.jpg/resize/85x55/" alt="" />
                    </EldoImg>
                    <PromoBlockBtnDesc>
                    Паровая система для ухода за одеждой Tefal CARE FOR YOU YT3040E1
                    </PromoBlockBtnDesc>
                </PromoBlockBtnSmall>
                <PromoBlockBtnSmall>
                    <EldoImg>
                        <img src="//static.eldorado.ru/upload/iblock/6b4/6b4bdee81b61cfa009d6e972a6c2b9c4.jpg/resize/85x55/" alt="" />
                    </EldoImg>
                    <PromoBlockBtnDesc>
                    Посудомоечная машина Midea MFD45S110Si
                    </PromoBlockBtnDesc>
                </PromoBlockBtnSmall>
                <EldoBlockFooter>
                    <EldoBlockFooterLinkAll href="/123">Смотреть все <AiOutlineArrowRight/></EldoBlockFooterLinkAll>
                </EldoBlockFooter>
            </EldoBlock>
            <Hashtags>
                <HashtagsList>
                    <HashtagsListItem>
                        <HashtagsListLink href="/asd">
                        # смартфоны и гаджеты
                        </HashtagsListLink>
                    </HashtagsListItem>
                    <HashtagsListItem>
                        <HashtagsListLink href="/asd">
                        # техника для дома
                        </HashtagsListLink>
                    </HashtagsListItem>
                    <HashtagsListItem>
                        <HashtagsListLink href="/asd">
                        # техника для кухни
                        </HashtagsListLink>
                    </HashtagsListItem>
                    <HashtagsListItem>
                        <HashtagsListLink href="/asd">
                        # телевизоры, аудио, видео
                        </HashtagsListLink>
                    </HashtagsListItem>
                    <HashtagsListItem>
                        <HashtagsListLink href="/asd">
                        # компьютеры и ноутбуки
                        </HashtagsListLink>
                    </HashtagsListItem>
                    <HashtagsListItem>
                        <HashtagsListLink href="/asd">
                            # красота и здоровье
                        </HashtagsListLink>
                    </HashtagsListItem>
                    <HashtagsListItem>
                        <HashtagsListLink href="/asd">
                        # игры, софт, развлечения
                        </HashtagsListLink>
                    </HashtagsListItem>
                    <HashtagsListItem>
                        <HashtagsListLink href="/asd">
                            # фото и видео
                        </HashtagsListLink>
                    </HashtagsListItem>
                </HashtagsList>
            </Hashtags>
        </EldoProductInner>
    </WrapEldoProduct>
  )
}

export default EldoProduct