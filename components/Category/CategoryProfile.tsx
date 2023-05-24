import Link from 'next/link'
import React, { useState } from 'react'
import ModalExpansionInfo from '../Modal/ModalHelpInfo'
import styles from './CategoryProfile.module.scss';
import { FiHelpCircle } from "react-icons/fi";
import { useRouter } from 'next/router';
import { Div, Li, Ul } from '../../styles/components/component';
import styled, { css } from 'styled-components';


interface CategoryProfileProps {
  path: number;
}

const Wrap = styled(Div)`
`
const List = styled(Ul)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`
const ListItemActive = css`
  background-color: #6dad1f;
            position: relative;
            &:before{
                content:'';
                position: absolute;
                bottom:-20px;
                left: 50%;
                transform: translateX(-50%);
                border: 10px solid transparent; border-top: 10px solid #6dad1f;
            }
`
const ListItem = styled(Li) <any>`
  background-color: #e4f2d3 ;
  flex: 1 1 0px;
  border-radius: 10px;
  &:not(:last-child){
    margin-right: 15px;
  }
  ${({ activeItem }) => activeItem && ListItemActive}
`
const WrapLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
`
const CategoryProfile = ({ path }: CategoryProfileProps) => {
  const [activeCategory, setActiveCategory] = useState(path)

  const profileCategories = [{ linkName: 'Мои бонусы', href: '/personal/club/operations' },
  { linkName: 'Мои заказы', href: '/personal/orders' },
  { linkName: 'Предложения', href: '/personal/club/offers' },
  { linkName: 'Избранное', href: '/personal/wish-list' },
  { linkName: 'Профиль', href: '/personal/club/user-profile' },
  ];

  return (
    <Wrap>
      <List>
        {
          profileCategories.map((item, i) => {
            return <ListItem key={i} activeItem={activeCategory == i} onClick={() => { setActiveCategory(i) }}>
              <WrapLink href={item.href}>
                {item.linkName}
              </WrapLink>
            </ListItem>
          })
        }
      </List>
    </Wrap>
  )
}

export default CategoryProfile

