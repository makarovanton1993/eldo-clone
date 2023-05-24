// import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import SliderLine from '../../../components/sliders/SliderLine';
// import SectionPath from '../../../components/Section/SectionPath';
// import styles from './CurrentCatalogTitleId.module.scss';
// import SectionSupCategory from '../../../components/Section/SectionSupCategory';
// const CurrentCatalogTitleId = () => {
//   const [title, setTitle] = useState('');
//   const [supTitle, setSupTitle] = useState('');
//   const { query } = useRouter();
//   const router = useRouter();
//   const { CurrentCatalogId, CurrentCatalogTitleId } = query;
//   let data = require('bd.json');
//   useEffect(() => {
//     data.categories.map((item: any) => {
//       CurrentCatalogId == item.categoryName && setTitle(item.title), sessionStorage.setItem("title", item.title);
//       item.supCategories.map((supItem: any) => {
//         CurrentCatalogTitleId == supItem.supCategoryName && setSupTitle(supItem.title)
//       })
//     })
//   }, [])

//   return (
//     <div className={styles.wrap}>
//       <SliderLine />
//       <SectionPath currentCategory={[{ title, CurrentCatalogId }, { supTitle, CurrentCatalogTitleId }]} />
//       <SectionSupCategory supTitle={supTitle} CurrentCatalogTitleId={CurrentCatalogTitleId} />
//     </div>
//   )
// }

// export default CurrentCatalogTitleId

//  //currentCategory = {category.title}