import { Outlet } from "react-router-dom";
import "./RootLayout.scss";


const RootLayout = () => {

    return (
        <div className="root">
            <Outlet />
        </div>
    );
}

export default RootLayout