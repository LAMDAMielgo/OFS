import {appContent} from './data/course'
import {
  Header, 
  SubHeader,
  Content, 
  Footer,
  getTotal
} from './components/allComponents'



const Course = ({course}) => {

    const total = getTotal(course)

    return (
      <div id="outer">
          <SubHeader name={course['name']} id={course['id']} />
          <Content lines = {course['parts']} />
          <Footer line ={total} />
      </div>
  )

}


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
