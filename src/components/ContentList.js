import React from 'react'

function ContentList() {
  const contents = [{
    categories: "Categories",
    images: ['Hampi.jpg'], 
    description: "Panjali: Mandovi river cruise with candle light dinner and free drinks",
    duration: 2, rating: 4.5,cost:2000
  },{
    categories: "Categories",
    images: ['Hampi.jpg'], 
    description: "Panjali: Mandovi river cruise with candle light dinner and free drinks",
    duration: 2, rating: 4.5,cost:2000
  },]
  return (
    <div className='content-list-container'>
      <div className='side-text-wrapper'>
        <div className='side-text'>100+ Yatching Experiences</div>
      </div>
      {
        contents.map((value, i) => {
          return (
            <div className='card-content' key={i}>

              <div className='rating'><img src="star.png" alt='star' /><span>{value.rating}</span></div>
              <div className='image-cell'>
              <img src={value.images} alt="img" className='card-image'/>
              <img src='like.png' alt="img" className='like-image' />
              </div>              
              
            
              <div className='card-wrapper'>
                <p className='categories'>{value.categories}</p>
                <p className='description'><b>{value.description}</b></p>
                <div className='bottom-cell'>
                  <p className='duration'><b>Duration : {value.duration} hrs</b></p>
                  <p className='cancellation'>Free Cancellation</p>
                </div>

              </div>
              <div className='cost'>
                <b>{value.cost}</b><span>/person</span>
                </div>
              
            </div>
          )

        })

      }

    </div>

  )
}

export default ContentList