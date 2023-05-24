import Head from 'next/head'
import Main from '../components/Main';
import SectionBrand from '../components/Section/SectionBrand';
import EldoProduct from '../components/Section/SectionEldo';
import SectionEldoSale from '../components/Section/SectionEldoSale';
import SectionRecently from '../components/Section/SectionRecently';
import SliderLine from '../components/sliders/SliderLine';
import SliderProductTwo from '../components/sliders/SliderProduct-two';
import { addCategories, addMainCatProduct } from '../redux/slices/categoriesSlice';
import axios from 'axios';
import { NextPage } from 'next';
import { wrapper } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import * as cookie from 'cookie'
import { authStatus, getcurrentUser } from '../redux/slices/userSlice';
import { useEffect } from 'react';
import { check } from '../http/userApi';
const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const datas = check().then(data => {
        if (data) {
          // dispatch(getcurrentUser(data));
          dispatch(authStatus(true))
        }
      });

    } catch (error) {
      console.log(error, 1213)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <SliderLine />
      <EldoProduct />
      <SliderProductTwo />
      <SectionEldoSale />
      <SectionBrand />
      <SectionRecently />
    </>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const res = await axios("https://63eb65cefb6b6b7cf7dd974b.mockapi.io/product");
//     const resData = res.data[0].categories
//     store.dispatch(addCategories(resData));

//     return {
//       props: {},
//     };
//   }
// );
// export const getServerSideProps = wrapper.getServerSideProps((store) => async (da) => {
//   const resp = await axios("https://63eb65cefb6b6b7cf7dd974b.mockapi.io/product");
//   const resData = resp.data[0].categories
//   store?.dispatch(addCategories(resData));

//   return {
//     props: {},
//   };
// }
// );
export const getServerSideProps = wrapper.getServerSideProps((store) => async (da) => {
  const cookies = da.req.headers.cookie;
  if (cookies) {
    const { user } = cookie.parse(cookies);
    if (user) {
      const { tel } = JSON.parse(user);
      const responseUser = await fetch("http://localhost:3001/api/user/currentUser", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify({ tel })
      })
      const data = await responseUser.json();
      store.dispatch(getcurrentUser(data))

    }
  }
  const { data: MainCatProduct } = await axios("http://localhost:3001/api/main-cat-product/all");
  store?.dispatch(addMainCatProduct(MainCatProduct));


  return {
    props: {}
  };
}
);
export default Home;