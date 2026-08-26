import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SideBar from "./SideBar"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"

export default function Layout(){
    
    
    
    const categories = (useLoaderData())    

    return(
    <>
    <Navbar />
    <section className="grid grid-cols-7 gap-4">
        <div>
            <SideBar categories={categories}></SideBar>
        </div>
    <div className="col-span-6">
        <Outlet />
    </div>
    </section>

    <Footer />
    </>
)}