"use client";
import ImageUpload from "@/component/imageUpload";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [img , setImg] = useState(null);
  const [wellnessCheck , setWellnessCheck] = useState({
    predictedDisease: '',
    file : ''
  });
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
          <ImageUpload  setImg={setImg} img={img} setWellnessCheck={(data) => {
            setPage(2)
            setWellnessCheck(data)}}/>
        ) : page === 2 ? (
          <PageTwo wellnessCheck={wellnessCheck}/>
        ) : (
          <PageThree />
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

const PageTwo = ({wellnessCheck}) => {
  console.log(wellnessCheck)
  return (
    <div className="flex flex-col justify-center w-full h-full items-center gap-5">
      <p>Detected Disease : {diseases[wellnessCheck?.predictedDisease]}</p>
      <p>Solution For Disease</p>
      <p className="w-[600px] content-around">
      {diseases[wellnessCheck?.solution]}
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


const diseases = {
  0 : {
    "id": 0,
    "disease": "Bacterial Blight",
    "sinhalaName": "කොල අංගමාරය",
    "solution": "Use resistant rice varieties and ensure proper field drainage to prevent waterlogging. Apply bactericides like copper oxychloride at early stages."
  },
  1 : {
    "id": 1,
    "sinhalaName": "කොල පාලුව",
    "disease": "Rice Blast",
    "solution": "Plant resistant varieties and avoid excessive nitrogen application. Apply fungicides like tricyclazole or carbendazim when necessary."
  },
  2: {
    "id": 2,
    "disease": "Brown Spot",
    "sinhalaName": "දුඹුරු පුල්ලි රෝගය",
    "solution": "Maintain balanced fertilization and improve soil health. Apply fungicides such as mancozeb or propiconazole for severe cases."
  },
  3:{
    "id": 3,
    "disease": "Tungro",
    "sinhalaName": "ටන්ග්‍රෝ වෛරස් රෝගය",
    "solution": "Plant resistant varieties and control the vector (green leafhopper) using insecticides like imidacloprid or buprofezin."
  }
}