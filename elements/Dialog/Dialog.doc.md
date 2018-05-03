```js noeditor
{
  Dialog.Header = DialogHeader;
  Dialog.Content = DialogContent;
  Dialog.Footer = DialogFooter;
}
null
```

```js
<div style={{position:'relative', width: '100%', height: '200px'}}>
  <Dialog>
    <Dialog.Header><p><strong>A Default Dialog</strong></p></Dialog.Header>
    <Dialog.Content><p>A Default Dialog</p></Dialog.Content>
    <Dialog.Footer><Button>Close</Button></Dialog.Footer>
  </Dialog>
</div>
```