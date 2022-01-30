import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentBusinessState } from '../context/appState';
//import { useNavigate  } from "react-router-dom";

const useBusiness = () => {
    const [business, setBusiness] = useRecoilState(currentBusinessState);

    useEffect(() => {
       // check business state
       // if (deepEqual(business !== JSON.parse(localStorage.business))) setBusiness(JSON.parse(localStorage.business));
    }, [])
}

const useScrollTop = () =>{
    //let location = useNavigate ();
    const scrollTop = () =>{
        window.document.scrollTop = 0;
    }

    useEffect(() =>{
        console.log('location change')
    }, [document.location.pathname])
}
export { useBusiness, useScrollTop };