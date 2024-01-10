import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../features/posts/postSlice";
import { API_URL } from "../config/api_url";

const SinglePostScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { post, status } = useSelector(state => state.Post);

    useEffect(() => {
        dispatch(getPost(id)).then(action => {
            console.log(action);
        })
    }, [])

    console.log(post, status);

    return (
        status === 'LOADING' ? <h1>Loading...</h1> : (
            <div>
                <div className="feature_section">
                    <div className="post_feature">
                        <div className="carousel_overlay"></div>
                        <img src={`${API_URL}/${post?.featured_image?.path}`} alt="" />

                        <div className="post_feature_content_container">
                            <div className="post_feature_content">
                                <h1 className="display-4 fw-normal">{post?.title}</h1>
                                <h5 className="mb-4">{post?.subtitle}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )

}

export default SinglePostScreen;