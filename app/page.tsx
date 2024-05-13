import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-14">
        <span><Image src={'/fields.jpg'} width={200} height={200} alt="fields"></Image></span>      
    </main>
  );
}
