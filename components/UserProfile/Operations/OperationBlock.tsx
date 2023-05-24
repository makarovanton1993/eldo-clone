import React, { useState } from 'react'
import Link from 'next/link'

import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { FaFireAlt } from 'react-icons/fa'
import { FiHelpCircle } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import styled from 'styled-components'
import { Div, TypographyH3, Text, Span, Button } from '../../../styles/components/component'
import ModalBonusWithShop from '../../Modal/ModalBonusWithShop'

const Wrapper = styled(Div)`
    
`
const Main = styled(Div)`
    display: flex;
    justify-content: space-between;
`
const LeftBlock = styled(Div)`
    max-width: 680px;
    width: 100%;
`
const LeftBlockTitle = styled(TypographyH3)`
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
    & svg{
        margin-left: 5px;
    }
`
const LeftBlockEldorado = styled(Div)`
    margin-bottom: 20px;
`
const LeftBlockEldoradoContent = styled(Div)`
    border-radius:5px;
    padding: 20px 10px;
`
const LeftBlockEldoradoContentGreen = styled(LeftBlockEldoradoContent)`
    background-color: #e4f2d3;
`
const LeftBlockEldoradoContentGrey = styled(LeftBlockEldoradoContent)`
    background-color:#f5f5f5;
`
const LeftBlockEldoradoContentTitle = styled(TypographyH3)`
    margin-bottom: 8px;
`
const LeftBlockEldoradoContentText = styled(Text)`
    color: #7b7b7b;
    font-size: 14px;
    line-height: 23px;
    font-weight: 400;
    margin-bottom: 18px;
    max-width: 460px;
    width: 100%;
`
const LeftBlockEldoradoContentBonus = styled(Div)`
    
`
const LeftBlockEldoradoContentBonusInner = styled(Div)`
    color:#262626;
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items:center;
`
const LeftBlockEldoradoContentBonusProcent = styled(Span)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color:var(--white-color);
    padding:0 5px;
    font-size: 32px;
    font-weight: 600;
    line-height: 42px;
    border-radius:5px;
    margin-right: 5px;
`
const LeftBlockEldoradoContentBonusProcentGrey = styled(LeftBlockEldoradoContentBonusProcent)`
    background-color:#c4c4c4;
`
const LeftBlockEldoradoContentBonusProcentGreen = styled(LeftBlockEldoradoContentBonusProcent)`
    background-color: #6dad1f;
`
const LeftBlockLongerBonus = styled(Div)`
  display: flex;
  align-items: baseline;
  margin: 0 20px;
  overflow: hidden;
  margin-bottom: 20px;
`
const LeftBlockLongerBonusLeft = styled(Div)`
  margin-right: 20px;
`
const LeftBlockLongerBonusLeftTitle = styled(TypographyH3)`
  font-size: 22px;
  line-height: 33px;
  color:#262626;
  font-weight: 600;
  white-space: nowrap;
`
const LeftBlockLongerBonusLeftText = styled(Text)`
  width: 270px;
  font-size: 14px;
  line-height: 23px;
  color:#7b7b7b;
  font-weight: 500;
  & b{
    font-weight: 700;
    color:#262626;
  }
`
const LeftBlockLongerBonusRight = styled(Div)`
  display: flex;
  width: 100%;
`
const LeftBlockLongerBonusRightDiagramItem = styled(Div)`
  max-width: 126px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  font-size: 14px;
  font-weight: 500;
  color:#555;
  &:last-child{
    margin-left: auto;
  }
`
const LeftBlockLongerBonusRightDiagramItemInner = styled(Div)`
  height: 126px;
  width: 126px;
  border-radius:50%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  font-size: 14px;
  line-height: 23px;
  color:#7b7b7b;
  font-weight: 500;
  margin-bottom: 10px;
  & b{
      font-size: 28px;
      line-height: 39px;
      font-weight: 600;
      color:#262626;
  }
`
const LeftBlockLongerBonusRightDiagramItemInnerGrey = styled(LeftBlockLongerBonusRightDiagramItemInner)`
  border:5px solid grey;
`
const LeftBlockLongerBonusRightDiagramItemInnerOrange = styled(LeftBlockLongerBonusRightDiagramItemInner)`
  border:5px solid orange;
`
const RightBlock = styled(Div)`
  max-width: 460px;
  width: 100%;
`
const RightBlockTitle = styled(TypographyH3)`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  & svg{
      margin-left: 5px;
  }
`
const RightBlockMailConfirmation = styled(Div)`
  display: flex;
  margin: 20px 0;
  background-color: #fff6d1;
  padding: 10px;
  border-radius:5px;
