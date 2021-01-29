import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Header = styled.h2`
`
const Image = styled.img`
`
const IngredientsWrap = styled.div`
`
const Ingredient = styled.p`
`

const StepsWrap = styled.div`
`

const Step = styled.p`
`

const TagsWrap = styled.div`
`

const Tag = styled.p`
`

export default function Page() {
  const router = useRouter()
  const recipeId = router.query.recipeId

  const [recipe, setRecipe] = useState()

  useEffect(() => {
    fetch('http://localhost:8080/recipes/123')
      .then((res) => res.json())
      .then((data) => setRecipe(data))
  }, [recipeId])

  if (!recipe) {
    return "loading"
  }

  return <>
    <Header>{recipe.title}</Header>
    <Image src={recipe.imageUrl} />
    <IngredientsWrap>
      {recipe.ingredients.map((ingredient) => {
        return <Ingredient>{ingredient.quantity} {ingredient.product}</Ingredient>
      })}
    </IngredientsWrap>
    <StepsWrap>
      {recipe.steps.map((step) => {
        return <Step>{step}</Step>
      })}
    </StepsWrap>
    <TagsWrap>
      {recipe.tags.map((tag) => {
        return <Tag>{tag}</Tag>
      })}
    </TagsWrap>
  </>
}

