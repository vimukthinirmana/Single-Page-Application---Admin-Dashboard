export type SideNavItem = {
    tittle:string;
    path:string;
    icon:JSX.Element;
    submenu?:boolean;
    subMenuItems?:SideNavItem[];
};