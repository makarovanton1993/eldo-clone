import React from 'react'
import styles from './SectionSupCategory.module.scss';
import { useRouter } from 'next/router'
import SectionSearchProduct from './SectionSearchProduct';
const SectionSupCategory = ({ supTitle, CurrentCatalogTitleId }: any) => {
  const router = useRouter();
  console.log(supTitle, CurrentCatalogTitleId)
  return (
    <SectionSearchProduct />
  )
}

export default SectionSupCategory