import  { useEffect , useState} from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
            fetch('https://api.github.com/users/VINODvoid') 
            .then((res)=>res.json())
            .then((date)=>console.log(date))
            setData(data)
        },[])
  return (
    <div className=' text-center m-4 bg-gray-600 text-white text-3xl '>
        Github Followers : {data.followers}
    <img 
    className=' text-center m-4 bg-gray-600 text-white text-3xl'
    src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github 
//FIXME   : Display the data fetched from Github API in the browser;


