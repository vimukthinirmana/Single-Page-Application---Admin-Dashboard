import { faLaughWink } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Header(){
    return(
       <header className="fixed bg-[#ffffff] w-full z-6 px-4 shadow-sm shadow-slate-500/40 pl-[20rem]">
         
         <div className="flex flex-wrap items-center justify-between h-16">
         

         <div className="relative  w-96 p-0 ">
            <div className="relative max-w-sm mx-auto  flex items-center justify-center ">
              <input className="w-full h-9 py-2 px-3 border border-none bg-slate-50 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  type="search" placeholder="Search for..." ></input>

                <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-[#4e73df] border-gray-300 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
                  </svg>
                </button>
            </div>
         </div>


         
         

       

         <div className="relative flex items-center">
    

      
          <div className="relative" data-te-dropdown-ref data-te-dropdown-alignment="end">
            {/* <!-- First dropdown trigger --> */}
            <a className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false">
              {/* <!-- Dropdown trigger icon --> */}
              <FontAwesomeIcon className="text-gray-300 w-4 mx-3.5 min-h-fit " icon={faBell} />
              {/* <!-- Notification counter --> */}
              <span
                className="absolute -mt-4 ml-6 rounded-full bg-red-600 px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"
                >3+</span>

            </a>
          </div>





          <div className="relative" data-te-dropdown-ref data-te-dropdown-alignment="end">
            {/* <!-- First dropdown trigger --> */}
            <a className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false">
              {/* <!-- Dropdown trigger icon --> */}
              <FontAwesomeIcon className="text-gray-300 w-4 mx-3.5 min-h-fit " icon={faEnvelope} />
              {/* <!-- Notification counter --> */}
              <span
                className="absolute -mt-4 ml-6 rounded-full bg-red-600 px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"
                >7+</span>

            </a>
          </div>




   
    
          <div className="w-0.5 h-10 bg-gray-200 "></div>
   

          <span className="mr-2 hidden lg:inline text-gray-500 text-sm pl-6"> Douglas McGee </span>



      
          <div className="relative pr-2" data-te-dropdown-ref data-te-dropdown-alignment="end">
            
            <a
              className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false">
              
              <img
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
                className="rounded-full"
                height={34}
                width={34}
                alt=""
                loading="lazy" />
            </a>
        
          </div>

 

    </div> 


         

         </div>
       </header>
    )
   }