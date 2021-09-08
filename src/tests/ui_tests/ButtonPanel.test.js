import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

describe('The Button panel component', () => {
  const onClick = jest.fn();
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<ButtonPanel handleClick={onClick} />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
