import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Stars from '../Components/Utils/Stars/Stars';

const Hit = ({ hit }) => {
  return (
    <div className="max-w-sm lg:max-w-full lg:flex rounded-xl shadow-md hover:shadow-xl mx-auto my-4 lg:m-4 overflow-hidden">
      <div className="h-48 lg:h-auto lg:w-48 self-center flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden relative" >
        <img className="h-48 w-full lg:w-48 object-cover" src={hit?._image_url} alt="Future Business" />
        {hit?.video_url ? <button className="absolute top-0 left-0 cursor-pointer bg-white rounded-full shadow-md over:shadow-xl m-4"
        // onClick={() => {
        //     aa('convertedObjectIDsAfterSearch', {
        //         userToken: userAuth.email.split('@')[0],
        //         index: 'BusinessesPage',
        //         eventName: 'Call Business from Search',
        //         queryID: hit.__queryID,
        //         objectIDs: [hit.objectID],
        //     });
        //     displayVideo()
        // }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button> : null}
      </div>
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
          </p>
          <Link data-splitbee-event="Business Link" data-splitbee-event-type={hit.slug}
            to={`/business/${hit.slug}`}
            // onClick={() => {
            //   aa('clickedObjectIDsAfterSearch', {
            //     userToken: userAuth.email.split('@')[0],
            //     eventName: 'Business Clicked',
            //     index: 'BusinessesPage',
            //     queryID: hit.__queryID,
            //     objectIDs: [hit.objectID],
            //     positions: [hit.__position],
            //   })
            //   updateState();
            // }}
            className="text-gray-900 font-bold text-xl mb-2">
            {hit?.title ?? "Test Business"}
          </Link>
          <div className="text-sm text-gray-600 flex items-center">
            <Stars totalStars={hit?.business_stars} />
          </div>
          <p className="text-gray-700 text-base">{hit?.business_description ?? ""}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="px-2 p-3 sm:p-2 w-full lg:w-48">
            <button className="bg-gray-200 w-full hover:bg-gray-400 font-bold py-2 px-4 rounded text-black">
              <a className="text-black"
                // onClick={() =>
                //   aa('convertedObjectIDsAfterSearch', {
                //     userToken: userAuth.email.split('@')[0],
                //     index: 'BusinessesPage',
                //     eventName: 'Call Business from Search',
                //     queryID: hit.__queryID,
                //     objectIDs: [hit.objectID],
                //   })
                // }
                href={`tel:${hit?.business_phone ?? '#'}`}>{hit?.business_phone ?? 'Not Available'}</a>
            </button>
          </div>
          <div className="px-2 p-2 sm:p-2 w-full lg:w-48">
            <button className="flex w-full bg-green-400 hover:bg-green-500 font-bold py-2 px-4 rounded text-white items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="text-white pl-4">Message</span>
            </button>
          </div>
          <div className="px-2 p-2 sm:p-2 w-full lg:w-48">
            <button className="flex w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded items-center"
            // onClick={() => goToMap()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-white pl-4">Show on map</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Hit.propTypes = {
  hit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    business_description: PropTypes.string,
    _city: PropTypes.string,
    _locale: PropTypes.string,
    _category: PropTypes.arrayOf(PropTypes.string),
    business_price_range: PropTypes.string,
    business_stars: PropTypes.number,
  }).isRequired,
};

export default Hit;