import React from 'react'
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  margin-right:10px;
`
const Icon = styled.svg`
  fill: none;
  stroke: white;
  strokeWidth: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? '#61b72f' : 'hidden'};
  border-radius: 3px;
  transition: all 150ms;
  border:1px solid #61cf31;
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`
interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
}

const Checkbox: React.FC<IProps> = ({ className, checked, labelWrap = true, ...props }) => {
  const content = (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
  return labelWrap ? <label>{content}</label> : <>{content}</>
}



export default Checkbox;