import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
// import styles from './CardProductRecommend.module.scss';
import Link from 'next/link';
import styled from 'styled-components';
import { Button, Div, Text } from '../../styles/components/component';


const WrapCard = styled(Div)`
    position: relative;
    padding: 10px;
    z-index: 110;
    transition: box-shadow .7s;
    border-radius:5px;
    max-width: 252px;
    margin: 10px;
    &:hover{
        box-shadow: 0px 5px 9px 1px rgb(0 0 0 / 50%);
    }
    @media(max-width: 570px) {
        max-width: 260px;
        margin: 10px auto;
    }
    @media(max-width: 320px) {
        max-width: 270px;
        margin: 10px auto;
    }
`
const InfoBox = styled(Div)`
    font-size: 12px;
`
const InfoBoxBtn = styled(Div)`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #000;
    background-color: transparent;
`
const InfoBoxHidden = styled(Div)`
    height: 24px;
    justify-content: space-between;
    align-items:center;
    overflow: hidden;
    display: flex;
    background-color:#fff;
`
const InfoBoxLink = styled(Div)`
    display: inline-block;
    border:1px solid #000;
    border-radius: 3px;
    margin: 1px 0;
    padding: 2px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 160px;
    margin-right: 5px;
    &:hover{
        color: green;
        border-color: green;
    }
`
const InfoBoxOpen = styled(Div)`
    position: absolute;
    top:0;
    left: 0;
    padding: 17px;
    background: red;
    z-index: 11111;
    height: 92px;
    background-color:#fff;
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .5);
`
const InfoBoxBtnOpen = styled(Button)`
    position: absolute;
    bottom: 0;
    bottom: 6px;
    right: 10px;
    transform: rotate(180deg);
    border:none;
    background-color: transparent;
    cursor: pointer;
    svg{
        polyline{
            stroke: green;
        }
    }
`
const Content = styled(Div)`
    
`
const CartImg = styled(Div)`
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 30px 0 ;
    text-align: center;
    @media(max-width: 570px) {
        margin: 15px 0; 
    }
    @media(max-width: 320px) {
        margin: 15px 0; 
    }
`
const Bonus = styled(Div)`
    background-color:#f5f5f5;
    display: inline-block;
    font-size: 12px;
    padding:4px 4px 4px 4px;
    border-radius:4px;
    margin-bottom: 12px;
        & svg{
            margin-right: 4px;
        }
    @media(max-width: 570px) {
        margin-bottom: 8px;
    }
`
const RewiewsAndRating = styled(Div)`
    display: flex;
    margin-bottom: 8px;
`
const Rating = styled(Div)`
    display: flex;
    align-items:center;
    margin-right: 10px;
    & img{
        width: 16px;
        height: 16px;
        margin-right: 4px;
    }
`
const Rewiews = styled(Div)`
    
`
const CardInfo = styled(Text)`
    font-size: 12px;
    margin-bottom: 15px;
    &:hover{
        color:#76bc21;
    }
    @media(max-width: 570px) {
        margin-bottom: 10px;
    }
`
const PriceProduct = styled(Div)`
    margin-bottom: 15px;
    @media(max-width: 570px) {
        margin-bottom: 10px;
    }
`
const PriceProductTop = styled(Div)`
    display: flex;
    align-items:baseline;
`
const PriceProductOld = styled(Div)`
    color:#aa9d9d;
    font-size: 22px;
    position: relative;
    &:before{
        content: "";
        width: 100%;
       height: 1px;
       background-color: #aa9d9d;
        display: block;
        position: absolute;
        left: 0;
        top: 15px;
    }
`
const PriceProductDiscont = styled(Div)`
    margin-left: 10px;
    padding: 1px 4px;
    background-color:#76bc21;
    color:#fff;
    font-size: 15px;
    line-height: 17px;
    border-radius:2px;
`
const PriceProductCurrent = styled(Div)`
    font-size: 34px;
`
const CardFooter = styled(Div)`
    display: flex;
`
const Btn = styled(Button)`
    border:none;
    padding:10px 13px;
    border-radius:5px;
    background-color: #76bc21;
    color:#fff;
    margin-right: 15px;
    cursor:pointer;
`
const Favorite = styled(Button)`
    display: flex;
    justify-content: center;
    align-items:center;
    border: none;
    background-color:transparent;
    cursor: pointer;
    svg{
        path{
            transition:fill 1s;
            transition:stroke 1s;
            fill:transparent;     
        }
        &:hover{
            path{
                fill: red;
                stroke :#000;
            }
        }
}
`

