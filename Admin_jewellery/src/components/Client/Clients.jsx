import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'antd';

const Clients = () => {

    const navigate = useNavigate();
    const [page, setPage] = useState(1);



    return (
        <div className='p-2 '>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-3xl font-bold'>Clients</h1>
                    <p className='text-sm pl-2 text-gray-300'>Dashboard / <span className='text-blue-400'>Clients</span></p>
                </div>
                <Pagination size="small" total={50} current={page} onChange={(page) => setPage(page)} />

            </div>

            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => {
                                    navigate(`/client_details/1`);
                                }}>Details</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => {
                                    navigate(`/client_details/1`);
                                }}>Details</button>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => {
                                    navigate(`/client_details/1`);
                                }}>Details</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Clients