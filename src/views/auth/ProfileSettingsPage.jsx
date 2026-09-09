import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router"
import routes from "../../router/routes"
import { supabase } from "../../database/supabase"

export default function ProfileSettingsPage() {
    const [file, setFile] = useState();
    const [preview, setPreview] = useState();
    const { profile, getUser, updateProfile } = useContext(UserContext);

    const handleChange = (e) => {
        setFile(() => e.target.files[0])
    }

    useEffect(() => {
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(() => imageUrl)
        }
    }, [file])

    const handleAvatarSubmit = async (e) => {
        e.preventDefault();
        const fileExt = file.name.split(".").pop();
        const fileName = `${profile.id}${Math.random()}.${fileExt}`;
        await supabase.storage.from("avatars").upload(fileName, file);
        await supabase
            .from("profiles")
            .upsert({ id: profile.id, avatar_url: fileName })
            .select();
        await getUser();
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateProfile(data);
        navigate(routes.profile);
    }

    return (
        <main className="min-h-screen flex flex-col justify-center items-center p-4 py-10 gap-6">
            {/* Form Dati Profilo */}


            <form
                className="p-6 md:p-10 bg-nav-gray w-full max-w-md md:max-w-xl rounded-box shadow-lg"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-lg mb-5 w-full"
                    {...register("first_name", { required: "This field is required" })}
                />
                {errors.first_name && (
                    <p role="alert" className="text-red-500 mb-6">
                        {errors.first_name.message}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-lg mb-5 w-full"
                    {...register("last_name", { required: "This field is required" })}
                />
                {errors.last_name && (
                    <p role="alert" className="text-red-500 mb-6">
                        {errors.last_name.message}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="Username"
                    className="input input-lg mb-5 w-full"
                    {...register("username", { required: "This field is required" })}
                />
                {errors.username && (
                    <p role="alert" className="text-red-500 mb-6">
                        {errors.username.message}
                    </p>
                )}

                <button className="btn btn-neutral w-full md:w-auto p-3 md:p-5">
                    Edit
                </button>
            </form>

            {/* Form Avatar */}
            <form
                className="p-6 md:p-10 bg-nav-gray w-full max-w-md md:max-w-xl rounded-box shadow-lg flex flex-col items-center"
                onSubmit={handleAvatarSubmit}
            >
                <input
                    type="file"
                    className="file-input file-input-lg w-full mb-5"
                    onChange={handleChange}
                />
                
                {preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-amber-50/50 border-4 mb-5"
                    />
                )}

                <button className="btn btn-neutral w-full md:w-auto p-3 md:p-5">
                    Change Avatar
                </button>
            </form>
        </main>
    )
}