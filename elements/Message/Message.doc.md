```js noeditor
{
  Message.Header = MessageHeader;
  Message.Content = MessageContent;
  Message.Footer = MessageFooter;
}
null
```

```js
<div>
    <Message>A Default Message</Message>
    <Message
      modifier="truthy"
    >A `truthy` Message</Message>
    <Message
      modifier="falsy"
    >A `falsy` Message</Message>
    <Message
      modifier="warning"
    >A `warning` Message</Message>
    <Message
      modifier="info"
    >A `info` Message</Message>
  </div>
```