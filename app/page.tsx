export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100  h-screen flex items-center justify-center p-5 ">
      <div className="bg-white p-4 shadow-lg rounded-3xl w-full max-w-screen-sm flex flex-col gap-4 ">
        {/* {["nico", "Me", "You", "Yourself", ""].map((perseon, index) => (
          <div key={index} className="flex items-center gap-5 group">
            <div className="size-10  bg-blue-400 rounded-full" />
            <span className="text-lg font-medium  empty:bg-gray-400 empty:w-24 empty:h-3 empty:rounded-full empty:animate-pulse group-hover:text-red-500">
              {perseon}
            </span>

            <div className="size-6  bg-red-500 text-white rounded-full flex items-center justify-center relative">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping" />
            </div>
          </div>
        ))} */}

        <div className="group flex flex-col">
          <input type="email" placeholder="Write your email..." />
          <a href="#">dddddd</a>
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email...
          </span>
          <button className="btn">Submit</button>
        </div>
      </div>
    </main>
  );
}

//버튼 연습
{
  /* <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100  h-screen flex items-center justify-center p-5 ">
<div
  className="bg-white p-5 shadow-lg rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none
  ring ring-transparent transition-shadow
  has-[:invalid]:bg-red-100 
has-[:invalid]:ring
"
>
  <input
    className="w-full rounded-full h-12 bg-gray-200 pl-5  ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
    type="text"
    required
    placeholder="Email address"
  />
  <span className="text-red-500 hidden peer-invalid:block">
    Email required
  </span>
  <button
    className="bg-black text-white py-2 rounded-full active:scale-90 
  focus:scale-90 transition-transform font-medium  md:px-10 
"
  >
    Search
  </button>
</div>
</main> */
}
