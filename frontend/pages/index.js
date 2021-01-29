import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
`

const Card = styled.div`
border: solid 1px red;
`

const Image = styled.img`
`
const Title = styled.h3`
`
const Tags = styled.p`
`
const Button = styled.button``

export default function Create() {

  return (
    <Wrapper>
      <h2>My recipes</h2>
      <Link href='/create-recipe'><Button>Create Recipe</Button></Link>
      <Card>
        <Image />
        <Title></Title>
        <Tags></Tags>
      </Card>
    </Wrapper>
  )
}