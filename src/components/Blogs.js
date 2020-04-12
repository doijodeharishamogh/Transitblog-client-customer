import React, { Component } from 'react'
import axios from 'axios'
import Addpost from './addpost'

export class Blogs extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0,20)
            })
        })
    }

    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div key = {post.id} className = 'post card hoverable'>
                        <div className = 'card-content'>
                            <span className = 'card-title'>{post.title}</span>
                            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                            <p className = 'flow-text'>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className = 'center'> No posts yet</div> 
        )
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col s9 ">
                        {postList}    
                    </div>
                    <div className="col s3 ">
                    <Addpost />
                    </div>
                </div>                    
            </div>
        )
    }
}

export default Blogs

