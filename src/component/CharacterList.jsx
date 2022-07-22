import React from 'react'
import CharacterItem from './CharacterItem'
import CircularStatic from './Progress'

const CharacterList = ({ items, loading }) => {

  return loading ? <CircularStatic /> :
    <div className="contents">
      {
        items.map(item => (
          <CharacterItem key={item.id} item={item} />
        ))
      }
    </div>
}

export default CharacterList