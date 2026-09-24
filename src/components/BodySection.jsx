import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { supabase } from "../database/supabase";

export default function BodySection({ game, profile_id }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [description, setDescription] = useState();
  const [gameReviews, setGameReviews] = useState();
  const [checkReview, setCheckReview] = useState(false);


  const handle_decription = (e) => {
    setDescription(e.target.value);
  };


  const get_reviews = async () => {
    let { data: reviews, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("game_id" , game.id);
        
        setGameReviews(reviews);
  }


  const add_reviews = async () => {

    if (!description.trim()) return;

    let { data , error } = await supabase
        .from("reviews")
        .insert([
            {profile_id, game_id: game.id, game_name: game.name , description}
        ])
        .select()

        setDescription("")
        setCheckReview(!checkReview)
  }

  const get_favourite = async () => {
    const { data: favourites, error } = await supabase
      .from("favourites")
      .select("*")
      .eq("profile_id", profile_id)
      .eq("game_id", game.id);

    if (favourites && favourites.length > 0) {
      setIsFavourite(true);
    }
  };

  useEffect(() => {
    get_favourite();
    get_reviews()
  }, [checkReview]);

  const add_game = async () => {
    const { data, error } = await supabase
      .from("favourites")
      .insert([{ profile_id, game_id: game.id, game_name: game.name }])
      .select();

    if (!error) {
      setIsFavourite(true);
    }
  };

  const remove_game = async () => {
    const { error } = await supabase
      .from("favourites")
      .delete()
      .eq("profile_id", profile_id)
      .eq("game_id", game.id);

    if (!error) {
      setIsFavourite(false);
    }
  };

  return (
    <div className="col-span-5 flex flex-col items-center gap-6 mt-6">
      <p className="text-white text-xl mb-5">Reviews</p>

      {isFavourite ? (
        <FaHeart
          className="text-red-500 cursor-pointer text-3xl"
          onClick={remove_game}
        />
      ) : (
        <FaRegHeart
          className="text-red-500 cursor-pointer text-3xl"
          onClick={add_game}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-12 w-screen px-6 items-center justify-center">
        <div className="col-span-6 flex flex-col gap-2 items-center">
          <textarea
            className="textarea w-1/2 bg-base-100/80"
            placeholder="Type your review"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="btn bg-nav-gray w-1/2" onClick={add_reviews}>Send</button>
        </div>

        <div className="border border-nav-gray h-[200px] w-2/3 my-3 overflow-auto text-white col-span-6">
         
          {gameReviews && gameReviews.map((review) => {
            return (
              <p key={review.id} className="text-white my-3 mx-2 p-2 border border-white">{review.description}</p>
            )
          })}
        </div>
      </div>
    </div>
  );
}