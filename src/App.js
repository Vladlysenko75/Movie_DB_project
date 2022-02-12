import {Routes, Route} from "react-router-dom";

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Home} from "./pages/Home/Home";
import {Header} from "./components/Header/Header";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {Genres} from "./components/Genres/Genres";
import {GenreList} from "./components/Genres/GenreList/GenreList";
import {Search} from "./components/Search/Search";

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
