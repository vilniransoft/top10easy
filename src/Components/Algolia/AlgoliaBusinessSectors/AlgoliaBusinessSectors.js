import { useEffect, useRef, useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { useNavigate  } from "react-router";
import splitbee from '@splitbee/web';
import { useRecoilValue, useRecoilState } from "recoil";
import { currentBussinessCategory, globalSearchFocusState, localeState, searchQueryState } from "../../../context/appState";
import locales from "../../../locales/locales";
import CustomAutocomplete from '../Autocomplete/Autocomplete';
import algoliasearch from 'algoliasearch';
import { useLoseFocus } from '../../../hooks/state';
import { ToggleRefinement } from 'react-instantsearch-dom';

const qrySuggestClient = algoliasearch("CP26C79INL", "31c8c44b6cafedf9325e9c1748b215dc");

export default function AlgoliaBusinessSectors(props) {
  const currentLocale = useRecoilValue(localeState);
  const [localeText, setLocaleText] = useState(locales[currentLocale]?.value);
  const [category, setCategory] = useRecoilState(currentBussinessCategory);
  const [searchText, setSearchText] = useState(locales[currentLocale]?.utils?.search);
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [qryTerm, setQryTerm] = useState('');
  const [placeholder, setPlaceholder] = useState(locales[currentLocale]?.utils?.placeholder)
  const navigate = useNavigate();
  const elmRef = useRef(null);
  const [hasFocus, setHasFocus] = useRecoilState(globalSearchFocusState)
  useLoseFocus(elmRef)
  
    useEffect(() => {
      setLocaleText(locales[currentLocale]?.value)
    }, [currentLocale])
    useEffect(() => {
      (qryTerm?.trim().length> 1) ? setShowSuggestions(true) : setShowSuggestions(false)
      
  }, [qryTerm])

    const handleQueryChange = (event) =>{
        props.onchange(event.target.value);
        
    }
    const qryChange = (qry) => {
      setQryTerm(qry)
    }
    const dropSelect = (hit) => {
      setCategory(`${hit.title}`)
      navigate(`/search?q=${hit.title}`) 
      setHasFocus(false)  
    }
    const handleSearch = (qry) => {
    }
    const handleFocus = () =>{
      setHasFocus(true)
    }

    return <InstantSearch searchClient={qrySuggestClient} indexName="BusinessSectorPage">
            <CustomAutocomplete elmRef={elmRef} hasFocus={hasFocus} handleFocus={handleFocus} placeholder={placeholder} btnText={searchText?.button} showSuggestions={showSuggestions} handleSearch={handleSearch} qryChange={qryChange} dropSelect={dropSelect}/>
            <div className="hidden">
              <ToggleRefinement attribute="_locale" label={localeText} value={localeText} defaultRefinement={localeText}/>
            </div>
          </InstantSearch>          
        
  }