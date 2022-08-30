/* eslint-disable prettier/prettier */
import React from 'react'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <video playsInline autoPlay loop disableRemotePlayback muted>
        <source src='https://storage.googleapis.com/pgoblog/gofest-2022/hpp/16x9.mp4' type='video/mp4'/>
      </video>
    </Container>
  )
}
