import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { supabase } from "../../database/supabase"
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";


export default function LoginPage(){

    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const navigate = useNavigate()

    const {login} = useContext(UserContext)

    const onSubmit = async (user_data) => {
            await login({
                email: user_data.email,
                password: user_data.password,
            });

            navigate('/')
    }


    return (<>

    <div className="h-screen flex flex-col align-middle justify-top ">

    <h2 className="text-2xl text-center">Bentornato nella nostra community!</h2>  
        
              
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 align-middle mx-auto justify-start mt-8 h-full">
            

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

            <button type="submit" className="btn btn-outline">Login</button>       
        </form>
</div>
  
    </>)
}