import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-14">
      <div className="w-full h-800 bg-cover z-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/farmer.jpeg)' }}></div>
      <div className="absolute z-20 top-56 font-semibold w-full  p-8">
        <h1 className=" text-gray-200 text-3xl my-4 border-b-2 border-green-600 w-fit ">Support Nepali Agriculture 🇳🇵, </h1>
        <span className="text-xl  text-gray-300 w-1/2">Buy and sell farm fresh products directly. Connect with farmers and retailers on our easy-to-use platform.</span>
      </div>
      <div className="border-green-500 border-t-2 border-b-2 my-8 w-4/5 mx-auto flex flex-col items-center justify-center p-4 rounded-xl ">
        <h1 className="text-2xl text-green-600 font-semibold  tracking-wide ">Login </h1>
        <form action="" className="w-full p-4 ">
          <div className="flex flex-col px-2 py-4">
            <label htmlFor="email" className="text-lg text-gray-800">Email </label>
            <input
              type="email"
              name="email"
              className="p-2 rounded-lg outline-none border-green-500 border-2 "
              placeholder="eg. ram.bahadur@gmail.com" />
          </div>
          <div className="flex flex-col  px-2 py-4 ">
            <label className="text-lg text-gray-800" htmlFor="password">Password</label>
            <input
              className="p-2 rounded-lg border-green-500 border-2 outline-none "
              type="password"
              name="password"
              placeholder="**********" />
          </div>
        </form>
      </div>

    </main>
  );
}
