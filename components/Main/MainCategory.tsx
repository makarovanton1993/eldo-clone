import React, { useState } from 'react'
import styled from 'styled-components'
import { Li, Link, Span } from '../../styles/components/component'
import CategoryProductsSelect from '../Category/CategoryProductsSelect'

const ListItem = styled(Li)`
    position: relative;
    border-radius:5px;
    &:hover{
        background-color:var(--grey-color);
        color:var(--main-color);
    }
  `
const WrapLinkSpan = styled(Span)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 25px;
  height: 16px;
  background-repeat:no-repeat;
  background-position: 80%;
`
const WrapLink = styled(Link)`
    font-weight: 600;
    font-size: 14px;
    line-height: 15px;
    color: #262626;
    display: flex;
    padding: 12px 5px 12px 40px;
    width: 100%;
    border-radius: 3px 0 0 3px;
    &:hover{
      color:var(--main-color);
    }
    &:hover ${WrapLinkSpan}{
      filter:invert(74%) sepia(40%) saturate(2330%)
    }
  `

const MainCategory = ({ categoryName, name, supCategories }: any) => {
  const [visibleBlock, setVisibleBlock] = useState(false);
  return (
    <ListItem onMouseOver={() => { setVisibleBlock(true) }} onMouseOut={() => { setVisibleBlock(false) }}>
      <WrapLink href={`d/${categoryName}`} >
        <WrapLinkSpan style={{ backgroundImage: `url('https://static.eldorado.ru/upload/iblock/f6e/f6eb67ebbedc3a240ac9fd69fd08be49.svg')` }}></WrapLinkSpan>
        {name}
      </WrapLink>
      {visibleBlock && <CategoryProductsSelect {...supCategories} />}
    </ListItem>
  )
}

export default MainCategory