```
const MdHistory = require('react-icons/lib/md/history');
const MdFavorite = require('react-icons/lib/md/favorite');
<BottomNavigation
  items={[
    { label: 'Favorites', icon: <MdFavorite className='icon' />, to: '/' },
    { icon: <MdHistory className='icon' />, to: '/recents' },
    { label: 'NearBy', to: '/nearby' },
  ]}
  style={{ position: 'relative' }}
/>
```