import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { Div, Li, Ul } from '../../styles/components/component';
import styles from './Category.module.scss';

const Wrap = styled(Div)`
  background-color: var(--grey-color);
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 37px;
  position: relative;
  z-index: 1;
`
const List = styled(Ul)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items:center;
  height: 100%;
  z-index: 1;
`
const ListItem = styled(Li)`
  position: relative;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items:center;
  z-index: 12;
  &:last-child{
    margin-right: 40px;
  }
`
const ListItemFirst = styled(ListItem)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: var(--main-color);
  z-index: 1;
  padding: 0 18px 0 16px;
  width: 115px;
  &:before{
    content: "";
    position: absolute;
    top: 0;
    right: -4px;
    background-color: #fff;
    width: 9px;
    height: 100%;
    transform: skewX(-12deg);
}

`
const WrapLink = styled(Link)`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .2px;
  color:rgba(85, 85, 85,0.7);
`
const WrapLinkFirst = styled(WrapLink)`
  position: relative;
  text-transform: none;
  font-size: 16px;
  font-weight: 600;
  color: var(--white-color);
`
const WrapLinkActive = styled(WrapLink)`
  color: #ce1037;
`
const Category = () => {
  return (
    <Wrap>
      <List>
        <ListItemFirst>
          <WrapLinkFirst href="/d" >
            Каталог
          </WrapLinkFirst>
        </ListItemFirst>
        <ListItem>
          <WrapLinkActive href="/" >
            ВCE АКЦИИ
          </WrapLinkActive>
        </ListItem>
        <ListItem>
          <WrapLink href="/" >
            IPHONE 14 | 14 PRO
          </WrapLink>
        </ListItem>
        <ListItem>
          <WrapLink href="/" >
            ГАРАНТИЯ НИЗКОЙ ЦЕНЫ
          </WrapLink>
        </ListItem>
        <ListItem>
          <WrapLink href="/" >
            ДОСТУПНЫЕ ЦЕНЫ
          </WrapLink>
        </ListItem>
        <ListItem>
          <WrapLink href="/" >
            ЭКСПРЕСС ДОСТАВКА
          </WrapLink>
        </ListItem>
      </List>
    </Wrap>
  )
}

export default Category