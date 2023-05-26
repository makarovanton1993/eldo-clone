import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styled from 'styled-components'

const Wrap = styled.div`
    
`
const FilterByStocksTop = styled.div<any>`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:15px;
    svg{
        transform: rotate(${({ visibleFilterByStocks }) => visibleFilterByStocks ? '0' : '180deg'});
    }
`
const FilterByStocksTitle = styled.h4`
cursor: pointer;
&:hover{
    color:#1f7806;
}`

const FilterByStocksMain = styled.div`
    display:flex;
    
`
const FilterByStocksName = styled.label<any>`
    
    font-size:14px;
    border-bottom:${({ accentText }) => accentText && "1px dashed #555"};
    border-width:${({ accentText }) => accentText && "2px"};
    &:hover{
        color:${({ accentText }) => accentText && "red"};
    }`
const FilterByStocksInput = styled.input.attrs({
    type: 'checkbox'
})``
const FilterByStocksDesc = styled.span`

font-size:14px;

`
const FilterByStocksDots = styled.span`
    border-bottom: 2px dotted #cbcbcb;
    display: flex;
    width: 100%;
    margin: 0 4px;
    
`

const FilterByStocksBlock = styled.div``
const FilterByStocks = ({ visibleFilterByStocks, setVisibleFilterByStocks }: any) => {
    return (
        <Wrap>
            <FilterByStocksTop visibleFilterByStocks={visibleFilterByStocks} onClick={() => setVisibleFilterByStocks(!visibleFilterByStocks)}>
                <FilterByStocksTitle>
                    Цена
                </FilterByStocksTitle>
                <IoIosArrowDown />
            </FilterByStocksTop>
            <FilterByStocksBlock>
                123
                <FilterByStocksMain>
                    <FilterByStocksName>
                        <FilterByStocksInput />
                        Доступно в рассрочку
                    </FilterByStocksName>
                    <FilterByStocksDots></FilterByStocksDots>
                    <FilterByStocksDesc>360</FilterByStocksDesc>
                </FilterByStocksMain>
            </FilterByStocksBlock>
        </Wrap>
    )
}

export default FilterByStocks