import React, { useState } from 'react'
import Navebar from './Navebar'

const ViewAll = () => {
  const [data, changedata] = useState(
    [
      { "#": 2, "Book Title": "adn", "Author": "scn", "Published Year": 1234, "Price": 120 },
      { "#": 2, "Book Title": "adn", "Author": "scn", "Published Year": 1234, "Price": 120 },

    ]
  )
  return (
    <div>
      <Navebar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Book Title</th>
          <th scope="col">Author</th>
          <th scope="col">Published Year</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
                  {data.map(
                    (value, index) => {
                      return <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Sherlock Holmes</td>
          <td>Arthur Conan Doyale</td>
          <td>2004</td>
          <td>150</td>
        </tr>
      </tbody>

                    }
                  )
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll