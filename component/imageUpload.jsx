"use client";
import React, { useState } from "react";

const ImageUpload = ({ setImg, img }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setImage(file);
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setImage(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('image', image);
    fetch('http://localhost:8000/test')
  .then(response => response.json())
  .then(data => {
    // Handle the data here
    console.log(data);
  })
  .catch(error => {

    console.error('Error   fetching data:', error);
  });
    // try {
    //     const response = await fetch('https://7510-2402-d000-a400-34cb-7104-2e12-5de0-4114.ngrok-free.app/upload', {
    //       method: 'POST',
    //       body: formData,
    //       headers: {
    //         // 'Content-Type': 'multipart/form-data' is not needed for FormData
    //         // because the browser will set the correct boundary automatically
    //       },
    //     });
  
    //     if (response.ok) {
    //       const data = await response.json();
    //       alert('Image uploaded successfully!');
    //       console.log(data);
    //     } else {
    //       alert('Error uploading image.');
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //   } finally {
    //     setLoading(false);
    //   }
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
            src={image}
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
