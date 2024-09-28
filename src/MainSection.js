// import React from 'react';
// import carrotImage from '../assets/carrotImage.png'; // Replace with the actual image path

const MainSection = () => {
  return (
    <main className=" grid grid-cols-2 main-6 p-10 flex justify-between items-center">
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold mb-4">
          Creating a world of circular materials.
        </h2>
        <p className="mb-6">
          Our software collects data about waste and helps uncover valuable
          resources by incentivizing users for more sustainable behavior - a bit
          like a Carrot.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded">
          Why is this important?
        </button>
      </div>
        <img className="img" src="./images/icon1.png" alt="Icon img"></img>

      <div className="w-1/2">
        {/* <img src={carrotImage} alt="Carrot silhouette" className="w-full h-auto" /> */}
      </div>
    </main>
  );
};


export default MainSection;