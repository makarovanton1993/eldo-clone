import React from 'react'
import styled from 'styled-components'
import { Div, Span, TypographyH2 ,Button, Ul, Li} from '../../styles/components/component'
// import styles from './SectionBonus.module.scss'



const WrapSectionBonus = styled(Div)`
    max-width: 1200px;
    background-color: #f5f5f5;
    display: flex;
    align-items:center;
    padding: 60px 40px 18px;
    border-radius:10px;
    margin-bottom: 40px;
    z-index: 11111111111111111111111111111;
    @media(max-width: 1242px) {
        max-width: 960px;
        padding: 40px 18px;
    }
    @media(max-width: 760px) {
        background-color:transparent;
        padding: 20px 10px;
    }
    @media(max-width: 320px) {
        padding: 5px ;
        margin-bottom: 10px;
    }
`
const Inner = styled(Div)`
    display: flex;
    align-items: center;
    width: 100%;
    @media(max-width: 1242px) {
        justify-content: center;
        align-items: center;
    }
    @media(max-width: 760px) {
        flex-direction: column;
        align-items: flex-start;
    }
    @media(max-width: 320px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
const Bonus = styled(Span)`
    display: none;
    @media(max-width: 760px) {
        display: flex;
        text-align: start;
        font-weight: 600;
        font-size: 20px ;
        line-height:18px;
    }
    @media(max-width: 320px) {
        display: flex;
        text-align: start;
        font-weight: 600;
        font-size: 20px ;
        line-height:18px;
    }
`
const Auth = styled(Div)`
    position: relative;
    flex: 0 0 260px;
    margin-right: 20px;
    @media(max-width: 1242px) {
        display: flex;
        align-items:center;
        margin: 0;
    }
    @media(max-width: 760px) {
        flex-direction: column;
        align-items:flex-start;
        width: 100%;
        flex: 0 0 auto;
    }
    @media(max-width: 320px) {
        flex-direction: column;
        align-items:flex-start;
        width: 100%;
        flex: 0 0 auto;
    }
`
const WrapImg  = styled(Div)`
    position: absolute;
    top: -125px;
    left: -10px;
    width: 190px;
    height: 140px;
    @media(max-width: 760px) {
        display: none;
    }
    @media(max-width: 320px) {
        display: none;
    }
`
const Title  = styled(TypographyH2)`
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
    color:#262626;
    @media(max-width: 1242px) {
        white-space: nowrap;
        margin-bottom: 0;
    }
    @media(max-width: 760px) {
        font-size: 12px;
        line-height: 18px;
        color:#434343;
        font-weight: 400;
        margin: 5px 0 8px 0;
        width: 100%;
    }
    @media(max-width: 320px) {
        font-size: 12px;
        line-height: 18px;
        color:#434343;
        font-weight: 400;
        margin: 5px 0 8px 0;
        width: 100%;
    }
`
const Btn = styled(Button)`
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    width: 100%;
    border: 0;
    background-color:#76bc21;
    color: #fff;
    height: 48px;
    border-radius: 5px;
    position: relative;
    z-index: 1;
    @media(max-width: 1242px) {
        margin-left: 20px;
        white-space: nowrap;
        padding: 0 50px;
    }
    @media(max-width: 760px) {
        margin-left: 0;
        width: 100%;
        margin-left: 0;
    }
    @media(max-width: 320px) {
        margin-left: 0;
        width: 100%;
        margin-left: 0;
    }
`
const List = styled(Ul)`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media(max-width: 1242px) {
        display: none;
    }
`
const ListItem = styled(Li)`
    display: flex;
    & svg{
        margin-top: 14px;
        margin-right: 5px;
    }
`
const SectionBonus = () => {
  return (
    <WrapSectionBonus>
        <Inner >
            <Bonus>
                Оплати до 50% бонусами
            </Bonus>
            <Auth>
            <WrapImg>
                <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.6-Me3Bdmswysw27wGnNOhbx/static_spa/assets/check-bonus.5f53dc6c.png" alt="" />
            </WrapImg>
            <Title>
                Проверь свой баланс
            </Title>
                <Btn>
                    Вход или регистрация
                </Btn>
            </Auth>
                <List>
                    <ListItem>
                        <svg aria-hidden="true" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.6666 0L0 7.80004H12.3999L11.3334 13L28 5.19996H15.6001L16.6666 0Z" fill="#76BC21"></path></svg>
                        <div >
                            <h2 >
                                    до 5%
                                </h2>
                                <p >
                                    получай бонусами с каждой покупки
                                </p>
                        </div>
                    </ListItem>
                    <ListItem>
                        <svg aria-hidden="true" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.6666 0L0 7.80004H12.3999L11.3334 13L28 5.19996H15.6001L16.6666 0Z" fill="#76BC21"></path></svg>
                        <div>
                            <h2 >
                            до 180 дней
                            </h2>
                            <p >
                            срок жизни бонусов
                            </p>
                        </div>
                    </ListItem>
                    <ListItem>
                        <svg aria-hidden="true" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.6666 0L0 7.80004H12.3999L11.3334 13L28 5.19996H15.6001L16.6666 0Z" fill="#76BC21"></path></svg>
                        <div>
                            <h2 >
                            до 50%
                            </h2>
                            <p >
                            оплачивайте бонусами
                            </p>
                        </div>
                    </ListItem>
                </List>
        </Inner>
    </WrapSectionBonus>
  )
}

export default SectionBonus