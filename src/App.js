import './App.css';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ExcerciseDetails from './components/excerciseDetails/ExcerciseDetails';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <section className='container lg:w-10/12 md:w-11/12	sm:w-full flex  flex-col align-center \'>
      <Nav />
      <Provider store={store}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/excercise/:id' exact element={<ExcerciseDetails />} />
        </Routes>
      </Provider>
    </section>
  );
}

export default App;
