import Link from 'next/link'
import React from 'react'

import { useRouter } from 'next/router';
import { Div, Li, Span, Ul } from '../../styles/components/component';
import styled from 'styled-components';

import styles from './SectionPath.module.scss';

// interface SectionPathProps {
//   currentCategory: Array<object>
// }

const WrapSelectCategory = styled(Div)`
  margin-bottom: 10px;
`
const List = styled(Ul)`
  display: flex;
  align-items: center;
  color:#000;
`
const Item = styled(Li)`
  
`
const ItemSpan = styled(Span)`
  font-weight: 500;
  font-size: 14px;
`
const ListContainer = styled(Div)`
  display: flex;
  align-items:center;
`
const ListContainerItemOpacity = styled(Li)`
  user-select: none;
`
const SectionPath = ({ currentCategory }: any) => {
  const lengthCategory = currentCategory && currentCategory.length >= 1 ? currentCategory.length - 1 : currentCategory.length;
  const { pathname } = useRouter();

  return (
    <WrapSelectCategory>
      <List>
        <Item>
          <Link href="/">
            Главная
          </Link>
        </Item>
        {'>'}
        <Item>
          {
            pathname === '/d' ? <span>Каталог товаров</span> :
              <Link href="/d">
                <span>Каталог товаров</span>
              </Link>
          }
        </Item>
        {
          currentCategory && currentCategory.map(({ cat, name }: any, i: number) => {
            return (<ListContainer key={i}>
              {'>'}
              <li>
                <Link href={`/d/${cat}`}>
                  <span> {name}</span>
                </Link>
              </li>
            </ListContainer>)
          }

          )
        }
      </List>
    </WrapSelectCategory>
  )
}

export default SectionPath

// :
            // <ListContainer key={i}>
            //   {'>'}
            //   <ListContainerItemOpacity>
            //     <span> {item.title ? item.title : item.supTitle}</span>
            //   </ListContainerItemOpacity>
            // </ListContainer>