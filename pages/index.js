import React, { Fragment } from 'react';
import Card from '@app/components/Card';

const Index = () => (
  <Fragment>
    <div className="flex min-h-screen">
      <div className="w-1/5 bg-gray-800 relative">
        <div className="bg-gray-900 h-20 flex items-center justify-center">
          <h1 className="flex items-center justify-center text-white uppercase font-semibold tracking-wider fill-current">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.33 12.77A4 4 0 1 1 3 5.13V5a4 4 0 0 1 5.71-3.62 3.5 3.5 0 0 1 6.26 1.66 2.5 2.5 0 0 1 2 2.08 4 4 0 1 1-2.7 7.49A5.02 5.02 0 0 1 12 14.58V18l2 1v1H6v-1l2-1v-3l-2.67-2.23zM5 10l3 3v-3H5z"/>
            </svg>
            <span className="ml-2">Workcation</span>
          </h1>
        </div>
        <div className="relative">
          <div className="border-b-2 border-gray-900 py-8 px-4">
            <div className="flex">
              <p className="flex-auto px-4">
                <label className="block text-gray-600 font-semibold text-sm" htmlFor="bedrooms">Bedrooms</label>
                <input className="w-full mt-2 rounded-lg focus:outline-none focus:shadow-outline px-4 py-2 bg-gray-600 text-gray-100 placeholder-gray-200" type="text" id="bedrooms" placeholder="4"/>
              </p>
              <p className="flex-auto px-4">
                <label className="block text-gray-600 font-semibold text-sm" htmlFor="bathrooms">Bathrooms</label>
                <input className="w-full mt-2 rounded-lg focus:outline-none focus:shadow-outline px-4 py-2 bg-gray-600 text-gray-100 placeholder-gray-200" type="text" id="bathrooms" placeholder="2"/>
              </p>
            </div>
            <p className="flex-auto px-4 mt-4">
              <label className="block text-gray-600 font-semibold text-sm" htmlFor="bedrooms">Price range</label>
              <input className="w-full mt-2 rounded-lg focus:outline-none focus:shadow-outline px-4 py-2 bg-gray-600 text-gray-100 placeholder-gray-200" type="text" id="bedrooms" placeholder="250 – 500"/>
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 bg-gray-300">
        <div className="bg-gray-100 px-6 h-20 flex items-center justify-between border-b border-gray-400">
          <div>
            <form action="">
              <input className="w-64 bg-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:shadow-outline shadow-inner placeholder-gray-600" type="text" placeholder="Search by keywords..." />
            </form>
          </div>
          <div>
            <ul className="flex items-center">
              <li className="ml-10 font-semibold">
                <a className="focus:outline-none focus:shadow-outline" href="">List your property</a>
              </li>
              <li className="ml-10 font-semibold">
                <a className="focus:outline-none focus:shadow-outline" href="">Trips</a>
              </li>
              <li className="ml-10 font-semibold">
                <a className="flex items-center focus:outline-none focus:shadow-outline" href="">
                  <span>Messages</span>
                  <span className="bg-gray-800 text-white rounded-full px-2 py-1 text-xs ml-2">25</span>
                </a>
              </li>
              <li className="ml-10 font-semibold">
                <a className="focus:outline-none focus:shadow-outline" href="">Support</a>
              </li>
              <li className="ml-10 font-semibold">
                <a className="block focus:outline-none shadow rounded-full overflow-hidden focus:shadow-outline" href="">
                  <img className="w-10 h-10" src="https://www.trickscity.com/wp-content/uploads/2017/09/cute-profile-pics-for-whatsapp-images.png" alt="Profile picture"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="p-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xl font-semibold">Brisbane</h2>
                <p className="text-gray-700">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod</p>
              </div>
              <div>
                <a className="text-sm text-indigo-600" href="">View all</a>
              </div>
            </div>
            <div className="flex -mx-4 mt-4">
              <Card className="w-1/4 px-4" isNew image="https://cache.marriott.com/marriottassets/marriott/BNEWH/bnewh-wet-deck-3489-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*" meta="2 Beds – 4 Baths" title="Mariott Resort" description="Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores." cost={300} quantifier="night" />
              <Card className="w-1/4 px-4" isNew image="https://cdn-blog.queensland.com/wp-content/uploads/2016/11/family-resorts-qt-port-douglas-tropical-north-queensland.jpg" meta="2 Beds – 4 Baths" title="Mariott Resort" description="Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores." cost={300} quantifier="night" />
              <Card className="w-1/4 px-4" image="https://www.thehotelconversation.com.au/sites/default/files/styles/article-full/public/oaks_charlotte_towers_brisbane_.jpg" meta="2 Beds – 4 Baths" title="Mariott Resort" description="Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores." cost={300} quantifier="night" />
              <Card className="w-1/4 px-4" image="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Oceania/Australia/Brisbane/Beaches_Streets%20beach%20South%20Bank.jpg?imwidth=480" meta="2 Beds – 4 Baths" title="Mariott Resort" description="Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores." cost={300} quantifier="night" />
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xl font-semibold">Perth</h2>
                <p className="text-gray-700">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod</p>
              </div>
              <div>
                <a className="text-sm text-indigo-600" href="">View all</a>
              </div>
            </div>
            <div className="flex -mx-4 mt-4">
              <Card className="w-1/4 px-4" image="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Oceania/Australia/Brisbane/Beaches_Streets%20beach%20South%20Bank.jpg?imwidth=480" meta="2 Beds – 4 Baths" title="Mariott Resort" description="Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores." cost={300} quantifier="night" />
              <Card className="w-1/4 px-4" image="https://cache.marriott.com/marriottassets/marriott/BNEWH/bnewh-wet-deck-3489-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*" meta="2 Beds – 4 Baths" title="Mariott Resort" description="Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores." cost={300} quantifier="night" />
              <Card className="w-1/4 px-4" isNew image="https://www.thehotelconversation.com.au/sites/default/files/styles/article-full/public/oaks_charlotte_towers_brisbane_.jpg" meta="2 Beds – 4 Baths" title="Mariott Resort" description="Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores." cost={300} quantifier="night" />
              <Card className="w-1/4 px-4" image="https://cdn-blog.queensland.com/wp-content/uploads/2016/11/family-resorts-qt-port-douglas-tropical-north-queensland.jpg" meta="2 Beds – 4 Baths" title="Mariott Resort" description="Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores." cost={300} quantifier="night" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed bg-gray-900 p-5 left-0 bottom-0 w-1/5">
      <button className="bg-indigo-500 rounded-lg text-white font-semibold px-4 py-3 w-full text-lg">Update results</button>
    </div>
  </Fragment>
);

export default Index;
