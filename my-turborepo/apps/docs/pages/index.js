import axios from 'axios'

export async function getServerSideProps() {
  const res = await axios.get('https://www.kangu.com.br/')
  return {
     props: { site: res.data }
  }
}

export default function Home(props) {
  return (
      <div dangerouslySetInnerHTML={{ __html: props.site }} />
  )
  
}