import GreetingCard from "./GreetingCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-[#C3D2E7]">
      <div
        id="contCanvasLogo"
        className="w-full h-screen rounded shadow-xl text-gray-800  bg-[#FEF7EC] flex items-center p-8 overflow-hidden"
      >
        <div className="w-full">
          <h1 className="font-bold uppercase text-2xl mb-5">
            Congratulation MK!
          </h1>
          <GreetingCard />
        </div>
      </div>
    </main>
  );
}
