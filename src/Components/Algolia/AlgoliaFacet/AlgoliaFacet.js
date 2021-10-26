import { Highlight, connectRefinementList } from 'react-instantsearch-dom';
import splitbee from '@splitbee/web';


const RefinementList = ({ attribute, items, isFromSearch, refine, searchForItems, createURL, }) => {

    const refineList = (e, item) =>{
        console.log(attribute)
        e.preventDefault();
        console.log(item)
        refine(item.value);
        if(item.value){
            splitbee.track("filter", {
                type: item.value,
                filter: attribute
            })
        }
    }

    return(
    <ul>
      <li>
        <input
          type="search"
          onChange={event => searchForItems(event.currentTarget.value)}
        />
      </li>
      {items.map(item => (
        <li key={item.label}>
          <a
            href={createURL(item.value)}
            style={{ fontWeight: item.isRefined ? 'bold' : '' }}
            onClick={(e) => refineList(e, item)}
          >
            {isFromSearch ? (
              <Highlight attribute="label" hit={item} />
            ) : (
              item.label
            )}{' '}
            ({item.count})
          </a>
        </li>
      ))}
    </ul>
  )};
  

export const AlgoliaFacet = connectRefinementList(RefinementList);