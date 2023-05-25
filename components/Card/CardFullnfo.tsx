import Link from 'next/link';
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdOutlineReviews } from "react-icons/md";
import styled from 'styled-components'

const Wrap = styled.div`
display:flex;
width:100%;
justify-content:space-between;`
const ImgBlock = styled.div`
`
const ArticleNumber = styled.span`
    
`
const DescriptionProduct = styled.div`
flex-basis:400px;`
const PriceAndOffers = styled.div`
flex-basis:300px;`
const RatingAndReviewsBlock = styled.div`
    display:flex;
`
const RatingBlock = styled.div`
    display:flex;
    align-items:center;
    margin-right:25px;
    svg{
    transform:translateY(3px);
    fill:#4ca300;
}
`
const ReviewsBlock = styled.div`
display:flex;
align-items:center;
svg{
    transform:translateY(3px);
    fill:#4ca300;
    margin-right:5px;
}`
const TitleLink = styled(Link)`
    display:flex;
    transition:color ease .5s;
    margin-bottom:5px;
    &:hover{
        color:#4ca300;
    }
`
const Bonus = styled.div``
const BonusItem = styled(Link)`
    display:inline-flex;
    border-radius:4px;
    margin-right:2px;
    margin-bottom:4px;
    padding:1px 4px;
    font-size:14px;
    font-weight:bold;
    border:1px solid #000;
`
const SpecificationsBlock = styled.div``
const SpecificationsItemBlock = styled.div`
display:flex;
justify-content:space-between;
`
const SpecificationsItemName = styled.span`
white-space:nowrap;`
const SpecificationsItemDesc = styled.span`
white-space:nowrap;
`
const SpecificationsItemDots = styled.span`
    border-bottom: 2px dotted #9a9a9a;
    display: flex;
    width: 100%;
    margin: 0 4px;
`
const CardFullnfo = () => {
    return (
        <Wrap>
            <ImgBlock>
                <ArticleNumber>
                    Арт 71663865
                </ArticleNumber>
            </ImgBlock>
            <DescriptionProduct >
                <RatingAndReviewsBlock>
                    <RatingBlock>
                        <AiFillStar />
                        5

                    </RatingBlock>
                    <ReviewsBlock>
                        <MdOutlineReviews />
                        <Link href={'#'}>
                            110 отзывов
                        </Link>

                    </ReviewsBlock>
                </RatingAndReviewsBlock>
                <TitleLink href={''}> Смартфон HUAWEI nova 10 Pro 8+256GB Starry Black (GLA-LX1)</TitleLink>
                <Bonus>
                    <BonusItem href={"#"}>
                        +10% бонусов за онлайн оплату
                    </BonusItem>
                    <BonusItem href={"#"}>
                        Premier на 12 мес. в подарок
                    </BonusItem>
                    <BonusItem href={"#"}>
                        Бесплатная доставка
                    </BonusItem>
                    <BonusItem href={"#"}>
                        Скидка на Яндекс Плюс
                    </BonusItem>
                </Bonus>
                <SpecificationsBlock>
                    <SpecificationsItemBlock>
                        <SpecificationsItemName>
                            Операционная система
                        </SpecificationsItemName>
                        <SpecificationsItemDots />
                        <SpecificationsItemDesc>
                            Android
                        </SpecificationsItemDesc>
                    </SpecificationsItemBlock>
                    <SpecificationsItemBlock>
                        <SpecificationsItemName>
                            Модель процессора
                        </SpecificationsItemName>
                        <SpecificationsItemDots />
                        <SpecificationsItemDesc>
                            Snapdragon 778G
                        </SpecificationsItemDesc>
                    </SpecificationsItemBlock>
                    <SpecificationsItemBlock>
                        <SpecificationsItemName>
                            Количество ядер
                        </SpecificationsItemName>
                        <SpecificationsItemDots />
                        <SpecificationsItemDesc>
                            8
                        </SpecificationsItemDesc>
                    </SpecificationsItemBlock>
                    <SpecificationsItemBlock>
                        <SpecificationsItemName>
                            Частота
                        </SpecificationsItemName>
                        <SpecificationsItemDots />
                        <SpecificationsItemDesc>
                            4 × Cortex-A78 х 2.42 ГГц + 4 ×
                        </SpecificationsItemDesc>
                    </SpecificationsItemBlock>
                </SpecificationsBlock>
            </DescriptionProduct>
            <PriceAndOffers>
                2
            </PriceAndOffers>
        </Wrap>
    )
}

export default CardFullnfo