import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SolutionFeaturedPostAndTrending.css"; // Import the custom CSS file

const SolutionFeaturedPostAndTrending = ({ featuredPost, trendingPosts, posts }) => {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-stretch solution-row">
        <div className="col-12 col-md-4 d-flex flex-column mb-3 mb-md-0">
          <div className="flex-grow-1">
            <h2 className="solution-font-weight-bold">{featuredPost.title}</h2>
            <hr className="custom-hr solution-hr" />
            <img
              src={featuredPost.image}
              className="img-fluid mb-3"
              alt="Featured Post"
            />
            <h3 className="solution-houston solution-h3">
              {featuredPost.description}
            </h3>
            <p className="houston2">
              {featuredPost.content}
            </p>
            <p>
              <small>
                <h4 className="solution-name solution-h4">{featuredPost.author}</h4>
                {featuredPost.date}
              </small>
            </p>
            <button className="btn btn-primary">All Posts</button>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-5 d-flex flex-column secondrow mb-3 mb-md-0">
          <div className="flex-grow-1">
            {posts.map((post, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex mb-2">
                  <img
                    src={post.image}
                    className="img-fluid me-3"
                    alt="Post"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <div>
                    <h4 className="solution-h4">{post.title}</h4>
                    <p className="mdsix">
                      <small>
                        <h4 className="solution-name solution-h4">{post.author}</h4>
                        {post.date}
                      </small>
                    </p>
                  </div>
                </div>
                <hr className="solution-hr" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-2 d-flex flex-column custom-trending-column mt-3 mt-md-0">
          <div>
            <h2 className="solution-font-weight-bold">Trending</h2>
            <hr className="solution-hr" />
            {trendingPosts.map((item, index) => (
              <div key={index} className="mb-4 custom-trending-item">
                <div className="d-flex align-items-start">
                  <span className="me-2 custom-numbering">{`0${index + 1}.`}</span>
                  <div>
                    <h6>{item.title}</h6>
                    <p>
                      <small>
                        <h6 style={{ paddingTop: "3px" }}>{item.author}</h6>
                        {item.date}
                      </small>
                    </p>
                  </div>
                </div>
                <hr className="solution-hr" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionFeaturedPostAndTrending;
