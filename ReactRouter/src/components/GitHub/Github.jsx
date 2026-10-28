import { useLoaderData } from "react-router";

function Github() {

    const data = useLoaderData()


    // const [data, setData] = useState([])
    // useEffect(() =>{
    //  fetch('https://api.github.com/users/sparsh-goyal01')
    //  .then(response => response.json())
    //  .then(data =>{
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

  return (
    
      <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
        GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="Git image"/>
      </div>
  );
}

export default Github;
