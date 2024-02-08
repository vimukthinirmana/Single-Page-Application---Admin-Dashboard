import { SideNavItem } from "@/types/types";
import { BsHouseDoor } from "react-icons/bs";
import {AiFillDashboard} from "react-icons/ai";
import {IoSettingsSharp} from "react-icons/io5";
import {FaChartArea, FaFolder, FaTable, FaWrench} from "react-icons/fa";
import {white} from "next/dist/lib/picocolors";


export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        tittle:"Dashboard",
        path:"/",
        icon:<AiFillDashboard  size={18}/>
    },
    {
        tittle:"Components",
        path:"/components",
        icon:<IoSettingsSharp  size={15}/>,
        submenu:true,
        subMenuItems:[
            {tittle:'Button',path:'/button', icon:<BsHouseDoor/>},
            {tittle:'Cards',path:'/cards', icon:<BsHouseDoor/>},
        ],
    },
    {
        tittle:"Utilities",
        path:"/utilities",
        icon:<FaWrench  size={15}/>,
        submenu:true,
        subMenuItems:[
            {tittle:'Colors',path:'/colors', icon:<BsHouseDoor/>},
            {tittle:'Borders',path:'/borders', icon:<BsHouseDoor/>},
            {tittle:'Animations',path:'/animations', icon:<BsHouseDoor/>},
            {tittle:'Other',path:'/other', icon:<BsHouseDoor/>},
        ],
    },
    {
        tittle:"Pages",
        path:"/pages",
        icon:<FaFolder  size={15}/>,
        submenu:true,
        subMenuItems:[
            {tittle:'Login',path:'/login', icon:<BsHouseDoor/>},
            {tittle:'Register',path:'/register', icon:<BsHouseDoor/>},
            {tittle:'Forgot-Password',path:'/forgot-password', icon:<BsHouseDoor/>},
            {tittle:'404-Page',path:'/404-page', icon:<BsHouseDoor/>},
            {tittle:'Blank-Page',path:'/blank-page', icon:<BsHouseDoor/>},
        ],
    },
    {
        tittle:"Charts",
        path:"/charts",
        icon:<FaChartArea  size={15}/>
    },
    {
        tittle:"Tables",
        path:"/tables",
        icon:<FaTable  size={15}/>
    },

]