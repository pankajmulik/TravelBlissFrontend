import React from 'react';
import './partners.css';

const logos = [
  ' https://www.thomascook.in/images/logo.jpg' ,
  'data:image/png;base64,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',
  ' https://24x7travels.com/wp-content/uploads/2023/05/cropped-638061122330933585_temp-1.jpeg' ,
  ' https://www.thomascook.in/images/logo.jpg' ,
  'data:image/png;base64,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',
  ' https://24x7travels.com/wp-content/uploads/2023/05/cropped-638061122330933585_temp-1.jpeg' ,
];

const Partners = () => {
  return (
    <div className="bg-teal-100 py-12" style={{ backgroundImage: 'url( https://img.freepik.com/free-photo/partnership-handshake-innovation-corporate-business-concept_53876-104048.jpg)' , backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="mb-12 font-roboto font-bold text-neutral-900 text-5xl mt-0 text-center" style={{ textShadow: '2px 2px 5px rgba(191, 219, 254, 0.5)' }}>OUR PARTNERS</div>


    <div className="overflow-hidden whitespace-nowrap relative">
      <div className="inline-block animate-marquee">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="inline-block mx-8 bg-white p-4 rounded-lg shadow-lg border-2 border-black"
          >
            <img 
              src={logo} 
              alt={`Logo ${index + 1}`} 
              className="w-36 h-auto transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div 
            key={index + logos.length} 
            className="inline-block mx-8 bg-white p-4 rounded-lg shadow-lg border-2 border-black"
          >
            <img 
              src={logo} 
              alt={`Logo ${index + 1}`} 
              className="w-36 h-auto transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Partners;


// import React from 'react'
// import './partners.css'

// const logos = [
//     'https://www.thomascook.in/images/logo.jpg',
//     'https://www.travelperk.com/wp-content/themes/travelperk/static/img/travelperk-logo-light.svg',
//     'https://24x7travels.com/wp-content/uploads/2023/05/cropped-638061122330933585_temp-1.jpeg',
//     'https://www.thomascook.in/images/logo.jpg',
//     'https://www.travelperk.com/wp-content/themes/travelperk/static/img/travelperk-logo-light.svg',
//     'https://24x7travels.com/wp-content/uploads/2023/05/cropped-638061122330933585_temp-1.jpeg',
//   ];

// const Partners = () => {
//   return (
//     <>
        
//     <div className="overflow-hidden whitespace-nowrap">
//             <div className="inline-block animate-marquee">
//                 {logos.map((logo, index) => (
//                 <img key={index} src={logo} alt={`Logo ${index + 1}`} className="inline-block mx-8 w-32 h-auto" />
//                 ))}
//                 {logos.map((logo, index) => (
//                 <img key={index + logos.length} src={logo} alt={`Logo ${index + 1}`} className="inline-block mx-4 w-32 h-auto" />
//                 ))}
//             </div>
//     </div>

//     </>
//   )
// }

// export default Partners