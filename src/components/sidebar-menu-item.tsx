'use client';
import {SideNavItem} from "@/types/types";
import Link from "next/link";
import {TiChevronRight} from "react-icons/ti";
import {useState} from "react";
import {usePathname} from "next/navigation";

export const SideBarMenuItem = ({item}: { item: SideNavItem }) => {
    const linkStyle = "flex items-center min-h-[40px] h-full text-blue-100 py-2 px-4 hover:text-white transition duration-100";
    const ddLinkStyle = linkStyle;
    const navManuDropdownItem = "text-[#fffff] py-2 px-4 hover:text-white transition duration-100";

    const activeLinkStyle = "rounded-md text-blue light:text-black";
    const pathName = usePathname();
    const [subMenuOpen,setSubMenuOpen] = useState(false);
    const toggleMenu= ()=>{
        setSubMenuOpen(!subMenuOpen);
    }

    return (
        <>
            {
                item.submenu
                    ? (<div className={"rounded-md min-w-[18px]"}>
                        <a className={ddLinkStyle} onClick={toggleMenu}>
                            {item.icon}
                            <span className={"ml-3 leading-6 font-semibold"}>{item.tittle}</span>
                            <TiChevronRight className={"ml-auto stroke-2 text-xs"}/>
                        </a>
                        { subMenuOpen && <div className={"bg-white border-l-4  "}>
                            <div className={"grid gap-y-2 px-16 py-3 leading-5"}>
                                {
                                    item.subMenuItems.map((subItem, index) => {
                                        return (
                                        <Link key={index} href={subItem.path} className={""}>
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
                        <span className={"ml-3 leading-6 fo  nt-semibold"}>{item.tittle}</span>
                    </Link>)
            }
        </>
    )

}