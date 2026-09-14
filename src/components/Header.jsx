export default function Header({ game }) {
    return (
        <header className="pt-10 text-nav-gray">
            <h1 className="text-center text-5xl font-electro mb-2 font-bold">
                {game.name}
            </h1>
            <h2 className="text-center text-xl font-electro">
                Released on: <span className="font-bold">{game.released}</span>
            </h2>
            <section className="grid grid-cols-1 px-12 mt-6">

                <div className="collapse collapse-plus bg-base-100/80 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">Game Description</div>
                    <div className="collapse-content text-sm">{game.description_raw}</div>
                </div>
                <div className="collapse collapse-plus bg-base-100/80 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Genres and rating:</div>
                    <div className="collapse-content text-sm">
                        <ul className="grid grid-cols-1 sm:grid-cols-4">
                        {game.genres.map((genre) => {
                            return <li className="mx-3 text-center" key={genre.id}>{genre.name}</li>
                        })}
                    </ul>
                    <p className="text-xl mb-5 text-center mt-6"><span className="font-bold">Rating:</span> {game.rating}</p>
                        </div>
                </div>
            </section>
        </header>
    );
}