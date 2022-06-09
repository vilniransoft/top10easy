import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares';
import instantsearch from 'instantsearch.js';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import aa from 'search-insights';
import { userLoginState } from '../../../context/appState';


export default function AlgoliaInsights({ searchClient }) {
    const userAuth = useRecoilValue(userLoginState);

    useEffect(()=>{
        console.log('init ai middleware for ', userAuth.email)
        const insightsMiddleware = createInsightsMiddleware({
            insightsClient: aa,
          });
          aa('setUserToken', userAuth.email);
          const searchInstance = instantsearch({
            indexName: 'CP26C79INL',
            searchClient: searchClient,
          });
          searchInstance.use(insightsMiddleware);

    }, [userAuth, searchClient])

    return null
}