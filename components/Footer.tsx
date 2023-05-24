import Link from 'next/link';
import React from 'react'

import styled from 'styled-components';
import { Button, Div, Li, Span, TypographyH3, Ul,Input, Label,Text } from '../styles/components/component';
// import styles from './Footer.module.scss';
const Container = styled(Div)`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px; 
    @media(max-width: 1242px) {
        max-width: 960px; 
    }
    @media(max-width: 988px) {
        max-width: 960px; 
    }
`
const WrapFooter = styled.footer`
    
`

const WrapTop = styled(Div)`
    background-color: #e9e9e9;
    height: 100%;
    
`

const Content = styled(Div)`
    display: flex;
    padding-top: 40px;
    padding-bottom: 40px;
    @media(max-width: 988px) {
        justify-content: center; 
    }
    @media(max-width: 760px) {
        justify-content: flex-start!important;
        padding: 20px;
    }
    @media(max-width: 568px) {
        padding:10px 0;
    }
`
const ContentTitle = styled(TypographyH3)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color:rgb(22, 22, 22);
    &:hover{
        color:#76bc21;
    }
`
const ContentLeft = styled(Div)`
    flex: 0 0 660px;
    @media(max-width: 988px) {
        flex: none; 
    }
    @media(max-width: 760px) {
        display: none;
    }
`
const List = styled(Ul)`
    display: flex;
    width: 100%;
    @media(max-width: 988px) {
        flex-wrap: wrap; 
    }
`
const Item = styled(Li)`
    width: 100%;
    @media(max-width: 988px) {
        width: 50%;
    }
`
const ContentList = styled(Ul)`
    display: flex;
    flex-direction: column;
`
const ContentItem = styled(Li)`
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    color:grey;
    &:hover{
        color: #76bc21;
    }
