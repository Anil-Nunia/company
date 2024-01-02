import React from 'react'
import { Iconfooter } from './Icon'
import { Iconfbfooter } from './Icon'
import { Iconinstafooter } from './Icon'
import { Icontwitterfooter } from './Icon'

const Footer = () => {
  return (
      <>
          <div className='bg_black'>
              <div className='container pt-4 pt-md-5 pb-lg-4'>
                  <div className='d-flex align-items-center justify-content-between pt-lg-4 pt-2 '>
                      <span><Iconfooter /></span>
                      <div className='d-none d-xl-block'>
                          <ul className='ps-0 mb-0 gap_footer d-flex align-items-center '>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Home</a></li>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Your benefits</a></li>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Our process</a></li>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Our works</a></li>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Testimonials</a></li>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Start a project</a></li>
                          </ul>
                     </div>
                      <div className='d-flex align-items-center gap-3'>
                          <span><Iconfbfooter/></span>
                          <span className='mx-1'><Iconinstafooter /></span>
                          <span><Icontwitterfooter /></span>
                      </div>
                  </div>
                  <div className='pt-4 pb-3 flex-wrap'>
                      <ul className='ps-0 mb-0 gap-2 d-flex flex-column flex-md-row align-items-center d-xl-none'>
                          <span className='d-flex align-items-center gap_footer'>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Home</a></li>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Your benefits</a></li>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Our process</a></li>
                          </span>
                          <span className='d-flex align-items-center gap_footer'>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Our works</a></li>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Testimonials</a></li>
                              <li><a href="#" className=' ff_primary fs_xs fw-medium line_height_footer text-color-footer'>Start a project</a></li>
                         </span>
                      </ul>
                  </div>
                  <div className='footer_down_line'>
                  </div>
                  <div className='d-flex justify-content-between align-items-center py-3 mt-lg-3'>
                      <p className=' ff_primary fw-normal company_text_features mb-0'>© 2021 Company</p>
                      <div className='d-flex align-items-center gap-2 gap-sm-4'>
                          <p className='footer_loewer_policy ff_primary fw-normal  mb-0'>Privacy policy</p>
                          <p className='footer_loewer_policy ff_primary fw-normal  mb-0'>Term of service</p>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Footer