import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <>
        <div className="w-11/12 mx-auto ">
            <Header></Header>
            <Outlet></Outlet>  
        </div>
        <Footer></Footer>
        </>
        
    );
};

export default Root;