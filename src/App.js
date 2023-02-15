import logo from './logo.svg';
import './App.css';
import {
     BrowserRouter as Router,
     Route,Routes,
     Link
} from 'react-router-dom';
import {Home} from './components/Home.js';
import {RestaurentList} from './components/RestaurentList.js';
import {RestaurentDetails} from './components/RestaurentDetail.js';
import {RestaurentSearch} from './components/RestaurentSearch.js';
import {RestaurentUpdate} from './components/RestaurentUpdate.js';
import {RestaurentCreate} from './components/RestaurentCreate';
function App() {
  return (
    <div className="App">
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Restaurent Create</Link></li>
            <li><Link to="/details">Restaurent Details</Link></li>
            <li><Link to="/list">Restaurent List</Link></li>
            <li><Link to="/update">Restaurent Update</Link></li>
            <li><Link to="/search">Restaurent Search</Link></li>

          </ul>
          <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>

          <Route exact path='/create' element={<RestaurentCreate />}>
         
          </Route>

          <Route exact path='/details' element={<RestaurentDetails />}>
            
          </Route>

          
          <Route path='/list' element={<RestaurentList />}>
            
          </Route>

          
          <Route path='/search' element={<RestaurentSearch />}>
            
          </Route>

          
          <Route path='/update' element={<RestaurentUpdate />}>
           
          </Route>

          </Routes>
                 </Router>
        
    
    </div>
  );
}

export default App;
