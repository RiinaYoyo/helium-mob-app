import axios from 'axios'

getArticle =(id , table="m4y1p_content" , apiUrl )=>{
  axios.get(`${apiUrl}/${table}/${id}`)
  .then(function (response) {
    console.log(response);
    this.setState({
      dataArticle: response.data,
      introtext :response.data.introtext
    })
  })
  .catch(function (error) {
    console.log(error);
  });
}



  //FILTER HTML TAGS IN STRINGS
  filterHtmlTag = (str)=>{
    if ((str===null) || (str===''))
    {
    return false;
    }
    else
    {
    str = str.toString();
    str = str.replace(/<[^>]*>/g, '');
    };
  }
