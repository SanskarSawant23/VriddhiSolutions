



export const Navbar = () =>{
   

    const handleScroll =()=>{
        const servicesSection = document.getElementById('services');
        if(servicesSection){
            servicesSection.scrollIntoView({behavior:'smooth'})
        }
    }

    const handleContact =()=>{
        const ContactSection = document.getElementById("Form");
        if(ContactSection){
            ContactSection.scrollIntoView({behavior:'smooth'})
        }
    }
    return (
        <>  
        <div className="flex justify-between items-center h-20 w-full">
            <div >
            <img src="https://static.wixstatic.com/media/22791e_043cdd660d5f451a80750e04f8da012e~mv2.png/v1/fill/w_294,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-19%20234401.png" alt="vriddhi" />
          
            </div>
            <div className="flex mr-40 gap-5  ">
                     <button>
                       <span className=" text-customBlue hover:text-purple-800">Newsletter</span> 
                     </button>
                    <button onClick={handleScroll}>
                        <span className=" text-customBlue hover:text-purple-800">Services</span>
                    </button>
                    <button onClick={handleContact}>
                        <span className=" text-customBlue hover:text-purple-800">Contact</span>
                        </button>
                    <button className="border border-customBlue text-customBlue p-2 hover:bg-blue-700 hover:text-white">
                       <a href="https://calendly.com/worksan646/30min">Book a Session</a>
                        </button>

            </div>
            
        </div>
            
        </>
    )
} 