import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

import BlogPreview from './BlogPreview'

import convo from '../../images/convoImage.png'
import kurppa from '../../images/kurppa.png'

const dummyData = [
  {
    title: 'asdasdadadsasdas',
    image: kurppa,
    content: ['sdakljfaölsdfjsdökljfklösadjöfklajlsdföjsaklfjölasdjfklajsdölf'],
    date: '2019',
    id: 'adfsafsdafsa'
  },
  {
    title: 'asdasdadadsasddfsaas',
    image: convo,
    content: ['sdakljfaölsdfjsdökljfklösadjöfklajlsdföjsaklfjölasdjfklajsdölf'],
    date: '2019',
    id: 'qpweqpr9232342'
  },
  {
    title: 'asdasdadadsasdassdf',
    content: ['sdakljfaölsdfjsdökljfklösadjöfklajlsdföjsaklfjölasdjfklajsdölf'],
    date: '2019',
    id: 'pqiurwepqouqrwo20103'
  },
]

const FrontpageMain = () => {
  return (
    <div>
      <Header as='h1'>Recent posts</Header>
      {
        dummyData.map(blog => <BlogPreview key={blog.title} blog={blog} />) 
      }
    </div>
      
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state
  }
}

export default connect(mapStateToProps, {})(FrontpageMain)
