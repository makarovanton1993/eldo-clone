import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
const SpecificationsBlock = styled.div<any>`
    position: relative;
    height:150px;
`
const SpecificationsShortBlock = styled.div<any>`
    position: relative;
    overflow:${({ visibleAllSpecifics }) => visibleAllSpecifics ? "visible" : "hidden"};
    `
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
const ChangeVisibleAllSpecifications = styled.div`
    position:relative;
    z-index:11;
    display:flex;
    align-items: flex-end;
    &:hover{
        color:#3c9504;
        cursor:pointer;
        svg{
            fill:#3c9504;
        }
    }
`
const SeeAllSpecificationsLink = styled(Link)`
display:flex;
align-items:flex-end;
margin-bottom:5px;
svg{
    margin-left:5px;
}`;
const SpecificationsAllBlock = styled.div`
    background-color: #ededed;
    padding: 20px;
    border-radius: 4px;
    box-sizing: border-box;
    position: absolute;
    left: -8px;`
const SpecificationsProductBlock = () => {
    const [visibleAllSpecifics, setVisibleAllSpecifics] = useState(false);
    const handleVisibleAllSpecifics = () => {
        setVisibleAllSpecifics(!visibleAllSpecifics);
    }
    return (
        <SpecificationsBlock >
            {visibleAllSpecifics ? <SpecificationsAllBlock>
                <SeeAllSpecificationsLink href={"#"}>
                    Смотреть все характеристики
                    <FaArrowRight />
                </SeeAllSpecificationsLink>
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
                <SpecificationsItemBlock>
                    <SpecificationsItemName>
                        процессора
                    </SpecificationsItemName>
                    <SpecificationsItemDots />
                    <SpecificationsItemDesc>
                        Cortex-A55 х 1.8 ГГц
                    </SpecificationsItemDesc>
                </SpecificationsItemBlock>
                <SpecificationsItemBlock>
                    <SpecificationsItemName>
                        Объем оперативной памяти
                    </SpecificationsItemName>
                    <SpecificationsItemDots />
                    <SpecificationsItemDesc>
                        8 ГБ
                    </SpecificationsItemDesc>
                </SpecificationsItemBlock>
                <SpecificationsItemBlock>
                    <SpecificationsItemName>
                        Объем встроенной памяти
                    </SpecificationsItemName>
                    <SpecificationsItemDots />
                    <SpecificationsItemDesc>
                        256 ГБ
                    </SpecificationsItemDesc>
                </SpecificationsItemBlock>
                <SpecificationsItemBlock>
                    <SpecificationsItemName>
                        Диагональ экрана
                    </SpecificationsItemName>
                    <SpecificationsItemDots />
                    <SpecificationsItemDesc>
                        6.78
                    </SpecificationsItemDesc>
                </SpecificationsItemBlock>
                <SpecificationsItemBlock>
                    <SpecificationsItemName>
                        Разрешение экрана
                    </SpecificationsItemName>
                    <SpecificationsItemDots />
                    <SpecificationsItemDesc>
                        2652x1200 Пикс
                    </SpecificationsItemDesc>
                </SpecificationsItemBlock>
                <SpecificationsItemBlock>
                    <SpecificationsItemName>
                        Работа в 4G(LTE)-сетях
                    </SpecificationsItemName>
                    <SpecificationsItemDots />
                    <SpecificationsItemDesc>
                        Есть
                    </SpecificationsItemDesc>
                </SpecificationsItemBlock>
            </SpecificationsAllBlock> : <SpecificationsShortBlock visibleAllSpecifics={visibleAllSpecifics}>
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
                <SpecificationsItemBlock>
                    <SpecificationsItemName>
                        процессора
                    </SpecificationsItemName>
                    <SpecificationsItemDots />
                    <SpecificationsItemDesc>
                        Cortex-A55 х 1.8 ГГц
                    </SpecificationsItemDesc>
                </SpecificationsItemBlock>
                <SpecificationsItemBlock>
                    <SpecificationsItemName>
                        Объем оперативной памяти
                    </SpecificationsItemName>
                    <SpecificationsItemDots />
                    <SpecificationsItemDesc>
                        8 ГБ
                    </SpecificationsItemDesc>
                </SpecificationsItemBlock>
                <ChangeVisibleAllSpecifications onClick={handleVisibleAllSpecifics}>
                    Больше характеристик
                    <IoIosArrowDown />
                </ChangeVisibleAllSpecifications>
            </SpecificationsShortBlock>}

        </SpecificationsBlock >
    )
}

export default SpecificationsProductBlock