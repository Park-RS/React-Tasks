import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import BlogPage from "./components/BlogPage/BlogPage";
import InfoPage from "./components/InfoPage/InfoPage";

const LinkStyle = {
    margin: "0px 24px",
    fontSize: "24px",
};
function App() {
    return (
        <>
            <Container>
                <header style={{ textAlign: "center" }}>
                    <Link to="/" style={LinkStyle}>
                        Home
                    </Link>
                    <Link to="/blog" style={LinkStyle}>
                        Blog
                    </Link>
                    <Link to="/info" style={LinkStyle}>
                        Info
                    </Link>
                </header>
                <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/blog" element={<BlogPage />}></Route>
                        <Route path="/info" element={<InfoPage />}></Route>
                    </Routes>
                </main>
            </Container>
        </>
    );
}

export default App;
