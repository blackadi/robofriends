import { shallow } from 'enzyme';
import CardList from "./CardList";

it('Card JSX', () => {
    const mockRobots = [
        {
            id: 1,
            name:'test',
            email:'test@test.com'
        }
    ]
    const wrapper = shallow(<CardList robots={mockRobots} />);
    expect(wrapper).toMatchSnapshot();
})