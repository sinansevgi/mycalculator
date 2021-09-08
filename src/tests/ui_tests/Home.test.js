import renderer from 'react-test-renderer';
import Home from '../../components/Home';

describe('The home component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<Home />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
