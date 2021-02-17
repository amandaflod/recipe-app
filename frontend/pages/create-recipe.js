import { Button, Input } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { Layout } from '../components/Layout'

const Title = styled.h1`
  text-align: center;
`

const Wrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
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
`

const IngredientWrap = styled.div`
  margin-bottom: 10px;
`

const QuantityInput = styled(Input)`
  width: 50px;
  margin-right: 10px;
  && {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #d9d9d9;
    outline: none;
    box-shadow: none;
  }
`

const ProductInput = styled(Input)`
  width: 150px;
  && {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #d9d9d9;
    outline: none;
    box-shadow: none;
  }
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

const immutableUpdateNthElement = (arr, n, newElement) => [
  ...arr.slice(0, n),
  newElement,
  ...arr.slice(n + 1)
];

const immutableDeleteNthElement = (arr, n) => [
  ...arr.slice(0, n),
  ...arr.slice(n + 1)
]

export default function Create() {
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [ingredients, setIngredients] = useState([{ quantity: '', product: '' }])
  const [steps, setSteps] = useState([''])

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://amandas-recipe-app.herokuapp.com/create-recipe',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          imageUrl,
          steps,
          ingredients
        })
      })
      // .then(() => {
      //   window.location.reload()
      // })
      .catch((err) => console.log('error', err))
  }

  return (
    <Layout>
      <Wrap>
        <Title>Create recipe</Title>
        <StyledInput
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <StyledInput
          placeholder='Image URL'
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />

        <SectionTitle>Ingredients</SectionTitle>
        {ingredients.map((ingredient, i) => (
          <IngredientWrap>
            <QuantityInput
              placeholder='Qty.'
              value={ingredient.quantity}
              onChange={e => setIngredients(immutableUpdateNthElement(
                ingredients,
                i,
                { quantity: e.target.value, product: ingredient.product }
              ))}
            />
            <ProductInput
              placeholder='Product'
              value={ingredient.product}
              onChange={e => setIngredients(immutableUpdateNthElement(
                ingredients,
                i,
                { quantity: ingredient.quantity, product: e.target.value }
              ))}
            />
            <DeleteOutlined onClick={() => setIngredients(immutableDeleteNthElement(ingredients, i))} />
          </IngredientWrap>
        ))}
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={() => setIngredients([...ingredients, { quantity: '', product: '' }])} />

        <SectionTitle>Instructions</SectionTitle>
        {steps.map((step, i) => (
          <StepWrap>
            <StepTitle>Step {i + 1}</StepTitle>
            <StyledTextArea
              autoSize={true}
              placeholder='Instructions'
              value={step}
              onChange={e => setSteps(immutableUpdateNthElement(steps, i, e.target.value))}
            />
            <DeleteOutlined onClick={() => setSteps(immutableDeleteNthElement(steps, i))} />
          </StepWrap>
        ))}
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={() => setSteps([...steps, ''])}
        />

        <ButtonWrap>
          <Button onClick={handleSubmit}>Create recipe</Button>
        </ButtonWrap>
      </Wrap>
    </Layout>
  )
}
