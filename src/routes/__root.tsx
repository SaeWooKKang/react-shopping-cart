import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { Gnb } from './-common/components/gnb/Gnb'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (
    <>
      <TanStackRouterDevtools />
      <Gnb />
      <Outlet />
    </>
  ),
})
