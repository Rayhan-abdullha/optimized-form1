import React from 'react'
import styled from 'styled-components'
import Error from '../../UI/error/Error'
import TextInput from '../../UI/input/TextInput'
import {Label} from '../../UI/Label/Label'

const Wrapper = styled.div`
  margin-bottom: 10px;
  border: 1px solid #cacaca;
  padding: 8px;
  border-radius: 5px;
`
const InputGroup = ({label, onchange, type, onblur, onfoucs, placeholder, name, value, error}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <TextInput onChange={onchange} type={type} onFocus={onfoucs} onBlur={onblur} name={name} placeholder={placeholder} value={value}/>
      <Error>{error}</Error>
    </Wrapper>
  )
}

export default InputGroup