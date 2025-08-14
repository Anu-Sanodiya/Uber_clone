import React from 'react'

const LocationSearchPanel = () => {
  return (
    <div>
      {/* this is just a  sample data */}
      <div className="flex items-center my-4 bg-[#eee] justify-start">
        <h2 className='bg-[#eee] h-4 w-10  mb-4 rounded-full '>
          <i className='ri-map-pin-fill w-2 h-2 align-center '></i>
        </h2>
        <h4 className='font-md'>24B Janki Nagar Kamla Nehru Girls Hostel Indore</h4>
      </div>
       <div className="flex items-center my-4 bg-[#eee] justify-start">
        <h2 className='bg-[#eee] h-4 w-10  mb-4 rounded-full '>
          <i className='ri-map-pin-fill w-2 h-2 align-center '></i>
        </h2>
        <h4 className='font-md'>24B Janki Nagar Kamla Nehru Girls Hostel Indore</h4>
      </div>
       <div className="flex items-center my-4 bg-[#eee] justify-start">
        <h2 className='bg-[#eee] h-4 w-10  mb-4 rounded-full '>
          <i className='ri-map-pin-fill w-2 h-2 align-center '></i>
        </h2>
        <h4 className='font-md'>24B Janki Nagar Kamla Nehru Girls Hostel Indore</h4>
      </div>
      <div className="fixed z-10 mb-0 bg-white m-4  ">
        <div className="flex flex-row items-center justify-between align-center border rounded-xl">
          <img src="https://tse4.mm.bing.net/th/id/OIP.JuQyh1GlBZrsq1sJis8WzQHaHk?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='h-10 w-10' />

          <div className="flex flex-col ">
            <h4>UberGo <span><i className='ri-user-3-fill'></i>4</span>
            </h4>
            <h5>2 mins away</h5>
            <p>Affordable,  compact rides </p>

          </div>
          <h2 className='text-2xl'>187.2</h2>
        </div>

         <div className="flex flex-row items-center justify-between align-center border rounded-xl">
          <img src="https://tse4.mm.bing.net/th/id/OIP.JuQyh1GlBZrsq1sJis8WzQHaHk?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='h-10 w-10' />

          <div className="flex flex-col">
            <h4>UberGo <span><i className='ri-user-3-fill'></i>4</span>
            </h4>
            <h5>2 mins away</h5>
            <p>Affordable,  compact rides </p>

          </div>
          <h2 className='text-2xl'>187.2</h2>
        </div>

         <div className="flex flex-row items-center justify-between align-center border rounded-xl">
          <img src="https://tse4.mm.bing.net/th/id/OIP.JuQyh1GlBZrsq1sJis8WzQHaHk?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='h-10 w-10' />

          <div className="flex flex-col">
            <h4>UberGo <span><i className='ri-user-3-fill'></i>4</span>
            </h4>
            <h5>2 mins away</h5>
            <p>Affordable,  compact rides </p>

          </div>
          <h2 className='text-2xl'>187.2</h2>
        </div>
      </div>
    </div>
  )
}

export default LocationSearchPanel

