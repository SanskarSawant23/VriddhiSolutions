import { useState } from "react"


export const Form = () =>{
    const[email, setEmail] = useState('')
    return (
        <div className=" bg-blue-600 text-white p-8 grid md:grid-cols-3 gap-12 m-10 h-[500]">
          {/* Work Together Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Let's Work Together</h2>
            <div className="space-y-2">
              <p>Phone</p>
              <p>+919266537839</p>
              <p className="mt-4">info@vriddhi.media</p>
            </div>
          </div>
    
          {/* Newsletter Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in the Know</h2>
            <div className="space-y-6">
              <div className="space-y-2 grid grid-col-1">
                <label htmlFor="newsletter-email">Enter your Email *</label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-white/70 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 w-64"
                  
                  
                />
                
              </div>
              
              <button 
                variant="outline" 
                className="border border-red-200 text-red-200 hover:bg-red-200 hover:text-blue-600 p-2 pr-4 pl-4 "
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
    
          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Stay in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-white/70 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-white/70 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                 
                  className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-white/70 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-white/70 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              </div>
              
              <div className="space-y-2 grid grid-col-1">
                <label htmlFor="message">Leave us a message...</label>
                <textarea
                  id="message"
                  className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-white/70 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[100px] resize-none"
                />
              </div>
              <div className="flex justify-end">
              <button 
                type="submit"
                variant="outline" 
                className="border border-red-200 text-red-200 hover:bg-red-200 hover:text-blue-600 p-2 pr-4 pl-4 "
              >
                SUBMIT
              </button>
              </div>
              
            </form>
          </div>
        </div>
      )
}