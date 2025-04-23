import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";


const Table = () => {
    return (
        <table id='table'>
            <thead>
                <tr>
                    <th></th>
                    <th className='sub-text1 text-center'>Basic</th>
                    <th className='sub-text1 text-center'>Grow</th>
                    <th className='sub-text1 text-center'>Advanced</th>
                    <th className='sub-text1 text-center'>Plus</th>
                </tr>
            </thead>
            <tbody>
                <tr className='sub-header'>
                    <td>Pricing</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='table-hover'>
                    <td className='sub-text2'>Pay monthly</td>
                    <td className='para-text black text-center'>₹1,994 INR/mo</td>
                    <td className='para-text black text-center'>₹7,447 INR/mo</td>
                    <td className='para-text black text-center'>₹30,164 INR/mo</td>
                    <td className='para-text black text-center'>Starting at <br />₹1,75,000 INR/mo <br />on a 3-year term</td>
                </tr>
                <tr className='table-hover'>
                    <td className='sub-text2'>Pay yearly (Save up to 25%)*</td>
                    <td className='para-text black text-center'>₹1,499 INR/mo*</td>
                    <td className='para-text black text-center'>₹5,599 INR/mo*</td>
                    <td className='para-text black text-center'>₹22,680 INR/mo*</td>
                    <td className='icon text-center'><IoCloseSharp /></td>
                </tr>
                <tr className='sub-header'>
                    <td>Core features</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Online store</span>
                            <p className='para-text'>Easily build an online store. Full features include product collections, informational pages, and blogs.</p>
                        </div>
                    </td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center icon'><IoCloseSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>World's best-converting checkout</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Unlimited products</span>
                            <p className='para-text'>Sell as many products and services as you want.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Unlimited products</span>
                            <p className='para-text'>Sell as many products and services as you want.</p>
                        </div>
                    </td>
                    <td className='text-center icon'><IoCloseSharp /></td>
                    <td className='text-center black para-text'>5</td>
                    <td className='text-center black para-text'>15</td>
                    <td className='text-center black para-text'>Unlimited</td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Collaborator accounts</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Templates and themes</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Sales channels</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='sub-header'>
                    <td>Hosting and administration</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Unlimited web hosting</span>
                            <p className='para-text'>Get fast load times and exceptional reliability for your store with unlimited bandwidth and storage.</p>
                        </div>
                    </td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center icon'><IoCloseSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Custom domain</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Free SSL certificate</span>
                            <p className='para-text'>Sell as many products and services as you want.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Unlimited web hosting</span>
                            <p className='para-text'>Get fast load times and exceptional reliability for your store with unlimited bandwidth and storage.</p>
                        </div>
                    </td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center icon'><IoCloseSharp /></td>
                </tr>
                <tr className='sub-header'>
                    <td>Marketing</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Unlimited contacts</span>
                            <p className='para-text'>Get fast load times and exceptional reliability for your store with unlimited bandwidth and storage.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Customer segmentation</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Shopify Email</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Shopify Forms</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Shopify Inbox</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Marketing automation</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Discount codes</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='sub-header'>
                    <td>Shopify Marketplace Connect</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Connect and list products</span>
                            <p className='para-text'>Get fast load times and exceptional reliability for your store with unlimited bandwidth and storage.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                   
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Import marketplace orders</span>
                            <p className='para-text'>Equip your store with a world-class checkout that lets customers complete purchases with just one click.</p>
                        </div>
                    </td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                    <td className='text-center icon green-tick'><IoCheckmarkSharp /></td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>More than 50 Shopify-synced orders</span>
                            <p className='para-text'>Sell as many products and services as you want.</p>
                        </div>
                    </td>
                    <td className='text-center para-text black'>1% up to $99 USD/mo</td>
                    <td className='text-center para-text black'>1% up to $99 USD/mo</td>
                    <td className='text-center para-text black'>1% up to $99 USD/mo</td>
                    <td className='text-center para-text black'>1% up to $99 USD/mo</td>
                </tr>
                <tr className='table-hover'>
                    <td>
                        <div className='flex-col flex '>
                            <span className='sub-text2'>Unlimited web hosting</span>
                            <p className='para-text'>Get fast load times and exceptional reliability for your store with unlimited bandwidth and storage.</p>
                        </div>
                    </td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center para-text black'>Full-featured</td>
                    <td className='text-center icon'><IoCloseSharp /></td>
                </tr>
            </tbody>
        </table>

    )
}

export default Table