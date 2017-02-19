/* @flow */
import { connect } from 'react-redux'
import React from 'react'
// eslint-disable-next-line
import type { Connector } from 'react-redux'
import type { PageState, Dispatcher } from '@i/types'
import Editor from '../components/Editor'
import Layout from '../components/Layout'

type PageProps = PageState & Dispatcher

function Page ({ location: _, dispatch }: PageProps) {
  return (
    <Layout
      children={
        <Editor onChangeBody={text => console.log(text)} />
      }
      dispatch={dispatch}
    />
  )
}

const connector: Connector<{}, PageProps> = connect(({ page }) => page)

export default connector(Page)
