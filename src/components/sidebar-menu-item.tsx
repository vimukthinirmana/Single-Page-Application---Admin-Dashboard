'use client';
import {SideNavItem} from "@/types/types";
import Link from "next/link";
import {TiChevronRight} from "react-icons/ti";
import {useState} from "react";
import {usePathname} from "next/navigation";

export const SideBarMenuItem = ({item}: { item: SideNavItem }) => {
    const linkStyle = "flex items-center min-h-[40px] h-full text-blue-100 py-2 px-2 hover:text-white transition duration-100";
    const ddLinkStyle = linkStyle;
    const navManuDropdownItem = "text-gray-800 py-1 px-2 w-full hover:bg-gray-200 rounded-md transition duration-100";

    const activeLinkStyle = "rounded-md text-blue light:text-black  ";
    const pathName = usePathname();
    const [subMenuOpen,setSubMenuOpen] = useState(false);
    const toggleMenu= ()=>{
        setSubMenuOpen(!subMenuOpen);
    }

    return (
        <>
            {
                item.submenu
                    ? (<div className={"rounded-md min-w-[18px] "}>
                        <a className={`${ddLinkStyle} ${pathName.includes(item.path) ? activeLinkStyle:''}`} onClick={toggleMenu}>
                            {item.icon}
                            <span className={"ml-3 leading-6 font-normal"}>{item.tittle}</span>
                            <TiChevronRight className={"ml-auto stroke-2 text-xs"}/>
                        </a>
                        { subMenuOpen && <div className={"bg-white rounded-md  "}>
                            <div className={"grid pl-2 justify-between py-4 leading-6  "}>
                                {
                                    item.subMenuItems.map((subItem, index) => {
                                        return (
                                        <Link key={index} href={subItem.path} className={`${navManuDropdownItem} ${subItem.path===pathName ? 'bg-gray-200':''}`}>
                                            <span>{subItem.tittle}</span>
                                        </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        }
                    </div>)
                    : (<Link href={item.path} className={`${linkStyle} ${item.path===pathName?activeLinkStyle:''}`}>
                        {item.icon}
                        <span className={"ml-3 leading-6 fo  font-normal"}>{item.tittle}</span>
                    </Link>)
            }
        </>
    )

}