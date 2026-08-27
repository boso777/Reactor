import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SideBar from "../components/SideBar"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"

export default function AuthLayout(){
    

    return(
    <>
    <Navbar />
        <Outlet />
    <Footer />
    </>
)}