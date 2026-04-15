import {Outlet} from "react-router-dom";
import Footer from "../components/base/Footer.tsx";
import Header from "../components/base/Header.tsx";

const Layout = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;