import Link from 'next/link';
import React from 'react'
// import styles from './BrandsBlock.module.scss';
const BrandsBlock = () => {
  return (
    <div >
            <ul >
              <li>
                <Link href={'/brand/hisense'}>
                  <img src="" alt="" />
                </Link>
              </li>
              <li>
                <Link href={'/brand/hisense'}>
                  <img src="" alt="Haier"/>
                </Link>
              </li>
              <li>
                <Link href={'/brand/hisense'}>
                <img src="" alt="Grundig"/>
                </Link>
              </li>
              <li>
                <Link href={'/brand/hisense'}>
                  <img  src="" alt="Toshiba"/>
                </Link>
              </li>
              <li>
                <Link href={'/brand/hisense'}>
                <img  src="" alt="Philips"/>
                </Link>
              </li>
              <li>
                <Link href={'/brand/hisense'}>
                  <img  src="" alt="Hi"/>
                  </Link>
              </li>
              <li>
                <Link href={'/brand/hisense'}>
                  <img src="" alt="Samsung"/>
                </Link>
              </li>
              <li>
                <Link href={'/brand/hisense'}>
                  <img  src="" alt="LG"/>
                </Link>
              </li>
              <li>
                <Link href={'/brand/hisense'}>
                  <img src="" alt="Яндекс"/>
                </Link>
              </li>
            </ul>
          </div>
  )
}

export default BrandsBlock