```
window.GridListItem = require('./GridListItem').default;
window.GridListItemWithDescription = require('../GridListItemWithDescription/GridListItemWithDescription').default;
window.GridListItemWithPrice = require('../GridListItemWithPrice/GridListItemWithPrice').default;
<div>
  <GridListItem
    name="Netgear Orbi"
    priceDisplay="¥2200"
    image="/images/product1.jpg"
  />
  <GridListItemWithPrice
    priceDisplay="¥2200"
    image="/images/product1.jpg"
  />
  <GridListItemWithDescription
    name="Netgear Orbi"
    image="/images/product1.jpg"
  />
</div>
```