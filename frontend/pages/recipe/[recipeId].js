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
`

const Title = styled.h1`
font-weight: bold;
`
const Subtitle = styled.h2`
font-weight: bold;
padding: 20px 0;
margin: 20px 0 ;
border-bottom: 1px solid black;
`


const IngredientsWrap = styled.div`
  padding: 0 30px ;

`
const Ingredient = styled.p`
`

const StepsWrap = styled.div`
  padding: 30px;
`
const StepWrap = styled.div`
`
const StepTitle = styled.h3`
font-weight: bold;
`


const StepText = styled.p`
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
          <Image src={recipe.imageUrl} />
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

