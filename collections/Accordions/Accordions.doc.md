
```js
<Accordions

  accordions={[
    {
      keyId: 1,
      header:{
        children: 'accordion header'
      },
      content:{
        children: 'accordion content'
      },
      open: true,
    },
    {
      keyId: 2,
      header:{
        children: 'accordion header 1'
      },
      content:{
        children: 'accordion content 1'
      },
      open: false,
    },
  ]}
/>
```
#### allow only 1
```js
<Accordions
  accordions={[
    {
      keyId: 1,
      header:{
        children: 'accordion header'
      },
      content:{
        children: 'accordion content'
      },
      open: true,
    },
    {
      keyId: 2,
      header:{
        children: 'accordion header 1'
      },
      content:{
        children: 'accordion content 1'
      },
      open: false,
    },
    {
      keyId: 3,
      header:{
        children: 'accordion header 2'
      },
      content:{
        children: 'accordion content 2'
      },
      open: false,
    },
  ]}
  allow={1}
/>
```
#### As divs
```js
<Accordions
  as="div"
  accordions={[
    {
      as: "div",
      keyId: 1,
      header:{
        children: 'accordion header'
      },
      content:{
        children: 'accordion content'
      },
      open: true,
    },
    {
      as: "div",
      keyId: 2,
      header:{
        children: 'accordion header 1'
      },
      content:{
        children: 'accordion content 1'
      },
      open: false,
    },
  ]}
/>
```