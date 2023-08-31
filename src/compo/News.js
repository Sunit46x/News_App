import React, { Component } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps ={
        country:'in',
        category:"genral"
    }
    static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
    
}
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

       
    }
    handlepreclick = async () => {
        console.log("previous button");
       
        let url = `https://newsapi.org/v2/ top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb029a6149b74d03bc5983a791921b09&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);

        this.setState({
            articles: parseddata.articles,
            page: this.state.page - 1
        })
       
    }
    handlenextclick = async () => {
        console.log("next button");
       
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb029a6149b74d03bc5983a791921b09&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);

        this.setState({
            articles: parseddata.articles,
            page: this.state.page + 1
        })
    }

    async componentDidMount() {
        console.log("render");
        let url = "https://newsapi.org/v2/top-headlines?country={this.props.country}&category=${this.props.category&apiKey=bb029a6149b74d03bc5983a791921b09";
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({ articles: parseddata.articles })
    }


    render() {
        return (
            <>
                <div className='container my-3'>
                    <h1 className='text-center' style={{margin:'35px 0px'}}> News-Hub Top Headlines</h1>
                    <div className='row'>
                        {this.state.articles.map((Element) => (
                            <div className='col-md-4' key={Element.url}>
                                <Newsitem title={Element.title?.slice(0,45)} description={Element.description?.slice(0,100)} imageurl={Element.urlToImage} newsurl={Element.url} />
                            </div>
                        ))}
                    </div>

                </div>
                <div className='container d-flex justify-content-between '>
                    <button  type="button" onClick={this.handlepreclick} class="btn btn-dark my-3 "> &larr; Previous</button>
                    <button type="button" class="btn btn-dark my-3 " onClick={this.handlenextclick}>Next &rarr;</button>
                </div>
            </>
        );
    }
}

export default News;
