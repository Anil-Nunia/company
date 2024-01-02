import React from 'react'
import { Iconhelp1s } from './Icon'
import { Iconhelp2s } from './Icon'
import { Iconhelp3s } from './Icon'
import { Iconhelp4s } from './Icon'
import { Iconhelp5s } from './Icon'
import { Iconhelp6s } from './Icon'
import Imglefthelp from '../assets/Imges/png/img_lefthelp.webp'
import Imgrighthelp from '../assets/Imges/png/img_righthelp.webp'

const Help = () => {
    return (
        <>
            <div className='bg_white mtop_help pb-lg-5 position-relative'>
                <img src={Imglefthelp} alt="#" className='position-absolute img-left-help d-none d-lg-block' />
                <img src={Imgrighthelp} alt="#" className=' position-absolute img-right-help d-none d-lg-block' />

                <div className='pb-lg-5'>
                    <div className='container pt-4 pt-lg-5 pb-5  position-relative z-1'>
                        <div className='mb-4 pb-lg-2'>
                            <p className='pb-md-2 ff_primary fw-bold text-uppercase  opacity-50 line-height-feature letter-sps-feature fs_xxsm color_featur'>features</p>
                            <p className='secondary_color max-width_wes fw-medium ff_primary lin_height fs_xl mb-0'>We are here to help you with</p>
                        </div>
                        <div className='row pb-lg-4'>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className='card1s px-4'>
                                    <div className='ps-3'>
                                        <span className='Iconhelp1s d-inline-block p-3'> <Iconhelp1s /></span>
                                        <p className='pt-3 mt-1 secondary_color fw-bold ff_primary line_height_grow fs_sm1s'>Grow your business</p>
                                        <p className='tertiary_color ff_primary fw-normal fs_xs line_height_magic max_width_content_card'><span className='fw-bold'>The magic wand</span> for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 pt-4 pt-md-0'>
                                <div className='card1s px-4'>
                                    <div className='ps-3'>
                                        <span className='Iconhelp2s d-inline-block p-3'><Iconhelp2s /></span>
                                        <p className='pt-3 mt-1 secondary_color fw-bold ff_primary line_height_grow fs_sm1s'>Drive more sales</p>
                                        <p className='tertiary_color ff_primary fw-normal fs_xs line_height_magic max_width_content_card'>A potential customer, once lost, is hard <span className=' text-xl-nowrap'>to retain back. But <span className='fw-bold'>keeping some critical</span></span> factors in mind, we can, for sure, use these loyalty programs as customer retention tools.</p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 pt-4 pt-lg-0'>
                                <div className='card1s px-4'>
                                    <div className='ps-3'>
                                        <span className='Iconhelp3s d-inline-block p-3'><Iconhelp3s /></span>
                                        <p className='pt-3 mt-1 secondary_color fw-bold ff_primary line_height_grow fs_sm1s'>Handle by Expert</p>
                                        <p className='tertiary_color ff_primary fw-normal fs_xs line_height_magic max_width_content_card'>We know how we candevelop deep, trust-based relationships with our clients, and work together more collaboratively</p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 pt-4'>
                                <div className='card1s px-4'>
                                    <div className='ps-3'>
                                        <span className='Iconhelp4s d-inline-block p-3'><Iconhelp4s /></span>
                                        <p className='pt-3 mt-1 secondary_color fw-bold ff_primary line_height_grow fs_sm1s'>UX Research</p>
                                        <p className='tertiary_color ff_primary fw-normal fs_xs line_height_magic max_width_content_card'>UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 pt-4'>
                                <div className='card1s px-4'>
                                    <div className='ps-3'>
                                        <span className='Iconhelp5s d-inline-block p-3'><Iconhelp5s /></span>
                                        <p className='pt-3 mt-1 secondary_color fw-bold ff_primary line_height_grow fs_sm1s'>Business Audit</p>
                                        <p className='tertiary_color ff_primary fw-normal fs_xs line_height_magic max_width_content_card'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 pt-4'>
                                <div className='card1s px-4'>
                                    <div className='ps-3'>
                                        <span className='Iconhelp6s d-inline-block p-3'><Iconhelp6s /></span>
                                        <p className='pt-3 mt-1 secondary_color fw-bold ff_primary line_height_grow fs_sm1s'>Data tracking</p>
                                        <p className='tertiary_color ff_primary fw-normal fs_xs line_height_magic max_width_content_card'>The hardware and software, which when used together allows you to know where something is at any point in time</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Help