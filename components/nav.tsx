export default function NavBar() {
    return (
        <nav className="flex h-14 justify-between  items-center bg-green-500 py-4  px-8">
            <button className="text-xl text-green-800 font-bold " > <span className="tracking-widest text-white"> Logo </span> Unknown  </button>
            <button className="border-b-2 border-gray-400 px-2 text-white text-lg font-medium ">About</button>
        </nav>
    )
}