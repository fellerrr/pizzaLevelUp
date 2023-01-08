import './scss/app.scss'
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Routes, Route} from 'react-router-dom'
import Basket from "./pages/Basket";
import {createContext, useState} from "react";

export const searchContext = createContext()

function App() {
    const [searchValue, setSearchValue] = useState('')
  return (
    <div className="App">
        <div className="wrapper">
            <searchContext.Provider value = {{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/basket' element={<Basket/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </searchContext.Provider>
        </div>
    </div>
  );
}

export default App;
