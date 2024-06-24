import React, { useState } from 'react'
import { Pagination } from 'antd';

const Client_Details = () => {
  const [activeBtn, setActiveBtn] = useState('1');
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});


  return (
    <div className=''>
      <div>
        <p className='text-sm pl-2 text-gray-300'>Dashboard / <span className='text-blue-400'>Client Details</span></p>
      </div>

      {/* profile img */}
      <div className='min-h-[100px] relative bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-end rounded mb-[50px]'>

        <div className=' bg-purple-400 relative'>
          <div className='absolute top-[-50px] left-[30px] w-[100px] h-[100px] bg-white rounded-full  p-2 '>
            <div className='w-full h-full relative'>
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user-img" />
              <span className='w-[20px] h-[20px] bg-green-500 rounded-full absolute bottom-0 right-0 shadow'></span>
            </div>
          </div>

        </div>

        {/* package */}
        <div className='absolute top-[-10px] right-[-10px] text-sm text-white bg-gradient-to-r from-pink-500 to-yellow-500 p-1 rounded '>PREMIMUM PACKAGE</div>

        {/* stars */}
        <div className='absolute bottom-[-30px] right-[20px]'>
          <div className='flex gap-2'>
            <i class="fa-solid fa-star text-yellow-300" />
            <i class="fa-solid fa-star  text-yellow-300" />
            <i class="fa-solid fa-star  text-yellow-300" />
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
      </div>


      {/* profile details */}
      <div className='p-2'>
        <h1 className='text-2xl font-bold'>Client Name</h1>
        <div className='text-sm text-gray-400 pl-3'><i class="fa-solid fa-map-pin"></i> user location details </div>
      </div>

      <div className='mt-[40px]'>
        <div className='flex gap-2 px-6 select-none'>
          <div onClick={() => { setActiveBtn('1'), setPage(1) }} className={`${activeBtn === '1' ? 'bg-gray-300 text-purple-700' : 'shadow'}   border border-gray-300 rounded-t-xl p-2  w-[150px] text-center flex gap-2 items-center  justify-center`}>Orders <svg fill="none" height="24" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="#7B1FA2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg></div>
          <div onClick={() => { setActiveBtn('2'), setPage(1) }} className={`${activeBtn === '2' ? 'bg-gray-300 text-purple-700' : 'shadow'}  border border-gray-300  rounded-t-xl p-2  w-[150px] text-center`}>Transactions <span className=' text-purple-700'>&#x20B9;</span></div>
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

              : activeBtn === "2" ? (
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
              ) :
                <div> </div>
          }
        </div>
      </div>

    </div>
  )
}

export default Client_Details