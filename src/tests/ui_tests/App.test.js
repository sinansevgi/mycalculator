import renderer from 'react-test-renderer';
import App from '../../components/App';

describe('The app component', () => {
  it('should match with snapshot', () => {
    const componentTree = renderer
      .create(<App />)
      .toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
