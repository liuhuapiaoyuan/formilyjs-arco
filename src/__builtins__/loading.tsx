import React from 'react'
import { Spin, Message } from '@arco-design/web-react'

export const loading = async (
  title: React.ReactNode = 'Loading...',
  processor: () => Promise<any>
) => {
  let hide = null
  let loading = setTimeout(() => {
    hide = Message.info({
      content: title,
      icon: <Spin />,
      duration: 300,
    })
  }, 100)
  try {
    return await processor()
  } finally {
    hide?.(hide)
    clearTimeout(loading)
  }
}
