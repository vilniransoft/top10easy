import { Hits, Pagination } from 'react-instantsearch-dom';
import AlgoliaCard from '../AlgoliaCard/AlgoliaCard';

export default function ResultsPage(){
    
    return <div className="container">
      <div className="search-panel">
        <div className="search-panel__results">
         
          <Hits hitComponent={AlgoliaCard} />

          <div className="pagination">
           
          </div>
        </div>
      </div>
  </div>
}

