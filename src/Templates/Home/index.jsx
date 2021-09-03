import './Home.css';
import React from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { StatusLoad } from '../../components/StatusLoad';
import { ButtonPagination } from '../../components/ButtonPagination';
import { InputSearch } from '../../components/InputSearch';

export default class Home extends React.Component {
  constructor(...props) {
    super(props)
    this.stockCount = 2
    this.state = {
      loading: true,
      posts:[],
      pagination_counter: this.stockCount,
      pageLimit: false,
      searchValue: ''
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
  handleChange = (event) => {
    const {value} = event.target
    console.log(1)
    this.setState({searchValue: value})
  }
  handleSearch(posts, searchValue){
   const result_search =  posts.filter((ele) => {
      return ele.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    return result_search
  }
  render() {
    const {posts, loading, pagination_counter, pageLimit, searchValue} = this.state
    const res_search = this.handleSearch(posts, searchValue)
    if(loading){
      return (
        <StatusLoad/>
      )
    } else {
      return (
        <>
          <section className='container'>
            <br/>
            <InputSearch
            value={searchValue}
            handleChange={this.handleChange}
            />
            <br/>
            <br/>
            {
              !!searchValue ? 
              (res_search.length === 0 ? 'not found ': <Posts data={res_search}/>)
              :
              (<>
                <Posts data={posts.slice(0,pagination_counter)} />
                <ButtonPagination text='More items' onclick={() => this.handlePage()} disable={pageLimit} />
              </>
              )
            }
          </section>
        </>
      );
  }
  }
}


