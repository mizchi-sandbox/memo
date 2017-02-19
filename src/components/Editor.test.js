/* @flow */
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Editor from './Editor'

test(async t => {
  shallow(<Editor onChangeBody={text => text}/>)
  t.pass()
})
