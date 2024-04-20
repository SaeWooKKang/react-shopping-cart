/**
 * @summary object를 key=value 형태의 string으로로 변환한다.
 */
export const convertQueryToString = (query: Record<string, string | number | boolean>) => {
  const queryArray = Object.entries(query)
  const queryString = queryArray
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')

  return queryString
}
