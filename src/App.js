import {BrowserRouter, Link, Routes, Route} from 'react-router-dom' 
import User from './user'
const App =()=>{
  return(
    <div>
      <BrowserRouter>
      <nav>
        <Link to="users/1">user 1</Link>
        <Link to="users/2">user 2</Link>
      </nav>
      <Routes>
        <Route exact path="users/:id" element={< User/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App