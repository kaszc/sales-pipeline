import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://localhost:4000/users')
    .then(users => setUsers(users.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <div className='w-100 vh-100 d-flex justify-content-center aling-items-center'>
        <div className='w-50'>
          <table className='table'>
            <thead>
              <tr>
                <th>
                  Vorname
                </th>
                <th>
                  Nachname
                </th>
                <th>
                  Straße
                </th>
                <th>
                  Stadt
                </th>
                <th>
                  Land
                </th>
                <th>
                  Telefon-Nr.
                </th>
                <th>
                  E-Mail
                </th>
                <th>
                  Sales Status
                </th>
              </tr>
            </thead>
            <tbody>
              { users.map(user => 
                  <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.street}</td>
                    <td>{user.city}</td>
                    <td>{user.country}</td>
                    <td>{user.phone}</td>
                    <td>{user.emailAddress}</td>
                    <td>{user.salesStatus}</td>
                  </tr>
                ) }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
