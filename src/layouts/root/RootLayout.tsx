import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./RootLayout.scss";


const RootLayout = () => {

    return (
        <div className="root">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default RootLayout