import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Layout } from '../../components/Layout'


const Image = styled.img`
  width: 100%;
`

const HeaderWrap = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

const FlexAligner = styled.div`
  border-bottom: 1px solid #ccc;
  flex: 1 1 50%;
`

const Left = styled(FlexAligner)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  width: 100%;
`

const Right = styled(FlexAligner)`
  position: relative;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  margin: 0;
  font-family: 'Newsreader', sans-serif;
`

const Subtitle = styled.h2`
font-weight: 400;
padding: 20px 0;
margin: 20px 0 ;
border-bottom: 1px solid black;
font-family: 'Newsreader', sans-serif;
`


const IngredientsWrap = styled.div`
  padding: 0 30px ;
  max-width: 800px;
  margin: 0 auto;

`
const Ingredient = styled.p`
`

const StepsWrap = styled.div`
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
`

const StepWrap = styled.div`
`

const StepTitle = styled.h3`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
`


const StepText = styled.p`
  font-family: 'Newsreader', sans-serif;
`


export default function Page() {
  const router = useRouter()
  const recipeId = router.query.recipeId

  const [recipe, setRecipe] = useState()

  useEffect(() => {
    fetch(`https://amandas-recipe-app.herokuapp.com/recipes/${recipeId}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
  }, [recipeId])

  if (!recipe) {
    return "loading"
  }

  return <>
    <Layout>
      <HeaderWrap>
        <Left>
          <Title>{recipe.title}</Title>
        </Left>
        <Right>
          <Image src={recipe.imageUrl || 'https://images.unsplash.com/photo-1525159831892-59d292d558b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} />
        </Right>
      </HeaderWrap>
      <IngredientsWrap>
        <Subtitle>Ingredients</Subtitle>
        {recipe.ingredients.map((ingredient) => {
          return <Ingredient>{ingredient.quantity} {ingredient.product}</Ingredient>
        })}
      </IngredientsWrap>
      <StepsWrap>
        <Subtitle>Steps</Subtitle>
        {recipe.steps.map((step, index) => {
          return <StepWrap>
            <StepTitle>Step {index + 1}</StepTitle>
            <StepText>{step}</StepText>
          </StepWrap>
        })}
      </StepsWrap>
    </Layout>
  </>
}

