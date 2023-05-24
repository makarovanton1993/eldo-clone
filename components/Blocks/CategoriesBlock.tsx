import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { Li, Ul } from '../../styles/components/component';
import { type } from 'os';
// import styles from './CategoriesBlock.module.scss';

const CategoryList = styled(Ul)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const CategoryItem = styled(Li)`
  margin-bottom: 10px;
`
interface CategoriesBlockProps {
  items: Array<string>
}

const CategoriesBlock = ({ items }: any) => {

  return (
    <CategoryList>
      {items && items.map(({ name, categoryName, typeProduct }: any, i: any): any => {

        return (
          <CategoryItem key={i}>
            <Link href={`/c/${categoryName}/${typeProduct ? "f/" + typeProduct : ''}`} >
              {name}
            </Link>
          </CategoryItem >
        )
      })}

    </CategoryList >

  )
}

export default CategoriesBlock