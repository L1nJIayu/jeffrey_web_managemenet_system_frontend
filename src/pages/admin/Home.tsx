import { useParams } from 'react-router-dom'

const Home = () => {

  const params = useParams()

  return (
    <>
      <div>ID:{params.id}</div>
      <div>首页</div>
    </>
  )
}


export default Home