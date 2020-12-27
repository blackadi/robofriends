import { shallow } from 'enzyme';
import Card from "./Card";

it('Card JSX', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
})