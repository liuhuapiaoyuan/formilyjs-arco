import React from 'react'
import { Space as ArcoSpace, SpaceProps } from '@arco-design/web-react'
import * as ReactIs from 'react-is'

// 递归过滤，只要是 就一直过滤
function renderChildren(children?: React.ReactNode) {
  if (!children) {
    return null
  }
  if (Array.isArray(children)) {
    return children.map(renderChildren)
  }
  if (ReactIs.isFragment(children)) {
    return renderChildren(children.props.children)
  }

  return children
}

export const Space: React.FC<React.PropsWithChildren<SpaceProps>> = ({
  children,
  ...props
}) => {
  return <ArcoSpace {...props}>{renderChildren(children)}</ArcoSpace>
}

export default Space
