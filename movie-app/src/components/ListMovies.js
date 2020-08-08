import React from 'react'
import {Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

 function ListMovies({movies}) {
    return (
        <div className="listmovies">
         {movies.map(el=>    <div className="movie" key={el.id}>
      <Card style={{ width: '18rem' }}>

<Card.Img variant="top" src={el.image} />
<Card.Body>
  <Card.Title>{el.name}</Card.Title>
  <Card.Text>{el.description}</Card.Text>
  <StarRatingComponent value={el.rating} />
</Card.Body>
</Card>
      </div>)}   
        </div>
    )
}
export default ListMovies ;