`
const ContentRight = styled(Div)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media(max-width: 1242px) {
        display: block;
    }
    @media(max-width: 988px) {
        width:287px ;
    }
    @media(max-width: 760px) {
        display: flex;
    }
    @media(max-width: 568px) {
        display: flex;
        flex-direction: column;
    }
`
const Contact = styled(Div)`
    @media(max-width: 760px) {
        margin-right: 10px;
    }
`
const ContactTitle =styled(TypographyH3)`
    color:#9d9d9d;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    margin-bottom: 15px; 
`
const ContactList = styled(Ul)`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    @media(max-width: 760px) {
        margin-bottom: 5px; 
    }
`
const ContactItem = styled(Li)`
    align-self: flex-start;
    padding: 6px;
    border-radius: 4px;
    background-color:#fff;
    margin-bottom: 6px;
    &:hover{
        color:#76bc21;
    }
`
const ContactButton = styled(Button)`
    display: flex;
    align-items: center;
    border: 0;
    background-color:transparent;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    color:#353434;
    &:hover{
        color:#76bc21;
    }
    & span{
        margin-right: 10px;
        width: 25px;
        height: 25px;
    }
    @media(max-width: 760px) {
        white-space: nowrap;
        width: 100%; 
    }
`
const ContactLink = styled(Link)`
    display: flex;
    align-items: center;
    border: 0;
    background-color:transparent;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    color:#353434;
    &:hover{
        color:#76bc21;
    }
    & span{
        margin-right: 10px;
        width: 25px;
        height: 25px;
    }
    @media(max-width: 760px) {
        white-space: nowrap;
        width: 100%; 
    }
`
const MessageMail = styled(Div)`
`
const MessageMailTitle = styled(TypographyH3)`
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    color:#434343;
    margin-bottom: 15px;
    @media(max-width: 760px) {
        margin: 8px 0;
        font-weight: 600;
        white-space: nowrap;
    }
`
const MessageMailInner = styled(Div)`
    background-color:#fff;
    padding: 8px;
    display: flex;
    display: inline-flex;
    align-self:flex-start;
    border-radius: 8px;
    @media(max-width: 760px) {
        background-color: transparent;
        padding: 0;
    }
`
const MessageMailSoc = styled(Span)`
    width: 36px;
    height: 36px;
    &:first-child{
         margin-right: 5px;
    }
`
const Info = styled(Div)`
    display: flex;
    flex: 0 0 285px;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width: 760px) {
        flex: 0 0 284px;
    }
    @media(max-width: 568px) {
        flex: 0;
    }
`
const InfoSubscrube = styled(Div)`
    
`
const InfoSubscrubeSpan = styled(Span)`
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color:#9d9d9d;
    margin-bottom: 10px;
`
const InfoSubscrubeForm = styled(Div)`
    display: flex;
    flex-direction: column;
`
const FormMail = styled(Div)`
    height: 28px;
    margin-bottom: 5px;
    display: flex;
    align-items:center;
    @media(max-width: 568px) {
        width: 284px;
    }
`
const FormMailInput = styled(Input)`
    border-radius: 2px;
    height: 100%;
    background-color:#fff;
    border: 1px solid #b4b4b4;
    padding: 0 10px;
    width: 100%;
    outline: none;
    &::placeholder{
        color:#b4b4b4;
    }
`
const FormMailButton = styled(Button)`
    position: relative;
    left: -1px;
    border-radius: 2px;
    height: 100%;
    font-size: 11px;
    line-height: 13px;
    font-weight: 500;
    color:#fff;
    background-color:#76bc21;
    border: 1px solid #b4b4b4;
    padding: 0 10px;
`
const FormMailButtonLabel = styled(Label)`
    font-size: 11px;
    line-height: 16px;
    color:#9d9d9d;
    margin-left: 5px;
    a{
        border-bottom: 1px dotted #9d9d9d;
    }
`
const PersData = styled(Div)`
`
const InfoSocial = styled(Div)`
    
`
const InfoSocialTitle = styled(TypographyH3)`
    font-size: 11px;
    line-height: 16px;
    font-weight: 400;
    color:#9d9d9d;
    margin-bottom: 10px;
`
const InfoSocialList = styled(Ul)`
    display: flex;
`
const InfoSocialItem = styled(Li)`
    margin-right: 15px;
    & a{
        opacity: .5;
    }
`
const InfoPay = styled(Div)`
    
`
const InfoPayTitle = styled(TypographyH3)`
    font-size: 11px;
    line-height: 16px;
    font-weight: 400;
    color:#9d9d9d;
    margin-bottom: 10px;
`
const InfoPayList = styled(Ul)`
    display: flex;
`
const InfoPayItem = styled(Li)`
    background-color: #fff;
    padding: 6px;
    border-radius: 4px;
    margin-right: 5px;
    & img{
        object-fit: contain;
    }
`
const WrapBottom = styled(Div)`
    background-color:#d9d9d9;
    @media(max-width: 988px) {
        & a{
                display: none;
            }
    }
    @media(max-width: 760px) {
        & a{
                display: none;
            }
    }
    
`
const WrapBottomInner = styled(Div)`
    height:80px;
    display: flex;
    align-items:center;
    justify-content: space-between;
`
const WrapBottomLeft = styled(Div)`
    display:flex;
    font-size: 14px;
    line-height: 18px;
    color:#9d9d9d;
    & * {
        margin-right: 20px;
   }
`
const WrapBottomLeftFirma = styled(Div)`
    @media(max-width: 568px) {
        & span{
            display: none;
        }
    }
`
const WrapBottomRight = styled(Div)`
    & a{
        position: relative;
        display: flex;
        align-items:center;
        font-size: 14px;
        line-height: 18px;
        color:#9d9d9d;
    } 
`
const WrapBottomRightText = styled(Text)`
    margin-right:5px;
`
const WrapBottomRightSpan = styled(Span)`
    width: 36px;
    height: 38px;   
    & .img{
            position: absolute;
            top: -50%;
            right: 0px;
            display: inline-block;
    }
`
const Footer = () => {
  return (
    <WrapFooter>
    <WrapTop>
        <Container>
            <Content>
                <ContentLeft>
                    <List>
                        <Item>
                            <ContentTitle>
                                Покупателю
                            </ContentTitle>
                            <ContentList>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Как зарегистрироваться
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Как сделать заказ
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Оплата
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Доставка
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Самовывоз
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Сервисная служба
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Обмен и возврат
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Подарочные карты
                                        </Link>
                                    </ContentItem>
                                    
                            </ContentList>
                        </Item>
                        <Item>
                            <ContentTitle>
                                Информация
                            </ContentTitle>
                            <ContentList>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Адреса магазинов
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Адреса пунктов выдачи
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Контакты
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Гарантии
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Кредит
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Бонусная программа
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Эльдоблог
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Учененная техника оптом
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Гарантия продавца
                                        </Link>
                                    </ContentItem>
                                </ContentList>
                        </Item>
                        <Item>
                            <ContentTitle>
                                Компания
                            </ContentTitle>
                            <ContentList>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Поставщикам
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Тендеры
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Эльдобазнес
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            реклама на сайте
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Арендодателям
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Арендаторам
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Благотворительность
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Экологические инициативы
                                        </Link>
                                    </ContentItem>
                                    <ContentItem>
                                        <Link href="/helf">
                                            Партнерская программа
                                        </Link>
                                    </ContentItem>
                                </ContentList>
                        </Item>
                    </List>
                </ContentLeft>
                <ContentRight>
                   <Contact>
                        <ContactTitle>
                            На связи 24/7
                        </ContactTitle>
                        <ContactList>
                            <ContactItem>
                                <ContactLink href='tel:8800222333'>
                                    <span>
                                        <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/phone.d8b1eeff.svg" alt="" />
                                    </span>
                                8 800 250 25 25
                                </ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <ContactButton>
                                    <span>
                                        <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/phone.d8b1eeff.svg" alt="" />
                                    </span>
                                    Чат с оператором
                                </ContactButton>
                                
                            </ContactItem>
                            <ContactItem>
                                <ContactLink  href='/helpInSite'>
                                <span>
                                        <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/phone.d8b1eeff.svg" alt="" />
                                    </span>
                                Через сайт
                                </ContactLink>
                            </ContactItem>
                        </ContactList>
                        <MessageMail>
                            <MessageMailTitle>
                                Напишите нам в мессенджеры
                            </MessageMailTitle>
                            <MessageMailInner>
                                <MessageMailSoc>
                                    <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/viber_color.404c458d.svg" alt="" />
                                </MessageMailSoc>
                                <MessageMailSoc>
                                    <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/telegram_color.535565f1.svg" alt="" />
                                </MessageMailSoc>
                            </MessageMailInner>
                        </MessageMail>
                   </Contact>
                    <Info>
                        <InfoSubscrube>
                            <InfoSubscrubeSpan>Новости и акции только для своих</InfoSubscrubeSpan>
                            <InfoSubscrubeForm>
                                <FormMail>
                                    <FormMailInput type="text" placeholder='Email' />
                                    <FormMailButton>Подписаться</FormMailButton>
                                </FormMail>
                                <PersData>
                                    <input type="checkbox" />
                                    <FormMailButtonLabel>
                                        Согласен на обработку <Link href='/pers'>персональных данных</Link>
                                    </FormMailButtonLabel>
                                </PersData>
                            </InfoSubscrubeForm>
                        </InfoSubscrube>
                        <InfoSocial>
                            <InfoSocialTitle>
                                Мы в социальных сетях
                            </InfoSocialTitle>
                            <InfoSocialList>
                                <InfoSocialItem>
                                    <Link href='/vk'>
                                        <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/footerIconVkontakte.fe17645e.svg" alt="" />
                                    </Link>
                                </InfoSocialItem>
                                <InfoSocialItem>
                                    <Link href='/vk'>
                                        <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/footerIconOdnoklassniki.7733abf3.svg" alt="" />
                                    </Link>
                                </InfoSocialItem>
                                <InfoSocialItem>
                                    <Link href='/vk'>
                                        <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/footerIconYoutube.9e289920.svg" alt="" />
                                    </Link>
                                </InfoSocialItem>
                            </InfoSocialList>
                        </InfoSocial>
                        <InfoPay>
                            <InfoPayTitle>
                                Мы принимаем к оплате
                            </InfoPayTitle>
                            <InfoPayList>
                                <InfoPayItem>
                                    <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/googlePay.8a5b21c6.svg" alt="" />
                                </InfoPayItem>
                                <InfoPayItem>
                                    <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/samsungPay.a2b27c98.svg" alt="" />
                                </InfoPayItem>
                                <InfoPayItem>
                                    <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/mastercard.9c4f7929.svg" alt="" />
                                </InfoPayItem>
                                <InfoPayItem>
                                    <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/visa.8bd9642c.svg" alt="" />
                                </InfoPayItem>
                                <InfoPayItem>
                                    <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/mir.ba5155ed.svg" alt="" />
                                </InfoPayItem>
                            </InfoPayList>
                        </InfoPay>
                    </Info>
                </ContentRight>
            </Content>
        </Container>
    </WrapTop>
    <WrapBottom>
        <Container>
          <WrapBottomInner>
            <WrapBottomLeft>
                <WrapBottomLeftFirma>
                    © Эльдорадо <span>, 2006—2022</span>
                </WrapBottomLeftFirma>
                <Link href="/politic">
                    Политика конфиденциальности
                </Link> 
                <Link href="/oferta">
                    Публичная оферта
                </Link> 
                <Link href="/mapSite">
                    Карта сайта
                </Link> 
            </WrapBottomLeft>
            <WrapBottomRight>
                <Link href='/dasd'>
                    <WrapBottomRightText>Участник</WrapBottomRightText>
                    <WrapBottomRightSpan><img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/akit-grey-logo.ef8272b1.png" alt="" /></WrapBottomRightSpan>
                </Link>
            </WrapBottomRight>
          </WrapBottomInner>
        </Container>
    </WrapBottom>
    </WrapFooter>
  )
}

export default Footer