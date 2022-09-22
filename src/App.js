import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Index from './Components/Views/Index';
import IndexHeader from './Components/Headers/IndexHeader';
import IndexFooter from './Components/Footer/IndexFooter';

function App() {
  return (
    <div className='absolute w-full pb-10 min-h-screen'>
      <Router>
        <IndexHeader/>
        <div className='mt-[72px] md:mt-0'>
          <Routes>
            <Route exact path='/' element={<Index/>} />

          </Routes>
        </div>
        <IndexFooter/>
      </Router>
    </div>
  );
}

export default App;
