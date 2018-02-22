
import { shallow } from 'enzyme';
import React from 'react';
import DataTable from './DataTable';

describe('DataTable', () => {

  let component = null;
  beforeAll(() => {
    component = shallow(
      <DataTable 
        className="test"
        columns={[
          {
            label: 'Username',
            accessor: 'name',
            key: 'name',
          },{
            label: 'Email',
            accessor: 'email',
            key: 'email',
          },{
            label: 'Last Login',
            accessor: 'last_login',
            key: 'lastLogin',
          },
        ]}
        data={[
          {
            key:1,
            id: 1,
            name: 'Some User',
            email: 'some@user.com',
            last_login: 'some date',
            Role: {
              id: 1,
              role: 'Super User',
            },
          },{
            key:2,
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
    );
  });

  describe('renders', () => {
    it('custom className', () => {
      expect(component.find('.c-DataTable.test').exists()).toBeTruthy();
    });

    it('correct headers', () => {
      expect(component.find('.c-DataTable th')).toHaveLength(3);
      
      expect(component.find('.c-DataTable thead tr').childAt(0).text()).toBe('Username');
      expect(component.find('.c-DataTable thead tr').childAt(1).text()).toBe('Email');
      expect(component.find('.c-DataTable thead tr').childAt(2).text()).toBe('Last Login');
    });
    it('correct rows', () => {
      const bodyRow = component.find('.c-DataTable tbody tr');
      expect(bodyRow).toHaveLength(2);
      
      const firstBodyRow = bodyRow.first();
      expect(firstBodyRow.childAt(0).text()).toBe('Some User');
      expect(firstBodyRow.childAt(1).text()).toBe('some@user.com');
      expect(firstBodyRow.childAt(2).text()).toBe('some date');
      
      const lastBodyRow = bodyRow.last();
      expect(lastBodyRow.childAt(0).text()).toBe('Some OtherUser');
      expect(lastBodyRow.childAt(1).text()).toBe('some@otheruser.com');
      expect(lastBodyRow.childAt(2).text()).toBe('some otherdate');
    });
  });


});