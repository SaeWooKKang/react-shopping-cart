import { createLazyFileRoute, ErrorComponent } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  errorComponent: ErrorComponent,
  component: Home,
})

function Home() {
  return <>hello</>
}
