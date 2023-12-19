import React from 'react'

function DriverScreen() {
  return (
    <div className="wrapper">
      <div className="container">

        <div className="row">
          <div className="col-md-4">
            <div className="driver_card">
              <div className="driver_image"></div>
              <div className="driver_info" style={{ background: 'red' }}>
                <div>
                  <h5 className="mb-0">Driver Name</h5>
                  <p className='mb-0 text-muted'>Team / Sponsor Name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="driver_card">
              <div className="driver_image"></div>
              <div className="driver_info" style={{ background: 'red' }}>
                <div>
                  <h5 className="mb-0">Driver Name</h5>
                  <p className='mb-0 text-muted'>Team / Sponsor Name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>

      </div>
    </div>
  )
}

export default DriverScreen