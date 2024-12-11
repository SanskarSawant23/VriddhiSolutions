import { Services } from "./Services"
import { ContentFunnel } from "../assets/svg components/ContentFunnel"
import { Narratives } from "../assets/svg components/Narratives"
import { OnlinePresence } from "../assets/svg components/OnlinePresence"
import { Personalbrand } from "../assets/svg components/Personalbrand"


export const WhatWeDo = ()=>{

    const services = [
      {
        "title":"Shifting the Narratives",
        "description":"We help you in shifting all your negative PR into positive ones using our strategic UGC push.",
        "Logo": Narratives
      },
      {
       "title":"Building An Online Presence",
       "description": "We give your brand a much-needed push in all the relevant communities and forums to make sure that you don't go unnoticed.",
       "Logo": OnlinePresence
      },
      {
        "title": "Building A Personal Brand",
        "description": "People relate with founders much better than they relate with Brands. We help you become more relatable and connect with your audience on a deeper lever.",
        "Logo": Personalbrand
      },
      {
        "title": "Building Your Content Funnel",
        "description":"Boost website traffic by 20% and brand awareness by 35%! Our all-in-one solution, encompassing research, writing, SEO-optimized blogs, and captivating videos, helps you build an impeccable content machine that gets results.",
        "Logo":ContentFunnel
      }
    
    ]
    return (
    <>
    <div className="h-20 flex items-center justify-center ">
         <div className="text-center text-2xl font-semibold ">What We Do</div>  
    </div>
    <div className="p-20 ">
    <div className=" border-t-2 border-indigo-500">
    {services.map((item)=>(
        <div className="border-b-2 border-indigo-500">
        <Services title={item.title} description={item.description} Logo={item.Logo}></Services>
        </div>
    ))}


    
    </div>
    </div>
    <div className="flex justify-center">
        <button className="border border-indigo-700 p-2 pr-10 pl-10">
           <span className="text-indigo-700"> Book Now</span>
            </button>
    </div>
    


    </>
    )
}