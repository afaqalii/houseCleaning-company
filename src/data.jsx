import {GiNails, GiPipes} from "react-icons/gi"
import {MdRoofing} from "react-icons/md"
import {TbGridPattern} from "react-icons/tb"
export const menuItems = [
    "Services",
    "About",
    "News & Blog",
    "Contact"
]

export const ourServices = [
    {
       title:"Repair work",
       icon: <GiNails className="text-8xl text-orange"/>,
       content:"Roof inspection before winter can significantly reduce your home heating costs.",
    },
    {
        title:"Gutters",
        icon: <GiPipes className="text-8xl text-orange"/>,
        content:"Roof inspection before winter can significantly reduce your home heating costs.",
     },
     {
        title:"Shingle roofing",
        icon: <MdRoofing className="text-8xl text-orange"/>,
        content:"Roof inspection before winter can significantly reduce your home heating costs.",
     },
     {
        title:"Flat Roofs",
        icon: <TbGridPattern className="text-8xl text-orange"/>,
        content:"Roof inspection before winter can significantly reduce your home heating costs.",
     },
]