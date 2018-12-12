import React from 'react'
import Game from './game'
import Board from '../Board/board'
import {shallow, mount} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('Test for rendering the component without crashing', () => {
  shallow(<Game />);
});

it('Test for start over button', () => {
  const wrapper = mount(<Game />);
  const wrapper2 = mount(<Board />);
  
  const firstClick = wrapper.find("button.startAgain").first();
  firstClick.simulate("click");

  const playerX = wrapper2
    .find("div.status")
    .first()
    .text();
  expect(playerX).toEqual("First player: X");

  

});

