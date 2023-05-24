import React from 'react'
import { IoClose } from 'react-icons/io5'
import styled from 'styled-components';
import { Button, Div, Input, Span, TypographyH3 } from '../../styles/components/component';
// import styles from './ModalBonusWithShop.module.scss'

interface ModalBonusWithShopProps{
    visibleModalCheck:boolean,
    setVisibleModalCheck:(props:boolean)=>void;
}
const WrapModalBonusWithShop = styled(Div)`
    position: fixed;
    z-index: 11111111111111111111;
    top: 0;
    left: 0;
    right: 0;
    background-color:rgba(0, 0, 0,0.5);
    height: 100vh;
    overflow-y: hidden;
`
const Modal = styled(Div)`
    position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
        overflow-y: hidden;
        max-width: 906px;
        width: 100%;
        height: 545px;
        background-color:#fff;
        padding: 35px;
        display: flex;
        justify-content: space-between;
        border-radius:10px;
`
const CloseModal = styled(Button)`
    position: absolute;
            right: 10px;
            top: 10px;
            border:none;
            background-color: transparent;
            cursor: pointer;
            svg{
                width: 20px;
                height: 20px;
                & path{
                    fill: grey;
                }
            }
            &:hover{
                svg{
                    path{
                        fill:red
                    }
                }
            }
`
const ModalLeft = styled(Div)`
    max-width: 470px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ModalLeftTitle = styled(TypographyH3)`
    margin-bottom: 30px;
`
const ModalLeftForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const ModalLeftLabel = styled.label`
    display: flex;
    flex-direction:column;
    margin-right: 20px;
    font-size: 14px;
    &:nth-child(even){
        margin-right: 0px;
    }
`
const ModalLeftText = styled(Span)`
    margin-bottom: 8px;
    display: block;
`
const ModalLeftInput = styled(Input)`
    margin-bottom: 15px;
    display: block;
    border: 1px solid;
    border-radius: 3px;
    padding:4px 5px;
`
const ModalLeftBtn = styled(Button)`
    width: 100%;
    padding: 15px;
    text-align: center; 
    border:none;
    background-color: #b9dc8e;
    color: #fff;
    font-size: 16px;
    border-radius:2px;
`
const ModalRight = styled(Div)`
    width: 340px;
    height: 100%;
    background-color: rgb(95, 95, 95);
`
const ModalBonusWithShop = ({setVisibleModalCheck}:ModalBonusWithShopProps) => {
    const onHandleVisibleModal = () => {
        setVisibleModalCheck(false)
    }
  return (
    <WrapModalBonusWithShop>
        <Modal>
           <CloseModal onClick={onHandleVisibleModal}><IoClose/></CloseModal> 
           <ModalLeft>
            <ModalLeftTitle>Получите бонусы с покупки</ModalLeftTitle>
            <ModalLeftForm action="">
                <ModalLeftLabel >
                    <ModalLeftText>Номер магазина</ModalLeftText>
                    <div><ModalLeftInput type="text" placeholder='A'/></div>
                </ModalLeftLabel>
                <ModalLeftLabel >
                    <ModalLeftText>Номер смены</ModalLeftText>
                    <ModalLeftInput type="text"  placeholder='0000'/>
                </ModalLeftLabel>
                <ModalLeftLabel >
                    <ModalLeftText>Номер чека</ModalLeftText>
                    <ModalLeftInput type="text"   placeholder='0000 0000 00 00 00'/>
                </ModalLeftLabel>
                <ModalLeftLabel >
                    <ModalLeftText>Код для получения бонусов</ModalLeftText>
                    <ModalLeftInput type="text" placeholder='0000'/>
                </ModalLeftLabel>
                <ModalLeftLabel >
                    <ModalLeftText>Номер кассы</ModalLeftText>
                    <ModalLeftInput type="text" placeholder='000'/>
                </ModalLeftLabel>
                <ModalLeftLabel >
                    <ModalLeftText>Дата покупки</ModalLeftText>
                    <ModalLeftInput type="date" />
                </ModalLeftLabel>
            </ModalLeftForm>
            <ModalLeftBtn>Получить бонусы</ModalLeftBtn>
           </ModalLeft>
           <ModalRight>
           </ModalRight>
        </Modal>
    </WrapModalBonusWithShop>
  )
}

export default ModalBonusWithShop