import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from "../../components/posts/all-post";

import { getAllPosts } from '../../lib/posts-util';


function AllPostsPage(props) {
    return <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name='description' content="A list of all programming tutorials" />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
     
}


export function getStaticProps() {

    const allposts = getAllPosts();

    return {
        props: {
            posts: allposts
        }
    }
}

export default AllPostsPage;