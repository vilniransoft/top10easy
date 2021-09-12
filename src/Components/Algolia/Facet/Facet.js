import { RefinementList } from 'react-instantsearch-dom';
export default function Facet(){
    const attribute = 'business_city'
    return <RefinementList attribute={attribute} />

}