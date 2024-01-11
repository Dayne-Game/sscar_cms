import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from "react";
import { API_URL } from "../config/api_url";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectPosts } from "../features/posts/postSlice";
import { Link } from "react-router-dom";

function HomeScreen() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  const [publishedPosts, setPublishedPosts] = useState([]);

  useEffect(() => {
    dispatch(getPosts()).then(action => {
      if (action.type === 'post/getAllPosts/fulfilled') {
        const publishedPosts = action.payload.filter(post => post.status === 'published');
        setPublishedPosts(publishedPosts);
      }
    })
  }, [])

  return (
    <>
      <div className="feature_section">
        {publishedPosts.length > 0 && (
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={7000} showStatus={false} swipeable={false}>
            {publishedPosts.map((post, index) => (
              <div className="carousel_container" key={index}>
                <div className="carousel_overlay"></div>
                <img src={`${API_URL}/${post.featured_image.path}`} alt={post.featured_image.alt} />

                <div className="carousel_content_container">
                  <div className="carousel_content">
                    <h1 className="display-4 fw-normal">{post.title}</h1>
                    <h5 className="mb-4">{post.subtitle}</h5>
                    <Link to={`/news/${post._id}`} className="btn btn-outline-light">View Post</Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>


      {/* <div className="carousel_wrapper bg-dark"></div> */}

      <div className="event_countdown bg-warning">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h2>Next Event</h2>
          </div>
        </div>
      </div>

      <div className="latest_standings">
        <div className="container py-3">
          <div className="row mb-5">
            <div className="col-md-6">
              <h3 className="mb-4">Latest Standings</h3>
              <ol className="list-group">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-2">Pts</div>
                    <div className="col-2">Pos</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-warning">
                        <span>2nzb</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Grant Flynn</h5>
                        <span className="text-muted">Burgerking Racing</span>
                      </div>
                    </div>
                    <div className="col-2">187</div>
                    <div className="col-2">1st</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-warning">
                        <span>5b</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Steve Flynn</h5>
                        <span className="text-muted">Burgerking Racing</span>
                      </div>
                    </div>
                    <div className="col-2">175</div>
                    <div className="col-2">2nd</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-danger">
                        <span className="text-white">3nzc</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Craig Cardwell</h5>
                        <span className="text-muted">Cardwell Racing Supplies</span>
                      </div>
                    </div>
                    <div className="col-2">150</div>
                    <div className="col-2">3rd</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-success">
                        <span className="text-white">1nzm</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Chris Cowling</h5>
                        <span className="text-muted">Cowling Motorsport (Tauranga ITM)</span>
                      </div>
                    </div>
                    <div className="col-2">144</div>
                    <div className="col-2">4th</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-primary">
                        <span className="text-white">32p</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Wayne Belk</h5>
                        <span className="text-muted">Belkblast</span>
                      </div>
                    </div>
                    <div className="col-2">89</div>
                    <div className="col-2">5th</div>
                  </div>
                </li>
              </ol>
            </div>
            <div className='col-md-6'>
              <h3 className="mb-4">Previous Results</h3>
              <ol className="list-group">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-2">Pts</div>
                    <div className="col-2">Pos</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-warning">
                        <span>2nzb</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Grant Flynn</h5>
                        <span className="text-muted">Burgerking Racing</span>
                      </div>
                    </div>
                    <div className="col-2">187</div>
                    <div className="col-2">1st</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-warning">
                        <span>5b</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Steve Flynn</h5>
                        <span className="text-muted">Burgerking Racing</span>
                      </div>
                    </div>
                    <div className="col-2">175</div>
                    <div className="col-2">2nd</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-danger">
                        <span className="text-white">3nzc</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Craig Cardwell</h5>
                        <span className="text-muted">Cardwell Racing Supplies</span>
                      </div>
                    </div>
                    <div className="col-2">150</div>
                    <div className="col-2">3rd</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-success">
                        <span className="text-white">1nzm</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Chris Cowling</h5>
                        <span className="text-muted">Cowling Motorsport (Tauranga ITM)</span>
                      </div>
                    </div>
                    <div className="col-2">144</div>
                    <div className="col-2">4th</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className='col-8 d-flex align-items-center'>
                      <div className="racing_number rounded bg-primary">
                        <span className="text-white">32p</span>
                      </div>
                      <div className="d-block p-1">
                        <h5 className="mb-0">Wayne Belk</h5>
                        <span className="text-muted">Belkblast</span>
                      </div>
                    </div>
                    <div className="col-2">89</div>
                    <div className="col-2">5th</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary">View Full Standings</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen;