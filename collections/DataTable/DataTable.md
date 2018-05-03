### Default Data Table.
```js
 <DataTable 
  className="test"
  columns={[
    {
      label: 'Username',
      accessor: 'name',
      id: 'name',
    },{
      label: 'Email',
      accessor: 'email',
      id: 'email',
    },{
      label: 'Last Login',
      accessor: 'last_login',
      id: 'lastLogin',
    },
  ]}
  data={[
    {
      id: 1,
      name: 'Some User',
      email: 'some@user.com',
      last_login: 'some date',
      Role: {
        id: 1,
        role: 'Super User',
      },
    },{
      id: 2,
      name: 'Some OtherUser',
      email: 'some@otheruser.com',
      last_login: 'some otherdate',
      Role: {
        id: 2,
        role: 'User',
      },
    },
  ]}
/>
```