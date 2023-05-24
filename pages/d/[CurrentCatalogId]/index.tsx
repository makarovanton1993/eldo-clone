import React, { useEffect, useRef, useState } from 'react'
import SectionPath from '../../../components/Section/SectionPath';
import SectionCategory from '../../../components/Section/SectionCategory';
import SectionPopularBrands from '../../../components/Section/SectionPopularBrands';
import SliderLine from '../../../components/sliders/SliderLine';
import SliderPopularBrands from '../../../components/sliders/SliderPopularBrands';
import styles from './CatalogCurrent.module.scss';
import { useRouter } from 'next/router';
import { wrapper } from '../../../redux/store';
import axios from 'axios';
import { MainCategoriesProduct, SupMainCategoriesProduct, SupMainCategoriesProductPlace, addAllCatProduct, addMainCatProduct, addSupMainCatProduct } from '../../../redux/slices/categoriesSlice';
import { useSelector } from 'react-redux';

export type CategoriesProps = {
  id: string,
  categoryName: string,
  title: string,
  supCategories: Array<object>
}

const CurrentCategory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [category, setCategory] = useState<any>()

  const isMouned = useRef(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const saveTitle = (item: any) => {
  //   setCategory(item);
  //   localStorage.setItem('title', JSON.stringify(item));
  // }
  const router = useRouter()
  const { CurrentCatalogId } = router.query;

  let categoryPath = null;
  // let data = require('bd.json');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   // const datas = data.categories.find((item: any) => { return item.categoryName == CurrentCatalogId });
  //   // setCategory(datas)
  //   // localStorage.setItem('item', JSON.stringify(datas));
  // }, [])
  // const title = category && category.title;
  const MainCatProduct = useSelector(MainCategoriesProduct);
  const SupMainCatProduct = useSelector(SupMainCategoriesProduct);
  const SupMainCatProductPlace = useSelector(SupMainCategoriesProductPlace);
  const findMainCat = MainCatProduct.find((item: any) => item.categoryName === CurrentCatalogId);
  const findSupMainCat = SupMainCatProduct.find((item: any) => item.categoryName === CurrentCatalogId);
  if (findMainCat) {
    categoryPath = [{ cat: findMainCat.categoryName, name: findMainCat.name }];
  } else if (findSupMainCat) {
    const findMainCat = MainCatProduct.find((item: any) => item.id === findSupMainCat.MainCatProductId
    );

    categoryPath = [{ cat: findMainCat.categoryName, name: findMainCat.name },
    { cat: findSupMainCat.categoryName, name: findSupMainCat.name }
    ]
  }

  return (
    <div className={styles.wrap}>
      <SliderLine />
      <SectionPath currentCategory={categoryPath} />
      <SectionCategory category={category} />
      <SectionPopularBrands />
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
export default CurrentCategory