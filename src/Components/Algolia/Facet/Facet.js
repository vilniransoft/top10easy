import { useEffect, useState } from 'react';
import { RefinementList } from 'react-instantsearch-dom';
export default function Facet(props){
    const [attribute, setAttribute] = useState('')
    useEffect(()=>{
        setAttribute(props.field);
    }, [])

    return <div className="refinement-container">
                <RefinementList attribute={attribute} />
            </div>
}