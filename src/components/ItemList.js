/* @flow */
import React from 'react'
import type { Item as ItemType } from '@i/types'
import Item from './Item'
import styles from './styles.css'

export default function ItemList (
  props: {
    items: ItemType[],
    dispatch: any
  }
) {
  return (
    <ul className={styles.ItemList}>
      { props.items.map(item => {
        return <li key={item.id}>
          <Item
            item={item}
            onClick={_ev => {
              console.log('select item', item)
            }}
          />
        </li>
      })}
    </ul>
  )
}
