import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from '../../../App';
import Index from '../..';


it('renders correctly', () => {
    const tree = render(<Index/>)
    expect(tree).toMatchSnapshot();
  });

test('snapshot testing', () =>{
  const container= render(<App/>);
  expect(container).toMatchSnapshot();
});


