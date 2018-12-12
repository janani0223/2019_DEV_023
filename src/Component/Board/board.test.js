import React from 'react'
import Board from './board'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme'

configure({ adapter: new Adapter() });
it('Test for rendering the component without crashing', () => {
  shallow(<Board />);
});




 



