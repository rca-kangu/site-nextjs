
import axios from 'axios'


export default function Home(props) {
  console.log({props})
  return (
      <div dangerouslySetInnerHTML={{ __html: props.site }} />
  )
  
}

export async function getServerSideProps(context) {
  const res = await axios.get('https://www.kangu.com.br/')
  return {
     props: { site: res.data}
  }
}
