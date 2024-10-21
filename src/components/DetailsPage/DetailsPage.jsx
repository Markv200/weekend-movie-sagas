import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DetailsPage.css';  

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetails = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
  }, [id, dispatch]);

  return (
    <div className="movie-details" data-testid="movieDetails">
      <h1>{movieDetails.title}</h1>
      <img src={movieDetails.poster} alt={movieDetails.title} />
      <p>{movieDetails.description}</p>
      <ul>
        {movieDetails.genres?.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <button onClick={() => history.push('/')} data-testid="toList">
        Back to Movie List
      </button>
    </div>
  );
};

export default DetailsPage;
