import Container from "./components/Container/Container";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import BlogPage from "./components/BlogPage/BlogPage";
import InfoPage from "./components/InfoPage/InfoPage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import BasicMenu from "./components/layout/Menu/BasicMenu";
import Content from "./components/layout/Content/Content";
import { info } from "../data";
import Date from "./components/DateTime/DateTime";
import Counter from "./components/Counter/Counter";

function App() {
    return (
        <>
            <Container>
                <main
                    style={{
                        position: "relative",
                        marginTop: "84px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Routes style={{}}>
                        <Route path="/" element={<Header />}>
                            <Route index element={<HomePage />}></Route>
                            <Route path="/blog" element={<BlogPage />}></Route>
                            <Route path="/info" element={<Counter />}></Route>
                            <Route
                                path="/lab1"
                                element={<Content title={info[0].title} description={info[0].description} />}></Route>
                            <Route
                                path="/lab2"
                                element={<Content title={info[1].title} description={info[1].description} />}></Route>
                            <Route
                                path="/lab3"
                                element={<Content title={info[2].title} description={info[2].description} />}></Route>
                        </Route>
                    </Routes>
                </main>

                <Footer></Footer>
            </Container>
        </>
    );
}

export default App;
