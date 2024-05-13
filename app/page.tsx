import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-14">
      <div className="w-full h-800 bg-cover z-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/farmer.jpeg)' }}></div>
      <div className="absolute z-20 top-56 font-semibold w-full  p-8">
        <h1 className=" text-gray-200 text-3xl my-4 border-b-2 border-green-600 w-fit ">Support Nepali Agriculture 🇳🇵, </h1>
        <span className="text-xl  text-gray-300 w-1/2">Buy and sell farm fresh products directly. Connect with farmers and retailers on our easy-to-use platform.</span>
      </div>
    </main>
  );
}
