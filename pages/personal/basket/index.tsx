import Link from 'next/link';
import React, { useState } from 'react'
import styles from './Basket.module.scss';
const Basket = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
const [isAutorizate,setIsAutorizate]=useState(true)
  return (
    <div className={styles.wrap}>
        <div className={styles.basketEmpty}>
            <h3 className={styles.title}>Ваша корзина пуста.</h3>
            <p className={styles.text}>Выберете нужный Вам товар из каталога интернет-магазина и добавьте его в корзину</p>
            <Link className={styles.link} href={'/Catalog'}>В КАТАЛОГ</Link>
        </div>
    </div>
  )
}

export default Basket