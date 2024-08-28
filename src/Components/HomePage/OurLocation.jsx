import React,{useState} from 'react'
import Pune from '../../assets/Images/pune.jfif'
import Mumbai from '../../assets/Images/Mumbai.jfif'
import Thane from '../../assets/Images/thane.jfif'
import PimpriChinchwad from '../../assets/Images/PimpriChinchwad.png'
import Nashik from '../../assets/Images/Nashik.png'

const OurLocation = () => {

  const images = [
    PimpriChinchwad,
    Pune,
    Mumbai,
    Thane,
    Nashik,
    Thane,
    Nashik,
    Pune,
    Mumbai,
    Thane,
    Pune, 
    Mumbai,
    Pune,
    Mumbai,
    Thane,
    Nashik,
    Thane,
    Nashik,
    Pune,
    Mumbai,
    Thane,
    Pune, 
    Mumbai
  ];

  // State to keep track of the current set of images displayed
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;
// number of images show on screen

  // Function to go to the next set of images
  const nextImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex + imagesPerPage) % images.length);
  };

  // Function to go to the previous set of images
  const prevImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex - imagesPerPage + images.length) % images.length);
  };

  // Get the current set of images to display
  const displayedImages = images.slice(currentIndex, currentIndex + imagesPerPage);

  
  return (
    <div>
        <div className=" py-[100px]  flex flex-col items-center justify-center ">
        <div className="text-[18px] font-[600] text-[#ED2027]">EXPLORE CITIES</div>
        <div className="text-[40px] font-[700] my-[50px]">Our Location For You</div>
<div className=' relative flex flex-col'>
    <div className='  relative flex gap-[46px] w-[100%]'>
        {/* <div><img src={PimpriChinchwad} alt="" className='w-[401px] h-[455px] rounded-[20px]   ' /> <div className='absolute font-[600]  text-white  text-[40px] ml-[20px] mt-[-130px]'>Pimpri <br /> Chinchwad</div></div>
        <div><img src={Pune} alt="" className='w-[401px] h-[455px] rounded-[20px]  ' /></div>
        <div><img src={Mumbai} alt="" className='w-[401px] h-[455px] rounded-[20px]  ' /></div>
        <div><img src={thane} alt="" className='w-[401px] h-[455px] rounded-[20px]  ' /></div>
        <div><img src={Nashik} alt="" className='w-[401px] h-[455px] rounded-[20px]  ' /><div className=' absolute font-[600]  text-white text-[40px] ml-[30px] mt-[-80px]  '>Nashik</div></div>
         */}

{displayedImages.map((image, index) => (
            <div className="w-[301px] h-[455px] rounded-[20px]" key={index}>
              <img src={image} alt={`City ${index}`} className="w-[301px] h-[455px] rounded-[20px]" />
            </div>
          ))}
    </div>
    <div className=' absolute'>
    <div className="flex justify-between mt-[20px] w-[200vh]">
          <button onClick={prevImages} className="duration-[5000ms] px-3 py-1 bg-[#ffffff] shadow-[4px_4px_4px_3px_rgba(0,0,0,0.3)] text-[21px] font-[700] rounded mt-[190px] ">&lt;</button>
          <button onClick={nextImages} className="duration-[5000ms] px-3 py-1 bg-[#ffffff] shadow-[4px_4px_4px_3px_rgba(0,0,0,0.3)] text-[21px] font-[700] rounded mt-[190px] ">&gt;</button>
        </div>
    </div>
</div>
        </div>
      
    </div>
  )
}

export default OurLocation
