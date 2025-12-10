import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/header";
import { Outlet } from "react-router-dom";
import './RootPage.css'
import { Navbar } from "../components/navbar/Navbar";
export function RootPage() { 
    return (
        <div className="root-page">
            <Header />
            <Navbar/>
            <main className="content">
                <Outlet />
            </main>            
            <Footer/>
        </div>
    )
}