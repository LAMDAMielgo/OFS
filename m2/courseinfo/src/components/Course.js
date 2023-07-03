import {
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

export {Course}