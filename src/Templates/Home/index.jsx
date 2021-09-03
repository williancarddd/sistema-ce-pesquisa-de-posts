import './Home.css';
import React from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { StatusLoad } from '../../components/StatusLoad';
import { ButtonPagination } from '../../components/ButtonPagination';

export default class Home extends React.Component {
  constructor(...props) {
    super(props)
    this.stockCount = 2
    this.state = {
      loading: true,
      posts:[],
      pagination_counter: this.stockCount,
      pageLimit: false
    }
  }
 
  componentDidMount() {
   this.loadedPosts()
  }
 
  loadedPosts = async () => {
    const loadedPosts = await loadPosts()
    this.setState(loadedPosts)
  }
  handlePage(){
    const {pagination_counter, posts} = this.state
    if((pagination_counter + this.stockCount ) > posts.length){
      this.setState({pageLimit: true})
    } else {
      this.setState({pagination_counter: pagination_counter + this.stockCount})
    }
  }
  render() {
    const {posts, loading, pagination_counter, pageLimit} = this.state
    if(loading){
      return (
        <StatusLoad/>
      )
    } else {
      return (
        <section className='container'>
          <Posts data={posts.slice(0,pagination_counter)} />

          <ButtonPagination text='More items' onclick={() => this.handlePage()} disable={pageLimit} />
        </section>
      );
  }
  }
}


