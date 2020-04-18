import React, { Component } from 'react'
import axios from 'axios'
import Addpost from './addpost'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export class Blogs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_baseAPIURL + '/api/blogs').then((res) => {
      this.setState({
        posts: res.data,
      })
    })
  }

  delete(_id) {
    return fetch(process.env.REACT_APP_baseAPIURL + '/api/blogs/' + _id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${localStorage.getItem('token')}`
      },
    })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload(false)
        } else {
          console.log(res)
          const error = new Error(res.error)
          throw error
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  visit(_id) {
    this.history.pushState(null, 'comment')
  }

  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div key={post._id} className='post card hoverable'>
            <div className='card-content'>
              <span className='card-title'>{post.name}</span>
              <Link
                // to={`/comment/${post._id}`}
                className='btn'
                style={{ backgroundColor: 'red' }}
                to={{
                  pathname: `/comment/${post._id}`,
                  state: {
                    name: 'name',
                  },
                }}
              >
                View the Blog
              </Link>

              <button
                className='btn-floating halfway-fab waves-effect waves-light red'
                onClick={() => this.delete(post._id)}
              >
                <i className='material-icons'>delete</i>
              </button>
              <p className='flow-text'>{post.text}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center'> No posts yet</div>
    )
    return (
      <div>
        <br />
        <div className='row'>
          <div className='col s9 '>{postList}</div>
          <div className='col s3 '>
            <Addpost />
          </div>
        </div>
      </div>
    )
  }
}

export default Blogs
