/* @flow */
import React from 'react'
import renderMarkdownToReact from '../utils/renderMarkdownToReact'
import styles from './styles.css'

export default function MarkdownPreview (
  { md }: {
    md: string
  }
): any {
  let el
  try {
    el = renderMarkdownToReact(md)
  } catch (error) {
    el = 'Syntax Error'
  }
  return <div className={styles.MarkdownPreview}>{el}</div>
}
