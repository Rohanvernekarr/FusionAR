import { Reviews } from "../constants";

const Review = () => {
  return (
    <div className="mt-20 tracking-wide">
    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
      What People{" "}<span className="bg-gradient-to-r from-violet-500 to-orange-800
             text-transparent bg-clip-text">are saying</span> 
    </h2>
    <div className="flex flex-wrap justify-center">
      {Reviews.map((Reviews, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
          <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
            <p>{Reviews.text}</p>
            <div className="flex mt-8 items-start">
              <img
                className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                src={Reviews.image}
                alt=""
              />
              <div>
                <h6>{Reviews.user}</h6>
                <span className="text-sm font-normal italic text-neutral-600">
                  {Reviews.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Review;
