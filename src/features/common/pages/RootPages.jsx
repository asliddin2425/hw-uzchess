import { Footer } from "../components/Footer/Footer";
import { HeaderList } from '../components/Header/headerList'
import { Outlet } from "react-router-dom";
import './RootPage.css'
import { Navbar } from "../components/navbar/Navbar";
export function RootPage() { 
    return (
        <div className="root-page">
            <HeaderList/>
            <Navbar/>
            <main className="content">
                <Outlet />
            </main>            
            <Footer/>
        </div>
    )
}