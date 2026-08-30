import image1 from "../../assets/image1.png"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"


export default function ProfilePage(){

    const {user , profile } = useContext(UserContext);

    return(<>
        <main className="h-screen">
        {user && profile && (
            
            <>
            <article className="mt-10 flex flex-col items-center">
                <img src={image1} alt="default propic" className="w-[100px] h-[100px] rounded-full"/>
            
            

            <h2 className="text-2xl font-bold mt-5">
                {profile.first_name}
            </h2>
            </article>

            <section className="grid grid-cols-3 gap-4 px-36">
                <article className="bg-gray-950 text-nav-gray rounded-box p-10 ">
                    <h3 className="font-bold">Your Data</h3>
                    <p>Name: {profile.first_name} {profile.last_name} </p>
                    <p>Username: {profile.username}</p>
                    <p>Email: {profile.email}</p>
                </article>
            </section>

            </>
        )}
        </main>    
    </>)}