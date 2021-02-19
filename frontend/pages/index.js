import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { Button, Card, Input } from 'antd'

const Wrap = styled.div`
 margin: 40px;
`

const NavbarWrap = styled.div`
display: flex;
justify-content: space-between;

`
const CardWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const StyledCard = styled(Card)`
  max-width: 500px;
  margin: 20px 20px 0 20px;
`

const Image = styled.img`
max-width: 400px;
width: 100%;

 overflow: hidden; 
`
const Title = styled.h3`
  margin: 20px 20px 0;
  font-family: 'Newsreader', sans-serif;
  font-size: 22px;
`



export default function Create() {
  const [recipes, setRecipes] = useState()
  const [filteredRecipes, setFiteredRecipes] = useState()

  useEffect(() => {
    fetch('https://amandas-recipe-app.herokuapp.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data)
        setFiteredRecipes(data)
      })
  }, [])

  if (!filteredRecipes) {
    return "loading"
  }

  return (
    <Layout>
      <Wrap>
        <h2>My recipes</h2>
        <NavbarWrap>
          <Input.Search
            placeholder="Search recipe"
            onKeyDown={e => {
              setTimeout(() => {
                setFiteredRecipes(recipes.filter(recipe => recipe.title.toLowerCase().includes(e.target.value.toLowerCase())))
              }, 0)
            }}
            style={{ width: 200 }} />
          <Link href='/create-recipe'><Button>Create Recipe</Button></Link>
        </NavbarWrap>
        <CardWrap>
          {filteredRecipes.map((recipe) => {
            return (
              <Link key={recipe._id} href={`/recipe/${recipe._id}`}>
                <StyledCard hoverable>
                  <Image src={recipe.imageUrl || 'https://images.unsplash.com/photo-1525159831892-59d292d558b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} />
                  <Title>{recipe.title}</Title>
                </StyledCard>
              </Link>
            )
          })
          }
        </CardWrap>
      </Wrap>
    </Layout>
  )
}