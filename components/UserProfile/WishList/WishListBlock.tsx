import React from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import styled from 'styled-components'
import { Button, Div, TypographyH4 } from '../../../styles/components/component'

const Wrapper = styled(Div)`
    display: flex;
    align-items: center;
`
const ItemButton = styled(Button)`
    height: 228px;
    width: 228px;
    border:1px dashed rgb(179, 178, 178);
    margin-right: 15px;
    background-color:transparent;
    border-radius:5px;
`
const CreateItemButton = styled(ItemButton)`
  & svg{
    width: 40px;
    height: 40px;
    & path{
      stroke: var(--main-color);
    }
  }
`
const TitleH4 = styled(TypographyH4)`
  margin-bottom: 10px;
  width: 100px;
  margin: 0 auto 25px;
  color:rgb(190, 190, 190);
`
const WishListBlock = () => {
  return (
    <Wrapper>
        <CreateItemButton>
            <TitleH4>Создать новый список</TitleH4>
              <HiOutlinePlus/>
        </CreateItemButton>
        <ItemButton>
            <TitleH4>1232132</TitleH4>
            <p>cgbcjr ltk</p>
        </ItemButton>
    </Wrapper>
  )
}

export default WishListBlock