import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentBusinessState } from '../context/appState';

const useBusiness = () => {
    const [business, setBusiness] = useRecoilState(currentBusinessState);

    useEffect(() => {
       // check business state
       // if (deepEqual(business !== JSON.parse(localStorage.business))) setBusiness(JSON.parse(localStorage.business));
    }, [])
}

export { useBusiness };