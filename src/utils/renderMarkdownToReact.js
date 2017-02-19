/* @flow */
import remark from 'remark'
import reactRenderer from 'remark-react'

const options = {
  gfm: true,
  footnotes: true,
  breaks: true
}

export default function renderMarkdownToReact (text: string) {
  return remark().use(reactRenderer).process(text, options).contents
}
