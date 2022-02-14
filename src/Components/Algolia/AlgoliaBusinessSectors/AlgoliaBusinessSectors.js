import { Fragment, useEffect, useRef, createElement, useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { render } from 'react-dom';
import { autocomplete } from '@algolia/autocomplete-js';
import { useNavigate  } from "react-router";
import splitbee from '@splitbee/web';
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { currentBussinessCategory, globalSearchFocusState, localeState, searchQueryState } from "../../../context/appState";
import locales from "../../../locales/locales";
import CustomAutocomplete from '../Autocomplete/Autocomplete';
import algoliasearch from 'algoliasearch';
import { useLoseFocus } from '../../../hooks/state';

const qrySuggestClient = algoliasearch("CP26C79INL", "9d24d11b715d68508e486747a5538700");

export default function AlgoliaBusinessSectors(props) {
  const currentLocale = useRecoilValue(localeState);
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
        setSearchText(locales[currentLocale]?.utils?.search)
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
      setCategory(`${hit.title}s`)
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
          </InstantSearch>          
        
  }