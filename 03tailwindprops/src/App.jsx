import './App.css';
import Card from './components/Card';

function App() {
  // let myobj = {
  //   name:"Komal",
  //   age:21
  // }
  // let myArr = [1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl m-4'>Tailwind Test</h1>
      <Card username ='Komal' btnText ="click me"/>      
      <Card />      
    </>
  );
}

export default App;
