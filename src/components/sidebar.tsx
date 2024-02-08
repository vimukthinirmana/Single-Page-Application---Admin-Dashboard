import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaughWink} from "@fortawesome/free-solid-svg-icons";
import {SIDENAV_ITEMS} from "../../SideBarConstant";
import {SideBarMenuItem} from "@/components/sidebar-menu-item";


export default function Sidebar() {
    return (
        <aside
            className="fixed bg-[#4e73df] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[14rem]">
            <div className="flex relative items-center py-5 px-3.5">
                <FontAwesomeIcon className="text-white w-8 mx-3.5 min-h-fit rotate-20" icon={faLaughWink}/>
                <h3 className="pl-2 font-bold text-3x1 text-white min-w-max">
                    SB ADMIN
                    <sup> 2</sup>
                </h3>
            </div>

            <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
                <div className="flex flex-col gap-2 px-4 rounded-full">

                    {
                        SIDENAV_ITEMS.map((item, index) => {
                            return <SideBarMenuItem item={item}></SideBarMenuItem>
                        })
                    }


                </div>
            </nav>
        </aside>
    )
}