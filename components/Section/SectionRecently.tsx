import React from 'react'
import styled from 'styled-components';
import { Button, Div, Li, Ul } from '../../styles/components/component';
import Card from '../Card/CardProductRecommend';
// import styles from './SectionRecently.module.scss';

const WrapSectionRecently = styled(Div)`
    margin-bottom: 70px;
    overflow: hidden;
    position: relative;
    z-index: -1;
    @media(max-width: 1242px) {
        margin-bottom: 100px;
    }
    @media(max-width: 760px) {
        margin-bottom: 20px;
    }
    @media(max-width: 320px) {
        margin-bottom: 0px;
    }
`
const SectionRecentlyTop = styled(Div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SectionRecentlyTopList = styled(Ul)`
    display: flex;
    align-items:center;
    justify-content: space-between;
`
const SectionRecentlyTopItem = styled(Li)`
    margin-right: 10px;
`
const BtnDelete = styled(Button)`
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    opacity: .3;
    transition: opacity .7s;
    &:hover{
        cursor: pointer;
        color: #000;
        opacity: 1;
    }
`

const SectionRecently  = () => {
  return (
    <WrapSectionRecently>
        <SectionRecentlyTop>
            <h2>
                Вы недавно смотрели
            </h2>
            <BtnDelete>
                Очистить
            </BtnDelete>
        </SectionRecentlyTop>
        <SectionRecentlyTop>
            <SectionRecentlyTopList>
                <SectionRecentlyTopItem>
                    <Card/>
                </SectionRecentlyTopItem>
                <SectionRecentlyTopItem>
                    <Card/>
                </SectionRecentlyTopItem>
                <SectionRecentlyTopItem>
                    <Card/>
                </SectionRecentlyTopItem>
                <SectionRecentlyTopItem>
                    <Card/>
                </SectionRecentlyTopItem>

            </SectionRecentlyTopList>
        </SectionRecentlyTop>
    </WrapSectionRecently>
  )
}

export default SectionRecently 