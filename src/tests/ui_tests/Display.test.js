import renderer from 'react-test-renderer';
import Display from '../../components/Display';

describe('The display component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<Display />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
