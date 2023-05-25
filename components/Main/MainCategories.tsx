import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Div, Ul, Li, Span } from '../../styles/components/component';
import CategoryProductsSelect from '../Category/CategoryProductsSelect';
import MainCategory from './MainCategory';
import styles from './MainCategory.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { MainCategoriesProduct, addMainCatProduct, allCategories, allMainCategoriesProduct, fetchAllCategories } from '../../redux/slices/categoriesSlice';
import axios from 'axios';
import { wrapper } from '../../redux/store';
const Wrap = styled(Div)`
    max-width: 250px;
    width: 100%;
    position: absolute;
    display: block;
    @media(max-width: 1242px) {
      display: none;
    }
  `
const List = styled(Ul)`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
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

// const mainCategoties = [{ nameCat: 'Телевизоры, аудио, видео', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } },
//   , { nameCat: 'Смартфоны и гаджеты', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Компьютеры и ноутбуки', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Техника для дома', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Техника для кухни', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Красота и здоровье', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Детские товары', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Фото и видео', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Игры, софт, развлечения', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Товары для авто', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Сад и ремонт', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Товары для дома и кухни', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Аксессуары', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }
//   , { nameCat: 'Услуги', href: 'Catalog/televizory-audio-video', supCat: { nameSupCat: 'Телевизоры и аксессуары' } }]

const MainCategories = () => {
  const mainCatProduct = useSelector(MainCategoriesProduct);
  return (
    <Wrap>
      <List>
        {
          mainCatProduct && mainCatProduct.map((item: any, i: any) => {

            return (
              <MainCategory
                key={i}
                {...item}
                indexCat={i}
              />
            )
          })
        }
      </List>
    </Wrap>
  )
}

export default MainCategories

// <MainCategory key={item} onMouseOver={() => { () => setVisibleCategoryProduct(1) }} onMouseOut={() => { setVisibleCategoryProduct(0) }} />