import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../features/posts/postSlice";
import { API_URL } from "../config/api_url";
import { Carousel } from "react-responsive-carousel";

const SinglePostScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { post, status } = useSelector(state => state.Post);

    useEffect(() => {
        dispatch(getPost(id))
    }, [])

    console.log(post, status);

    return (
        status === 'LOADING' ? <h1>Loading...</h1> : (
            <div>
                <div className="feature_section">
                    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={7000} showStatus={false} swipeable={false}>
                            {post.status === 'published' && (
                                <div className="carousel_container">
                                    <div className="carousel_overlay"></div>
                                    <img src={`${API_URL}/${post.featured_image.path}`} alt={post.featured_image.alt} />

                                    <div className="carousel_content_container">
                                        <div className="carousel_content">
                                            <h1 className="display-4 fw-normal">{post.title}</h1>
                                            <h5 className="mb-4">{post.subtitle}</h5>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </Carousel>
                </div>
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        )
    )

}

export default SinglePostScreen;