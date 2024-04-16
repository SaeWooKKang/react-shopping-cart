export const parseApiStatus = ({
  isLoading,
  isError,
}: {
  isLoading: boolean
  isError: boolean
}) => {
  if (isLoading) return 'loading'

  if (isError) return 'error'

  return 'success'
}
