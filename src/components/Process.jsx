import React from 'react'
import Imgprocess1s from '../assets/Imges/png/img_process1s.webp'
import Imgprocess2s from '../assets/Imges/png/img_process2s.webp'
import Imgprocess3s from '../assets/Imges/png/img_process3s.webp'
import { Iconprocess1s } from './Icon'
import { Iconprocess2s } from './Icon'
import { Iconprocess3s } from './Icon'


const Process = () => {
  return (
    <>
      <div className=' min-vh-100 bg_img_process'>
        <div className='container pt-5 pb-lg-5'>
          <p className='pt-lg-5 mt-lg-5 text-white ff_primary fs_xxsm fw-bold text-center opacity-50 later-sps-how line-hight-how'>how it works</p>
          <p className='text-white ff_primary text-center line-hight-how fs_xl pb-2'>Our Process</p>
          <div className='d-flex justify-content-center pb-4'>
            <p className='text-white text-center fw-normal ff_primary line_height_we max-width-wes'>We know the best solution for all of your business ideas and we can help you solve all business problems</p>
          </div>
          <div className='pb-5 mb-xl-5'>
            <div className='process_card1s mx-auto mb-4'>
              <div className='d-flex flex-column flex-lg-row align-items-center'>
                <div className=' width_col_process1s px-3 px-lg-0'>
                  <div className='ps-3 py-3'><img src={Imgprocess1s} alt="#" className='process_img1s pt-2 w-100' /></div>
                </div>
                <div className=' width_col_process px-3 px-xl-0'>
                  <span className='Iconprocess1s'><Iconprocess1s /></span>
                  <p className=' secondary_color ff_primary fs_sm1s fw-bold line_height_busines mt-1 pt-4'>Business Audit</p>
                  <p className=' tertiary_color fs_xs fw-normal ff_primary line_hight_ans max_width_audit'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                </div>
              </div>
            </div>
            <div className='process_card1s mx-auto mb-4 mt-lg-3'>
              <div className='d-flex flex-column flex-lg-row align-items-center'>
                <div className=' width_col_process1s px-3 px-lg-0'>
                  <div className='ps-3 py-3'><img src={Imgprocess2s} alt="#" className='process_img1s pt-2 w-100' /></div>
                </div>
                <div className=' width_col_process px-3 px-xl-0'>
                  <span className='Iconprocess1s'><Iconprocess2s /></span>
                  <p className=' secondary_color ff_primary fs_sm1s fw-bold line_height_busines mt-1 pt-4'>Data tracking</p>
                  <p className=' tertiary_color fs_xs fw-normal ff_primary line_hight_ans max_width_audit2s'>The hardware and software, which when used together allows you to know where something is at any point in time</p>
                </div>
              </div>
            </div>
            <div className='process_card1s mx-auto mt-lg-3'>
              <div className='d-flex flex-column flex-lg-row align-items-center'>
                <div className=' width_col_process1s px-3 px-lg-0'>
                  <div className='ps-3 py-3'><img src={Imgprocess3s} alt="#" className='process_img1s pt-2 w-100' /></div>
                </div>
                <div className=' width_col_process px-3 px-xl-0'>
                  <span className='Iconprocess1s'><Iconprocess3s /></span>
                  <p className=' secondary_color ff_primary fs_sm1s fw-bold line_height_busines mt-1 pt-4'>Results</p>
                  <p className=' tertiary_color fs_xs fw-normal ff_primary line_hight_ans max_width_audit'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Process