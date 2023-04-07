import { Text } from '@mantine/core'
import React from 'react'

export const DivTitle = ({ title, fw = 500 }) => {

  return (
    <Text tt="uppercase" fw={fw} fz="xs" c="dimmed">{title}</Text>
  )
}
