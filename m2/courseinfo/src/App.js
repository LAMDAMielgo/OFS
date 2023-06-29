import {appContent} from './data/course'
import {Header} from './components/allComponents'

const App = () => {

    return [
        <Header 
            name="WebDev Curriculum"
            id={0} 
        />,
        <>{ appContent.map(
                c => <Course course={c} />
            )
        }</>
    ]
}

export default App;
