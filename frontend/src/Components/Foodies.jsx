import React from 'react'

const Foodies = () => {
  return (
    <>
      
      <section id="foodies" className="my-5">
  <div className="container my-5 py-5">
    <div className="section-header d-md-flex justify-content-between align-items-center">
      <h2 className="display-3 fw-normal">Pet Foodies</h2>
      <div className="mb-4 mb-md-0">
        <p className="m-0">
          <button className="filter-button me-4  active" data-filter="*">
            ALL
          </button>
          <button className="filter-button me-4 " data-filter=".cat">
            CAT
          </button>
          <button className="filter-button me-4 " data-filter=".dog">
            DOG
          </button>
          <button className="filter-button me-4 " data-filter=".bird">
            BIRD
          </button>
        </p>
      </div>
      <div>
        <a
          href="#"
          className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
        >
          shop now
          <svg width={24} height={24} viewBox="0 0 24 24" className="mb-1">
            <use xlinkHref="#arrow-right" />
          </svg>
        </a>
      </div>
    </div>
    <div className="isotope-container row">
      <div className="item cat col-md-4 col-lg-3 my-4">
        {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
      New
    </div> */}
        <div className="card position-relative">
          <a href="single-product.html">
            <img
              src="images/item9.jpg"
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
      <div className="item dog col-md-4 col-lg-3 my-4">
        <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
          New
        </div>
        <div className="card position-relative">
          <a href="single-product.html">
            <img
              src="images/item10.jpg"
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
      <div className="item dog col-md-4 col-lg-3 my-4">
        {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
      New
    </div> */}
        <div className="card position-relative">
          <a href="single-product.html">
            <img
              src="images/item11.jpg"
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
      <div className="item cat col-md-4 col-lg-3 my-4">
        <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
          Sold
        </div>
        <div className="card position-relative">
          <a href="single-product.html">
            <img
              src="images/item12.jpg"
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
      <div className="item bird col-md-4 col-lg-3 my-4">
        {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
      New
    </div> */}
        <div className="card position-relative">
          <a href="single-product.html">
            <img
              src="images/item13.jpg"
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
      <div className="item bird col-md-4 col-lg-3 my-4">
        {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
      New
    </div> */}
        <div className="card position-relative">
          <a href="single-product.html">
            <img
              src="images/item14.jpg"
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
      <div className="item dog col-md-4 col-lg-3 my-4">
        <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
          Sale
        </div>
        <div className="card position-relative">
          <a href="single-product.html">
            <img
              src="images/item15.jpg"
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
      <div className="item cat col-md-4 col-lg-3 my-4">
        {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
      New
    </div> */}
        <div className="card position-relative">
          <a href="single-product.html">
            <img
              src="images/item16.jpg"
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
</section>


    </>
  )
}

export default Foodies
