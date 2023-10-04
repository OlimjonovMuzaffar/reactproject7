import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/trips");
  return (
    <div className="grid grid-cols-2 gap-y-10 ml-40 mt-10">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {articles &&
        articles.map((article) => {
          return (
            <div key={article.id}>
              <div className="card w-96 glass bg-slate-400">
                <figure>
                  <img
                    width={320}
                    height={180}
                    src={article.image}
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-sans font-extrabold text-xl">
                    {article.title}
                  </h2>
                  <h3 className="font-Poppins font-bold">
                    {" "}
                    Price :{article.price}
                  </h3>
                  <h3 className="font-Onest font-bold mb-5">
                    Location:{article.loc}
                  </h3>
                  <button className="btn btn-outline btn-error w-[130px] ml-[65px]">
                    Learning
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
