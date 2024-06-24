import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'antd';


const Vendor = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);



    return (
        <div className='p-2 '>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-3xl font-bold'>Vendors</h1>
                    <p className='text-sm pl-2 text-gray-300'>Dashboard / <span className='text-blue-400'>Vendors</span></p>
                </div>
                <Pagination size="small" total={50} current={page} onChange={(page) => setPage(page)} />
            </div>


            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th className='text-center'>Status</th>
                            <th>City</th>
                            <th>Users</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        <tr>
                            <td>
                                1
                            </td>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-10 h-10">
                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>

                            <td className='flex justify-center items-center'>
                                <span className='badge badge-success  absolute animate-ping'></span>
                                <span className='badge badge-success text-white'>Active</span>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm p-1">Desktop Support Technician</span>
                            </td>
                            <td>100k</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => {
                                    navigate(`/vendor_details/1`);
                                }}>Details</button>
                            </th>
                        </tr>

                        {/* row 1 */}
                        <tr>
                            <td>
                                2
                            </td>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-10 h-10">
                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-1@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>

                            <td className='flex justify-center items-center'>
                                <span className='badge badge-success  absolute animate-ping'></span>
                                <span className='badge badge-success text-white'>Active</span>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm p-1">Desktop Support Technician</span>
                            </td>
                            <td>100k</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => {
                                    navigate(`/vendor_details`)
                                }}>Details</button>
                            </th>
                        </tr>

                        {/* row 1 */}
                        <tr>
                            <td>
                                3
                            </td>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-10 h-10">
                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>

                            <td className='flex justify-center items-center'>
                                <span className='badge badge-error text-white'>InActive</span>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm p-1">Desktop Support Technician</span>
                            </td>
                            <td>100k</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => {
                                    navigate(`/vendor_details`)
                                }}>Details</button>
                            </th>
                        </tr>

                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Vendor