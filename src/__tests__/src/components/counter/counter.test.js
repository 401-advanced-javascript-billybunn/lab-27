import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../components/counter/counter.js';

/*
* Write tests to cover the counter component
  * For Up and Down events
    * Assert state changes properly
    * Assert that state is being transferred to the DOM
    * Assert DOM stability via snapshot testing.
      * i.e. take a snapshot, change the markup/jsx, assert failure.  Put it back to make it all good.
*/

describe('<Counter />', () => {
  it('is alive at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('decrements when "minus" is clicked', () => {
    let wrapper = mount(<Counter />);
    let minus = wrapper.find('.down-clicker');

    minus.simulate('click');
    expect(wrapper.state('count')).toBe(-1);
    expect(wrapper.state('polarity')).toEqual('negative');
    expect(wrapper.find('span').text()).toEqual('-1');
  });

  it('increments when "plus" is clicked', () => {
    let wrapper = mount(<Counter />);
    let minus = wrapper.find('.up-clicker');

    minus.simulate('click');
    expect(wrapper.state('count')).toBe(1);
    expect(wrapper.state('polarity')).toEqual('positive');
    expect(wrapper.find('span').text()).toEqual('1');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON;
    expect(tree).toMatchSnapshot();

  });




});