import React, { useState } from 'react'
import styled from 'styled-components'
import RatingBlock from '../../Blocks/RatingBlock';
import ReviewsBlock from '../../Blocks/ReviewsBlock';
import TitleProductBlock from '../../Blocks/TitleProductBlock';
import BonusItemBlock from '../../Blocks/BonusItemBlock';
import SpecificationsProductBlock from '../../Blocks/SpecificationsProductBlock';

import { AiOutlineBarChart, AiOutlineHeart } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import BonusInProductItemBlock from '../../Blocks/BonusInProductItemBlock';
import Link from 'next/link';

const Wrap = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    padding:20px 0;`

const ImgBlock = styled.div``

const ArticleNumber = styled.span``

const DescriptionProduct = styled.div`
    flex-basis:330px;`
const PriceAndOffers = styled.div`
    flex-basis:300px;
    `
const RatingAndReviewsBlock = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:15px;
`
const BonusBlock = styled.div`
    margin-bottom:10px;
    `
const FavoriteBtn = styled.button<any>`
    background-color:transparent;
    border:none;
    margin-right:20px;
    cursor: pointer;
    svg{
        width:20px;
        height:20px;
        fill:${({ activeFavorite }) => activeFavorite ? 'red' : 'grey'}
    }
`
const StatisticBtn = styled.button<any>`
    background-color:transparent;
    border:none;
    cursor: pointer;
    position: relative;
    svg{
        width:20px;
        height:20px;
        fill:${({ addСomparisonProduct }) => addСomparisonProduct ? 'red' : 'grey'}
    }
`
const StatisticLink = styled(Link)`
    position:absolute;
    top:0;
    left:0;
    white-space:nowrap;
    display:flex;
    align-items:center;
    justify-content:center;
    top: 35px;
    left: -51px;
    background-color: #ebebeb;
    padding: 9px;
    border-radius: 4px;
    color:#38740b;
    &:hover{
        color:#e00c0c;
    }
    &:before{
        content: '';
        position: absolute;
        left: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translate(-76%, -50%);
        top: -10px;
        border: 10px solid transparent;
        border-bottom: 10px solid #ebebeb;
    }
`
const AddProductBtn = styled.button`
    width:100%;
    background-color:#149d05;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    padding:20px 0;
    font-size:16px;
    border-radius:6px;
    margin-bottom:10px;
    cursor:pointer;
    svg{
        width:20px;
        height:20px;
        margin-right:10px;
    }
    &:hover{
        background-color:#1a4e14;
    }
`
const FavoriteAndStatisticBlock = styled.div``
const PriceToDay = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    margin-bottom:15px;
`
const PriceToDayTitle = styled.span`
    white-space:nowrap;
`
const PriceToDayDots = styled.span`
    border-bottom: 2px dotted #9a9a9a;
    display: flex;
    width: 100%;
    margin: 0 4px;
    position: relative;
    bottom:4px;`
const PriceToDayCurrent = styled.span`
    white-space:nowrap;
    font-weight:bold;
    font-size:18px;`
const BonusInProductBlocks = styled.div``


const CardFullnfo = ({ handleAddProductForComparison, handleRemoveProductForComparison }: any) => {
    const BonusInProducts = [
        {
            name: "Рассрочка",
            desc: 'от 1 334 р./мес.',
            accentBorder: true
        },
        {
            name: "Бонусов на карту",
            desc: '1 200',
            addDescText: "«Эльдорадости» — это программа лояльности для постоянных покупателей. За покупки с бонусной картой вы получаете бонусы, 1 бонус = 1 рублю. Бонусы становятся доступны через 14 дней после покупки."
        },
        {
            name: "Гарантия продавца",
            desc: '1 год',
            addDescText: "«1Эльдорадости» — это программа лояльности для постоянных покупателей.За покупки с бонусной картой вы получаете бонусы, 1 бонус = 1 рублю.Бонусы становятся доступны через 14 дней после покупки."
        },
        {
            name: "Самовывоз",
            desc: 'через 15 минут, бесплатно',
            accentText: true
        },
        {
            name: "Доставка",
            desc: 'завтра',

        },
    ]
    const BonusItemInfo = [{
        name: "+10% бонусов за онлайн оплату",
    }, {
        name: "Premier на 12 мес. в подарок",
    }, {
        name: "Бесплатная доставка",
    }, {
        name: "Скидка на Яндекс Плюс",
    }]
    const [activeFavorite, setActiveFavorite] = useState(false);
    const [addСomparisonProduct, setAddCountСomparisonProduct] = useState(false);
    const [visibleBlockСomparisonProduct, setVisibleBlockСomparisonProduct] = useState(false);
    const handleActiveFavorite = () => {
        setActiveFavorite(!activeFavorite)
    }
    const handleToggleCountСomparisonProduct = () => {
        setAddCountСomparisonProduct(!addСomparisonProduct);
        addСomparisonProduct ? handleRemoveProductForComparison() : handleAddProductForComparison();
    }
    const handleAddBlockСomparisonProduct = () => {
        setVisibleBlockСomparisonProduct(true);
    }
    const handleRemoveBlockСomparisonProduct = () => {
        setTimeout(() => { setVisibleBlockСomparisonProduct(false) }, 400)
    }

    return (
        <Wrap>
            <ImgBlock>
                <ArticleNumber>
                    Арт 71663865
                </ArticleNumber>
            </ImgBlock>
            <DescriptionProduct >
                <RatingAndReviewsBlock>
                    <RatingBlock />
                    <ReviewsBlock />
                </RatingAndReviewsBlock>
                <TitleProductBlock />
                <BonusBlock>
                    {BonusItemInfo.map((item, i) =>
                        <BonusItemBlock key={i} {...item} />
                    )}
                </BonusBlock>
                <SpecificationsProductBlock />
            </DescriptionProduct>
            <PriceAndOffers>
                <FavoriteAndStatisticBlock>
                    <FavoriteBtn activeFavorite={activeFavorite} onClick={handleActiveFavorite}>
                        <AiOutlineHeart />
                    </FavoriteBtn>
                    <StatisticBtn addСomparisonProduct={addСomparisonProduct} onClick={handleToggleCountСomparisonProduct} onMouseEnter={handleAddBlockСomparisonProduct} onMouseLeave={handleRemoveBlockСomparisonProduct}>
                        <AiOutlineBarChart />
                        {addСomparisonProduct && visibleBlockСomparisonProduct && <StatisticLink href="#">Войти в сравнение</StatisticLink>}
                    </StatisticBtn>
                </FavoriteAndStatisticBlock>
                <PriceToDay>
                    <PriceToDayTitle>Ваша цена сегодня</PriceToDayTitle>
                    <PriceToDayDots></PriceToDayDots>
                    <PriceToDayCurrent>39 999р.</PriceToDayCurrent>
                </PriceToDay>
                <AddProductBtn>
                    <BsCartCheck />
                    Добавить в корзину
                </AddProductBtn>
                <BonusInProductBlocks>
                    {BonusInProducts.map((item, i) =>
                        <BonusInProductItemBlock
                            key={i}
                            {...item}
                        />)
                    }
                </BonusInProductBlocks>

            </PriceAndOffers>
        </Wrap>
    )
}

export default CardFullnfo