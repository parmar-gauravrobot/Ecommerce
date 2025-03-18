import React from 'react'

const Profile = () => {
  return (
    <div>

<div
  className="offcanvas offcanvas-end"
  data-bs-scroll="true"
  tabIndex={-1}
  id="offcanvasAccount"
  aria-labelledby="My Account"
>
  <div className="offcanvas-header justify-content-center">
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    />
  </div>
  <div className="offcanvas-body">
    <div className="order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">My Account</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Username</h6>
            <small className="text-body-secondary">Your unique username</small>
          </div>
          <span className="text-body-secondary">johndoe123</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Email</h6>
            <small className="text-body-secondary">Your registered email</small>
          </div>
          <span className="text-body-secondary">johndoe@example.com</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Membership Level</h6>
            <small className="text-body-secondary">Your account status</small>
          </div>
          <span className="text-body-secondary">Gold Member</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Recent Activity</h6>
            <small className="text-body-secondary">Last login</small>
          </div>
          <span className="text-body-secondary">2 hours ago</span>
        </li>
      </ul>
      <div className="d-grid gap-2">
        <button className="w-100 btn btn-primary btn-lg" type="button">
          Edit Account Details
        </button>
        <button className="w-100 btn btn-outline-danger btn-lg" type="button">
          Log Out
        </button>
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Profile
