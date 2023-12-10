import './App.css'
import Container from './componens/Container'
import PageMain from './layouts/PageMain'
import PageHeader from './layouts/PageHeader'

function App() {
  return (
    <>
      <Container>
        <PageHeader />
        <PageMain />
      </Container>
    </>
  )
}

export default App
