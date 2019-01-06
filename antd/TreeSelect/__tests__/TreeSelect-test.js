import { simple2complex } from '../TreeSelect'

it('#simple2complex', () => {
  const simple = {
    China: {
      Zhejiang: {
        Yiwu: 1,
        Hangzhou: 1,
      },
      Shanghai: 1,
    },
  }
  const right = [
    {
      label: 'China',
      value: 'China',
      key: 'China',
      children: [
        {
          label: 'Zhejiang',
          value: 'China.Zhejiang',
          key: 'China.Zhejiang',
          children: [
            {
              label: 'Yiwu',
              value: 'China.Zhejiang.Yiwu',
              key: 'China.Zhejiang.Yiwu',
            },
            {
              label: 'Hangzhou',
              value: 'China.Zhejiang.Hangzhou',
              key: 'China.Zhejiang.Hangzhou',
            },
          ],
        },
        { label: 'Shanghai', value: 'China.Shanghai', key: 'China.Shanghai' },
      ],
    },
  ]
  const left = simple2complex(simple)
  expect(left).toEqual(right)
})
