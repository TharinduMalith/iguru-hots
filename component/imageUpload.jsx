"use client";
import React, { useState } from "react";

const ImageUpload = ({ setImg, img , setWellnessCheck }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', img);

    try {
        const response = await fetch('http://localhost:8001/upload', {
          method: 'POST',
          body: formData,
        });
        console.log(response.data , "response")
        const newImage = response.predicted_disease.replace("C:\\Users\\Supun\\Desktop\\A-Harshika\\frontend\\iguru-hots\\public\\output_images\\", "");
        console.log(newImage , "newImage");
        setWellnessCheck({
          predictedDisease : newImage,
          file: response.file_path
        })
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
  };

  return (
    <div className="flex flex-col justify-center w-full h-full items-center">
      <div className="p-10 border border-dashed border-[#e1b996] w-[600px] h-[600px] ">
        <input
          type="file"
          className="flex justify-center"
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && (
            <div className="w-full flex h-full justify-center items-center">
          <img
            className=""
            src={URL.createObjectURL(image)}
            alt="Image Preview"
            style={{ width: "400px", height: "400px" }}
          />
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[#bf783a] text-white px-4 py-2 rounded mt-4"
      >
        Plant Wellness Check
      </button>
    </div>
  );
};

export default ImageUpload;
