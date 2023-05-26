import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Div, Li, TypographyH2, Ul } from '../../styles/components/component';
import CategoryLg from '../Category/CategoryLg';
import SliderProductRecommned from '../sliders/SliderProductRecommed';
import MainStock from './MainStock';
import styles from './MainRecommend.module.scss';

const Wrap = styled(Div)`
  margin-top: 30px;
  @media(max-width: 998px) {
    margin-top: 0px;
  }
`
const Title = styled(TypographyH2)`
  margin-bottom: 22px;
`
const List = styled(Ul)`
  display: flex;
  margin-bottom: 10px;
`
const ListItem = styled(Li)`
  padding: 8px 15px;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 15px;
  font-weight: 400;
  &:not(:last-child){
    margin-right: 12px;
  }
`
const ListItemActive = styled(ListItem)`
  background-color:#e1efd0;
  font-weight: 600;
`
const WrapLink = styled(Link)`
  
`
const MainRecommed = () => {
  const arrProduct: any = [0, 1, 2, 3, 4, 5]
  return (
    <Wrap>
      <Title>
        Рекомендуем вам
      </Title>
      <List>
        <ListItemActive>
          <WrapLink href='/1'>
            Хиты продаж
          </WrapLink>
        </ListItemActive>
        <ListItem>
          <WrapLink href='/2'>
            Новогодние скидки!
          </WrapLink>
        </ListItem>
        <ListItem>
          <WrapLink href='/3'>
            Помощники к Новому Году
          </WrapLink>
        </ListItem>
        <ListItem>
          <WrapLink href='/4'>
            Новинки
          </WrapLink>
        </ListItem>
      </List>
      <SliderProductRecommned arrProducts={arrProduct} />
    </Wrap>
  )
}

export default MainRecommed