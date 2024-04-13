import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { Gnb } from './-common/components/gnb/Gnb'

export const Route = createRootRoute({
  component: () => (
    <>
      <TanStackRouterDevtools />
      <Gnb />
      <Outlet />
    </>
  ),
})
