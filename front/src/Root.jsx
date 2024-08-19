import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './views/MainView';
import Invoice from './views/InvoiceView'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/biuro' element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Root;
