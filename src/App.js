import {Routes, Route} from "react-router-dom";

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Home} from "./pages/Home/Home";
import {Header} from "./components/Header/Header";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route index element={<Header/>}/>
                    <Route path={'movie/:id'} element={<MovieInfo/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
