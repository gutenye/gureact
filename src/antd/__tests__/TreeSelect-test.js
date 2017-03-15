import { simple2complex } from './TreeSelect'


const simple = [
  { name: 'China', children: [
    { name: 'Zhejiang', children: [{name: 'Yiwu'}, {name: 'Hangzhou'}] },
    { name: 'Shanghai' },
  ]}
]

const complex = [
  { label: 'China', value: 'China', key: 'China', children: [
    { label: 'Zhejiang', value: 'China.Zhejiang', key: 'China.Zhejiang', children: [
      { label: 'Yiwu', value: 'China.Zhejiang.Yiwu', key: 'China.zhejiang.Yiwu' },
      { label: 'Hangzhou', value: 'China.Zhejiang.Hangzhou', key: 'China.zhejiang.Hangzhou' },
    ]},
    { label: 'Shanghai', value: 'China.Shanghai', key: 'China.Shanghai' }
  ]}
]

simple2complex(simple, complex)
