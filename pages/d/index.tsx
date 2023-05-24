import React from 'react'
import axios from 'axios';
import Link from 'next/link';
import SectionPath from '../../components/Section/SectionPath'
import SectionCategory from '../../components/Section/SectionCategory';

import styles from "./Catalog.module.scss";

import { CategoryProps } from '../../components/Section/SectionCategory';
import { useSelector } from 'react-redux';
import { wrapper } from '../../redux/store';
import { addAllCatProduct, addMainCatProduct, addSupMainCatProduct, allCategoriesProduct } from '../../redux/slices/categoriesSlice';

import styled from 'styled-components';
const TitleLink = styled(Link)`
  margin-bottom: 10px;
  display: flex;
`
const Catalog = () => {


  const MainCategoriesProduct = useSelector(allCategoriesProduct);

  return (
    <div className={styles.wrap}>
      <SectionPath currentCategory={[]} />
      <h2>Каталог товаров Эльдорадо</h2>
      <ul className={styles.list}>
        {MainCategoriesProduct && MainCategoriesProduct.map(({ name, categoryName, supCategories }: CategoryProps, i: number) => {

          return (
            <li key={i} className={styles.name}>
              <TitleLink href={`/d/${categoryName}`}>
                {name && name}
              </TitleLink>
              <SectionCategory supCategory={supCategories} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export const getServerSideProps = wrapper.getServerSideProps((store) => async (da) => {
  const { data: allCatProduct } = await axios("http://localhost:3001/api/all-cat-product/all");
  const { data: allMainCatProduct } = await axios("http://localhost:3001/api/main-cat-product/all");
  const { data: allSupMainCatProduct } = await axios("http://localhost:3001/api/sup-main-cat-product/all");
  store?.dispatch(addMainCatProduct(allMainCatProduct));
  store?.dispatch(addSupMainCatProduct(allSupMainCatProduct));
  store?.dispatch(addAllCatProduct(allCatProduct));
  return {
    props: {}
  };
}
);

export default Catalog