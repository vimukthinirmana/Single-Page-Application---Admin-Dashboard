import { SideNavItem } from "@/types/types";
import { BsHouseDoor } from "react-icons/bs";
import {AiFillDashboard} from "react-icons/ai";
import {IoSettingsSharp} from "react-icons/io5";
import {FaChartArea, FaFolder, FaTable, FaWrench} from "react-icons/fa";
import {white} from "next/dist/lib/picocolors";


export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        subTittle:"",
        tittle:"Dashboard",
        path:"/",
        icon:<AiFillDashboard  size={18}/>
    },
    {
        subTittle:"INTERFACE",
        tittle:"",
        path:"/",
        icon:<></>
    },
    {
        subTittle:"",
        tittle:"Components",
        path:"/components",
        icon:<IoSettingsSharp  size={15}/>,
        submenu:true,
        subMenuItems:[
            {subTittle:"CUSTOM COMPONENTS:",tittle:'Button',path:'/button', icon:<BsHouseDoor/>},
            {subTittle:"",tittle:'Cards',path:'/cards', icon:<BsHouseDoor/>},
        ],
    },
    {
        subTittle:"",
        tittle:"Utilities",
        path:"/utilities",
        icon:<FaWrench  size={15}/>,
        submenu:true,
        subMenuItems:[
            {subTittle:"",tittle:'Colors',path:'/colors', icon:<BsHouseDoor/>},
            {subTittle:"",tittle:'Borders',path:'/borders', icon:<BsHouseDoor/>},
            {subTittle:"",tittle:'Animations',path:'/animations', icon:<BsHouseDoor/>},
            {subTittle:"",tittle:'Other',path:'/other', icon:<BsHouseDoor/>},
        ],
    },
    {
        subTittle:"ADDONS",
        tittle:"",
        path:"/",
        icon:<></>
    },
    {
        subTittle:"",
        tittle:"Pages",
        path:"/pages",
        icon:<FaFolder  size={15}/>,
        submenu:true,
        subMenuItems:[
            {subTittle:"",tittle:'Login',path:'/login', icon:<BsHouseDoor/>},
            {subTittle:"",tittle:'Register',path:'/register', icon:<BsHouseDoor/>},
            {subTittle:"",tittle:'Forgot-Password',path:'/forgot-password', icon:<BsHouseDoor/>},
            {subTittle:"",tittle:'404-Page',path:'/404-page', icon:<BsHouseDoor/>},
            {subTittle:"",tittle:'Blank-Page',path:'/blank-page', icon:<BsHouseDoor/>},
        ],
    },
    {
        subTittle:"",
        tittle:"Charts",
        path:"/charts",
        icon:<FaChartArea  size={15}/>
    },
    {
        subTittle:"",
        tittle:"Tables",
        path:"/tables",
        icon:<FaTable  size={15}/>
    },

]
    // <hr class="sidebar-divider">