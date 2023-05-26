import React, { useState } from 'react'
import { AiOutlineBarChart } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import styled from 'styled-components'
import FilterByPriceBlock from '../Blocks/FiltersByParameters/FilterByPriceBlock'
import FilterByStocks from '../Blocks/FiltersByParameters/FilterBystocks'
const Wrap = styled.div`
    max-width:250px;
    width:100%;
    margin-right:30px;
`
const TopLeftContent = styled.div`
    min-height:50px;
`
const CountPrice = styled.div`
    
`
const CountPriceSpan = styled.span`
font-weight:400;
    margin-left:5px;
    color:#9d9db6;
`
const CountProductInComparison = styled.div`
    display:flex;
    align-items:center;
`
const ImgBlock = styled.div`
margin-right:5px;
    svg{
        fill:#01790f;
        width:25px;
        height:25px;
    }
`

const SectionFilterByParameters = ({ countProductForComparison }: any) => {
    const [visibleFilterByPrice, setVisibleFilterByPrice] = useState(true);
    const [visibleFilterByStocks, setVisibleFilterByStocks] = useState(true);
    const [activeFilterByPriceBlock, setActiveFilterByPriceBlock] = useState(0);
    const [activeFilterByStocksBlock, setActiveFilterByStocksBlock] = useState(0);
    return (
        <Wrap>
            <TopLeftContent>
                <CountPrice>
                    10 000
                    <CountPriceSpan>товаров</CountPriceSpan>
                </CountPrice>
            </TopLeftContent>
            {countProductForComparison > 0 && <CountProductInComparison><ImgBlock><AiOutlineBarChart /></ImgBlock> Сравнить {countProductForComparison} товар</CountProductInComparison>}
            <FilterByPriceBlock
                visibleFilterByPrice={visibleFilterByPrice}
                setVisibleFilterByPrice={setVisibleFilterByPrice}
                activeFilterByPriceBlock={activeFilterByPriceBlock}
                setActiveFilterByPriceBlock={setActiveFilterByPriceBlock} />
            <FilterByStocks
                visibleFilterByStocks={visibleFilterByStocks}
                setVisibleFilterByStocks={setVisibleFilterByStocks}
                activeFilterByStocksBlock={activeFilterByStocksBlock}
                setActiveFilterByStocksBlock={setActiveFilterByStocksBlock}
            />
        </Wrap>
    )
}

export default SectionFilterByParameters