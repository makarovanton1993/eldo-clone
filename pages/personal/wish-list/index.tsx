import { useRouter } from 'next/router';
import React from 'react'
import CategoryProfile from '../../../components/Category/CategoryProfile'
import styles from './WishList.module.scss';
import { HiOutlinePlus } from "react-icons/hi";
import styled from 'styled-components';
import { Div } from '../../../styles/components/component';
import WishListBlock from '../../../components/UserProfile/WishList/WishListBlock';

const Wrapper = styled(Div)`

`
const ContainerWishList = styled(Div)`
  height: 400px;
  margin-top: 45px;
`
const WishList = () => {
  // const {asPath} = useRouter();
  return (
    <Wrapper>
      <CategoryProfile path={3} />
      <ContainerWishList>
        <WishListBlock />
      </ContainerWishList>
    </Wrapper>
  )
}

export default WishList