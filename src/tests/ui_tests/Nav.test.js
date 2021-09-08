import renderer from 'react-test-renderer';
import Nav from '../../components/Nav';

describe('The nav component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<Nav />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
