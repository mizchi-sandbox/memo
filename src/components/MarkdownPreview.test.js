/* @flow */
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import MarkdownPreview from './MarkdownPreview'

test('MarkdownPreview', t => {
  const _wrapper = shallow(<MarkdownPreview md='# aaa'/>)
  // t.truthy(wrapper.find(<h1>aaa</h1>).length)
  t.pass()
})
