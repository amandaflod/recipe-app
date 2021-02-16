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
`

const Image = styled.img`
`
const Title = styled.h3`
`
const TagsWrap = styled.div`
`
const Tag = styled.p`
`


export default function Create() {

  const [recipes, setRecipes] = useState()

  useEffect(() => {
    fetch('http://localhost:8080/recipes')
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
                <TagsWrap>
                  {recipe.tags.map((tag) => {
                    return <Tag>{tag}</Tag>
                  })}
                </TagsWrap>
              </Card>
            </Link>
          )
        })
        }
      </Wrap>
    </Layout>
  )
}