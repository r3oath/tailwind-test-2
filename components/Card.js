import React from 'react';

const Card = ({ className, image, meta, title, description, cost, quantifier, isNew }) => (
  <div className={className}>
    <div className="relative pb-80%">
      <img className="absolute rounded-lg top-0 h-full w-full object-cover object-center shadow-md" src={image} alt={title} />
    </div>
    <div className="relative px-3">
      <div className="bg-white rounded-lg -mt-12 p-5 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="block text-xs text-gray-600 uppercase tracking-wide">{meta}</span>
          {isNew && (<span className="bg-green-500 px-2 uppercase text-xs font-semibold rounded-full shadow-xl text-white">Plus</span>)}
        </div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="mt-3 text-sm leading-snug">{description}</p>
        <span className="flex items-center mt-3">
          <span className="text-green-500 font-bold">${cost}</span>
          <span className="ml-1 text-gray-600 text-sm">AUD / {quantifier}</span>
        </span>
      </div>
    </div>
  </div>
);

export default Card;
