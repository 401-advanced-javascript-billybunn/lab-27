import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../components/counter/counter.js';

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
    expect(wrapper.find('span').text()).toEqual('1');
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