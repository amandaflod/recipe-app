import { Button, Input } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 16px;
`

export default function Home() {
  return (
    <Wrap>
      <Button>Button</Button>
      <Input placeholder='Input'></Input>
    </Wrap>
  )
}
