import React from 'react'
import uuid from 'react-uuid'
// import Banner from 'react-js-banner'


class SearchResults extends React.Component {
  componentDidMount = () => {
    this.props.fetchPrevNominations()
  }

  createGenericPoster = title => {
    let splitTitle = title.Title.split(' ')
    let titleFirst = splitTitle[0].split('')[0].toUpperCase()
    return (
      <div className='generic-poster'>
        {titleFirst}
      </div>
    )
  }

  rollNominated = () => {
    return (
      <div className='nominated-titles'>
        {this.props.nominatedTitles.length === 0 ? <h2>No Titles Nominated Yet</h2> : <h2>Nominated Titles</h2>}
        {this.props.nominatedTitles.map(title => {
          return (
            <div key={uuid()} className='movie'>
              <div className='movie-info' key={uuid()}>
                <p>{title.title}</p>
                <p>{title.year}</p>
                <p>Nominations: {title.timesNominated}</p>
              </div>
              <img src={title.poster} alt={`poster for ${title.title}`} className='poster'/>
              <button onClick={() => this.props.nominateTitle(title)}>Remove</button>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className='search-results'>
        {this.props.titles === "" ? this.rollNominated() : this.props.titles.map(title => {
          return (
            <div className='movie' key={uuid()}>
              <div className='movie-info'>
                  <p key={uuid()}>
                    {title.Title}
                  </p>
                  <p key={uuid()}>
                    {title.Year}
                  </p>
                </div>
              {title.Poster === "N/A" ? this.createGenericPoster(title) : <img alt={`poster for ${title.Title}`} src={title.Poster} className='poster'/>}

              <button onClick={() => this.props.nominateTitle(title)}>Nominate this title</button>
            </div>
          )}  
        )}
      </div>
    )
  }
}

export default SearchResults