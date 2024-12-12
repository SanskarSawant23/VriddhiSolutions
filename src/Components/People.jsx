import Reviews from "./Reviews"


export const People = ()=>{
    return(
        <>
            <div className="bg-red-200 h-[500px] m-10 ">
                <div className="flex justify-center p-10">
                   <span className="text-2xl text-blue-600 font-bold">What People Are Saying</span>
                   
                </div>
                <div className="h-full overflow-hidden flex  justify-center">
                <Reviews></Reviews>
                </div>
                </div>
        </>
    )
}