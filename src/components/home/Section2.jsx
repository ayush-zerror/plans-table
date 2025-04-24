import React, { useState } from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";
import TableContainer from './TableContainer';
const Section2 = () => {
    const [plan, setPlan] = useState(0)
    const plans = ["Basic","Grow","Advanced","Plus"]
    return (
        <div id='home-section2'>
            <div className='type-btn'>
                <button>Pay Monthly</button>
                <button>Pay Yearly (save 25%)*</button>
            </div>
            <div id='types-of-plan'>
                {plans.map((p,i)=>(
                     <span
                     key={i}
                     className={`${plan === i ? 'selected' : ''} ${plan === plans.length - 1 && plan === i ? 'selected-blue' : ''}`}
                     onClick={() => setPlan(i)}
                   >
                     {p}
                   </span>
                ))}
            </div>
            <div className="plans-container">
                <div className="plan">
                    <div>
                        <div className="plan-title">
                            <p>₹20/month for first 3 months</p>
                        </div>
                        <div className="plan-heading">
                            <div>
                                <span className='plan-h'>Basic</span>
                                <p>For solo entrepreneurs</p>
                            </div>
                            <span id='popular'>most popular</span>
                        </div>
                        <div className="plan-price">
                            <div>
                                <span className='cost'>₹1,499</span>
                                <p className='inr'>INR <br />/month</p>
                            </div>
                            <p>billed once yearly</p>
                        </div>
                        <hr />
                        <div className="card-rate">
                            <p className='list-title'>Card rates starting at</p>
                            <span className='list-item'><IoCheckmarkSharp />2% 3rd-party payment providers</span>
                        </div>
                        <div className="card-rate">
                            <p className='list-title'>Standout features</p>
                            <span className='list-item'><IoCheckmarkSharp />10 inventory locations</span>
                            <span className='list-item'><IoCheckmarkSharp />24/7 chat support</span>
                            <span className='list-item'><IoCheckmarkSharp />Localized global selling (3 markets)</span>
                            <span className='list-item'><IoCheckmarkSharp />POS Lite</span>
                        </div>
                    </div>
                    <button className='trybtn'>Try for free</button>
                </div>
                <div className="plan">
                    <div>
                        <div className="plan-title">
                            <p>₹20/month for first 3 months</p>
                        </div>
                        <div className="plan-heading">
                            <div>
                                <span className='plan-h'>Basic</span>
                                <p>For solo entrepreneurs</p>
                            </div>
                        </div>
                        <div className="plan-price">
                            <div>
                                <span className='cost'>₹1,499</span>
                                <p className='inr'>INR <br />/month</p>
                            </div>
                            <p>billed once yearly</p>
                        </div>
                        <hr />
                        <div className="card-rate">
                            <p className='list-title'>Card rates starting at</p>
                            <span className='list-item'><IoCheckmarkSharp />2% 3rd-party payment providers</span>
                        </div>
                        <div className="card-rate">
                            <p className='list-title'>Standout features</p>
                            <span className='list-item'><IoCheckmarkSharp />10 inventory locations</span>
                            <span className='list-item'><IoCheckmarkSharp />24/7 chat support</span>
                            <span className='list-item'><IoCheckmarkSharp />Localized global selling (3 markets)</span>
                            <span className='list-item'><IoCheckmarkSharp />POS Lite</span>
                        </div>
                    </div>
                    <button className='trybtn'>Try for free</button>
                </div>
                <div className="plan">
                    <div>
                        <div className="plan-title">
                            <p>₹20/month for first 3 months</p>
                        </div>
                        <div className="plan-heading">
                            <div>
                                <span className='plan-h'>Basic</span>
                                <p>For solo entrepreneurs</p>
                            </div>
                        </div>
                        <div className="plan-price">
                            <div>
                                <span className='cost'>₹1,499</span>
                                <p className='inr'>INR <br />/month</p>
                            </div>
                            <p>billed once yearly</p>
                        </div>
                        <hr />
                        <div className="card-rate">
                            <p className='list-title'>Card rates starting at</p>
                            <span className='list-item'><IoCheckmarkSharp />2% 3rd-party payment providers</span>
                        </div>
                        <div className="card-rate">
                            <p className='list-title'>Standout features</p>
                            <span className='list-item'><IoCheckmarkSharp />10 inventory locations</span>
                            <span className='list-item'><IoCheckmarkSharp />24/7 chat support</span>
                            <span className='list-item'><IoCheckmarkSharp />Localized global selling (3 markets)</span>
                            <span className='list-item'><IoCheckmarkSharp />POS Lite</span>
                        </div>
                    </div>
                    <button className='trybtn'>Try for free</button>
                </div>
                <div className="plan">
                    <div>
                        <div className="plan-title">
                            <p>₹20/month for first 3 months</p>
                        </div>
                        <div className="plan-heading">
                            <div>
                                <span className='plan-h'>Basic</span>
                                <p>For solo entrepreneurs</p>
                            </div>
                        </div>
                        <div className="plan-price">
                            <div>
                                <span className='cost'>₹1,499</span>
                                <p className='inr'>INR <br />/month</p>
                            </div>
                            <p>billed once yearly</p>
                        </div>
                        <hr />
                        <div className="card-rate">
                            <p className='list-title'>Card rates starting at</p>
                            <span className='list-item'><IoCheckmarkSharp />2% 3rd-party payment providers</span>
                        </div>
                        <div className="card-rate">
                            <p className='list-title'>Standout features</p>
                            <span className='list-item'><IoCheckmarkSharp />10 inventory locations</span>
                            <span className='list-item'><IoCheckmarkSharp />24/7 chat support</span>
                            <span className='list-item'><IoCheckmarkSharp />Localized global selling (3 markets)</span>
                            <span className='list-item'><IoCheckmarkSharp />POS Lite</span>
                        </div>
                    </div>
                    <button className='trybtn'>Try for free</button>
                </div>
            </div>
            <p className='plans-container-desc'>*Yearly discount available on select plans</p>
            <TableContainer/>
        </div>
    )
}

export default Section2