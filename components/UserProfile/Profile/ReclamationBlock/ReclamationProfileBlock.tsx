import React from 'react'
import styled from 'styled-components';
import ReclamationForm from './ReclamationForm';


const Wrapper = styled.div`
  width:100%;
  border:1px solid grey;
  padding:20px;
`

const Title = styled.h3`
    font-size:22px;
    font-weight:500;
    margin-bottom:20px;
    padding-bottom:20px;
    border-bottom:1px solid grey;
`
const Paragraph = styled.p`
  font-size:14px;
  line-height:20px;
  margin-bottom:15px;
  margin-right:15px;
  color:#3f454b;
`

const ReclamationProfileBlock = () => {
  return (
    <Wrapper>
      <Title>Рекламация</Title>
      <Paragraph>Мы постоянно стремимся улучшать качество предоставляемых услуг. Не в последнюю очередь нам помогают в этом пожелания наших покупателей.</Paragraph>
      <Paragraph>Если у Вас есть претензии к работе Интернет-магазина или нашей службы доставки, то Вы можете воспользоваться следующей формой обратной связи:</Paragraph>
      <ReclamationForm/>
    </Wrapper>

  )
}

export default ReclamationProfileBlock;