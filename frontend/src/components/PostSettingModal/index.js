import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import PostSettings from "./PostSettings";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function PostSettingModal({ post, setPostCaption, page }) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state?.session?.user);
    const postUser = useSelector(state => state?.profile?.user);

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="post-setting-icon"
                onClick={() => setShowModal(true)}>
                <MoreHorizIcon />
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostSettings sessionUser={sessionUser} post={post} setShowModal={setShowModal} setPostCaption={setPostCaption} page={page} />
                </Modal>
            )}
        </>
    )
}
