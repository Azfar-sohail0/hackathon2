// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-black text-white py-8 mt-[80px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section */}
            <div className="space-y-2">
              <h3 className="font-bold">FIND A STORE</h3>
              <p>BECOME A MEMBER</p>
              <p>SIGN UP FOR EMAIL</p>
              <p>Send Us Feedback</p>
              <p>STUDENT DISCOUNTS</p>
            </div>
  
            {/* Center Section */}
            <div className="space-y-2">
              <h3 className="font-bold">GET HELP</h3>
              <p>Order Status</p>
              <p>Delivery</p>
              <p>Returns</p>
              <p>Payment Options</p>
              <p>Contact Us On Nike.com Inquiries</p>
              <p>Contact Us On All Other Inquiries</p>
            </div>
  
            {/* Right Section */}
            <div className="space-y-2">
              <h3 className="font-bold">ABOUT NIKE</h3>
              <p>News</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Sustainability</p>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 border- pt-4">
            <div className=" mt-[39px] flex flex-col md:flex-row justify-between items-center">
              <p>India</p>
              <p className="ml-[-1105px]">© 2023 Nike, Inc. All Rights Reserved</p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Twitter" className="hover:opacity-75">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Facebook" className="hover:opacity-75">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-75">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className=" mt-[-22px] ml-[1150px] mt-4 flex flex-wrap justify-between  justify-center  text-sm text-gray-500">
              <a href="#" className="hover:text-white">
                Guides
              </a>

              <a href="#" className="hover:text-white">
                Terms of Sale
              </a>
           
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
              
              <a href="#" className="hover:text-white">
                Nike Privacy Policy
              </a>
            <div className="text-gray-600">
                
            </div>
            
            
            </div>
          </div>
        </div>
      </footer>
    );
  }
  