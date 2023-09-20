import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./RootLayout.scss";
import { useSelector } from "react-redux";


const RootLayout = () => {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className={`root ${isDark && 'root--dark'}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default RootLayout