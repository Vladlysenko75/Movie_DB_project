import {Routes, Route} from "react-router-dom";

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Home} from "./pages/Home/Home";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route index element={<Header/>}/>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
