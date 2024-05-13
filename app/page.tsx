import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-14">
        <div className="w-full h-700 bg-cover z-0" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/fields.jpg)'}}></div>      
        <span className="absolute z-20 top-48 text-gray-200 text-3xl font-semibold  w-3/4  p-8  ">Buy and sell farm fresh products directly. Connect with farmers and retailers on our easy-to-use platform.</span>
    </main>
  );
}
