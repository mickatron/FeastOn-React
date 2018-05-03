import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


import editModifiers from '../proptypes/editable/modifierProps';

console.log('test setup script!!!!!!!!!!!!');


// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// edit some modifiers easy for testing.
// TODO: can these be moved to their respective tests or do some need to be glob?
editModifiers('HtmlInput', ['test']);
editModifiers('TestComponent', ['test']);
