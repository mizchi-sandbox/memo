/* @flow */
import React from 'react'
import renderMarkdownToReact from '../utils/renderMarkdownToReact'

export default function MarkdownPreview (
  { md }: {
    md: string
  }
) {
  let el
  try {
    el = renderMarkdownToReact(md)
  } catch (error) {
    el = 'Syntax Error'
  }
  return (
    <div>
      {el}
    </div>
  )
}
