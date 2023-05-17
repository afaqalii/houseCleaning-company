import {GiNails, GiPipes} from "react-icons/gi"
import {MdRoofing} from "react-icons/md"
import {TbGridPattern} from "react-icons/tb"
import {RiStarSFill} from "react-icons/ri"
import roofRepair from "./assets/fixing-roof.jpg"
import gutter from "./assets/gutter.jpg"
import shingle from "./assets/shingle-roof.jpg"
import flatRoof from "./assets/flat-roof.jpeg"

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

export const OurServicesData = [
   {
      img:roofRepair,
      title:"Repair Work",
      para:"A flat roof has a slight angle to it and its primary benefit is comfort, as it allows you to turn your roof into a living space. We can show you the many benefits of flat roofs, and discuss some of the drawbacks, too.",
      para2:" Flat roofs are ideal for homes that don’t have a large yard, as they can increase your living area and enable you to build a personal deck that's the size of your roof. Contact us to hear more about your flat roof options. We're happy to help."
   },
   {
      img:gutter,
      title:"Gutters",
      para:"A flat roof has a slight angle to it and its primary benefit is comfort, as it allows you to turn your roof into a living space. We can show you the many benefits of flat roofs, and discuss some of the drawbacks, too.",
      para2:" Flat roofs are ideal for homes that don’t have a large yard, as they can increase your living area and enable you to build a personal deck that's the size of your roof. Contact us to hear more about your flat roof options. We're happy to help."
   },
   {
      img:shingle,
      title:"Shingle Roof",
      para:"A flat roof has a slight angle to it and its primary benefit is comfort, as it allows you to turn your roof into a living space. We can show you the many benefits of flat roofs, and discuss some of the drawbacks, too.",
      para2:" Flat roofs are ideal for homes that don’t have a large yard, as they can increase your living area and enable you to build a personal deck that's the size of your roof. Contact us to hear more about your flat roof options. We're happy to help."
   },
   {
      img:flatRoof,
      title:"Flat Roof",
      para:"A flat roof has a slight angle to it and its primary benefit is comfort, as it allows you to turn your roof into a living space. We can show you the many benefits of flat roofs, and discuss some of the drawbacks, too.",
      para2:" Flat roofs are ideal for homes that don’t have a large yard, as they can increase your living area and enable you to build a personal deck that's the size of your roof. Contact us to hear more about your flat roof options. We're happy to help."
   },
]

export const NewsAndBlogsData = [
   {
      img:roofRepair,
      title:"Rules of Roof Maintenance",
      para:"Broken shingles are a sign that your roof needs attention. Pay attention to this early sign and you'll save yourself time and money in the long run.",
      para2:" Flat roofs are ideal for homes that don’t have a large yard, as they can increase your living area and enable you to build a personal deck that's the size of your roof. Contact us to hear more about your flat roof options. We're happy to help."
   },
   {
      img:gutter,
      title:"Find the Right Roof Experts",
      para:"Not all roofs are created equal; some roofs require more attention than others. Working with an expert will help you choose the roof that is right for you.",
      para2:" Flat roofs are ideal for homes that don’t have a large yard, as they can increase your living area and enable you to build a personal deck that's the size of your roof. Contact us to hear more about your flat roof options. We're happy to help."
   },
   {
      img:shingle,
      title:"Replacing your roof? Read this first.",
      para:"Replacing your roof has many benefits, including reduced heating costs and increased home value. Learn about the benefits of roof replacement.",
      para2:" Flat roofs are ideal for homes that don’t have a large yard, as they can increase your living area and enable you to build a personal deck that's the size of your roof. Contact us to hear more about your flat roof options. We're happy to help."
   },
]