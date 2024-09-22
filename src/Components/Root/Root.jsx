import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header> {/* will not change */}
            <Outlet></Outlet> {/* will change */}
            <Footer></Footer> {/* will not change */}
        </div>
    );
};

export default Root;