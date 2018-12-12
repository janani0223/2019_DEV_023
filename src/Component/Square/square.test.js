import React from 'react'
import Square from './square'
import {shallow, mount} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it('Test for rendering the component without crashing', () => {
  const onClick = jest.fn();
  shallow(<Square value = {'X'} onClick = {onClick}/>);
});
