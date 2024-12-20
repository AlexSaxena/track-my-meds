import { createFileRoute } from '@tanstack/react-router'
import Home from './Home'

export const Route = createFileRoute('/')({
  component: Home,
})

const RootLayout = () => {
  return <Home />
}

export default RootLayout
