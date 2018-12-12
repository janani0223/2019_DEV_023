import React from 'react'
import Board from './board'
import {shallow, mount} from 'enzyme'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it('Test for rendering the component without crashing', () => {
  shallow(<Board />);
});

it('Testing for Inital state', ()=> {
  const boardComponentIntial = mount(<Board />);
  const playerX = boardComponentIntial
    .find("div.status")
    .text();
  expect(playerX).toEqual("Next player: X");
})

it("Testing game flow", () => {
  const wrapper = mount(<Board />);
  const playerX = wrapper
    .find("div.status")
    .first()
    .text();
  expect(playerX).toEqual("Next player: X");

  const firstClick = wrapper.find("button.square").first();
  firstClick.simulate("click");

  const playerO = wrapper
    .find("div.status")
    .first()
    .text();
  expect(playerO).toEqual("Next player: O");

  //player 2
  const turn2 = wrapper.find("button.square").at(1);
  turn2.simulate("click");
  //player 1
  const turn3 = wrapper.find("button.square").at(4);
  turn3.simulate("click");
  //player 2
  const turn4 = wrapper.find("button.square").at(5);
  turn4.simulate("click");
  //player 1
  const turn5 = wrapper.find("button.square").at(8);
  turn5.simulate("click");

  const winner = wrapper
    .find("div.status")
    .first()
    .text();
  expect(winner).toEqual("Winner: X");

});

it("Testing for match drawn scenario", () => {
  const boardComponent = mount(<Board />);

    //player x
  const turn1 = boardComponent.find("button.square").first();
  turn1.simulate("click");
  //player o
  const turn2 = boardComponent.find("button.square").at(1);
  turn2.simulate("click");
  //player x
  const turn3 = boardComponent.find("button.square").at(2);
  turn3.simulate("click");
  //player o
  const turn4 = boardComponent.find("button.square").at(3);
  turn4.simulate("click");
  //player x
  const turn5 = boardComponent.find("button.square").at(4);
  turn5.simulate("click");
  //player o
  const turn6 = boardComponent.find("button.square").at(6);
  turn6.simulate("click");
  //player x
  const turn7 = boardComponent.find("button.square").at(7);
  turn7.simulate("click");
  //player o
  const turn8 = boardComponent.find("button.square").at(5);
  turn8.simulate("click");
  //player x
  const turn9 = boardComponent.find("button.square").at(8);
  turn9.simulate("click");

  const winner = boardComponent
    .find("div.status")
    .text();
  expect(winner).toEqual("Match is Drawn");

});

it('Testing for same positions', ()=> {
  const wrapper2 = mount(<Board />);

  const turn1 = wrapper2.find("button.square").first();
  turn1.simulate("click");
  //player 1
  const playerX = wrapper2
    .find("div.status")
    .text();
  expect(playerX).toEqual("Next player: O");
  //player 2
  const turn2 = wrapper2.find("button.square").first();
  turn2.simulate("click");

  const playerO = wrapper2
    .find("div.status")
    .text();
  expect(playerO).toEqual("Next player: O");
});9

it('Testing for empty', ()=> {
  const wrapper2 = mount(<Board />);
  const turn2 = wrapper2.find("button.square").first().text();
  expect(turn2).toEqual('');
})
