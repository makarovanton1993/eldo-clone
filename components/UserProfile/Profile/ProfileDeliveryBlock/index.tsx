import React from 'react'
import styled from 'styled-components'
import { Div, TypographyH3 } from '../../../../styles/components/component'

const Wrapper = styled(Div)`
    width: 100%;
    border: 1px solid rgb(231 231 231);
    padding: 20px;
    height: 200px;
`
const TitleH3 = styled(TypographyH3)`
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(231 231 231);
`
const DeliveryBlock = styled(Div)`
    
`
const ProfileDeliveryBlock = () => {
  return (
    <Wrapper>
        <TitleH3>Профили доставок</TitleH3>
        <DeliveryBlock></DeliveryBlock>
    </Wrapper>
  )
}

export default ProfileDeliveryBlock