`
const RightBlockMailConfirmationBtn = styled(Button)`
  background-color: transparent;
  border:none;
  cursor: pointer;
`
const RightBlockMailConfirmationSpan = styled(Span)`
  font-size: 14px;
`
const RightBlockMailConfirmationInfo = styled(Div)`
  display: flex;
  align-items:center;
  justify-content: space-between;
`
const RightBlockMailConfirmationInfoText = styled(Div)`
  display: flex;
  align-items:center;
  margin-right: 50px;
  & svg{
      margin-right: 5px;
      & path{
          fill: red;
      }
  }
`
const RightBlockMailConfirmationConfimBtn = styled(RightBlockMailConfirmationBtn)`
  color:var(--main-color);
  font-size: 16px;
`
const RightBlockMailConfirmationCloseBtn = styled(RightBlockMailConfirmationBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  & svg{
      width: 20px;
      height: 20px;
      & path{
          fill: #7b7b7b;
      }
  }
`
const RightBlockAvalibleBonus = styled(Div)`
  
`
const RightBlockAvalibleBonusInner = styled(Div)`
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  overflow: hidden;
  border-radius:8px;
  margin-bottom: 20px;
`
const RightBlockAvalibleBonusInnerInfo = styled(Div)`
  height: 100%;
  padding: 20px 0 20px 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 22px;
  color:#7b7b7b;
`
const RightBlockAvalibleBonusInnerInfoSpan = styled(Span)`
  font-size: 52px;
  line-height: 50px;
  color:#76bc21;
  margin-bottom: 5px;
`
const RightBlockAvalibleBonusInnerBtn = styled(Button)`
  width: 50px;
  height: initial;
  background-color:#e9e9e9;
  display: flex;
  align-items:center;
  justify-content: center;
  border:none;
  transition: background-color ease .5s;
  &:hover{
      background-color:#a5a5a5;
  }
  & svg{
      width: 25px;
      height: 15px;
  }
`
const RightBlockEldoradoCart = styled(Div)`
  background-color: #f5f5f5;
  overflow: hidden;
  border-radius:8px;
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
`
const RightBlockEldoradoCartWrapImg = styled(Div)`
  margin-right: 10px;
  width: 159px;
  height: 70px;
  & svg{
      width: 100%;
      height: 100%;
  }
`
const RightBlockEldoradoCartInfo = styled(Div)`
  font-size: 18px;
  line-height: 23px;
  font-weight: 600;
  color:#262626;
  margin-bottom: 5px;
`
const RightBlockEldoradoCartInfoNumber = styled(TypographyH3)`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color:#7b7b7b;
  margin-bottom: 3px;
`
const RightBlockEldoradoCartInfoName = styled(Div)`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color:#7b7b7b;
  margin-bottom: 3px;
`
const RightBlockEldoradoCartInfoParticipantDate = styled(Div)`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color:#7b7b7b;
  margin-bottom: 3px;
`
const RightBlockEldoradoCartInfoCountBonus = styled(Div)`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color:#7b7b7b;
  margin-bottom: 3px;
`
const RightBlockEldoradoCartInfoQuestionnairesLink = styled(Link)`
  font-size: 14px;
  line-height: 18px;
  color:#76bc21;
  font-weight: 500;
  border: none;
  background-color: transparent;
  margin-bottom: 4px;
`
const RightBlockEldoradoCartInfoMapBindingLink = styled(Link)`
  font-size: 14px;
  line-height: 18px;
  color:#76bc21;
  font-weight: 500;
  border: none;
  background-color: transparent;
  margin-bottom: 4px;
  display:flex;
`
const RightBlockAdditionalInformation = styled(Div)`
  
`
const RightBlockAdditionalInformationInner = styled(Div)`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  overflow: hidden;
  border-radius:8px;
`
const RightBlockAdditionalInformationTitle = styled(TypographyH3)`
  font-size: 14px;
`
const RightBlockAdditionalInformationWrapLink = styled(Link)`
  font-size: 14px;
`
const PayWithOutBonusCard = styled(Div)`
  margin:20px 0;
`
const PayWithOutBonusCardInner = styled(Div)`
  background-color: #e4f2d3;
  padding: 10px 20px;
  border-radius:5px;
  display: flex;
  align-items:center;
  justify-content: space-between;
`
const PayWithOutBonusCardContent = styled(Div)`
  display: flex;
  align-items:center;
  & svg{
    margin-right: 8px;
  }
`
const PayWithOutBonusCardContentTitle = styled(TypographyH3)`
  margin-right: 8px;
  font-size: 22px;
`
const PayWithOutBonusCardBtn = styled(Button)`
  background-color:#76bc21;
  border:none;
  padding: 20px 25px;
  color:#fff;
  font-size: 14px;
  cursor: pointer;
`
const OperationBlock = () => {

  const [closeMessageEmail, setCloseMessageEmail] = useState(true);
  const [confirmationMessageEmail, setConfirmationMessageEmail] = useState(false);
  const [visibleModalCheck, setVisibleModalCheck] = useState<boolean>(false)

  return (
    <Wrapper>
      <Main>
        <LeftBlock>
          <LeftBlockTitle>
            Мой статус программы лояльности
            <FiHelpCircle />
          </LeftBlockTitle>
          <LeftBlockEldorado>
            <LeftBlockEldoradoContentGreen>
              <LeftBlockEldoradoContentTitle>
                Эльдорадости
              </LeftBlockEldoradoContentTitle>
              <LeftBlockEldoradoContentText>
                Получайте бонусы с каждой покупки, совершая заказы на сайте и в
                розничных магазинах. Срок действия бонусов - 90 дней.
              </LeftBlockEldoradoContentText>
              <LeftBlockEldoradoContentBonus>
                <LeftBlockEldoradoContentBonusInner>
                  <LeftBlockEldoradoContentBonusProcentGreen>
                    3%
                  </LeftBlockEldoradoContentBonusProcentGreen>
                  стоимости покупки возвращаются бонусами
                </LeftBlockEldoradoContentBonusInner>
                <LeftBlockEldoradoContentBonusInner>
                  <LeftBlockEldoradoContentBonusProcentGreen>
                    30%
                  </LeftBlockEldoradoContentBonusProcentGreen>
                  стоимости покупки можно оплатить бонусами
                </LeftBlockEldoradoContentBonusInner>
              </LeftBlockEldoradoContentBonus>
            </LeftBlockEldoradoContentGreen>
          </LeftBlockEldorado>
          <LeftBlockLongerBonus>
            <LeftBlockLongerBonusLeft>
              <LeftBlockLongerBonusLeftTitle>Как получить больше бонусов ?</LeftBlockLongerBonusLeftTitle>
              <LeftBlockLongerBonusLeftText>Потратьте <b>25 000 рублей</b> в течение <b>года</b>, чтобы перейти в статус «Эльдорадости Плюс» и получать еще больше бонусов!</LeftBlockLongerBonusLeftText></LeftBlockLongerBonusLeft>
            <LeftBlockLongerBonusRight>
              <LeftBlockLongerBonusRightDiagramItem>
                <LeftBlockLongerBonusRightDiagramItemInnerGrey>Осталось <b>25 000</b> рублей</LeftBlockLongerBonusRightDiagramItemInnerGrey>
                <span>0 / 25 000</span>
              </LeftBlockLongerBonusRightDiagramItem>
              <LeftBlockLongerBonusRightDiagramItem>
                <LeftBlockLongerBonusRightDiagramItemInnerOrange>осталось <b>365 </b>дня</LeftBlockLongerBonusRightDiagramItemInnerOrange>
                <span>до 10 января 2024</span>
              </LeftBlockLongerBonusRightDiagramItem>
            </LeftBlockLongerBonusRight>
          </LeftBlockLongerBonus>
          <LeftBlockEldorado>
            <LeftBlockEldoradoContentGrey>
              <LeftBlockEldoradoContentTitle>
                Эльдорадости Плюс
              </LeftBlockEldoradoContentTitle>
              <LeftBlockEldoradoContentText>
                Пользуйтесь всеми преимуществами программы лояльности - получайте
                повышенные бонусы с каждой покупки! Еще больше выгоды!
              </LeftBlockEldoradoContentText>
              <LeftBlockEldoradoContentBonus>
                <LeftBlockEldoradoContentBonusInner>
                  <LeftBlockEldoradoContentBonusProcentGrey>
                    5%
                  </LeftBlockEldoradoContentBonusProcentGrey>
                  стоимости покупки возвращаются бонусами
                </LeftBlockEldoradoContentBonusInner>
                <LeftBlockEldoradoContentBonusInner>
                  <LeftBlockEldoradoContentBonusProcentGrey>
                    50%
                  </LeftBlockEldoradoContentBonusProcentGrey>
                  стоимости покупки можно оплатить бонусами
                </LeftBlockEldoradoContentBonusInner>
              </LeftBlockEldoradoContentBonus>
            </LeftBlockEldoradoContentGrey>
          </LeftBlockEldorado>
        </LeftBlock>
        <RightBlock>
          <RightBlockTitle>
            Мои бонусы
            <FiHelpCircle />
          </RightBlockTitle>
          {closeMessageEmail &&
            <RightBlockMailConfirmation>
              {confirmationMessageEmail ? <RightBlockMailConfirmationSpan>Спасибо! Письмо для подтверждения отправлено на <b>makarovanton2020@yandex.ru.</b>
              </RightBlockMailConfirmationSpan> :
                <RightBlockMailConfirmationInfo>
                  <RightBlockMailConfirmationInfoText>
                    <FaFireAlt />
                    <p>Необходимо подтвердить email.</p>
                  </RightBlockMailConfirmationInfoText>
                  <RightBlockMailConfirmationConfimBtn onClick={() => setConfirmationMessageEmail(true)}>Подтвердить</RightBlockMailConfirmationConfimBtn>
                </RightBlockMailConfirmationInfo>}
              <RightBlockMailConfirmationCloseBtn onClick={(e) => setCloseMessageEmail(false)}><IoClose /></RightBlockMailConfirmationCloseBtn>
            </RightBlockMailConfirmation>
          }
          <RightBlockAvalibleBonus>
            <RightBlockAvalibleBonusInner>
              <RightBlockAvalibleBonusInnerInfo>
                <RightBlockAvalibleBonusInnerInfoSpan>0</RightBlockAvalibleBonusInnerInfoSpan>
                доступно для списания
              </RightBlockAvalibleBonusInnerInfo>
              <RightBlockAvalibleBonusInnerBtn>
                <SlArrowDown />
              </RightBlockAvalibleBonusInnerBtn>
            </RightBlockAvalibleBonusInner>
          </RightBlockAvalibleBonus>
          <RightBlockEldoradoCart>
            <RightBlockEldoradoCartWrapImg>
              <BsCreditCard2FrontFill />
            </RightBlockEldoradoCartWrapImg>
            <RightBlockEldoradoCartInfo>
              <RightBlockEldoradoCartInfoNumber>9643 0000 0000 8789</RightBlockEldoradoCartInfoNumber>
              <RightBlockEldoradoCartInfoName>Вася Пупкин</RightBlockEldoradoCartInfoName>
              <RightBlockEldoradoCartInfoParticipantDate>Участник программы с 10.12.2008</RightBlockEldoradoCartInfoParticipantDate>
              <RightBlockEldoradoCartInfoCountBonus>Всего начисленно 0 бонусов</RightBlockEldoradoCartInfoCountBonus>
              <RightBlockEldoradoCartInfoQuestionnairesLink href={'/personal/club/user-profile/'} >Анкета участника</RightBlockEldoradoCartInfoQuestionnairesLink>
              <RightBlockEldoradoCartInfoMapBindingLink href={'/personal/bind/'}>Отвязка и привязка карты</RightBlockEldoradoCartInfoMapBindingLink>
            </RightBlockEldoradoCartInfo>
          </RightBlockEldoradoCart>
          <RightBlockAdditionalInformation>
            <RightBlockAdditionalInformationInner>
              <RightBlockAdditionalInformationTitle>
                Дополнительная информация
              </RightBlockAdditionalInformationTitle>
              <RightBlockAdditionalInformationWrapLink href={'/club/'}>Все преимущества программы лояльности</RightBlockAdditionalInformationWrapLink>
              <RightBlockAdditionalInformationWrapLink href={'/'}>Полные правила программы лояльности</RightBlockAdditionalInformationWrapLink>
              <RightBlockAdditionalInformationWrapLink href={'/club/faq/'}>Часто задаваемые вопросы</RightBlockAdditionalInformationWrapLink>
            </RightBlockAdditionalInformationInner>
          </RightBlockAdditionalInformation>
        </RightBlock>
      </Main>
      <PayWithOutBonusCard>
        <PayWithOutBonusCardInner>
          <PayWithOutBonusCardContent>
            <PayWithOutBonusCardContentTitle>Совершили покупку без бонусной карты?</PayWithOutBonusCardContentTitle>
            <FiHelpCircle />
            <p>Заполните форму, укажите код с чека и получите бонусы!</p>
          </PayWithOutBonusCardContent>
          <PayWithOutBonusCardBtn onClick={() => { setVisibleModalCheck(true) }}>Получить бонусы по чеку</PayWithOutBonusCardBtn>
        </PayWithOutBonusCardInner>
      </PayWithOutBonusCard>
      {visibleModalCheck && <ModalBonusWithShop visibleModalCheck={visibleModalCheck} setVisibleModalCheck={setVisibleModalCheck} />}
    </Wrapper>
  )
}

export default OperationBlock