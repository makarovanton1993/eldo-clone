import Link from 'next/link';
import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { Div, Li, Ul } from '../../styles/components/component';

const listSection = [{ name: 'Отвязка и привязка карты', href: '/personal/bind' }
  , { name: 'Мой профиль', href: '/personal/club/user-profile' }
  , { name: 'Профиль доставок', href: '/personal/profiles/' }
  , { name: 'Подписка', href: '/personal/subScribe' }
  , { name: 'Рекламация', href: '/personal/reclamation' }
  , { name: 'Выйти', href: '' }
]


interface CategoryProfileInnerProps {
  selectCat: number | null
}
const Wrap = styled(Div)`
  margin-right: 40px;
`
const List = styled(Ul)`
  width: 228px;
  display: flex;
  flex-direction: column;
`
const ListItemActive = css`
  color:var(--main-color);
  font-weight: 600;
  &:hover{
    color:#000;
  }
`
const ListItem = styled(Li) <any>`
  margin-bottom: 20px;
  border-radius:5px;
  align-self: start;
  &:hover{
    background-color:rgb(198, 197, 197);
  }
  ${({ activeItem }) => activeItem && ListItemActive}
`
const ListItemLink = styled(Link)`
  display: flex;
  padding: 5px 10px;
  white-space: nowrap;
`
const CategoryProfileInner = ({ selectCat }: CategoryProfileInnerProps) => {
  const [activeSection, setActiveSection] = useState(selectCat);
  const onHandleActiveSection = (index: number) => {
    setActiveSection(index)
  }
  return (
    <Wrap>
      <List>
        {listSection.map((item, i) => {
          return <ListItem activeItem={i == activeSection} key={item.name} onClick={() => { onHandleActiveSection(i) }}>
            <ListItemLink href={item.href}>
              {item.name}
            </ListItemLink>
          </ListItem>
        })}
      </List>
    </Wrap>
  )
}

export default CategoryProfileInner