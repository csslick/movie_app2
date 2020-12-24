import Food from './Food'
import PropTypes from 'prop-types';

const foodLike = [
  {
    id: 1,
    name: "Apple",
    image: 'https://images.heb.com/is/image/HEBGrocery/000320625-1?$article%2D235%2Dsquare$',
    rate: 5,
  },
  {
    id: 2,
    name: "Banana",
    image: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
    rate: 3.9,
  },
  {
    id: 3,
    name: "Mango",
    image: 'https://thediplomat.com/wp-content/uploads/2016/04/sizes/td-story-s-2/thediplomat_2016-04-26_19-22-13.jpg',
    rate: 4,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
}

function App() {
  return (
    <>
      <h1>Favorite Foods</h1>
      {
        foodLike.map(function(food, i){
          return (
            <Food key={food.id} name={food.name} image={food.image} rate={food.rate} />
          )
        })
      }
    </>
  );
}

export default App;
