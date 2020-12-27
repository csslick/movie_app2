import { func } from "prop-types";

function Movie({id, title, year, summary, poster}) {
  return (
    <div className='card'>
      <h4>{title}</h4>
      <p>{year}</p>
      <img src={poster} alt={title} width="300" />
      <p>{summary}</p>
      <hr/>
    </div>
  )
}

export default Movie;