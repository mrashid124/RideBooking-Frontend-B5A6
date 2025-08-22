
import CommonLayout from './components/layout/commonLayout';
import { Outlet } from 'react-router'
import './App.css'


function App() {
 

  return (
    <>

    <CommonLayout>
      <Outlet />
    </CommonLayout>

    </>
  )
}

export default App;
