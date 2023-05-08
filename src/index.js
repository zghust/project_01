import React from 'react'
import Reactdom from 'react-dom'
const a = React.createElement(
  'div',
  { class: 'wang', id: 'di' },
  '我是一个盒子'
)
Reactdom.render(a, document.getElementById('root'))
