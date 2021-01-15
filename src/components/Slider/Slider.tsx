// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
// // import 'swiper/swiper-bundle.css';
// // import './styles.css';


// import Slide1 from "../../images/bojack-4.jpg";

// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

// // import style from "./scss/index.scss";
// SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


//   const slides = [];
//   for (let i = 0; i < 5; i += 1) {
//     slides.push(
//       <SwiperSlide key={`slide-${i}`} tag="li">
//         <img
//           src={`https://picsum.photos/id/${i + 1}/1920/960`}
//           style={{ listStyle: 'none' }}
//           alt={`Slide ${i}`}
//         />
//       </SwiperSlide>
//     );
//   }

// const Slider: React.FC = () => (

//       <Swiper
//         id="main"
//         tag="section"
//         wrapperTag="ul"
//         navigation
//         pagination
//         spaceBetween={0}
//         slidesPerView={1}
//         onInit={(swiper) => console.log('Swiper initialized!', swiper)}
//         onSlideChange={(swiper) => {
//           console.log('Slide index changed to: ', swiper.activeIndex);
//         }}
//         onReachEnd={() => console.log('Swiper end reached')}
//       >
//         {slides}
//       </Swiper>
// );
// export default Slider;
