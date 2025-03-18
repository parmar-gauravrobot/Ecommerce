import React from 'react'

const Blogs = () => {
  return (
    <>
      <section id="latest-blog" className="my-5">
  <div className="container py-5 my-5">
    <div className="row mt-5">
      <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
        <h2 className="display-3 fw-normal">Latest Blog Post</h2>
        <div>
          <a
            href="#"
            className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
          >
            Read all
            <svg width={24} height={24} viewBox="0 0 24 24" className="mb-1">
              <use xlinkHref="#arrow-right" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 my-4 my-md-0">
        <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
          <h3 className="secondary-font text-primary m-0">20</h3>
          <p className="secondary-font fs-6 m-0">Feb</p>
        </div>
        <div className="card position-relative">
          <a href="single-post.html">
            <img
              src="images/blog1.jpg"
              className="img-fluid rounded-4"
              alt="image"
            />
          </a>
          <div className="card-body p-0">
            <a href="single-post.html">
              <h3 className="card-title pt-4 pb-3 m-0">
                10 Reasons to be helpful towards any animals
              </h3>
            </a>
            <div className="card-text">
              <p className="blog-paragraph fs-6">
                At the core of our practice is the idea that cities are the
                incubators of our greatest achievements, and the best hope for a
                sustainable future.
              </p>
              <a href="single-post.html" className="blog-read">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 my-4 my-md-0">
        <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
          <h3 className="secondary-font text-primary m-0">21</h3>
          <p className="secondary-font fs-6 m-0">Feb</p>
        </div>
        <div className="card position-relative">
          <a href="single-post.html">
            <img
              src="images/blog2.jpg"
              className="img-fluid rounded-4"
              alt="image"
            />
          </a>
          <div className="card-body p-0">
            <a href="single-post.html">
              <h3 className="card-title pt-4 pb-3 m-0">
                How to know your pet is hungry
              </h3>
            </a>
            <div className="card-text">
              <p className="blog-paragraph fs-6">
                At the core of our practice is the idea that cities are the
                incubators of our greatest achievements, and the best hope for a
                sustainable future.
              </p>
              <a href="single-post.html" className="blog-read">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 my-4 my-md-0">
        <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
          <h3 className="secondary-font text-primary m-0">22</h3>
          <p className="secondary-font fs-6 m-0">Feb</p>
        </div>
        <div className="card position-relative">
          <a href="single-post.html">
            <img
              src="images/blog3.jpg"
              className="img-fluid rounded-4"
              alt="image"
            />
          </a>
          <div className="card-body p-0">
            <a href="single-post.html">
              <h3 className="card-title pt-4 pb-3 m-0">
                Best home for your pets
              </h3>
            </a>
            <div className="card-text">
              <p className="blog-paragraph fs-6">
                At the core of our practice is the idea that cities are the
                incubators of our greatest achievements, and the best hope for a
                sustainable future.
              </p>
              <a href="single-post.html" className="blog-read">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Blogs
