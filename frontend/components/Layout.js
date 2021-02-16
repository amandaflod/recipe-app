import React from 'react'
import styled from 'styled-components'
import { PageHeader } from 'antd';


const Page = styled.div`
background-color: #F8F8F8;
height: 100vh;
`

const StyledHeader = styled(PageHeader)`
background-color: black;
.ant-page-header-heading{
  align-items: center;
  justify-content: center;
}
.ant-page-header-heading-title {
color: white;
font-family:'Newsreader', serif;
font-size: 2rem;
}
`


export const Layout = ({ children }) => {
  return (
    <Page>
      <StyledHeader
        title="mahlzeit"
      />
      { children}
    </Page>
  )
}