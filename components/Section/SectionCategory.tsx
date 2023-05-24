import Link from 'next/link'
import React, { ReactNode } from 'react'
import BrandsBlock from '../Blocks/BrandsBlock';
import CategoriesBlock from '../Blocks/CategoriesBlock';

import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Div, TypographyH3, Ul } from '../../styles/components/component';

// import styles from './SectionCategoryTeleAudioVideo.module.scss';
type ItemProps = {
  name: ReactNode;
  categoryName: string,
  supCategories_place: string[]
}
export type CategoryProps = {
  id: string,
  categoryName: string,
  name: string,
  supCategories: ItemProps[],
}
interface SectionCategoryProps {
  category: CategoryProps;
}
const WrapSectioncategory = styled.section`
  
`
const Title = styled(TypographyH3)`
  margin-bottom: 10px;
`
const List = styled(Ul)`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
`
const ListWrapInner = styled(Div)`
    background-color: rgb(197, 197, 197);
    width: 260px;
    padding:20px 55px;
    margin-bottom: 20px;
`
const SectionCategory = ({ supCategory }: any) => {
  const { asPath } = useRouter();


  return (
    <WrapSectioncategory>

      <List>
        {supCategory && supCategory.map(({ name, categoryName, supCategories_place }: ItemProps, i) => {

          return (
            <ListWrapInner key={i}>
              <Link href={`${asPath}/${categoryName}`}>
                <Title>
                  {name}
                </Title>
              </Link>
              <CategoriesBlock items={supCategories_place} />
            </ListWrapInner>
          )
        })}
      </List>
    </WrapSectioncategory>
  )
}
export default SectionCategory

