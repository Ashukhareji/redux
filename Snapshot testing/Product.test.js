import Product from './Product';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Product/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('render when there are no items', () =>{
    const snapshopt = renderer.create(<Product/>).toJSON();
    expect(snapshopt).toMatchSnapshot();
});
it('render when there is one item', () =>{
    const snapshopt = renderer.create(<Product items={['Rice']}/>).toJSON();
    expect(snapshopt).toMatchSnapshot();
});
it('render when there are multiple items', () =>{
    const snapshopt = renderer.create(<Product items={["Rice","Pulses","Wheat"]}/>).toJSON();
    expect(snapshopt).toMatchSnapshot();
});
