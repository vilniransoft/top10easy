import './AlgoliaCard.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../imgs/LogoTop10.jpg';
import { searchViewState, currentBusinessState, currentVideoModalState } from "../../../context/appState";
import { useRecoilState } from "recoil";
import Stars from '../../Utils/Stars/Stars';

export default function AlgoliaCard(props) {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const [data, setData] = useState({})
    const [img, setImg] = useState(logo)
    const [viewType, setViewType] = useRecoilState(searchViewState);
    const [videoPrev, setVideoPrev] = useRecoilState(currentVideoModalState)
    const [selectedBusiness, setSelectedBusiness] = useRecoilState(currentBusinessState);

    useEffect(()=>{
        const hitItem = document.querySelector('.ais-Hits-item')
        setData(props.hit)
        //props.hit?.wagtailimages_image?.file ?? 
        setImg(`${document.location.origin}${logo}`)
    }, [props])

    const updateState = () =>{
        setSelectedBusiness(data)
    }

    const goToMap =()=>{
        setViewType('map')
    }

    const displayVideo = () =>{
        setVideoPrev({open:true, link: props?.hit?.video_url})
    }

    return  <div className="max-w-sm lg:max-w-full lg:flex rounded-xl shadow-md hover:shadow-xl m-4">
    <div className="h-48 lg:h-auto lg:w-48 self-center flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
        <img className="h-48 w-full lg:w-48 object-cover" src={img} alt="Future Business"/>
        { props?.hit?.video_url ? <button className="absolute -m-40 sm:-mt-40 lg:-ml-20 cursor-pointer bg-white rounded-full shadow-md over:shadow-xl m-4" onClick={() => displayVideo()}>
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
        <Link data-splitbee-event="Business Link" data-splitbee-event-type={props.hit.slug} to={`../business/${props.hit.slug}`} onClick={()=>{updateState()}} className="text-gray-900 font-bold text-xl mb-2"> {props.hit?.title  ?? "Test Business"}</Link>
        <div className="text-sm text-gray-600 flex items-center">
        <Stars stars={props?.hit?.business_stars}/>
        </div>
        <p className="text-gray-700 text-base">{props?.hit?.business_description  ?? lorem}</p>
    </div>
    <div className="flex flex-col lg:flex-row items-center">
        <div className="px-2 p-3 sm:p-2 w-full lg:w-48">
            <button className="bg-gray-200 w-full hover:bg-gray-400 font-bold py-2 px-4 rounded text-black">
                <span className="text-black">{props?.hit?.business_phone ?? "555-555-9969"}</span>
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
            <button className="flex w-full bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded items-center" onClick={()=>goToMap()}>
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
  }
  AlgoliaCard.propTypes = {
    hit: PropTypes.object.isRequired,
  };