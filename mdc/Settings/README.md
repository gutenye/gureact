```
window.Settings = require('./index').default;
const items = [
  { avatar: true, items: [
    {
      text: 'Guten Ye', secondaryText: 'Apple Id, iCloud, iTunes & App Store',
      avatar: 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
    },
  ]},
  { items: [
    { icon: 'network_wifi', text: 'Wi-Fi' },
    { icon: 'bluetooth', text: 'Wi-Fi' },
  ]},
  { title: 'Networks', items: [
    { icon: 'network_wifi', text: 'Wi-Fi' },
    { icon: 'bluetooth', text: 'Wi-Fi' },
  ]},
];
<DemoMobile>
  <Settings items={items} />
</DemoMobile>
```