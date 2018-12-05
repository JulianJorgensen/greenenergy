import React from 'react'
import styled from 'styled-components'

const Placeholder = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;
`

export default () => (
  <Placeholder src="http://cdn.thankyoustudio.com.s3.amazonaws.com/images/placeholder.jpg" />
)