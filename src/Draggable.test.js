import React from 'react';
import { render, screen } from '@testing-library/react';
import Draggable from './Draggable';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18'


Enzyme.configure({ adapter: new Adapter() })

test('On test react position', () => {
  render(<Draggable />);
  const draggle = shallow(<Draggable />)
  const position = draggle.props.position;
  expect(position);
});
