import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
  state = {
    posts: []
  }

  getPosts = async () => {
    // Response
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // Setteando el estado
    this.setState({
      posts: response.data
    })
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        {posts.length === 0 && <p>Loading...</p>}
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}
