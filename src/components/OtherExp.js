import React from 'react'

function OtherExp() {
const exps=["Sky Diving","Museum","Helicopter ride","Tours","Experience","Experience","Experience","Experience",]
  return (
    <div className='other-exp-container'>
        <p className='other-head'><b>Our Other Experiences</b></p>
        <div className='exp-card-wrapper'>

            {
            exps.map((value, i) => {
              return (
                <div className='exp-card'>
                <p>{value}</p>
                </div>
              )
            })
          }
            

        </div>
       
        

    </div>
  )
}

export default OtherExp