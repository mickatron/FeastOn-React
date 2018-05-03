```js noeditor
{
  Menu.Item = MenuItem;
}
null
```

```js
<Menu>
  <Menu.Item key="1">
    <Button appearance="link">Menu Item</Button>
  </Menu.Item>
  <Menu.Item key="2">
    <Button appearance="link">Menu Item</Button>
  </Menu.Item>
  <Menu.Item key="3">
    <Button appearance="link">Menu Item</Button>
  </Menu.Item>
</Menu>
```

menu bar
```js
<Menu
  modifier={['bar']}
>
  <Menu.Item key="1">
    <Button appearance="link">Menu Item</Button>
  </Menu.Item>
  <Menu.Item key="2">
    <Button appearance="link">Menu Item</Button>
  </Menu.Item>
  <Menu.Item key="3">
    <Button appearance="link">Menu Item</Button>
  </Menu.Item>
</Menu>
```
Vertical Bar
```js
<Menu
  modifier={['bar', 'vertical']}
>
  <Menu.Item key="1">
    <Button appearance="link">Menu Item</Button>
  </Menu.Item>
  <Menu.Item key="2">
    <Button appearance="link">Menu Item</Button>
  </Menu.Item>
  <Menu.Item key="3">
    <Button appearance="link">Menu Item</Button>
  </Menu.Item>
</Menu>
```