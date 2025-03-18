import React from 'react'

function Hero() {
  return (
    <>
      
      <section id="banner" style={{ background: "#F9F3EC" }}>
  <div className="container">
    <div className="swiper main-swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide py-5">
          <div className="row banner-content align-items-center">
            <div className="img-wrapper col-md-5">
              <img src="images/banner-img.png" className="img-fluid" />
            </div>
            <div className="content-wrapper col-md-7 p-5 mb-5">
              <div className="secondary-font text-primary text-uppercase mb-4">
                Save 10 - 20 % off
              </div>
              <h2 className="banner-title display-1 fw-normal">
                Best destination for{" "}
                <span className="text-primary">your pets</span>
              </h2>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-slide py-5">
          <div className="row banner-content align-items-center">
            <div className="img-wrapper col-md-5">
              <img src="images//banner-img3.png" className="img-fluid" />
            </div>
            <div className="content-wrapper col-md-7 p-5 mb-5">
              <div className="secondary-font text-primary text-uppercase mb-4">
                Save 10 - 20 % off
              </div>
              <h2 className="banner-title display-1 fw-normal">
                Best destination for{" "}
                <span className="text-primary">your pets</span>
              </h2>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-slide py-5">
          <div className="row banner-content align-items-center">
            <div className="img-wrapper col-md-5">
              <img src="images/banner-img4.png" className="img-fluid" />
            </div>
            <div className="content-wrapper col-md-7 p-5 mb-5">
              <div className="secondary-font text-primary text-uppercase mb-4">
                Save 10 - 20 % off
              </div>
              <h2 className="banner-title display-1 fw-normal">
                Best destination for{" "}
                <span className="text-primary">your pets</span>
              </h2>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination mb-5" />
    </div>
  </div>
</section>

    </>
  )
}

export default Hero
