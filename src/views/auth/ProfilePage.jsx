import image1 from "../../assets/image1.png"
import { useContext , useState, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import routes from "../../router/routes";
import { Link } from "react-router";
import { supabase } from "../../database/supabase";

export default function ProfilePage(){

    const {user , profile } = useContext(UserContext);
    const [avatarUrl , setAvatarUrl] = useState();
    const [userFavourites , setUserFavourites] = useState();

    const download_avatar = async () => {
        if (profile) {
            const {data , error} = await supabase.storage
                .from("avatars")
                .download(profile.avatar_url);
                const url = URL.createObjectURL(data);
                setAvatarUrl(url)
        }}
        
    const email = user?.email;

    const get_favourite = async () => {
      if(profile) {
      let { data: favourites, error } = await supabase
        .from("favourites")
        .select("*")
        .eq("profile_id", profile.id)
        setUserFavourites(favourites)
        }
    };
  

    useEffect(() => {
            download_avatar();
            get_favourite();
        }, [profile]);

    return (
  <>
    <main className="h-screen flex flex-col items-center">
      {user && profile && (
        <>
          <article className="mt-10 flex flex-col items-center my-4">
            <img
              src={avatarUrl ?? image1}
              alt="default propic"
              className="w-[100px] h-[100px] rounded-full"
            />
            <h2 className="text-2xl font-bold mt-5">{profile.first_name}</h2>
          </article>

          <section className="grid sm:grid-cols-1 sm:w-[50%]">
            <article className="bg-gray-950 text-nav-gray rounded-box p-10">
              <h3 className="font-bold">Your Data</h3>
              <p>
                Name: {profile.first_name} {profile.last_name}
              </p>
              <p>Username: {profile.username}</p>
              <p>Email: {email}</p>

              <Link
                className="btn btn-outline mt-3"
                to={routes.profile_settings}
              >
                Modifica Profilo
              </Link>
            </article>
          </section>
          <section className="grid sm:grid-cols-1 sm:w-[50%] mt-6">
            <ul className="bg-gray-950 text-nav-gray rounded-box p-6">
              {userFavourites && userFavourites.map((favourite) =>{
                return <div className="bg-gray-800 text-white my-3 rounded-box p-6">
                  <li >{favourite.game_name}</li>
                  <Link to={`/detail/${favourite.game_id}`}>Details</Link>
                </div>
              })}
            </ul>
          </section>
        </>
      )}
    </main>
  </>
);}