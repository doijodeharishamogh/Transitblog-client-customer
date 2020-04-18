import React, { Component } from 'react'
import axios from 'axios'
import Addcomment from './addcomment'
import { useParams } from 'react-router-dom'

export class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: undefined,
      comments: [],
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.setState((state) => {
      return { id: id }
    })
    axios
      .get(process.env.REACT_APP_baseAPIURL + `/api/comments/${id}`)
      .then((res) => {
        this.setState({
          comments: res.data,
        })
      })
  }

  delete(_id) {
    return fetch(process.env.REACT_APP_baseAPIURL + '/api/comments/' + _id, {
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

  render() {
    const { comments } = this.state
    const commentList = comments.length ? (
      comments.map((comment) => {
        return (
          <div key={comment._id} className='post card hoverable'>
            <div className='card-content'>
              <span className='card-title'>{comment.name}</span>
              <button
                className='btn-floating halfway-fab waves-effect waves-light red'
                onClick={() => this.delete(comment._id)}
              >
                <i className='material-icons'>delete</i>
              </button>
              <p className='flow-text'>{comment.text}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center'> No comments yet</div>
    )
    return (
      <div>
        {/* <div className='card-content'>
          <span className='card-title'>{this.state.name}</span>
          <p className='flow-text'>{this.state.text}</p>
        </div> */}
        <br />
        <div className='row'>
          <div className='col s9 '>{commentList}</div>
          <div className='col s3 '>
            <Addcomment id={this.state.id} />
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
