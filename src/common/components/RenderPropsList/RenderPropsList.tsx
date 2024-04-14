import { Attributes, ReactNode } from 'react'

interface RenderPropsListProps<T extends { id: Attributes['key'] }> {
  list: Array<T>
  renderItem: (item: T) => ReactNode
}

/**
 * @summary render props 패턴의 UI 컴포넌트
 */
export const RenderPropsList = <T extends { id: Attributes['key'] }>({
  ...props
}: RenderPropsListProps<T>) => {
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item.id}>{props.renderItem(item)}</li>
      ))}
    </ul>
  )
}
