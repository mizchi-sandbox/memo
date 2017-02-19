/* @flow */
import React from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import type { Connector } from 'react-redux'
import type { Item as ItemType, Dispatcher } from 'types'
import ItemList from '../components/ItemList'

type Props = {items: ItemType[]} & Dispatcher

function ItemListContainer ({ items, dispatch }: Props) {
  return <ItemList items={items} dispatch={dispatch} />
}

const connector: Connector<{}, Props> = connect(({ items }) => ({ items }))
export default connector(ItemListContainer)
