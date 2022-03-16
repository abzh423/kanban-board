import { AppContainer } from './styles/styled'
import { AddNewItem } from './components/AddNewItem'
import './global.css'
import { Column } from './components/Column'
import { Card } from './components/Card'

export const App = () => {
  return (
    <AppContainer>
      <Column text="To do">
        <Card text="Generate App Scuffold" />
      </Column>
      <Column text="In progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  )
}
