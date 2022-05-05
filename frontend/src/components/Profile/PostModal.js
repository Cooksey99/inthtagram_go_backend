import { useHistory, Link, useParams } from 'react-router-dom';
import './PostModal.css';
import PostSettingModal from '../PostSettingModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostData } from '../../store/posts';
import SingleComment from '../CommentSection/SingleComment';
import CommentForm from '../CommentSection/CommentForm';

export default function PostModal({ sessionUser, user, post }) { // removed user

    // const { postId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    // const sessionUser = useSelector(state => state?.session?.user);
    // // const commentsObj = useSelector(state => state?.newsfeed?.post);

    const updatedUser = useSelector(state => state?.newsfeed?.singlePost?.user);
    const updatedPost = useSelector(state => state?.newsfeed?.singlePost?.post);
    const commentsObj = useSelector(state => state?.newsfeed?.singlePost?.comments);
    // const user = useSelector(state => state?.newsfeed?.singlePost);

    useEffect(async () => {
        await dispatch(fetchPostData(post?.id));
        // console.log(post);
    }, [dispatch])

    return (
        <>
            <section id='post-modal'>
                <div id="post-modal-left">
                    <img src={post?.image} alt='image' />
                </div>
                <div id="post-modal-right">
                    <div id='post-modal-top-bar'>
                        <div className='post-modal-profile-bar'>
                            <img onClick={() => history.push(`/profile/${user.id}`)}
                                src={user?.image ? user?.image : 'https://register.pravasikerala.org/public/images/avatar5.png'} alt='profile image' />
                            <Link to={`/profile/${user?.id}`}>{user?.username}</Link>
                        </div>
                        <div className='dot-menu'>
                            <PostSettingModal post={post} />
                        </div>
                    </div>
                    <div className='comment-section'>
                        <div className='single-comment'>
                            <img className='profile-img' src={user?.image ? user?.image : 'https://register.pravasikerala.org/public/images/avatar5.png'} alt='profile image' />
                            <p><b>{user?.username} </b>{updatedPost?.caption}</p>
                        </div>
                        {commentsObj?.length > 0 && commentsObj.map(comment => (
                            <div key={comment?.id}>
                                <SingleComment comment={comment.comment} user={comment.user} sessionUser={sessionUser} postId={post.id} />
                            </div>
                        ))}
                    </div>
                    {/* <div className='comment-post-section'> */}
                    <CommentForm user={sessionUser} post={post} />
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}
