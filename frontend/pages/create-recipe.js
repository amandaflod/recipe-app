import { Button, Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'

const Title = styled.h1`
  text-align: center;
`

const Wrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
`

const SectionTitle = styled.h2`
`

const StyledInput = styled(Input)`
  margin-bottom: 16px;
  && {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #d9d9d9;
    outline: none;
    box-shadow: none;
  }
  &&:hover {

  }
`

const IngredientWrap = styled.div`
  margin-bottom: 10px;
`

const QuantityInput = styled(Input)`
  width: 50px;
  margin-right: 10px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  box-shadow: none;
`

const ProductInput = styled(Input)`
  width: 150px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  box-shadow: none;
`

const ButtonWrap = styled.div`
  text-align: right;
`

const StepWrap = styled.div`
  margin-bottom: 10px;
`

const StepTitle = styled.div`
`

const StyledTextArea = styled(Input.TextArea)`
  && {
    min-height: 50px;
    box-shadow: none;
  }
`

export default function Create() {
  return (
    <Wrap>
      <Title>Create recipe</Title>
      <StyledInput placeholder='Title'></StyledInput>
      <StyledInput placeholder='Image URL'></StyledInput>

      <SectionTitle>Ingredients</SectionTitle>
      <IngredientWrap>
        <QuantityInput placeholder='Qty.' />
        <ProductInput placeholder='Product' />
      </IngredientWrap>
      <Button type="primary" shape="circle" icon={<PlusOutlined />} />

      <SectionTitle>Instructions</SectionTitle>
      <StepWrap>
        <StepTitle>Step 1</StepTitle>
        <StyledTextArea autoSize={true} placeholder='Instructions' />
      </StepWrap>
      <Button type="primary" shape="circle" icon={<PlusOutlined />} />

      <ButtonWrap>
        <Button>Create recipe</Button>
      </ButtonWrap>
    </Wrap>
  )
}
