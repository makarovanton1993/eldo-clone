import Link from 'next/link'
import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { Button, Div, TypographyH3 } from '../../../styles/components/component';

const Wrapper = styled(Div)`
    position: relative;
    height: 300px;
    width: 100%;
    border: 1px dashed grey;
    margin-bottom: 150px;
`
const Types = styled(Div)`
    position: absolute;
    right: -1px;
    top: -5px;
`
const TypeLInkActive = css`
  background-color:var(--main-color); 
`
const TypeLInk = styled(Link) <any>`
  background-color:grey;
  padding: 3px 5px;
  color:var(--white-color);
  border-radius: 3px;
  ${({ activeLink }) => activeLink && TypeLInkActive}
  &:not(:last-child){
    margin-right: 3px;
  }
`
const Empty = styled(Div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: inherit;
`
const EmptyH3 = styled(TypographyH3)`
    margin-bottom: 10px;
`
const EmptyButton = styled(Button)`
    padding: 10px 20px;
    background-color: var(--main-color);
    border: none;
    color: var(--white-color);
`
const OrdersBlock = () => {
  const [selectBtn, setSelectBtn] = useState(1);
  const onHandleSelectBtn = () => {

  }

  return (
    <Wrapper>
      <Types>
        <TypeLInk activeLink={selectBtn === 1} href={'/personal/orders/'} onClick={() => setSelectBtn(1)}>последние</TypeLInk>
        <TypeLInk activeLink={selectBtn === 2} href={'/personal/orders/'} onClick={() => setSelectBtn(2)}>архив</TypeLInk>
      </Types>
      <Empty>
        <EmptyH3>
          К сожалению,у вас нет заказов
        </EmptyH3>
        <EmptyButton>Начать покупки</EmptyButton>
      </Empty>
    </Wrapper>
  )
}

export default OrdersBlock