import React from 'react'
import styled from 'styled-components'
import { Button, Div, TypographyH3 } from '../../../styles/components/component'

const Wrapper = styled(Div)`
    height: 400px;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`
const Title = styled(TypographyH3)`
    margin-bottom:10px;
`
const InnerBlock = styled(Div)`
    margin-bottom: 20px;
`
const Btn = styled(Button)`
    max-width: 150px;
    width: 100%;
    padding: 5px 5px;
    color:#fff;
    border: none;
    font-size: 16px;
    background-color: var(--main-color);
    overflow: hidden;
    display: block;
`
const OffersBlock = () => {
  return (
    <Wrapper>
        <Title>Здесь будут ваши скидки</Title>
        <InnerBlock>
          <span>Следите за обновлениями</span>
          <p>А пока можете ознакомиться с другими напиши акциями.</p>
        </InnerBlock>
        <Btn>Смотреть</Btn>
    </Wrapper>
  )
}

export default OffersBlock