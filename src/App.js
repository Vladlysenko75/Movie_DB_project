import {Routes, Route} from "react-router-dom";

import {GenreList} from "./components/Genres/GenreList/GenreList";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {Search} from "./components/Search/Search";
import {Header} from "./components/Header/Header";
import {Genres} from "./components/Genres/Genres";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {Home} from "./pages/Home/Home";
import './App.css';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route index element={<Header/>}/>
                    <Route path={'movie/:id'} element={<MovieInfo/>}/>
                    <Route path={'genres'} element={<Genres/>}/>
                    <Route path={':genre/:id'} element={<GenreList/>}/>
                    <Route path={'search'} element={<Search/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
