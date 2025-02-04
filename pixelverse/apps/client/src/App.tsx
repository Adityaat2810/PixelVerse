import AuthLayout from './_auth/AuthLayout';
import './global.css';

import { Routes ,Route } from 'react-router-dom'


function App(){
  return (
    <main>
      <Routes>
        {/* Pulbic routes  */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<div></div>} />
          <Route path="/sign-up" element={<div></div>} />
        </Route>


        {/* Private routes  */}
        {/* <Route  element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/all-users' element={<AllUsers/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/update-post/:id' element={<EditPost/>}/>
          <Route path='/posts/:id' element={<PostDetails/>}/>
          <Route path='/profile/:id/*' element={<Profile/>}/>
          <Route path='/update-profile/:id' element={<PostDetails/>}/>

        </Route> */}

      </Routes>

    </main> 
  )
}

export default App