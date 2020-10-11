import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import CharacterList from './CharacterList';

import dummyData from './dummy-data';

import './styles.scss';
import endpoint from './endpoint';

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const fetchReducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      result: null,
      loading: true,
      error: null,
    };
  }
  if (action.type === 'RESPONSE_COMPLETE') {
    return {
      result: action.payload.response,
      loading: false,
      error: null,
    };
  }
  if (action.type === 'ERROR') {
    return {
      result: null,
      loading: false,
      error: action.payload.error,
    };
  }

  return state;
};

const fetchCharacters = (dispatch) =>{
  fetch(endpoint + '/characters')
    .then(response=>response.json())
    .then(response=>dispatch({type:'RESPONSE_COMPLETE', payload: {characters:response.characters}}))
}

const useFetch = (url) => {
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);

  // const [response, setResponse] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    dispatch({ type: 'LOADING' });

    const fetchUrl = async () => {
      try {
        const response = await fetchUrl(url);
        const data = await response.json();
        dispatch({ type: 'RESPONSE_COMPLETE', payload: { response: data } });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: { error } });
      }
    };

    fetchUrl();

    // fetch(endpoint + '/')
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setLoading(false);
    //     setResponse(response.characters);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     setError(error);
    //   });
  }, []);
  return [state.result, state.loading, state.error];
};

const Application = () => {
  const [state,dispatch] = useThunkReducer(reducer, initialState);
  const {characters} = state;

  useEffect(()=>{
    dispatch(()=>{

    })
  },[])

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          {loading ? <p>Loading</p> : <CharacterList characters={characters} />}
          {error && <p className="error">{error.message}</p>}
        </section>
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Application />
  </Router>,
  rootElement,
);
