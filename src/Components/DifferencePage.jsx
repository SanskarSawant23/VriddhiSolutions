import Calendly from "./Calendly"


export const DifferencePage =()=>{
    return (
        <>
         <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-customBlue mb-12">
          The Difference We've Made So Far
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-customBlue">50K+</p>
            <p className="text-sm md:text-base text-customBlue">
              average Impressions/per week/per brand
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-customBlue">15%</p>
            <p className="text-sm md:text-base text-customBlue">
              Avg. Increase in sales within 3 months of our content service.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-customBlue">30%</p>
            <p className="text-sm md:text-base text-customBlue">
              Better engagement on personal accounts within 2 months
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-customBlue">20+</p>
            <p className="text-sm md:text-base text-customBlue">
              Business Impacted so far
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <span className="text-2xl font-bold text-customBlue">Schedule A Time To Discuss Your Needs</span>
      </div>
        <Calendly></Calendly>
       


    </section>
       
        </>
    )
}