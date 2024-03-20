import { Link, Outlet } from "react-router-dom";
import BasicMenu from "../Menu/BasicMenu";
import "./Header.scss";
import DateTime from "../../DateTime/DateTime";

const LinkStyle = {
    margin: "0px 24px",
    fontSize: "24px",
    textDecoration: "none",
	color: 'purple',
};
const DateStyle = {
    position: "absolute",
    top: "0",
    right: "0",
};
export default function Header(params) {
    return (
        <>
            <header className="header">
                <nav className="header__menu">
                    <ul className="header__list  ">
                        <Link style={LinkStyle} to="/" className="header__title">
                            Главная
                        </Link>
                        <Link to="/blog" style={LinkStyle}>
                            Blog
                        </Link>
                        <Link to="/info" style={LinkStyle}>
                            Info
                        </Link>

                        <BasicMenu style={LinkStyle}></BasicMenu>
					
						<DateTime style={DateStyle}></DateTime>
						
                        
                    </ul>
                </nav>
            </header>

            <Outlet />
        </>
    );
}
