import { ReactNode } from "react";

export default function Pagewrapper({ childern }:{childern: ReactNode}){
    return(
       <div>
        {childern}
       </div>
    )
   }