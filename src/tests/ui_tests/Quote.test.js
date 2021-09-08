import renderer from 'react-test-renderer';
import Quote from '../../components/Quote';

describe('The quote component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<Quote />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
