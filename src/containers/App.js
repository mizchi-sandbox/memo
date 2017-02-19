/* @flow */
import { connect } from 'react-redux'
import React from 'react'
// eslint-disable-next-line
import type { Connector } from 'react-redux'
import type { PageState, Buffer, Dispatcher } from '@i/types'
import Layout from '../components/Layout'

type PageProps = {
  page: PageState,
  buffer: Buffer
} & Dispatcher

function Page ({ dispatch, page, buffer }: PageProps) {
  return (
    <Layout
      layoutType={page.layoutType}
      dispatch={dispatch}
      currentBuffer={buffer.buffer}
    />
  )
}

const connector: Connector<{}, PageProps> = connect(({ page, buffer }) => ({ page, buffer }))

export default connector(Page)
