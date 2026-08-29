import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { supabase } from "../../database/supabase"
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";



export default function RegisterPage(){



const {
    register, 
    handleSubmit, 
    formState: { errors }, 
    } = useForm(); 


const {signUp} = useContext(UserContext)

const navigate = useNavigate();

const onSubmit = async (user_data) => {

    await signUp({
        email: user_data.email,
        password: user_data.password,
        options: {
            data: {
                first_name: user_data.first_name,
                last_name: user_data.last_name,
                username: user_data.username,
            }
        }    
    })

    navigate('/');
    }



    return(<>
    
<div className="h-screen flex flex-col align-middle justify-top ">

    <h2 className="text-2xl text-center">Registrati per far parte della nostra community!</h2>  
        
              
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 align-middle mx-auto justify-start mt-8 h-full">
            
            <div className="flex flex-col align-middle justify-center ">
                <label htmlFor="">First Name</label>
                <input {...register("first_name",{required: "first_name missing or incorrect!"})} type="text" placeholder="Mario Rossi" className="bg-amber-50 w-150     h-10 text-blue-950 rounded-md px-3"/>
                {errors.first_name && (
                    <p role="alert" className="text-red-500 ">
                        {errors.first_name.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col align-middle justify-center ">
                <label htmlFor="">Last Name</label>
                <input {...register("last_name",{required: "last_name missing or incorrect!"})} type="text" placeholder="Mario Rossi" className="bg-amber-50 w-150     h-10 text-blue-950 rounded-md px-3"/>
                {errors.last_name && (
                    <p role="alert" className="text-red-500 ">
                        {errors.last_name.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col align-middle justify-center ">
                <label htmlFor="">username</label>
                <input {...register("username",{required: "username missing or incorrect!"})} type="text" placeholder="Mario Rossi" className="bg-amber-50 w-150     h-10 text-blue-950 rounded-md px-3"/>
                {errors.username && (
                    <p role="alert" className="text-red-500 ">
                        {errors.username.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col ">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="example@email.com" className="px-3 text-xl bg-amber-50 w-150 h-10 text-blue-950 rounded-md" {...register("email",{required: "Email missing or incorrect!", validate: value => value.includes("@") || "Invalid e mai" })}/>
                {errors.email && (
                    <p role="alert" className="text-red-500 ">
                        {errors.email.message}
                    </p>
                )}
            </div>

             <div className="flex flex-col ">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Your password" className="px-3 text-xl bg-amber-50 w-150 h-10 text-blue-950 rounded-md px-3" {...register("password",{required: "Password missing or incorrect!" , minLength: 8,})}/>
                {errors.password && (
                    <p role="alert" className="text-red-500 ">
                        {errors.password.message}
                    </p>
                )}
            </div>    

            <button type="submit" className="btn btn-outline">Registrati</button>       
        </form>
</div>

    </>)
}