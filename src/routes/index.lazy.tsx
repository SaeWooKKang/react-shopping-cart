import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Home,
})

function Home() {
  return <>hello</>
}
