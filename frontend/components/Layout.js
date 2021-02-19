import React from 'react'
import styled from 'styled-components'
import { PageHeader } from 'antd';
import Link from 'next/link';


const Page = styled.div`
background-color: #F8F8F8;
min-height: 100vh;
height: auto;
position: relative;
padding-bottom: 50px;
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
a {&:hover {
  color: white;
}}
`

const StyledFooter = styled.footer`
background-color: black;
color: white;
width: 100%;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
bottom: 0;
position: absolute;
`
const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`

export const Layout = ({ children }) => {
  return (
    <Page>
      <StyledHeader
        title={<Link href="/">mahlzeit</Link>}
      />
      { children}
      <StyledFooter>
        <FooterText> © 2021 Amanda Flodström</FooterText>
      </StyledFooter>
    </Page>
  )
}