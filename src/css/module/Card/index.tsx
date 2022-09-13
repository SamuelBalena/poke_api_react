import React, { ReactNode } from 'react'
import { Item } from './styles'

interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <Item size="normal" border="normal" shadow="normal">
      {children}
    </Item>
  )
}
