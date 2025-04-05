'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
// import './style.css';
// import Style from './style.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/bundle';
import SliderImg from '../public/img/photo-1504751999194-ef177d837cfe.avif';
import Link from 'next/link';
import SwiperSlider from './Swiperslider';

const Mainpage = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('https://alkye-test-422384984803.us-central1.run.app/myapp/list/', {
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      }
    }

    getData();
  }, []);

  return (
    <div className="p-4">
      <div className='titleBar'>
      <h1 className='brand-name'>alkye</h1>
        <h1 className='brand'>alkye</h1>
        <p>The easiest test you will ever do</p>
      </div>


      {error && <p className="text-red-500">{error}</p>}

      <div className="container-fluid">
        <div className="row flex-nowrap">

          

          {data.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card m-2 shadow-sm">
                
                <div className="card-body">
                   <Link href="/Innerpage" className="text-gray-700 hover:text-blue-500">
                          <h5 className="card-title">Item #{index + 1}</h5>
                  <pre className="text-sm text-muted ">
                    {JSON.stringify(item, null, 2)}
                  </pre>
                  </Link>
                
                </div>
              </div>
            </div>
          ))}
        </div>
       
        <div className="slider-container">
          <SwiperSlider/>
  {[1, 2, 3, 4, 5].map((num) => (
    <div className="slide" key={num}>
      <Image
        src={SliderImg}
        alt={`Slide ${num}`}
        width={300}
        height={150}
      />
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Mainpage;
