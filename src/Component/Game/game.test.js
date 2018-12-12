import React from 'react'
import Game from './game'
import {shallow, mount} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('Test for rendering the component without crashing', () => {
  shallow(<Game />);
});
