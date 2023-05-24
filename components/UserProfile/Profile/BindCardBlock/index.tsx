import React from 'react'
import styled from 'styled-components'
import { Button, Div, Input, Label, Text, TypographyH3 } from '../../../../styles/components/component'

const Wrapper = styled(Div)`
    width: 100%;
`
const Block = styled(Div)`
    min-height: 235px;
    padding: 20px 15px;
    border: 1px solid #a199a2;
    margin-bottom: 40px;
`
const Title = styled(TypographyH3)`
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #a199a2;
`
const BlockInner = styled(Div)`
    display: flex;
`
const CardUnbinding = styled(Div)`
    width: 420px;
    margin-right: 50px;
    padding-left:40px ;
    font-size: 14px;
`
const CardUnbindingText = styled(Text)`
    padding-left: 10px;
    margin-bottom: 10px;
`
const CardBinding = styled(Div)`
    margin-right: 130px;
`
const CardBindingForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 40px;
`
const CardBindingFormBox = styled(Div)`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
`
const CardBindingFormBoxInput = styled(Input)`
    align-self: flex-start;
    width: 100%;
    padding: 5px 8px;
    border:1px solid #a199a2;
`
const CardBindingFormBoxInputPin = styled(CardBindingFormBoxInput)`
    width: 65px;
`
const CardBindingFormBoxLabel = styled(Label)`
    position: absolute;
    font-size: 14px;
    font-weight: 600;
    top: 0;
    left: -35px;
`
const Btn = styled(Button)`
    background-color: #76bc21;
    border:0;
    color: #fff;
    padding: 10px 20px;
    width: 145px;
    border-radius:4px;
`
const InfoBlock = styled(Div)`
    width: 365px;
    font-size: 12px;
    color:#a199a2;
`
const InfoBlockText = styled(Text)`
    &:first-child{
        margin-bottom: 10px;
    }
    &:nth-child(even){
        width: 380px;
    }
`
const BindBlock = () => {
  return (
    <Wrapper>
        <Block>
            <Title>
                Отвязка карты
            </Title>
            <BlockInner>
                <CardUnbinding>
                    <CardUnbindingText>
                      Бонусная карта <b>№ 9643 7802 8077 8789</b> привязана к Вашему аккаунту.
                    </CardUnbindingText>
                    <Btn>
                      Отвязать
                    </Btn>
                </CardUnbinding>
                <InfoBlock>
                    <InfoBlockText>Если Вы хотите отказаться от участия в Программе лояльности, вы можете отвязать вашу электронную Бонусную карту.</InfoBlockText>
                    <InfoBlockText>В случае отвязки Бонусная карта будет блокирована, а накопленные бонусы будут списаны. Вам станет недоступна история операций с бонусами. Электронная карта может быть восстановлена в Личном кабинете. Бонусы восстановлению не подлежат.</InfoBlockText>
                </InfoBlock>
            </BlockInner>
        </Block>
        <Block>
            <Title>
                Привязка новой карты
            </Title>
            <BlockInner>
                <CardBinding>
                    <CardBindingForm>
                        <CardBindingFormBox>
                            <CardBindingFormBoxLabel  >№</CardBindingFormBoxLabel>
                            <CardBindingFormBoxInput type="text" placeholder='16 цифр номера'/>
                        </CardBindingFormBox>
                        <CardBindingFormBox>
                            <CardBindingFormBoxLabel  >PIN</CardBindingFormBoxLabel>
                            <CardBindingFormBoxInputPin type="text" placeholder='PIN'/>
                        </CardBindingFormBox>
                        <Btn>
                            Заменить
                        </Btn>
                    </CardBindingForm>
                </CardBinding>
                <InfoBlock>
                    <InfoBlockText>Если у Вас есть действующая пластиковая Бонусная карта, то вы можете привязать ее вместо электронной карты.</InfoBlockText>
                    <InfoBlockText>В случае привязки баланс карт и история операций с бонусами будут объединены, накопленные на электронной карте бонусы будут перенесены на новую привязанную пластиковую Бонусную карту. Электронная карта будет отвязана от Личного кабинета и блокирована. Перепривязка электронной карты на пластиковую Бонусную карту возможна только один раз.</InfoBlockText>
                </InfoBlock>
            </BlockInner>
        </Block>
    </Wrapper>
  )
}

export default BindBlock