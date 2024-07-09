import './App.css';
import Home from './Pages/HomePage/Home';
import { Route,Switch,useHistory } from 'react-router-dom';
import Login from '../../my-app/src/Pages/LoginPage/Login'
import Player from './Pages/Player/Player';
import TVShows from './Pages/TVShows/TvShow';
import Movies from './Pages/Movies/Movies';
import NewPopular from './Pages/Newpopular/NewPopular'
import TVShowPlayer from './Components/TVShowPlayer/TVShowPlayer';
import MyList from './Pages/MyList/MyList'
import BrowseLanguages from './Pages/BrowseLanguages/BrowseLanguage'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const history = useHistory();

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In")
        history.push('/');
      }else{
        console.log("Logged Out")
        history.push('/login');
      }
    })
  },[])
  return (
    <div className="App">
      <ToastContainer  theme='dark' />
     <Switch>

     <Route exact path='/' component={Home}></Route>
     <Route exact path='/login' component={Login}></Route>
     <Route exact path='/player/:id' component={Player}></Route>
     <Route exact path='/TVShow/player/:id' component={TVShowPlayer}></Route>
     <Route path="/tv-shows" component={TVShows} />
     <Route path="/movies" component={Movies} />
     <Route path="/new-popular" component={NewPopular} />
     <Route path="/my-list" component={MyList} />
     <Route path="/browse-languages" component={BrowseLanguages} />


     </Switch>
    </div>
  );
}

export default App;
