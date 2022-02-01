import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentBusinessState } from '../context/appState';
import { useLocation  } from "react-router-dom";

const useBusiness = () => {
    const [business, setBusiness] = useRecoilState(currentBusinessState);

    useEffect(() => {
       // check business state
       // if (deepEqual(business !== JSON.parse(localStorage.business))) setBusiness(JSON.parse(localStorage.business));
    }, [])
}

const useScrollTop = () =>{
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0,0)
    }, [location]);
    
}
export { useBusiness, useScrollTop };