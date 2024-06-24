import React, { useEffect, useState } from 'react'
import { Pagination } from 'antd';


const Vendor_Details = () => {

  const [activeBtn, setActiveBtn] = useState('1');
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});

  // fetch orders
  const fetchOrders = async () => {
    try {
      const res = {};
      if (res?.data) {
        setData(res?.data)
      }

    } catch (error) {
      console.log(error);
    }
  }

  // fetch transactions
  const fetchTransactions = async () => {
    try {
      const res = {};
      if (res?.data) {
        setData(res?.data)
      }

    } catch (error) {
      console.log(error);
    }
  }

  // fetch rent
  const fetchRent = async () => {
    try {
      const res = {};
      if (res?.data) {
        setData(res?.data)
      }

    } catch (error) {
      console.log(error);
    }
  }

  // fetch products
  const fetchProducts = async () => {
    try {
      const res = {};
      if (res?.data) {
        setData(res?.data)
      }

    } catch (error) {
      console.log(error);
    }
  }


  // useEffect(() => {
  //   if (activeBtn === 1) {
  //     fetchOrders();
  //   } else if (activeBtn === 2) {
  //     fetchTransactions()
  //   } else if (activeBtn === 3) {
  //     fetchRent()
  //   } else if (activeBtn === 4) {
  //     fetchProducts()
  //   }else if (activeBtn === 5) {

  // }
  // }, [page])

  return (
    <div className=''>
      <div>
        <h1 className='text-3xl font-bold'>Durgesh Jewellers</h1>
        <p className='text-sm pl-2 text-gray-300'>Dashboard / <span className='text-blue-400'>Vendor Details</span></p>
      </div>
      {/* vendor details */}
      <div className='bg-red-600 rounded flex justify-around bg-gray-200 p-3'>

        <div className='relative bg-red-700 w-[250px]'>
          <img className=' rounded-xl border border-[10px] border-red-600' src="https://img.freepik.com/premium-photo/portrait-photography_168501-7458.jpg" alt="Avatar Tailwind CSS Component" />
          <div className='absolute left-0 bottom-0 bg-red-600 text-white font-bold p-2 '>
            Inactive
          </div>
        </div>

        <div className='bg-white min-h-full rounded-xl p-3 min-w-[250px]'>
          <h1 className='text-xl font-bold'>Vendor Name</h1>
          <p className='text-sm pl-2 text-gray-300'>Vendor other details here</p>
          <table>
            <tr>
              <td className='p-2'>ROLE</td>
              <td className='p-2 text-gray-400'>Vendor</td>
            </tr>
            <tr>
              <td className='p-2'>TEAMS</td>
              <td className='p-2 text-gray-400'>Operations</td>
            </tr>
            <tr>
              <td className='p-2'>LOCATION</td>
              <td className='p-2 text-gray-400'>St. Paul, MN</td>
            </tr>
            <tr>
              <td className='p-2'>STATUS</td>
              <td className='p-2 text-gray-400'> Checked in today</td>
            </tr>
          </table>
        </div>

        <div className='bg-white min-h-full rounded-xl p-3 min-w-[250px] '>
          <b>Working onsite</b>
          <div>
            Links from Check-ins
          </div>
          <div>
            Team Offsite Plan
          </div>
          <div>Coordinate transportation</div>
          <div>New Hire Guide 2022</div>
          <div>Distribute safety guidelines</div>
        </div>

      </div>



      {/* vendor other details */}

      <div className='mt-[40px]'>
        <div className='flex gap-2 px-6 select-none'>
          <div onClick={() => { setActiveBtn('1'), setPage(1) }} className={`${activeBtn === '1' ? 'bg-gray-300 text-purple-700' : 'shadow'}   border border-gray-300 rounded-t-xl p-2  w-[150px] text-center flex gap-2 items-center  justify-center`}>Orders <svg fill="none" height="24" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="#7B1FA2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg></div>
          <div onClick={() => { setActiveBtn('2'), setPage(1) }} className={`${activeBtn === '2' ? 'bg-gray-300 text-purple-700' : 'shadow'}  border border-gray-300  rounded-t-xl p-2  w-[150px] text-center`}>Transactions <span className=' text-purple-700'>&#x20B9;</span></div>
          <div onClick={() => { setActiveBtn('3'), setPage(1) }} className={`${activeBtn === '3' ? 'bg-gray-300 text-purple-700' : 'shadow'}  border border-gray-300  rounded-t-xl p-2  w-[150px] text-center flex gap-2 items-center justify-center`}>Rent History
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="12" height="12" stroke="#7B1FA2" >
              <g data-name="Layer 15" id="Layer_15">
                <path className="cls-1" d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z" />
                <path className="cls-1" d="M20.24,21.66l-4.95-4.95A1,1,0,0,1,15,16V8h2v7.59l4.66,4.65Z" />
              </g>
            </svg>
          </div>
          <div onClick={() => { setActiveBtn('4'), setPage(1) }} className={`${activeBtn === '4' ? 'bg-gray-300 text-purple-700' : 'shadow'}  border border-gray-300  rounded-t-xl p-2  w-[150px] text-center flex gap-2 items-center justify-center`}>Products
            <svg height="12" version="1.1" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                <g id="Navigation-Icons" transform="translate(-325.000000, -80.000000)">
                  <g id="Group" transform="translate(325.000000, 80.000000)">
                    <polygon fill="#FFFFFF" fillOpacity="0.01" fillRule="nonzero" id="Path" points="24 0 0 0 0 24 24 24" />
                    <polygon id="Path" points="22 7 12 2 2 7 2 17 12 22 22 17" stroke="#7B1FA2" strokeLinejoin="round" strokeWidth="1.5" />
                    <line id="Path" stroke="#7B1FA2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="2" x2="12" y1="7" y2="12" />
                    <line id="Path" stroke="#7B1FA2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="12" x2="12" y1="22" y2="12" />
                    <line id="Path" stroke="#7B1FA2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="22" x2="12" y1="7" y2="12" />
                    <line id="Path" stroke="#7B1FA2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="17" x2="7" y1="4.5" y2="9.5" />
                  </g>
                </g>
              </g>
            </svg>

          </div>

          <div onClick={() => { setActiveBtn('5'), setPage(1) }} className={`${activeBtn === '5' ? 'bg-gray-300 text-purple-700' : 'shadow'}  border border-gray-300  rounded-t-xl p-2  w-[150px] text-center flex gap-2 items-center justify-center`}>Referrals &#x2042;</div>
        </div>

        {/* tables */}
        <div className='p-6 min-h-[300px] bg-gray-300  rounded'>
          {
            activeBtn === '1' ?
              <div className=''>
                <div className='flex gap-4 border-b pb-4 border-black'>
                  <div className=' w-[150px] border border-black rounded-xl p-2 '>
                    <h1>Total Price</h1>
                    <div className='text-3xl'>
                      1500 &#8377;
                    </div>
                  </div>

                  <div className=' w-[150px] border border-black rounded-xl p-2 '>
                    <h1>Total Items</h1>
                    <div className='text-3xl'>
                      3
                    </div>
                  </div>

                  <div className=' w-[150px] border border-black rounded-xl p-2 '>
                    <h1>Total quantity</h1>
                    <div className='text-3xl'>
                      3
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className='text-xl '>Order Lists</h1>
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product</th>
                          <th>MRP</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>Cy Ganderton</td>
                          <td>500 &#8377;</td>
                          <td>1</td>
                          <td>500 &#8377;</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>2</th>
                          <td>Hart Hagerty</td>
                          <td>500 &#8377;</td>
                          <td>1</td>
                          <td>500 &#8377;</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>3</th>
                          <td>Brice Swyre</td>
                          <td>500 &#8377;</td>
                          <td>1</td>
                          <td>500 &#8377;</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className='border-t border-red-400 text-red-500'>
                          <td colSpan={3}></td>
                          <td>3</td>
                          <td>1500 &#8377;</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              : activeBtn === '2' ? (
                <div>
                  <div className='flex justify-end p-2'>
                    <Pagination size="small" total={50} current={page} onChange={(page) => setPage(page)} />
                  </div>
                  <div className="overflow-x-auto">
                    <table className="table table-xs">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Job</th>
                          <th>company</th>
                          <th>location</th>
                          <th>Last Login</th>
                          <th>Favorite Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>Cy Ganderton</td>
                          <td>Quality Control Specialist</td>
                          <td>Littel, Schaden and Vandervort</td>
                          <td>Canada</td>
                          <td>12/16/2020</td>
                          <td>Blue</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Hart Hagerty</td>
                          <td>Desktop Support Technician</td>
                          <td>Zemlak, Daniel and Leannon</td>
                          <td>United States</td>
                          <td>12/5/2020</td>
                          <td>Purple</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Brice Swyre</td>
                          <td>Tax Accountant</td>
                          <td>Carroll Group</td>
                          <td>China</td>
                          <td>8/15/2020</td>
                          <td>Red</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Marjy Ferencz</td>
                          <td>Office Assistant I</td>
                          <td>Rowe-Schoen</td>
                          <td>Russia</td>
                          <td>3/25/2021</td>
                          <td>Crimson</td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>Yancy Tear</td>
                          <td>Community Outreach Specialist</td>
                          <td>Wyman-Ledner</td>
                          <td>Brazil</td>
                          <td>5/22/2020</td>
                          <td>Indigo</td>
                        </tr>
                        <tr>
                          <th>6</th>
                          <td>Irma Vasilik</td>
                          <td>Editor</td>
                          <td>Wiza, Bins and Emard</td>
                          <td>Venezuela</td>
                          <td>12/8/2020</td>
                          <td>Purple</td>
                        </tr>
                        <tr>
                          <th>7</th>
                          <td>Meghann Durtnal</td>
                          <td>Staff Accountant IV</td>
                          <td>Schuster-Schimmel</td>
                          <td>Philippines</td>
                          <td>2/17/2021</td>
                          <td>Yellow</td>
                        </tr>
                        <tr>
                          <th>8</th>
                          <td>Sammy Seston</td>
                          <td>Accountant I</td>
                          <td>O'Hara, Welch and Keebler</td>
                          <td>Indonesia</td>
                          <td>5/23/2020</td>
                          <td>Crimson</td>
                        </tr>
                        <tr>
                          <th>9</th>
                          <td>Lesya Tinham</td>
                          <td>Safety Technician IV</td>
                          <td>Turner-Kuhlman</td>
                          <td>Philippines</td>
                          <td>2/21/2021</td>
                          <td>Maroon</td>
                        </tr>
                        <tr>
                          <th>10</th>
                          <td>Zaneta Tewkesbury</td>
                          <td>VP Marketing</td>
                          <td>Sauer LLC</td>
                          <td>Chad</td>
                          <td>6/23/2020</td>
                          <td>Green</td>
                        </tr>
                        <tr>
                          <th>11</th>
                          <td>Andy Tipple</td>
                          <td>Librarian</td>
                          <td>Hilpert Group</td>
                          <td>Poland</td>
                          <td>7/9/2020</td>
                          <td>Indigo</td>
                        </tr>
                        <tr>
                          <th>12</th>
                          <td>Sophi Biles</td>
                          <td>Recruiting Manager</td>
                          <td>Gutmann Inc</td>
                          <td>Indonesia</td>
                          <td>2/12/2021</td>
                          <td>Maroon</td>
                        </tr>
                        <tr>
                          <th>13</th>
                          <td>Florida Garces</td>
                          <td>Web Developer IV</td>
                          <td>Gaylord, Pacocha and Baumbach</td>
                          <td>Poland</td>
                          <td>5/31/2020</td>
                          <td>Purple</td>
                        </tr>
                        <tr>
                          <th>14</th>
                          <td>Maribeth Popping</td>
                          <td>Analyst Programmer</td>
                          <td>Deckow-Pouros</td>
                          <td>Portugal</td>
                          <td>4/27/2021</td>
                          <td>Aquamarine</td>
                        </tr>
                        <tr>
                          <th>15</th>
                          <td>Moritz Dryburgh</td>
                          <td>Dental Hygienist</td>
                          <td>Schiller, Cole and Hackett</td>
                          <td>Sri Lanka</td>
                          <td>8/8/2020</td>
                          <td>Crimson</td>
                        </tr>

                      </tbody>

                    </table>
                  </div>
                </div>
              ) : activeBtn === '3' ?
                (
                  <div>
                    <div className='flex justify-end p-2'>
                      <Pagination size="small" total={50} current={page} onChange={(page) => setPage(page)} />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="table table-xs">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>United States</td>
                            <td>12/5/2020</td>
                            <td>Purple</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                            <td>China</td>
                            <td>8/15/2020</td>
                            <td>Red</td>
                          </tr>
                          <tr>
                            <th>4</th>
                            <td>Marjy Ferencz</td>
                            <td>Office Assistant I</td>
                            <td>Rowe-Schoen</td>
                            <td>Russia</td>
                            <td>3/25/2021</td>
                            <td>Crimson</td>
                          </tr>
                          <tr>
                            <th>5</th>
                            <td>Yancy Tear</td>
                            <td>Community Outreach Specialist</td>
                            <td>Wyman-Ledner</td>
                            <td>Brazil</td>
                            <td>5/22/2020</td>
                            <td>Indigo</td>
                          </tr>
                          <tr>
                            <th>6</th>
                            <td>Irma Vasilik</td>
                            <td>Editor</td>
                            <td>Wiza, Bins and Emard</td>
                            <td>Venezuela</td>
                            <td>12/8/2020</td>
                            <td>Purple</td>
                          </tr>
                          <tr>
                            <th>7</th>
                            <td>Meghann Durtnal</td>
                            <td>Staff Accountant IV</td>
                            <td>Schuster-Schimmel</td>
                            <td>Philippines</td>
                            <td>2/17/2021</td>
                            <td>Yellow</td>
                          </tr>
                          <tr>
                            <th>8</th>
                            <td>Sammy Seston</td>
                            <td>Accountant I</td>
                            <td>O'Hara, Welch and Keebler</td>
                            <td>Indonesia</td>
                            <td>5/23/2020</td>
                            <td>Crimson</td>
                          </tr>
                          <tr>
                            <th>9</th>
                            <td>Lesya Tinham</td>
                            <td>Safety Technician IV</td>
                            <td>Turner-Kuhlman</td>
                            <td>Philippines</td>
                            <td>2/21/2021</td>
                            <td>Maroon</td>
                          </tr>
                          <tr>
                            <th>10</th>
                            <td>Zaneta Tewkesbury</td>
                            <td>VP Marketing</td>
                            <td>Sauer LLC</td>
                            <td>Chad</td>
                            <td>6/23/2020</td>
                            <td>Green</td>
                          </tr>
                          <tr>
                            <th>11</th>
                            <td>Andy Tipple</td>
                            <td>Librarian</td>
                            <td>Hilpert Group</td>
                            <td>Poland</td>
                            <td>7/9/2020</td>
                            <td>Indigo</td>
                          </tr>
                          <tr>
                            <th>12</th>
                            <td>Sophi Biles</td>
                            <td>Recruiting Manager</td>
                            <td>Gutmann Inc</td>
                            <td>Indonesia</td>
                            <td>2/12/2021</td>
                            <td>Maroon</td>
                          </tr>
                          <tr>
                            <th>13</th>
                            <td>Florida Garces</td>
                            <td>Web Developer IV</td>
                            <td>Gaylord, Pacocha and Baumbach</td>
                            <td>Poland</td>
                            <td>5/31/2020</td>
                            <td>Purple</td>
                          </tr>
                          <tr>
                            <th>14</th>
                            <td>Maribeth Popping</td>
                            <td>Analyst Programmer</td>
                            <td>Deckow-Pouros</td>
                            <td>Portugal</td>
                            <td>4/27/2021</td>
                            <td>Aquamarine</td>
                          </tr>
                          <tr>
                            <th>15</th>
                            <td>Moritz Dryburgh</td>
                            <td>Dental Hygienist</td>
                            <td>Schiller, Cole and Hackett</td>
                            <td>Sri Lanka</td>
                            <td>8/8/2020</td>
                            <td>Crimson</td>
                          </tr>

                        </tbody>

                      </table>
                    </div>
                  </div>
                )
                : activeBtn === '4' ?
                  (
                    <div>
                      <div className='flex justify-end p-2'>
                        <Pagination size="small" total={50} current={page} onChange={(page) => setPage(page)} />
                      </div>
                      <div className="overflow-x-auto">
                        <table className="table table-xs">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Job</th>
                              <th>company</th>
                              <th>location</th>
                              <th>Last Login</th>
                              <th>Favorite Color</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>1</th>
                              <td>Cy Ganderton</td>
                              <td>Quality Control Specialist</td>
                              <td>Littel, Schaden and Vandervort</td>
                              <td>Canada</td>
                              <td>12/16/2020</td>
                              <td>Blue</td>
                            </tr>
                            <tr>
                              <th>2</th>
                              <td>Hart Hagerty</td>
                              <td>Desktop Support Technician</td>
                              <td>Zemlak, Daniel and Leannon</td>
                              <td>United States</td>
                              <td>12/5/2020</td>
                              <td>Purple</td>
                            </tr>
                            <tr>
                              <th>3</th>
                              <td>Brice Swyre</td>
                              <td>Tax Accountant</td>
                              <td>Carroll Group</td>
                              <td>China</td>
                              <td>8/15/2020</td>
                              <td>Red</td>
                            </tr>
                            <tr>
                              <th>4</th>
                              <td>Marjy Ferencz</td>
                              <td>Office Assistant I</td>
                              <td>Rowe-Schoen</td>
                              <td>Russia</td>
                              <td>3/25/2021</td>
                              <td>Crimson</td>
                            </tr>
                            <tr>
                              <th>5</th>
                              <td>Yancy Tear</td>
                              <td>Community Outreach Specialist</td>
                              <td>Wyman-Ledner</td>
                              <td>Brazil</td>
                              <td>5/22/2020</td>
                              <td>Indigo</td>
                            </tr>
                            <tr>
                              <th>6</th>
                              <td>Irma Vasilik</td>
                              <td>Editor</td>
                              <td>Wiza, Bins and Emard</td>
                              <td>Venezuela</td>
                              <td>12/8/2020</td>
                              <td>Purple</td>
                            </tr>
                            <tr>
                              <th>7</th>
                              <td>Meghann Durtnal</td>
                              <td>Staff Accountant IV</td>
                              <td>Schuster-Schimmel</td>
                              <td>Philippines</td>
                              <td>2/17/2021</td>
                              <td>Yellow</td>
                            </tr>
                            <tr>
                              <th>8</th>
                              <td>Sammy Seston</td>
                              <td>Accountant I</td>
                              <td>O'Hara, Welch and Keebler</td>
                              <td>Indonesia</td>
                              <td>5/23/2020</td>
                              <td>Crimson</td>
                            </tr>
                            <tr>
                              <th>9</th>
                              <td>Lesya Tinham</td>
                              <td>Safety Technician IV</td>
                              <td>Turner-Kuhlman</td>
                              <td>Philippines</td>
                              <td>2/21/2021</td>
                              <td>Maroon</td>
                            </tr>
                            <tr>
                              <th>10</th>
                              <td>Zaneta Tewkesbury</td>
                              <td>VP Marketing</td>
                              <td>Sauer LLC</td>
                              <td>Chad</td>
                              <td>6/23/2020</td>
                              <td>Green</td>
                            </tr>
                            <tr>
                              <th>11</th>
                              <td>Andy Tipple</td>
                              <td>Librarian</td>
                              <td>Hilpert Group</td>
                              <td>Poland</td>
                              <td>7/9/2020</td>
                              <td>Indigo</td>
                            </tr>
                            <tr>
                              <th>12</th>
                              <td>Sophi Biles</td>
                              <td>Recruiting Manager</td>
                              <td>Gutmann Inc</td>
                              <td>Indonesia</td>
                              <td>2/12/2021</td>
                              <td>Maroon</td>
                            </tr>
                            <tr>
                              <th>13</th>
                              <td>Florida Garces</td>
                              <td>Web Developer IV</td>
                              <td>Gaylord, Pacocha and Baumbach</td>
                              <td>Poland</td>
                              <td>5/31/2020</td>
                              <td>Purple</td>
                            </tr>
                            <tr>
                              <th>14</th>
                              <td>Maribeth Popping</td>
                              <td>Analyst Programmer</td>
                              <td>Deckow-Pouros</td>
                              <td>Portugal</td>
                              <td>4/27/2021</td>
                              <td>Aquamarine</td>
                            </tr>
                            <tr>
                              <th>15</th>
                              <td>Moritz Dryburgh</td>
                              <td>Dental Hygienist</td>
                              <td>Schiller, Cole and Hackett</td>
                              <td>Sri Lanka</td>
                              <td>8/8/2020</td>
                              <td>Crimson</td>
                            </tr>

                          </tbody>

                        </table>
                      </div>
                    </div>
                  )
                  : (
                    <div className='flex justify-between'>
                      <div className="overflow-x-auto">
                        <div className=' flex justify-between'>
                          <div className='text-2xl font-bold'>
                            USERS
                          </div>
                          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                              <div className="w-6">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                              </div>
                            </div>
                            <div className="avatar">
                              <div className="w-6">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                              </div>
                            </div>
                            <div className="avatar">
                              <div className="w-6">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                              </div>
                            </div>
                            <div className="avatar placeholder">
                              <div className="bg-neutral text-neutral-content w-6">
                                <span>+99</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <table className="table">
                          {/* head */}
                          <thead>
                            <tr>
                              <th></th>
                              <th>Name</th>
                              <th>Job</th>
                              <th>Favorite Color</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th>1</th>
                              <td>Cy Ganderton</td>
                              <td>Quality Control Specialist</td>
                              <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>2</th>
                              <td>Hart Hagerty</td>
                              <td>Desktop Support Technician</td>
                              <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              <th>3</th>
                              <td>Brice Swyre</td>
                              <td>Tax Accountant</td>
                              <td>Red</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>4</th>
                              <td>Hart Hagerty</td>
                              <td>Desktop Support Technician</td>
                              <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              <th>5</th>
                              <td>Brice Swyre</td>
                              <td>Tax Accountant</td>
                              <td>Red</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className='flex justify-end p-2'>
                          <Pagination size="small" total={50} current={page} onChange={(page) => setPage(page)} />
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <div className=' flex justify-between'>
                          <div className='text-2xl font-bold'>
                            Vendors
                          </div>
                          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                              <div className="w-6">
                                <img src="https://img.daisyui.com/tailwind-css-component-profile-1@56w.png" />
                              </div>
                            </div>
                            <div className="avatar">
                              <div className="w-6">
                                <img src="https://img.daisyui.com/tailwind-css-component-profile-1@56w.png" />
                              </div>
                            </div>
                            <div className="avatar">
                              <div className="w-6">
                                <img src="https://img.daisyui.com/tailwind-css-component-profile-1@56w.png" />
                              </div>
                            </div>
                            <div className="avatar placeholder">
                              <div className="bg-neutral text-neutral-content w-6">
                                <span>+99</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <table className="table max-h-[400px]">
                          {/* head */}
                          <thead>
                            <tr>
                              <th></th>
                              <th>Name</th>
                              <th>Job</th>
                              <th>Favorite Color</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th>1</th>
                              <td>Cy Ganderton</td>
                              <td>Quality Control Specialist</td>
                              <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>2</th>
                              <td>Hart Hagerty</td>
                              <td>Desktop Support Technician</td>
                              <td>Purple</td>
                            </tr>
                            <tr>
                              <th>3</th>
                              <td>Hart Hagerty</td>
                              <td>Desktop Support Technician</td>
                              <td>Purple</td>
                            </tr>


                            <tr>
                              <th>4</th>
                              <td>Hart Hagerty</td>
                              <td>Desktop Support Technician</td>
                              <td>Purple</td>
                            </tr>

                            {/* row 3 */}
                            <tr>
                              <th>5</th>
                              <td>Brice Swyre</td>
                              <td>Tax Accountant</td>
                              <td>Red</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className='flex justify-end p-2'>
                          <Pagination size="small" total={50} current={page} onChange={(page) => setPage(page)} />
                        </div>
                      </div>
                    </div>
                  )
          }
        </div>
      </div>

    </div>
  )
}

export default Vendor_Details