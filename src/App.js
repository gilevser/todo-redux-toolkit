import React from "react";
import './App.css';
import ToDo from "./pages/TODO/ToDo";
import {BrowserRouter as Router, Route, Routes, Outlet} from "react-router-dom";
import ImagesGallery from "./pages/ImageGallery/ImagesGallery";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IndexPage from "./pages/IndexPage/IndexPage";
import Contacts from "./pages/Contacts/Contacts";

class App extends React.Component {
    render() {
        return (
                <Router>
                    <Routes>
                        <Route path={'/'} element={<Layout/>}>
                            <Route index element={<IndexPage/>}/>
                            <Route path="/todo" caseSensitive={false} element={<ToDo />} />
                            <Route path="/image-gallery" caseSensitive={false} element={<ImagesGallery /> } />
                            <Route path="/contacts" caseSensitive={false} element={<Contacts/> } />
                        </Route>
                    </Routes>
                </Router>
        )}
}


function Layout() {
    return (
        <div className="App">
            <Header/>
            <main className={'content'}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
