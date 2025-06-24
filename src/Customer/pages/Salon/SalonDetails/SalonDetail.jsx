import React from 'react'


const SalonDetail = () => {
   
  return (
    <div className="space-y-5 mb-20">
    <section className="grid grid-cols-2  gap-3">
      <div className="col-span-2">
        <img
          className="w-full rounded-md h-[15rem] object-cover"
          src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-hair-salon-in-orange-and-black-paint-image_2691249.jpg"
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full  rounded-md h-[15rem] object-cover"
          src="https://st3.depositphotos.com/12039412/16353/i/450/depositphotos_163531582-stock-photo-woman-in-beauty-salon-getting.jpg"
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full  rounded-md h-[15rem] object-cover"
          src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg"
          alt=""
        />
      </div>
    </section>


      <div className="space-y-3">
        <h1 className="font-bold text-3xl"> Rashmi Bloom Beauty </h1>
        <p>
          Rosewood Lane, Kankarbagh, Patna
        </p>
        <p>
          <strong>Timing :</strong> 10:00 AM – 8:00 PM 
        </p>
      </div>
  
  </div>
  )
}

export default SalonDetail;