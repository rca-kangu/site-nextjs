import React from 'react'
import axios from 'axios'
import parse from "html-react-parser";

export default class Site extends React.Component {
   static async getInitialProps () {
       const res = await axios.get('https://www.kangu.com.br/')
       return { site: res.data}
  
   }

   render() {
       const { site }  = this.props
       return (
        <div dangerouslySetInnerHTML={{ __html: site }} />
       )
       
   }

   
}