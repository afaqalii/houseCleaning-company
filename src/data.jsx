import {GiNails, GiPipes} from "react-icons/gi"
import {MdRoofing} from "react-icons/md"
import {TbGridPattern} from "react-icons/tb"
import {RiStarSFill} from "react-icons/ri"
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

export const howWeWork = [
   {
      title:"01",
      content:"Consultaion",
   },
   {
      title:"02",
      content:"Estimate",
   },
   {
      title:"03",
      content:"Installation",
   },
   {
      title:"04",
      content:"Inspection",
   },
   {
      title:"05",
      content:"Guarantee",
   },
]

export const testimonials = [ 
   {
      stars:[
         <RiStarSFill/>,
         <RiStarSFill/>,
         <RiStarSFill/>,
         <RiStarSFill/>,
         <RiStarSFill/>,
      ],
      content:"We are so happy with our new shingles and impressed with the team's quality and workmanship.",
      name:"Lynda Jones"
   },
   {
      stars:[
      <RiStarSFill/>,
      <RiStarSFill/>,
      <RiStarSFill/>,
      <RiStarSFill/>,
      <RiStarSFill/>,
   ],
      content:"The service was very professional and I would happily recommend them! The roof looks great and the crew cleaned up afterwards.",
      name:"Harley Baker"
   },
   {
      stars:[
         <RiStarSFill/>,
         <RiStarSFill/>,
         <RiStarSFill/>,
         <RiStarSFill/>,
         <RiStarSFill/>,
      ],
      content:"Honest and reliable service. Quick and friendly too. I would not hesitate to recommend this team for any job.",
      name:"Antony Sacks"
   },
]

export const newAndBlogs = [
   {
      title:"Rules of Roof Maintenance",
      content:"Broken shingles are a sign that your roof needs attention. Pay attention to this early sign and you'll save yourself time and money"
   },
   {
      title:"Find the Right Roof Experts",
      content:"Not all roofs are created equal; some roofs require more attention than others. Working with an expert will help you choose the roof that is right for you."
   },
   {
      title:"Replacing your roof? Read this first.",
      content:"Replacing your roof has many benefits, including reduced heating costs and increased home value. Learn about the benefits of roof replacement."
   },

]