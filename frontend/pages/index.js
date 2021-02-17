import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { Button } from 'antd'

const Wrap = styled.div`
 margin: 40px;
`

const Card = styled.div`
  background-color: white;
  width: 350px;
  margin-top: 20px;
  padding: 20px;
`

const Image = styled.img`
 width: 250px;

`
const Title = styled.h3`
`



export default function Create() {

  const [recipes, setRecipes] = useState()

  useEffect(() => {
    fetch('https://amandas-recipe-app.herokuapp.com/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
  }, [])

  if (!recipes) {
    return "loading"
  }

  return (
    <Layout>
      <Wrap>
        <h2>My recipes</h2>
        <Link href='/create-recipe'><Button>Create Recipe</Button></Link>

        {recipes.map((recipe) => {
          return (
            <Link href={`/recipe/${recipe._id}`}>
              <Card>
                <Image src={recipe.imageUrl} />
                <Title>{recipe.title}</Title>
              </Card>
            </Link>
          )
        })
        }
      </Wrap>
    </Layout>
  )
}