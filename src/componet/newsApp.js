import React from "react";
import CountryList from "./countryList";
import NewsList from "./newsList";
import "../App.css";
class NewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?source=google-news&country=in&apiKey=efc6144bb0074234a8da09e3dbc9603d&pagesize=20"
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        this.setState({ news: jsonResponse.articles });
      });
  }

  fetchNewData = (country) => {
    fetch(
      `https://newsapi.org/v2/top-headlines?source=google-news&country=${country}&apiKey=efc6144bb0074234a8da09e3dbc9603d&pagesize=20`
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        this.setState({ news: jsonResponse.articles });
      });
  };

  handlePrevClick = ()=>{

  }
  handleNextClick = ()=>{

  }

  render() {
    return (
      <div className="container d-flex justify-content-between">
        <CountryList fetchNewData={this.fetchNewData} />
        <NewsList news={this.state.news} />
        <button type="button" class="btn" onClick={this.handlePrevClick}>Previous</button>
        <button type="button" class="btn" onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default NewsApp;