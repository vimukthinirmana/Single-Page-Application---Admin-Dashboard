export type SideNavItem = {
    subTittle:string;
    tittle:string;
    path:string;
    icon:JSX.Element;
    submenu?:boolean;
    subMenuItems?:SideNavItem[];
};