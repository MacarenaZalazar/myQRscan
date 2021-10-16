jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  it('renders correctly', async () => {
    const tree = await renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('has 2 childs', async () => {
    const tree =  await renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });

});
