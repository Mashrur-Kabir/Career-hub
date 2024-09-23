import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Header></Header> {/* will not change */}
                <Outlet></Outlet> {/* will change according to children*/}
            </div>
            <Footer></Footer> {/* will not change */}
        </div>
    );
};

export default Root;