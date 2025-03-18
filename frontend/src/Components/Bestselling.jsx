import React from "react";

const Bestselling = () => {
  return (
    <>
      <section id="bestselling" className="my-5 overflow-hidden">
        <div className="container py-5 mb-5">
          <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 className="display-3 fw-normal">Best selling products</h2>
            <div>
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
          <div className=" swiper bestselling-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
        New
      </div> */}
                <div className="card position-relative">
                  <a href="single-product.html">
                    <img
                      src="images/item5.jpg"
                      className="img-fluid rounded-4"
                      alt="image"
                    />
                  </a>
                  <div className="card-body p-0">
                    <a href="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </a>
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        5.0
                      </span>
                      <h3 className="secondary-font text-primary">$18.00</h3>
                      <div className="d-flex flex-wrap mt-3">
                        <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
        New
      </div> */}
                <div className="card position-relative">
                  <a href="single-product.html">
                    <img
                      src="images/item6.jpg"
                      className="img-fluid rounded-4"
                      alt="image"
                    />
                  </a>
                  <div className="card-body p-0">
                    <a href="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </a>
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        5.0
                      </span>
                      <h3 className="secondary-font text-primary">$18.00</h3>
                      <div className="d-flex flex-wrap mt-3">
                        <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  Sale
                </div>
                <div className="card position-relative">
                  <a href="single-product.html">
                    <img
                      src="images/item7.jpg"
                      className="img-fluid rounded-4"
                      alt="image"
                    />
                  </a>
                  <div className="card-body p-0">
                    <a href="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </a>
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        5.0
                      </span>
                      <h3 className="secondary-font text-primary">$18.00</h3>
                      <div className="d-flex flex-wrap mt-3">
                        <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
        New
      </div> */}
                <div className="card position-relative">
                  <a href="single-product.html">
                    <img
                      src="images/item8.jpg"
                      className="img-fluid rounded-4"
                      alt="image"
                    />
                  </a>
                  <div className="card-body p-0">
                    <a href="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </a>
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        5.0
                      </span>
                      <h3 className="secondary-font text-primary">$18.00</h3>
                      <div className="d-flex flex-wrap mt-3">
                        <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  -10%
                </div>
                <div className="card position-relative">
                  <a href="single-product.html">
                    <img
                      src="images/item3.jpg"
                      className="img-fluid rounded-4"
                      alt="image"
                    />
                  </a>
                  <div className="card-body p-0">
                    <a href="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </a>
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        5.0
                      </span>
                      <h3 className="secondary-font text-primary">$18.00</h3>
                      <div className="d-flex flex-wrap mt-3">
                        <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
        New
      </div> */}
                <div className="card position-relative">
                  <a href="single-product.html">
                    <img
                      src="images/item4.jpg"
                      className="img-fluid rounded-4"
                      alt="image"
                    />
                  </a>
                  <div className="card-body p-0">
                    <a href="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </a>
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        5.0
                      </span>
                      <h3 className="secondary-font text-primary">$18.00</h3>
                      <div className="d-flex flex-wrap mt-3">
                        <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="#" className="btn-wishlist px-4 pt-3 ">
                          <iconify-icon
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* / category-carousel */}
        </div>
      </section>
    </>
  );
};

export default Bestselling;
