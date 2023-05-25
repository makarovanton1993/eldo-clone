import router from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { authorization } from '../../http/userApi'
import { authStatus, getcurrentUser } from '../../redux/slices/userSlice'

const Wrapper = styled.div`
`
const ModalInputCode = styled.input.attrs({
  type: 'text',
  maxlength: '1'
}) <any>`
  width:50px;
  height:50px;
  margin:0 10px;
  border:1px solid #c3c2c2;
  border-radius:4px;
  text-align:center;
`
const TemporaryCodeBlock = ({ currentInfoUser }: any) => {
  const [pinValues, setPinValues] = useState(['', '', '', '']);
  const inputRef = useRef<any>([]);
  const dispatch = useDispatch();

  const handleChangePin = (i: any, pin: any) => {
    const oldValue = pinValues[i];
    const newValue = pin.trim().replace(oldValue, '');
    const length = inputRef.current.length - 1;
    const newArr = [];
    if (newValue < '0' || newValue > '9') {
      return;
    }
    const copy = [...pinValues];
    copy[i] = newValue;
    setPinValues(copy);
    length > i && inputRef.current[i + 1].focus();
  }

  const sendingData = async (pinValues: any) => {
    const { tel, id } = currentInfoUser;
    try {
      const pin = pinValues.join('');
      const user = await authorization(tel, pin, id)
      if (user) {
        dispatch(authStatus(true));
        // dispatch(getcurrentUser(user));
        router.push(`http://localhost:3000/personal/club/operations/`);
        document.body.style.overflow = 'scroll';
      }
    } catch (error) {
      console.log(error, "Ошибка авторизации")
    }
  }
  if (!pinValues.includes('')) {
    sendingData(pinValues)
  }
  useEffect(() => {
    inputRef.current[0]?.focus();
  }, [])

  return (
    <Wrapper>
      {pinValues.map((pinValue, i) => {
        return (<ModalInputCode key={i} ref={(elem: any) => inputRef.current[i] = elem} type="text" value={pinValue} onChange={(e: any) => handleChangePin(i, e.target.value)}></ModalInputCode>)
      })}

      {/* <ModalInputCode type="text" value={codeValue[1]} name='1' onChange={(e: any) => handleChangeCode(i, e.target.value)}></ModalInputCode>
      <ModalInputCode type="text" value={codeValue[2]} name='2' onChange={(e: any) => handleChangeCode(e)}></ModalInputCode>
      <ModalInputCode type="text" value={codeValue[3]} name='3' onChange={(e: any) => handleChangeCode(e)}></ModalInputCode> */}
    </Wrapper >
  )
}

export default TemporaryCodeBlock