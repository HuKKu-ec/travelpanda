import React, { useState } from 'react';

function Filter() {
    const [isActiveCategory, setIsActiveCategory] = useState(true);
    const [isActiveDestination, setIsActiveDestination] = useState(true);
    const [travellerCount,setTravellerCount]=useState(1);
    /*****************************
     some more usestate need to be added
     *****************************/

    return (
        <div className='filter-container'>
            <div className='filter-head'>
                <b className='filter-by'>Filter by</b>
                <b className='reset'>Reset</b>
            </div>
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActiveCategory(!isActiveCategory)}>
                    <b className='filter-side-head'>CATEGORY</b>
                    <span>{isActiveCategory ? <img src="drop.png" alt="drop icon" /> : <img className='rotate' src="drop.png" alt="drop icon" />}</span>
                </div>
                {isActiveCategory &&
                    <div className="accordion-content">
                        <div className='category-filters'>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Transfers' style={{ marginRight: '6px' }} className='transfers' />
                                <b style={{ fontSize: '16px' }}>Transfers</b>
                            </div>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Guided-tours' style={{ marginRight: '6px' }} className='guided-tours' />
                                <b style={{ fontSize: '16px' }}>Guided tours</b>
                            </div>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Day trips' style={{ marginRight: '6px' }} className='day-trips' />
                                <b style={{ fontSize: '16px' }}>Day trips</b>
                            </div>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Water activities' style={{ marginRight: '6px' }} className='water-activities' />
                                <b style={{ fontSize: '16px' }}>Water activities</b>
                            </div>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Multiday trips' style={{ marginRight: '6px' }} className='multiday-trips' />
                                <b style={{ fontSize: '16px' }}>Multiday trips</b>
                            </div>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Other experiences' style={{ marginRight: '6px' }} className='other-experiences' />
                                <b style={{ fontSize: '16px' }}>Other experiences</b>
                            </div>
                        </div>
                    </div>}
            </div>
            <div className='price-container'>
            <b className='filter-side-head'>PRICE</b>
            <input type="range" min="500" max="100000" className='slider-bar'/>
            <div className='bar-foots'>
            <b className='bar-foot-left'>500</b><b className='bar-foot-right'>100000</b>
            </div>
            </div>

            <div className='duration-container'>
            <b className='filter-side-head'>Duration</b>
            <input type="range" min="0" max="8" className='slider-bar'/>
            <div className='bar-foots'>
            <b className='bar-foot-left'>0</b><b className='bar-foot-right'>8hrs</b>
            </div>
            </div>

            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActiveDestination(!isActiveDestination)}>
                    <b className='filter-side-head'>DESTINATION</b>
                    <span>{isActiveDestination ? <img src="drop.png" alt="drop icon" /> : <img className='rotate' src="drop.png" alt="drop icon" />}</span>
                </div>
                {isActiveDestination &&
                    <div className="accordion-content">
                        <div className='category-filters'>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Anjuna' style={{ marginRight: '6px' }} className='anjuna' />
                                <b style={{ fontSize: '16px' }}>Anjuna</b>
                            </div>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Panaji' style={{ marginRight: '6px' }} className='panaji' />
                                <b style={{ fontSize: '16px' }}>Panaji</b>
                            </div>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Margao' style={{ marginRight: '6px' }} className='margao' />
                                <b style={{ fontSize: '16px' }}>Margao</b>
                            </div>
                            <div className='filter-contents' style={{ margin: '5px' }}>
                                <input type='checkbox' name='Hampi' style={{ marginRight: '6px' }} className='hampi' />
                                <b style={{ fontSize: '16px' }}>Hampi</b>
                            </div>
                        </div>
                    </div>}
            </div>
            <div className='travellers-container'>
            <b className='traveller-side-head'>TRAVELLERS</b>
            <p onClick={()=>travellerCount>1 && setTravellerCount(travellerCount-1)} style={{color:'#26BFB3'}} className=''><b>-</b></p>
            <p><b> {travellerCount} </b></p>
            <p onClick={()=>setTravellerCount(travellerCount+1)} style={{color:'#26BFB3'}}><b>+</b></p> 
            </div>


        </div>
    )
}

export default Filter