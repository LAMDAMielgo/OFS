import { useState } from "react"

import {appContent} from './data/course'
import {
  Header, 
  Content, 
  Footer,
  getTotal
} from './components/allComponents'



const Course = ({course}) => {

    const total = getTotal()

    return (
      <div id="outer">
          <Header name={appContent['name']} id={appContent['id']} />
          <Content lines = {appContent['parts']} />
          <Footer line ={total} />
      </div>
  )

}


const App = () => {
    return <Course course={appContent} />
}


export default App;
