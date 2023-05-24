import React from 'react'
import styled from 'styled-components';
import { Button, Div, Span } from '../../styles/components/component';
// import styles from './CardProductDiscount.module.scss';


const Wrap = styled(Div)`
  padding:5px 20px;
`
const Top = styled(Div)`
  display: flex;
  align-items: flex-start;
  position: relative;
`
const ProductDayImg = styled(Div)`
  width: 100%;
  height: 120px;
`
const Discount = styled(Div)`
  position: absolute;
  top:15px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: var(--main-color);
  border-radius: 50%;
  color: #fff;
  box-shadow: 0  0 0 8px rgba(255,255,255,0.3);
  font-size: 19px;
`
const DiscountCount = styled(Span)`
  font-size: 32px;
  line-height: 0.6;
`
const DiscountCountProcent = styled(Span)`
  font-size: 19px;
`
const Info = styled(Div)`
  
`
const InfoTop = styled(Div)`
  display: flex;
  margin-bottom: 5px;
`
const Rating = styled(Div)`
  display: flex;
`
const Reviews = styled(Div)`
  display: flex;
  margin-left: 25px;
`
const Desc = styled(Div)`
  max-height: 64px;
  min-height: 64px;
  overflow: hidden;
  font-size: 14px;
`
const Bottom = styled(Div)`
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
  padding-bottom: 10px;
`
const Price = styled(Div)`
  display: flex;
  flex-direction: column;
`
const PriceOld = styled(Span)`
  text-decoration: line-through;
  font-size: 22px;
  color: grey;
`
const PriceCurrent= styled(Div)`
  font-size: 32px;
  color:#000;
`
const PayPriduct = styled(Button)`
  width: 48px;
  height: 48px;
  background-color:var(--main-color);
  border: none;
  border-radius: 4px;
  cursor:pointer;
  svg{
    path{
      fill: #fff;
    }
  }
`
const CardProductDiscount = () => {
  return (
    <Wrap>
            <Top>
              <ProductDayImg><img  src="images/product-day-1.png" alt="" /></ProductDayImg>
              <Discount>
                <DiscountCount>50<DiscountCountProcent>%</DiscountCountProcent></DiscountCount>
                скидка
              </Discount>
            </Top>
            <Info>
              <InfoTop>
                <Rating>
                  <img src="https://static.eldorado.ru/espa/1.42.0-ab-esp-5648.4-UDkpWRt9VoJiG7xD0mOBC/static_spa/assets/star.dcf4b1ca.svg" alt="" />
                  4
                </Rating>
                <Reviews>
                  39 отзывов
                </Reviews>
              </InfoTop>
              <Desc>
                Автомобильный видеорегистратор 70mai Dash Cam 1S (MidriveD06)
              </Desc>
              <Bottom>
                <Price>
                  <PriceOld>2899 р.</PriceOld>
                  <PriceCurrent>
                    1999 p.
                  </PriceCurrent>
                </Price>
                <PayPriduct>
                  <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.8174 23.99C17.8174 23.1603 17.1294 22.4844 16.2858 22.4844C15.4413 22.4844 14.7552 23.1603 14.7552 23.99C14.7552 24.8179 15.4413 25.4909 16.2858 25.4909C17.1294 25.4909 17.8174 24.8179 17.8174 23.99ZM19.3355 23.9886C19.3355 25.6491 17.968 26.9999 16.2865 26.9999C14.6049 26.9999 13.2375 25.6491 13.2375 23.9886C13.2375 22.3254 14.6049 20.9727 16.2865 20.9727C17.968 20.9727 19.3355 22.3254 19.3355 23.9886ZM7.38206 23.99C7.38206 23.1603 6.69502 22.4844 5.85141 22.4844C5.00779 22.4844 4.32076 23.1603 4.32076 23.99C4.32076 24.8179 5.00779 25.4909 5.85141 25.4909C6.69502 25.4909 7.38206 24.8179 7.38206 23.99ZM8.90199 23.9886C8.90199 25.6491 7.53361 26.9999 5.85302 26.9999C4.17244 26.9999 2.805 25.6491 2.805 23.9886C2.805 22.3254 4.17244 20.9727 5.85302 20.9727C7.53361 20.9727 8.90199 22.3254 8.90199 23.9886ZM29 0.75692C29.0009 1.17415 28.6603 1.51209 28.2408 1.51209L24.4669 1.51304H24.4441C23.8947 1.51304 23.1592 2.1049 23.051 2.6222L19.8559 15.9283C19.3454 17.9258 17.4731 19.3908 15.4035 19.4257H4.16793C3.74849 19.4257 3.40877 19.0868 3.40877 18.6706C3.40877 18.2533 3.74849 17.9154 4.16793 17.9154H15.3902C16.7766 17.8927 18.0396 16.9053 18.3822 15.5677L18.4562 15.2581C18.4534 15.2581 18.4505 15.26 18.4477 15.26H3.94208C3.00926 15.26 2.21025 14.6653 1.99958 13.8129L0.0219713 5.79864C-0.0776683 5.39368 0.170956 4.98494 0.578055 4.88488C0.990847 4.7886 1.397 5.03309 1.49664 5.43899L3.4733 13.4523C3.516 13.6222 3.71718 13.7506 3.94208 13.7506H18.4477C18.5749 13.7506 18.6897 13.7893 18.796 13.8441L21.5697 2.2937C21.825 1.06465 23.2048 -0.0624422 24.4906 0.00269143L28.2408 0.00174746C28.6603 0.00174746 29 0.339687 29 0.75692Z" fill="#9D9D9D"></path></svg>
                </PayPriduct>
              </Bottom>
            </Info>
          </Wrap>
  )
}

export default CardProductDiscount