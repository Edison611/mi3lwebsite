import React, { useState } from 'react';
import FilterImg from '../../images/FilterImg.svg';
import Kitten from '../../images/Kitten.png';
import Puppy from '../../images/Puppy.png';

const OnlineCourses = () => {
  const [petType, setPetType] = useState('');
  const [brand, setBrand] = useState('');

  const petTypes = ['Cat', 'Dog'];
  const brands = ['Royal Canin'];

  const renderIframe = () => {
    if (petType === 'dog' && brand === 'royal canin') {
      return (
        <iframe
          title="Mi3lschool's Royal Canin Dog Food"
          style={{ border: '0', width: '100%', height: '500px' }}
          src="https://www.zeffy.com/ticketing/7e71a458-dc66-4aa8-b8c8-2df66e400542"
          allowPaymentRequest
          allowTransparency="true"
        />
      );
    } else if (petType === 'cat' && brand === 'royal canin') {
      return (
        <iframe
          title="Mi3lschool's Royal Canin Cat Food"
          style={{ border: '0', width: '100%', height: '50rem' }}
          src="https://www.zeffy.com/ticketing/8ffea0a4-f1dc-4a4e-ae74-058e2ac5e52c"
          allowPaymentRequest
          allowTransparency="true"
        />
      );
    }
    return null;
  };

  const PetSelector = ({ type, image, alt }) => (
    <div 
      className={`w-64 h-64 border-2 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300
                  ${petType === type ? 'border-blue-500 shadow-lg' : 'border-gray-300'}
                  hover:border-blue-500 hover:shadow-lg`}
      onClick={() => setPetType(type)}
    >
      <img 
        src={image} 
        alt={alt} 
        className={`${type === 'cat' ? 'w-[14rem] h-[14rem]' : 'w-[10rem] h-[14rem]'} object-contain`}
      />
    </div>
  );

  return (
    <div className='flex flex-col items-center pt-12 px-4 sm:px-24'>
      <h1 className='text-black font-bold text-3xl'>Online Shop</h1>
      <p className='text-center mt-4'>
        We offer many Pet Products as well as VEX Drone parts found below: (Please give it a few seconds to load), Any Issues: Please email mi3lschool@gmail.com
      </p>
      <h1 className='font-bold text-3xl mt-12'>Select the Pet</h1>
      <div className='flex flex-col sm:flex-row w-full justify-center space-y-6 sm:space-y-0 sm:space-x-6 mt-12'>
        <PetSelector type="cat" image={Kitten} alt="kitten" />
        <PetSelector type="dog" image={Puppy} alt="puppy" />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 self-start mt-12 w-full sm:w-auto">
        <div className="flex items-center space-x-2">
          <h2 className="font-semibold">Filter</h2>
          <img className='w-4' src={FilterImg} alt='filter' />
        </div>
        <select 
          value={brand} 
          onChange={(e) => setBrand(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 w-full sm:w-auto"
        >
          <option value="">Select brand</option>
          {brands.map((b) => (
            <option key={b} value={b.toLowerCase()}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className='w-full mt-8'>
        {renderIframe()}
      </div>
    </div>
  );
};

export default OnlineCourses;