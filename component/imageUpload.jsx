"use client";
import React, { useState } from "react";

const ImageUpload = ({ setImg, img }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(null);
console.log(img , "img")
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file , "file");
    if (file) {
      setImg(file);
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
    console.log(img);
    formData.append('file', img);
  //   fetch('http://localhost:8001/test')
  // .then(response => response.json())
  // .then(data => {
  //   // Handle the data here
  //   console.log(data);
  // })
  // .catch(error => {

  //   console.error('Error   fetching data:', error);
  // });
    try {
        const response = await fetch('http://localhost:8001/upload', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          alert('Image uploaded successfully!');
          console.log(data);
        } else {
          alert('Error uploading image.');
        }
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
