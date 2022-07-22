import React from 'react';
import CharacterList from './CharacterList';
import axios from 'axios';
import Search from './Search';

const CHARACTERAPI = 'http://gateway.marvel.com/v1/public/characters';
const APIKEY = '13cb2762d0c0245330c6d1dae0202eec';
const TS = 1;
const HASH = 'b5e4d86a78f3152d92d4b2b23e736b59';

function Character() {
  const [items, setItems] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        if (localStorage.getItem('favorites') === '[]' || !localStorage.getItem('favorites')) {
          localStorage.setItem('favorites', '[]')
          const result = await axios(`${CHARACTERAPI}?ts=${TS}&apikey=${APIKEY}&hash=${HASH}`)
          console.log(result.data.data)
          setItems(result.data.data.results)
          setLoading(false)
        } else {
          let favorite1 = JSON.parse(localStorage.getItem('favorites'))
          setItems(favorite1)
          setLoading(false)
        }

      } else {
        const result = await axios(`${CHARACTERAPI}?nameStartsWith=${query}&ts=1&apikey=${APIKEY}&hash=${HASH}`)
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setLoading(false)
      }
    }

    fetch()
  }, [query])


  return (
    <div className="container">
      <Search search={(q) => setQuery(q)} />
      <CharacterList items={items} loading={loading} />
    </div>
  );
}

export default Character;