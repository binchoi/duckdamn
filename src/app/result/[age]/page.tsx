import { duckdams } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

type Params = {
  age: number;
};

export default function ResultPage({ params }: { params: Params }) {
  const { age } = params;
  const candidates = duckdams.filter(duckdam => duckdam.age <= age);
  const duckdam = candidates[Math.floor(Math.random() * candidates.length)];

  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-8 py-8">
      <div className="w-64 h-72 relative">
        <Image
          src={duckdam.image}
          className="object-contain rounded-md"
          fill
          alt="duck"
        />
      </div>
      <h1 className="text-2xl font-bold">
        {duckdam.name}, {duckdam.age}세
      </h1>
      <p className="text-lg">{duckdam.text}</p>
      <Link href="/" className="btn btn-neutral">
        돌아가기
      </Link>
    </main>
  );
}
