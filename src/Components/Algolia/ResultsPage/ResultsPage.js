import { Hits, Pagination } from 'react-instantsearch-dom';
import AlgoliaCard from '../AlgoliaCard/AlgoliaCard';
import NoResultsFound from '../NoResultsFound/NoResultsFound';
import { connectStateResults  } from 'react-instantsearch-dom';

export default function ResultsPage({ props, searchResults  }){
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const CustomStateResults = connectStateResults(NoResultsFound);

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
  </div>
}

