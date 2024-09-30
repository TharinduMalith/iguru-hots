"use client";
import ImageUpload from "@/component/imageUpload";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [img , setImg] = useState(null)
  console.log(img , "img")
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] h-full">
      <main className="flex h-full">
        <div className=" absolute bottom-4 right-4">
          <Image src="/rice.jpg" alt="Next.js Logo" width={400} height={400} />
        </div>

        <div className=" absolute top-4 left-4">
          <Image
            src="/riceleft.jpg"
            alt="Next.js Logo"
            width={350}
            height={350}
          />
        </div>

        {page === 1 ? (
          <ImageUpload  setImg={setImg} img={img}/>
        ) : page === 2 ? (
          <PageTwo />
        ) : (
          <PageThree />
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

const PageTwo = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center gap-5">
      <p>Detected Disease : Rice Blast</p>
      <p>Solution For Disease</p>
      <p className="w-[600px] content-around">
        Rice blast is one of the most devastating diseases affecting rice crops
        worldwide, caused by the fungus Magnaporthe oryzae. This pathogen can
        severely impact yields, leading to significant economic losses for
        farmers and threatening food security in rice-dependent regions. First
        identified in the 19th century, rice blast remains a persistent
        challenge in agricultural practices, especially in areas with favorable
        conditions for fungal growth, such as warm temperatures and high
        humidity.
      </p>
      <button
        onClick={() => {}}
        className="bg-[#bf783a] text-white px-4 py-2 rounded mt-4"
      >
        See How AI Detected
      </button>
    </div>
  );
};

const PageThree = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center gap-5">
      {[
        { title: "Original Image", src: "/img1.jpg" },
        { title: "Attention Map", src: "/img2.jpeg" },
        {
          title: "Grand Cam Visualization",
          src: "/img2.jpeg",
        },
      ].map((item) => (
        <div className="flex flex-col gap-5">
          <p className="w-full justify-center flex">{item.title}</p>
          <Image src={item.src} alt="Next.js Logo" width={500} height={500} />
        </div>
      ))}
    </div>
  );
};
