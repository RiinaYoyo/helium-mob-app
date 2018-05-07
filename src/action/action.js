getArticle =(id , table="m4y1p_content" )=>{
    instance.get(`${table}/${id}`)
    .then((response)=>{
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
