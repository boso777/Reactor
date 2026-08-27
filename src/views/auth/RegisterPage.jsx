export default function RegisterPage(){
    return(<>
    
<div className="h-screen flex flex-col align-middle justify-top ">

    <h2 className="text-2xl text-center">Registrati per far parte della nostra community!</h2>  
        
              
    <div className="flex align-middle justify-center mt-6 ">
        <form action="" className="">
            
            <div className="flex flex-col align-middle justify-center w-50 h-20">
                <label htmlFor="">Name</label>
                <input type="text" className="bg-amber-50 w-60 text-blue-950 rounded-md"/>
            </div>

            <div className="flex flex-col w-50 h-20">
                <label htmlFor="">Email</label>
                <input type="text" className="bg-amber-50 w-60 text-blue-950 rounded-md"/>
            </div>

             <div className="flex flex-col w-50 h-20">
                <label htmlFor="">Password</label>
                <input type="password" className="bg-amber-50 w-60 text-blue-950 rounded-md"/>
            </div>    

            <div className="flex flex-col w-50 h-20">
                <label htmlFor="">Confirm Password</label>
                <input type="password" className="bg-amber-50 w-60 text-blue-950 rounded-md"/>
            </div>            
        </form>
    </div>
</div>

    </>)
}