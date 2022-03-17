import { CardContainer } from '../styles/styled'

type CardProps = {
  text: string
}

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>
}
