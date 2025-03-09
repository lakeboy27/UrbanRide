import React from 'react'

const LocationSearchPanel = (props) => {

    console.log(props) ;

    const location = [
        "24B , Near Kapoors cafe, piplani petrol pumps, Bhopal",
        "18E , Near MANA cafe, piplani petrol pumps, Bhopal",
        "68N , Near BOOBLU cafe, piplani petrol pumps, Bhopal",
        "232C , Near SHAKA cafe, piplani petrol pumps, Bhopal"
    ]

  return (

  

    <div>

{
        location.map(function(elem , idx){
            return <div key={idx} onClick={()=> { 
                props.setVehiclePanel(true) ;
                props.setPanelopen(false) ;
            }} className='flex border-2 p-3 rounded-xl  items-center justify-center gap-4 my-2 border-gray-100 active:border-black'>
            <h2 className='bg-[#eee] rounded-full flex items-center justify-center h-8 w-11'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
        </div>
        })
    }


       

    </div>
  )
}

export default LocationSearchPanel