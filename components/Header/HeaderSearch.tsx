import React from 'react'
import styled from 'styled-components';
import { Button, Div, Input, Span } from '../../styles/components/component';
// import styles from './HeaderSearch.module.scss';

const WrapHeaderSearch = styled(Div)`
    max-width: 650px;
    width: 100%;
    @media(max-width: 1242px) {
        margin-right: 20px;
    } 
    @media(max-width: 998px) {
        max-width: none;
        width: 100%;
        margin-right: 0;
    } 
`
const HeaderSearchForm = styled.form`
    height: 40px;
    display: flex;
`
const HeaderSearchInput = styled(Input)`
    position: relative;
    z-index: 1;
    max-width: 560px;
    width: 100%;
    height: 100%;
    transform: skewX(-12deg);
    border: 1px solid var(--main-color);
    border-radius: 4px 0 0 4px;
    padding: 0 15px;
    outline: none;
    &::placeholder{
        font-size: 16px;
        line-height: 18px;
        font-weight: 400;
        transform: skewX(10deg);
        color:rgb(109, 109, 109);
    }
    @media(max-width: 1242px) {
        width: 100%;
    }
    @media(max-width: 998px) {
        width: 100%;
    }
    @media(max-width: 760px) {
        transform: skewX(0deg);
        &::placeholder{
            transform: skewX(0deg);
                
        }
    } 
`
const HeaderSearchButton = styled(Button)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: transparent;
    border:none;
    background-color:var(--main-color);
    height: 100%;
    border-radius:0 4px 4px 0;
    min-width: 100px;
    color:var(--white-color);
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    line-height: 15px;
    color:var(--white-color);
    &:before{
        content: "";
        height: 100%;
        width: 50%;
        position: absolute;
        top: 0;
        left: -15px;
        background-color:var(--main-color);
        z-index:-1;
    }
    & svg{
        margin-left:10px;
    }
    @media(max-width: 760px) {
        min-width: 36px;
        &:before{
            display: block;
            transform: skewX(-12deg);
            top: 0px;
            left: -10px;
            z-index: 1;
        }
    }
`
const HeaderSearchSpan = styled(Span)`
    @media(max-width: 760px) {
        font-size: 0;
    }
`
const HeaderSearch = () => {
  return (
        <WrapHeaderSearch>
            <HeaderSearchForm action="/">
                <HeaderSearchInput type="text"  placeholder="Искать смартфон realme за рубль"/>
                <HeaderSearchButton>
                    <HeaderSearchSpan>Найти</HeaderSearchSpan>
                    <svg aria-hidden="true" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.999" cy="7" r="6" stroke="#fff" strokeWidth="2"></circle><path d="M11.999 12l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path></svg>
                </HeaderSearchButton>
            </HeaderSearchForm>
        </WrapHeaderSearch>
    
  )
}

export default HeaderSearch