/* @flow */
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import MarkdownPreview from './MarkdownPreview'

test('MarkdownPreview', t => {
  const wrapper = shallow(<MarkdownPreview md='# aaa'/>)
  t.truthy(wrapper.text().indexOf('aaa') > -1)
})
