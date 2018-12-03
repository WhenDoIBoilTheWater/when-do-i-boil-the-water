import Planning from '../planning-view/Planning'

describe('testing the planning view', () => {
    test('should display the premade view', () => {
        
        expect()
    })

    it('render correctly text component', () => {  
        const TextInputComponent = renderer.create(<TextInput />).toJSON();
        expect(TextInputComponent).toMatchSnapshot();
    });
    
})