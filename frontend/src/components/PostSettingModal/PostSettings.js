import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchDeletePost, fetchPostData } from "../../store/posts";
import { fetchFindUser } from "../../store/profile";
import EditPostModal from "../EditPostModal";
import './PostSettings.css'

export default function PostSettings({ sessionUser, post, setShowModal, page }) {

  const dispatch = useDispatch();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const postUser = useSelector(state => state?.profile?.user);
  const updatedPost = useSelector(state => state?.newsfeed?.singlePost?.post);

  useEffect(() => {
    if (sessionUser?.id === post?.user_id) setCurrentUser(true);
    dispatch(fetchFindUser(post?.user_id));
    dispatch(fetchPostData(post?.id))

    console.log(updatedPost)
  }, [dispatch])

  const copy = (url) => {
    console.log(location.pathname)
  }
  const handleEdit = e => (postId) => {

  }
  const handleDelete = (postId) => {
    dispatch(fetchDeletePost(postId));
    window.location.reload(false);
  }

  let modalContent;
  if (currentUser) {
    modalContent = (
      <>
        <div id="post-settings-user">
          <button className='post-setting-tab delete' onClick={() => setConfirmDelete(true)}><b>Delete</b></button>
          <EditPostModal post={updatedPost} user={postUser} />
          <button className='post-setting-tab' onClick={() => copy(location)}>Copy Link</button>
          <button className='post-setting-tab' onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </>
    );
  } else {
    modalContent = (
      <>
        <div id="post-settings-no-user">
          <button className='post-setting-tab' onClick={() => copy(location)}>Copy Link</button>
          <button className='post-setting-tab' onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </>
    );
  }

  return (
    <>
      <section>
        {modalContent}
      </section>
      {confirmDelete && (
        <div className="confirm-delete">
          <div className='delete-pop-background'>
            <h3>Delete Post?</h3>
            <p>Are you sure you want to delete this post?</p>
            <button onClick={() => handleDelete(post.id)} className='delete'>Delete</button>
            <button onClick={() => setConfirmDelete(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  )
}
