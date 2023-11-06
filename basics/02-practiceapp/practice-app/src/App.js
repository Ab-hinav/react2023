import './App.css';
import componentsImage from './assets/images/components.png';
import eventsImage from './assets/images/events.png';
import stateImage from './assets/images/state.png';
import {Header} from './Components/Header';
import {Card} from './Components/Card';
import {CardContainer} from './Components/CardContainer';


function App() {
    const concepts = [
        {
            title: 'components',
            image: componentsImage,
            description:
                'components let you split the UI into independent, reusable pieces, and think about each piece in isolation. components can receive data via props, and they can render dynamic output using JSX.',
        },
        {
            title: 'State',
            image: stateImage,
            description:
                'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
        },
        {
            title: 'Events',
            image: eventsImage,
            description:
                'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
        },
    ];


    return (
        <div>
            <Header/>
            <CardContainer>
                <Card data={concepts[0]}/>
                <Card data={concepts[1]}/>
                <Card data={concepts[2]}/>
            </CardContainer>
        </div>
    );
}

export default App;
