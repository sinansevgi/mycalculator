import renderer from 'react-test-renderer';
import Calculator from '../../components/Calculator';

describe('The calculator component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
