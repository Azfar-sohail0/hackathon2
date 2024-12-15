import React from "react";
import Footer from "./Footer";
// import { CiSearch } from "react-icons/ci";

export default function header() {
  return (
    <header>
      <nav
        className="flex items-center justify-between px-4 py-2 bg-background: #F5F5F5 h-[60px] w-[1440px];
    shadow-md"
      >
        {/* Left Section: Puma Logo */}
        <div>
          <img
            src="/11.png" // Replace with the actual Puma logo URL
            alt="Puma Logo"
            className="h-8" // Adjust the height as needed
          />
        </div>

        {/* font-family: Helvetica Neue;
font-size: 11px;
font-weight: 500;
line-height: 14px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none; */}

        {/* Right Section: Links */}
        <ul className="flex space-x-4 text-[11px] font-medium text-gray-800 leading-[14px] text-left underline decoration-solid decoration-0">
          <li className="cursor-pointer font-helvetica font-medium text-11px leading-14px">
  <a href="">Find a Store</a>  
          </li>
          <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
            |
          </li>
          <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
            Help
          </li>
          <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
            |
          </li>
          <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
            Join US
          </li>
          <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
            |
          </li>
          <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
            Sign In
          </li>
          <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px"></li>
          <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px"></li>
        </ul>
      </nav>

      <div className=" flex items-center justify-between  bg-F5F5F5 ">
        <div className="flex items-center">
          {" "}
          <img
            src="/12.png"
            alt="12.png"
            style={{
              height: "78.47px",
              width: "78.47px",
              marginTop: "8.74px",
              marginLeft: "38.26px",
            }}
          ></img>
          {/* width: 1211px;
height: 60px;
left: 107px;
padding: 10px 20px 10px 1011px;
gap: 0px;
opacity: 0px; */}
          <ul className="flex space-x-4  text-lg font-medium text-gray-800  w-[1211px] h-[60px] ml-[107px] px-[150px] py-[25px] gap-4 opacity-100">
            <li className="cursor-pointer font-helvetica font-medium text-11px leading-14px">
              News & Featured
            </li>
            <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
              Men
            </li>
            <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
              Women
            </li>
            <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
              Kids
            </li>
            <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
              Sale
            </li>
            <li className=" cursor-pointer font-helvetica font-medium text-11px leading-14px">
              SNKRS
            </li>
          </ul>
          {/* <div><CiSearch /> */}
          <div className="flex items-center space x-6"> </div>
          <div className="hidden md:flex items-center bg-slate-100 rounded-md px-3 py-2">
            <img src="/13.png" alt="/13.png" />
            <input
              type="text"
              placeholder="  Search"
              className="bg-slate-100 outline-none text-sm"
            />

            <div className="bg-white">
              <img src="/14.png" alt="/14.png" />
            </div>
            <div className="ml-[24px] bg-white">
              <img src="/15.png" alt="/15.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[5442.36px] w-[1440px] mt-[96px] bg-#E5E5E5 text-center">
        <h1>Hello Nike App</h1>
        
        <p>Download the app to access everything Nike.Get Your Great</p>
        <div className="bg-white flex justify-around items-center w-[1740px] px-2">
          <img src="/17.png" alt="/17.png" />
        </div>

        <div className="mt-[30px]">First Look</div>
        <div className="h-[50px] w-[1440px] mt-[4px] bg-#E5E5E5 text-center ">
          <b>
            <h1 className="font-helvetica font-medium text-[56px] leading-[60px] text-center">
              Nike AIR MAX PULSE
            </h1>
          </b>
        </div>

        <div className=" mt-[28px] font-helvetica text-[15px] leading-[24px] text-center">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse <br />
          —designed to push you past your limits and help you go to the max.
        </div>
        <button className="mt-[40px] w-[110.58px] h-[39px] rounded-[30px] pt-[7.5px] pr-[22.08px] pb-[7.5px] pl-[21.5px] bg-black font-helvetica font-normal text-[15px] leading-[24px] text-center text-white ">
          Notify Me
        </button>
        <button className="w-[(138.16px] ml-[5px] h-[39px] rounded-[30px] pt-[7.5px] pr-[22.08px] pb-[7.5px] pl-[21.5px] bg-black font-helvetica font-normal text-[15px] leading-[24px] text-center text-white">
          Shop Air Max
        </button>
      </div>
      <div className=" mt-[-4111px] ml-[48px] font-helvetica text-[15px] leading-[24px] flex ">
        <h1>Best Of Air Mask</h1>{" "}
        <img className="mt-[-5px] ml-[1000px]" src="19.png" alt="19.png" />
      </div>
      <div className=" w-[1440px] h-[540.36px] flex mx-8">
        <img src="18.png" alt="18.png" />
        <img src="20.png" alt="20.png" />
        <img src="21.png" alt="21.png" />
      </div>
      <div className="ml-[34px]">
        {" "}
        Featured 
      </div>
      <div className="bg-white flex ml-[54px] items-center w-[1740px] px-2 mt-[20px]">
        <img src="/22.png" alt="/22.png" />
      </div>

      <div className="h-[50px] w-[1440px] mt-[4px] bg-#E5E5E5 text-center ">
        <b>
          <h1 className="font-helvetica font-medium text-[56px] leading-[60px] text-center mt-[50px]">
            STEP INTO WHAT FEELS GOOD
          </h1>
        </b>
      </div>
      <div className=" mt-[28px] font-helvetica text-[15px] leading-[24px] text-center">
      Cause everyone should know the feeling of running in that perfect pair.
        </div>
        <button className=" mt-[40px] w-[156.58px] h-[39px] rounded-[30px] pt-[7.5px] pr-[22.08px] pb-[7.5px] pl-[21.5px] bg-black font-helvetica font-normal text-[15px] leading-[24px] text-center text-white ml-[650px] ">
        Find Your Shoe
        </button>
        
        <div className=" ml-[48px] font-helvetica text-[15px] leading-[24px] flex ">
        <h1>Gear Up</h1>
        
      </div>
      <div className=" w-[1440px] h-[540.36px] flex mx-8">
        <img src="23.png" alt="23.png" />
        <img src="24.png" alt="24.png" />
        
      </div>
      <div className=" ml-[48px] font-helvetica text-[15px] leading-[24px] flex ">
        <h1>Don't Miss</h1>
        
      </div>
      <div className=" w-[1440px] h-[540.36px] flex mx-8 mt-[20px]">
        <img className="w-[97%] ml-[35px] h-[700px]" src="25.png" alt="25.png" />
      </div>
      <div className="h-[50px] w-[1440px] mt-[4px] bg-#E5E5E5 text-center ">
        <b>
          <h1 className="font-helvetica font-medium text-[56px] leading-[60px] text-center mt-[200px] ml-[216px]">
          FLIGHT ESSENTIALS
          </h1>
        </b>
      </div>
      <div className=" mt-[28px] font-helvetica text-[15px] leading-[24px] text-center">
      Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</div>
        <button className=" mt-[40px] w-[156.58px] h-[39px] rounded-[30px] pt-[7.5px] pr-[22.08px] pb-[7.5px] pl-[21.5px] bg-black font-helvetica font-normal text-[15px] leading-[24px] text-center text-white ml-[750px] ">
      Shop
        </button>
        <div className=" w-[1440px] h-[540.36px] flex mx-8 mt-[20px]">
        <img className="w-[97%] ml-[35px] h-[700px]" src="26.png" alt="26.png" />
      </div>
      <div className="w-[800px] mt-[520.36px] ml-[280px]">
  <h1><b>icons</b></h1>
  <div className="flex gap-[48px] mt-[48px]">
    <div className="h-[144px] w-[184px] tems-center justify-center">
      <div className="w-[78.45px] h-[17px] mt-[3px] text-gray-500">Air Force 1</div>
    <div className="mt-[36px] text-gray-500" >
    Huarache
    </div>
    <div className="mt-[36px] text-gray-500" >
    Air Max 90
    </div>
    <div className="mt-[36px] text-gray-500" >
    Air Max 95
    </div>
  </div><div className="w-[800px] mt-[-80px] ml-[280px] ">
  <h1><b>Shoes</b></h1>
  
      <div className="w-[178.45px] h-[17px] mt-[96px] text-gray-500">Custom Shoes</div>
    </div>
    <div className="h-[144px] w-[184px] flex items-center justify-center ">
      <div className="w-[78.45px] h-[17px]  mt-[-145px] ml-[-400px] text-gray-500">All Shoes</div>
    </div>
    <div className="h-[144px] w-[184px] flex items-center justify-center">
     <div className="w-[178.45px] h-[17px] mt-[96px] ml-[-445px] text-gray-500">Jordan Shoes</div> 
    
    </div>
    <div className="h-[144px] w-[184px] flex items-center justify-center">
     <div className="w-[178.45px] h-[17px] mt-[196px] ml-[-575px] text-gray-500">Jordan Shoes</div> 
    
    </div>
 
  </div>
</div>
<div className="w-[800px] mt-[-225.36px] ml-[1000px]">
  <h1><b>Clothing</b></h1>
  <div className="flex gap-[48px] mt-[48px]">
    <div className="h-[144px] w-[184px] tems-center justify-center ">
      <div className="w-[178.45px] h-[17px]  text-gray-500 mt-[3px] ">All Clothing</div>
    <div className="mt-[36px] text-gray-500" >
    Modest Wear
    </div>
    <div className="mt-[36px] text-gray-500" >
    Hoodies & Pullovers
    </div>
    <div className="mt-[36px] text-gray-500" >
    Shirts & Tops
    </div>
  </div><div className="w-[800px] mt-[-80px] ml-[130px]">
  <h1 className=""><b>Kids'</b></h1>
  
      <div className="w-[188.45px] h-[17px] mt-[96px] mt-[38px] "><img src="29.png" alt="29.png" /></div>
    </div>
    
    </div>
            
  </div>




       
    </header>
  );
}
