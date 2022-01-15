import { useEffect, useState } from 'react';
import { connectStateResults, Hits, ToggleRefinement } from 'react-instantsearch-dom';
import { useRecoilValue } from 'recoil';
import { localeState } from '../../../context/appState';
import locales from '../../../locales/locales';
import AlgoliaCard from '../AlgoliaCard/AlgoliaCard';
import NoResultsFound from '../NoResultsFound/NoResultsFound';

export default function ResultsPage({ props, searchResults  }){
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const CustomStateResults = connectStateResults(NoResultsFound);
  const currentLocale = useRecoilValue(localeState)
  const [localeText, setLocaleText] = useState(locales[currentLocale]?.value)

  useEffect(() => {
    setLocaleText(locales[currentLocale]?.value)
  }, [currentLocale])

  return <div className="container">
      <div className="search-panel">
        
        <div className="search-panel__results">
          {
            (hasResults) ? <Hits hitComponent={AlgoliaCard} /> : <CustomStateResults />
          }
          <div className="pagination">
          </div>
        </div>
      </div>
      <div className="hidden h-0">
        <ToggleRefinement attribute="_locale" label={localeText} value={localeText} defaultRefinement={localeText}/>
      </div>
  </div>
}