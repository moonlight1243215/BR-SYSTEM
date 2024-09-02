import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './views/MainView';
import Invoice from './views/InvoiceView'
import LoginPage from './views/loginPage';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/biuro' element={<Invoice />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Root;
