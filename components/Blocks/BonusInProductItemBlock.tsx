import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div<any>`
margin-bottom:4px;
    `
const PopupItem = styled.div<any>`
    position:relative;
`
const Item = styled.div<any> `
    display:flex;
    justify-content:space-between;
    flex-direction: column;
    background-color: inherit;
    position: relative;
    cursor:pointer;
    border-radius:4px;
    border:${({ accentBorder }) => accentBorder && '1px solid #2d8004'};
    padding:${({ accentBorder }) => accentBorder && '2px 4px'};
    margin-left:${({ accentBorder }) => accentBorder && '-4px'};
    width:${({ accentBorder }) => accentBorder && 'calc(100% + 8px)'};
    border-radius:${({ accentBorder }) => accentBorder && '4px'};
   
`
const BonusInProductItem = styled.div`
    display:flex;
    margin:inherit;
    padding:inherit;
`
const BonusInProductItemNameLink = styled(Link)`
    display: flex;
    width: 100%;
`
const BonusInProductItemPopup = styled.div`
    display:flex;
    background-color:#d2d2d2;
    position:absolute;
    z-index:1111111;
    top:-8px;
    left: 0px;
    width: calc(100% + 20px);
    margin-left:-10px;
    flex-direction: column;
    border-radius:4px;
    padding:8px 10px;
`
const BonusInProductItemPopupMainText = styled.div`
    display:flex;
    
`
const BonusInProductItemName = styled.span<any>`
    white-space:nowrap;
    font-size:14px;
    border-bottom:${({ accentText }) => accentText && "1px dashed #555"};
    border-width:${({ accentText }) => accentText && "2px"};
    &:hover{
        color:${({ accentText }) => accentText && "red"};
    }`
const BonusInProductItemDesc = styled.span`
white-space:nowrap;
font-size:14px;

`
const BonusInProductItemDots = styled.span`
    border-bottom: 2px dotted #cbcbcb;
    display: flex;
    width: 100%;
    margin: 0 4px;
    
`
const AddText = styled.div<any>`
    user-select:none;
    display:flex;
`

const BonusInProductItemBlock = ({ name = '', desc = '', accentText = false, accentBorder = false, addDescText = "" }: any) => {

    const [addDescTextVisible, setAddDescTextVisible] = useState(false);

    return (
        <Wrap>
            {addDescText ?
                <PopupItem
                    onMouseEnter={() => { setAddDescTextVisible(true) }}
                    onMouseLeave={() => { setAddDescTextVisible(false) }}
                >
                    <BonusInProductItem>
                        <BonusInProductItemName>
                            {name}
                        </BonusInProductItemName>
                        <BonusInProductItemDots />
                        <BonusInProductItemDesc>
                            {desc}
                        </BonusInProductItemDesc>
                    </BonusInProductItem>
                    {addDescTextVisible &&
                        <BonusInProductItemPopup>
                            <BonusInProductItemPopupMainText>
                                <BonusInProductItemName>
                                    {name}
                                </BonusInProductItemName>
                                <BonusInProductItemDots />
                                <BonusInProductItemDesc>
                                    {desc}
                                </BonusInProductItemDesc>
                            </BonusInProductItemPopupMainText>
                            <AddText>
                                {addDescText}
                            </AddText>
                        </BonusInProductItemPopup>
                    }
                </PopupItem> :
                <Item accentBorder={accentBorder} >
                    {accentText ? <BonusInProductItem>
                        <BonusInProductItemNameLink href="#">
                            <BonusInProductItemName accentText={accentText}>
                                {name}
                            </BonusInProductItemName>
                        </BonusInProductItemNameLink>
                        <BonusInProductItemDots />
                        <BonusInProductItemDesc>
                            {desc}
                        </BonusInProductItemDesc>

                    </BonusInProductItem> :
                        <BonusInProductItem>
                            <BonusInProductItemName >
                                {name}
                            </BonusInProductItemName>
                            <BonusInProductItemDots />
                            <BonusInProductItemDesc>
                                {desc}
                            </BonusInProductItemDesc>
                        </BonusInProductItem>}

                </Item>}
        </Wrap>
    )
}

export default BonusInProductItemBlock