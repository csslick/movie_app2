import Food from './Food'

const foodLike = [
  {
    name: "Apple",
    image: 'https://images.heb.com/is/image/HEBGrocery/000320625-1?$article%2D235%2Dsquare$'
  },
  {
    name: "Banana",
    image: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg'
  },
  {
    name: "Mango",
    image: 'https://thediplomat.com/wp-content/uploads/2016/04/sizes/td-story-s-2/thediplomat_2016-04-26_19-22-13.jpg'
  }
];

function App() {
  return (
    <>
      <h1>Hello App2</h1>
      {
        foodLike.map(function(food){
          return (
            <Food fav={food.name} image={food.image} />
          )
        })
      }
    </>
  );
}

export default App;
