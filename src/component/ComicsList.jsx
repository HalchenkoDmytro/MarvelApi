import React from 'react'
import ComicsItem from './ComicsItem'
import CircularStatic from './Progress'

const ComicsList = ({ items, loading }) => {
  return loading ? <CircularStatic /> :
    <section className="contents">
      {
        items.map(item => (
          <ComicsItem key={item.id} item={item} />
        ))
      }
    </section>
}

export default ComicsList