

export const Services = ({title, description,Logo})=>{
 

    return (
        <>  

        <div className="flex justify-between p-10">
            <div className="w-56 flex justify items-center w-80 " >
                <div className="mr-4 "><Logo></Logo></div>
                
                <h2 className=" ">
                    <span className="text-3xl text-customBlue font-semibold">
                        {title}
                    </span>
                </h2>
            </div>
            <div className="w-96">
                <p className="text-sm">
                 {description}
                </p>
            </div>
        </div>

        
       
        </>
    )
}