import { poppins } from '@/app/(site)/layout'
import { cn } from '@/lib/utils'
import React from 'react'

const quote = [
    {
    id : '1', 
    heading : "⏰ Same-Day Sociological Insights", 
    text : "We post our sociological insights same day when the news is still fresh in your memory. Easy to Understabd, no need to re-read the articles. We've got you covered!",
    }, 
    {
        id : '2', 
        heading : "⌛️ 15-Min Daily Bytes. No 200-page Blues!", 
        text : "Explore sociology current affairs in short, 10-minute read daily. No Need for overwhelming 200-page magazines. Keep it simple, learn a bit each day!",
    },
    {
        id : '3', 
        heading : "📝 Human Intelligence takes precedence first, ChatGPT later.", 
        text : "We value Human over ChatGPT, Our content is real, something you can use in exams. No weird stuff you can't remember!",
    },
    {
        id : '4', 
        heading : "📈 Less is More: 15 mins Daily, No Overfeeding!", 
        text : "Strange but for UPSC, less is more. Spend just 15 minutes a day with our curated content - think of it like a balanced diet for your answers. No overloading just what you need without the overwhelm!",
    },
    // {
    //     id : '5', 
    //     heading : "🥇 Chase That Extra Mark, Be Distinct!", 
    //     text : "Having sat on the intreview chair mutiple times inlcuding this year - We know the value of that extra mark: One more mark per answer can make or break your success. Watch out for the float bubbles in our content to add that extra value, helping you stand out in your answers.",
    // },    

]

const Testimonial = () => {
  return (
    <div className='flex items-center justify-center bg-gradient-to-t from-red-50 via-slate-50 to-yellow-50 border-t-2 border-neutral-700 py-10 pt-20'>
        <div className='max-w-6xl mx-4 lg:mx-10 sm:mx-auto '>
            <div className='flex items-center justify-center'>
            <div className='border-4 border-neutral-700 px-6 lg:px-10 -skew-x-[20deg] lg:mx-auto bg-black text-white items-center justify-center mx-4 md:mx-10'>
            <h1 className={cn('text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-center font-semibold py-4 md:py-6 skew-x-[20deg]',poppins.className )}>SocioCurrents is Different. But How?</h1>
             </div>
            </div>
       
            

        <div>
        <div className='grid md:grid-cols-2 gap-y-10 lg:max-w-[85%] mx-auto my-10 border-red-500 border-0'>
            {quote.map((item, index)=>(
                <div  key={item.id}>
                    {index <4 ? <> <div className='flex flex-col gap-y-2 max-w-[80%] md:max-w-[90%] mx-auto'>
                    <h1 className={cn('text-xl font-semibold text-center', poppins.className)}>{item.heading}</h1>
                    <h1 className='text-[17px] text-center'>{item.text}</h1>
                    </div></> : 
                    <>
                    </>}
                   

                </div>

                
            ))}

        </div>
        <div>
        {/* <div className='mx-auto border-red-500 border-0 sm:max-w-[50%] lg:max-w-[35%] mb-10 flex flex-col items-center justify-center gap-y-2'>
                    <h1 className={cn('text-xl font-semibold text-center', poppins.className)}>{quote[4].heading}</h1>
                    <h1 className='text-lg text-center max-w-[90%]'>{quote[4].text}</h1> 
            </div> */}
        </div>

        <div className='flex justify-end'>
            <h1 className='text-xl md:text-2xl lg:text-3xl underline underline-offset-4 justify-end mx-6'>We are smarter. Period</h1>
        </div>
        </div>
        
        
         
    </div>
    </div>
  )
}

export default Testimonial