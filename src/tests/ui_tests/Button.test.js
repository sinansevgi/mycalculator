import renderer from 'react-test-renderer';
import Button from '../../components/Button';

describe('The button component', () => {
  const onClick = jest.fn();
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<Button handleClick={onClick} name="Test" />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
