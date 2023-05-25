import React, { useState } from 'react'
import CategoryPopularProduct from '../../../components/Category/CategoryPopularProduct'
import styled from 'styled-components'
import SortProductBlock from '../../../components/Blocks/SortProductBlock'
import ChangeTypeCards from '../../../components/Blocks/ChangeTypeCards'
import SectionFilterByParameters from '../../../components/Section/SectionFilterByParameters'
import CardFullnfo from '../../../components/Card/CardFullnfo'
import CardInfo from '../../../components/Card/CardInfo'

const MainSectionPickProducts = styled.div`
    
`
const NameCat = styled.h3`
    margin-bottom:10px;
`
const LeftContent = styled.div`
flex-basis:350px;
`
const RightContent = styled.div`
display:flex;
flex-direction:column;
width:100%;
align-items:flex-start;
justify-content:space-between;
`
const TopLeftContent = styled.div`
    min-height:50px;
`
const TopRightContent = styled.div`
    display:flex;
    justify-content:space-between;
    min-height:50px;
    width:100%;
`

const CountPrice = styled.div`
    
`
const CountPriceSpan = styled.span`
font-weight:400;
    margin-left:5px;
    color:#9d9db6;
`

const MainContent = styled.div`
display:flex;
`

const Catid = () => {
    const [activeCategoryTop, setActiveCategoryTop] = useState(0);
    const [activeSortItem, setActiveSortItem] = useState(0);
    const [activeTypeCard, setActiveTypeCard] = useState(0);

    const handleActiveTypeCard = (i: number) => {
        setActiveTypeCard(i)
    }
    const handleChangeActiveSortItem = (i: any) => {
        setActiveSortItem(i)
    }
    const categoryTop = [{ id: 0, name: 'Все', catTitle: "All" },
    { id: 1, name: 'дешевые', catTitle: "All" },
    { id: 2, name: '50 дюймов', catTitle: "All" },
    { id: 3, name: '22 дюйма', catTitle: "All" },
    { id: 4, name: '75 дюймов', catTitle: "All" },
    { id: 5, name: 'маленькие', catTitle: "All" },
    { id: 6, name: '60 дюймов', catTitle: "All" },
    { id: 7, name: 'телевизоры Hi', catTitle: "All" },
    { id: 8, name: 'на кухню', catTitle: "All" },
    { id: 9, name: '27 дюймов', catTitle: "All" },
    { id: 10, name: 'с большим экраном', catTitle: "All" },
    { id: 11, name: 'до 10 000 р.', catTitle: "All" },
    { id: 12, name: 'с хорошей картинкой', catTitle: "All" },
    { id: 13, name: '24 дюйма', catTitle: "All" },
    ]

    return (
        <MainSectionPickProducts>
            <NameCat>Телевизоры</NameCat>
            <CategoryPopularProduct categoryTop={categoryTop} activeCategoryTop={activeCategoryTop} setActiveCategoryTop={setActiveCategoryTop} />
            <MainContent>
                <LeftContent>
                    <TopLeftContent>
                        <CountPrice>
                            10 000
                            <CountPriceSpan>товаров</CountPriceSpan>
                        </CountPrice>
                    </TopLeftContent>
                    <SectionFilterByParameters />
                </LeftContent>
                <RightContent>
                    <TopRightContent>
                        <SortProductBlock activeSortItem={activeSortItem} setActiveSortItem={setActiveSortItem} handleChangeActiveSortItem={handleChangeActiveSortItem} />
                        <ChangeTypeCards activeTypeCard={activeTypeCard} setActiveTypeCard={setActiveTypeCard} handleActiveTypeCard={handleActiveTypeCard} />
                    </TopRightContent>
                    {activeTypeCard == 0 ? <CardFullnfo /> : <CardInfo />}
                </RightContent>

            </MainContent>
        </MainSectionPickProducts >
    )
}

export default Catid