import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { Div } from '../../styles/components/component';
import BrandsBlock from '../Blocks/BrandsBlock';
import CategoriesBlock from '../Blocks/CategoriesBlock';
import SectionPath from '../Section/SectionPath';
import styles from './CategoryProductsSelect.module.scss';

const Container = styled(Div)`
  display:flex;
  position: fixed;
  z-index: 11111;
  top: 0;
  background-color:rgb(114, 82, 228);
  max-width: 950px;
  width: 100%;
  margin-left: 250px;
  height: 95%;
  overflow-y: scroll;
  padding: 20px;
  box-shadow: -15px 15px 2px 1px rgb(0 0 0 / 13%);
  border-radius:3px;
`
const Wrap = styled(Div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Clue = styled(Div)`
  display:flex;
  align-items:center;
  color:#000;
  & svg{
    margin-right: 8px;
  }
`
const Content = styled(Div)`
  display: flex;
`
const CategoryProductsSelect = (supCategories: any) => {

  return (
    <Container>
      <Wrap>
        {supCategories.title}
        <SectionPath currentCategory={[]} />
        <Clue>
          <svg width="24" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.667 40c11.667 0 11.667-7.957 11.667-20s0-20-11.667-20S0 7.957 0 20s0 20 11.667 20zm0-38.333c9.617 0 10 5.292 10 18.333 0 13.041-.383 18.333-10 18.333s-10-5.292-10-18.333c0-13.041.383-18.333 10-18.333z" fill="#76BC21"></path><path d="M11.667 6.667a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333z" fill="#76BC21"></path><path d="M11.59 17.727V29.17M16.418 24.163L11.59 29.17l-4.827-5.007" stroke="#76BC21" strokeWidth="1.379" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Используйте прокрутку
        </Clue>
        <Content>
          <CategoriesBlock items={supCategories.items} />
          <BrandsBlock />
        </Content>

      </Wrap>
    </Container>
  )
}

export default CategoryProductsSelect