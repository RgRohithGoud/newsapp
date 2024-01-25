import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import Spinner from './Spinner';
export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5d46f6c6901f43f387d0a19f42abebd9&page=1&pagesize=20"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }
    handleNextclick = async ()=>{
        if(Math.ceil(this.state.totalResults/20) > this.state.page){
            let url =  `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5d46f6c6901f43f387d0a19f42abebd9&page=${this.state.page + 1}&pagesize=20`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            console.log("next");
            this.setState()
            this.setState({
            page: this.state.page+1,
            articles: parsedData.articles,
            loading: false
            });
        }
    }
    handlePrevclick = async ()=>{
        let url =  `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5d46f6c6901f43f387d0a19f42abebd9&page=${this.state.page - 1}&pagesize=20`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        console.log("next");
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading: false
        });
        console.log("prev");
    }
  render() {
    return (
        <div className='container my-3'>
            <h1 className='container center'>Headlines</h1>
            {this.state.loading && <Spinner />}
            <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-md-4' key = {element.url}>
                    <Newscomponent title = {element.title ? element.title.slice(0,44):""} description = {element.description?element.description.slice(0,88):""} imageurl = {element.urlToImage?element.urlToImage:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} newsurl = {element.url}/>
                </div>
            })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled = {this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevclick}>&larr; Previous</button>
            <button disabled ={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-primary" onClick={this.handleNextclick}>Next 	&rarr;</button>
            </div>
        </div>
    )
  }
}
