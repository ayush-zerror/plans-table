import React, { useEffect, useState } from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import TableContainer from './TableContainer';

const Section2 = () => {
    const [plan, setPlan] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const plans = [
        {
            name: "Standard",
            subtitle: "For solo entrepreneurs",
            offer: "₹20/month for first 3 months",
            cost: "₹2000",
            billed: "billed once yearly",
            cardRate: "2% 3rd-party payment providers",
            features: [
                "Upto 250 SKUs",
                "200 emails per month",
                "200 SMS per month",
                "200 Whatsapp Messages",
                "Priority Support within 12 hours",
            ]
        },
        {
            name: "Premium",
            subtitle: "For solo entrepreneurs",
            offer: "₹20/month for first 3 months",
            cost: "₹3000",
            billed: "billed once yearly",
            cardRate: "2% 3rd-party payment providers",
            features: [
                "Upto 1000 SKUs",
                "500 emails per month",
                "500 SMS per month",
                "500 Whatsapp Messages",
                "Priority Support within 3 hours",
            ]
        },
        {
            name: "Plus",
            subtitle: "For solo entrepreneurs",
            offer: "₹20/month for first 3 months",
            cost: "₹5000",
            billed: "billed once yearly",
            cardRate: "2% 3rd-party payment providers",
            features: [
                "Upto 5000SKUs",
                "3000 emails per month",
                "3000 SMS per month",
                "3000 Whatsapp Messages",
                "Priority Support within 1 hour",
            ]
        }
    ];

    // Detect mobile screen
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };
        handleResize(); // Set initially
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const renderPlanCard = (planData, i) => (
        <div className="plan" key={i}>
            <div>
                <div className="plan-title">
                    <p>{planData.offer}</p>
                </div>
                <div className="plan-heading">
                    <div>
                        <span className='plan-h'>{planData.name}</span>
                        <p>{planData.subtitle}</p>
                    </div>
                </div>
                <div className="plan-price">
                    <div>
                        <span className='cost'>{planData.cost}</span>
                        <p className='inr'>INR <br />/month</p>
                    </div>
                    <p>{planData.billed}</p>
                </div>
                <hr />
                <div className="card-rate">
                    <p className='list-title'>Card rates starting at</p>
                    <span className='list-item'><IoCheckmarkSharp />{planData.cardRate}</span>
                </div>
                <div className="card-rate">
                    <p className='list-title'>Standout features</p>
                    {planData.features.map((f, idx) => (
                        <span className='list-item' key={idx}><IoCheckmarkSharp />{f}</span>
                    ))}
                </div>
            </div>
            <button className='trybtn'>Try for free</button>
        </div>
    );

    return (
        <div id='home-section2'>
            <div className='type-btn'>
                <button>Pay Monthly</button>
                <button>Pay Yearly (save 25%)*</button>
            </div>

            {isMobile && (
                <div id='types-of-plan'>
                    {plans.map((p, i) => (
                        <span
                            key={i}
                            className={`${plan === i ? 'selected' : ''} ${plan === plans.length - 1 && plan === i ? 'selected-blue' : ''}`}
                            onClick={() => setPlan(i)}
                        >
                            {p.name}
                        </span>
                    ))}
                </div>
            )}

            <div className="plans-container">
                {isMobile
                    ? renderPlanCard(plans[plan], plan)
                    : plans.map((p, i) => renderPlanCard(p, i))
                }
            </div>

            <p className='plans-container-desc'>*Yearly discount available on select plans</p>
            <TableContainer plan={plan} setPlan={setPlan} />
        </div>
    );
};

export default Section2;
