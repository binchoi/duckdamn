"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [age, setAge] = useState<number>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 정규 표현식을 사용하여 입력값이 숫자인지 확인
    if (!/^[0-9]*$/.test(value)) {
      return;
    }

    setAge(Number(value));
  };

  const [calculating, setCalculating] = useState(false);

  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-8 py-8">
      {calculating ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <>
          <div className=" w-64 h-72 relative">
            <Image
              src="/images/duck.png"
              className="object-cover rounded-md"
              fill
              alt="duck"
            />
          </div>
          <input
            value={age}
            onChange={onChange}
            placeholder="나이"
            className="input w-full max-w-[270px] text-center placeholder:text-center rounded-full"
          />
          <Link
            className="btn border-none text-white bg-[#17171F] rounded-full font-bold text-2xl px-6"
            href={`/result/${age}`}
          >
            덕담
          </Link>
        </>
      )}
    </main>
  );
}