const Card = (props: any) => {
    const [visibleBox, setVisibleBox] = useState(false);

    const onSetVisibleBox = (e: any) => {
        setVisibleBox(!visibleBox);
        e.preventDefault();

    }
    return (
        <WrapCard>
            <InfoBox>
                <InfoBoxHidden>
                    <InfoBoxLink>Первая распродажа года</InfoBoxLink>
                    <InfoBoxBtn onClick={onSetVisibleBox}>
                        <FiChevronDown />
                    </InfoBoxBtn>
                </InfoBoxHidden>
                {visibleBox && <InfoBoxOpen>
                    <InfoBoxLink>Первая распродажа года</InfoBoxLink>
                    <InfoBoxLink>Первая распродажа года</InfoBoxLink>
                    <InfoBoxBtnOpen onClick={onSetVisibleBox}><FiChevronDown /></InfoBoxBtnOpen>
                </InfoBoxOpen>}
            </InfoBox>
            <Content>
                <Link href={'/'}>
                    <CartImg>
                        <img src="https://static.eldorado.ru/photos/71/715/729/51/new_71572951_l_1605277779.jpeg/resize/150x150/" alt="" />
                    </CartImg>
                </Link>
                <Bonus>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" fill="none" viewBox="0 0 16 8"><path fill="#76BC21" fillRule="evenodd" d="M9.52379.202026L0 4.75963h7.08566l-.60945 3.03836L16 3.24039H8.91434L9.52379.202026z" clipRule="evenodd"></path></svg>
                    60 бонусов на карту
                </Bonus>
                <RewiewsAndRating>
                    <Rating>
                        <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.5-G-H-MABh1KUyi1lV4Br3h/static_spa/assets/star.dcf4b1ca.svg" alt="" />
                        3
                    </Rating>
                    <Link href={'/rewiews'}>
                        <Rewiews>10 отзывов</Rewiews>
                    </Link>
                </RewiewsAndRating>
                <Link href={'/cartId'}>
                    <CardInfo>
                        Робот-пылесос Supra VCS-4091
                    </CardInfo>
                </Link>
                <PriceProduct>
                    <PriceProductTop>
                        <PriceProductOld>
                            11 <span>199p.</span>
                        </PriceProductOld>
                        <PriceProductDiscont>
                            -10 000
                        </PriceProductDiscont>
                    </PriceProductTop>
                    <PriceProductCurrent>
                        1999 р.
                    </PriceProductCurrent>
                </PriceProduct>
                <CardFooter>
                    <Btn>
                        В корзину
                    </Btn>
                    <Favorite>
                        <svg viewBox="0 0 18 16" width="18" height="16"><path d="M8.42499 2.34819L8.95719 2.98372L9.53647 2.39078C10.4804 1.42459 11.7192 0.75 13.0737 0.75C15.4335 0.75 17.25 2.48485 17.25 4.8C17.25 6.1929 16.6143 7.53655 15.3189 9.0719C14.0169 10.6151 12.1253 12.2637 9.74769 14.2714L9.73271 14.2841L9.7184 14.2975L9 14.9716L8.2816 14.2975L8.27026 14.2869L8.2585 14.2767C5.87598 12.2201 3.9839 10.5719 2.67945 9.0366C1.38339 7.5112 0.75 6.19054 0.75 4.8C0.75 2.48485 2.56648 0.75 4.92632 0.75C6.32775 0.75 7.53344 1.28354 8.42499 2.34819Z" stroke="#C4C4C4" strokeWidth="1.5"></path></svg>
                    </Favorite>
                </CardFooter>
            </Content>
        </WrapCard>
    )
}

export default Card