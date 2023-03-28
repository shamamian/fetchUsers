import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [users, setUsers] = useState([])

  const getApiData = async () => {
    const response = await fetch('https://random-data-api.com/api/users/random_user?size=12')
    .then((response) => response.json())

    setUsers(response)
  }

  useEffect(() => {
    getApiData()
  }, [])

  const fetchRandom = () => {
    getApiData()
  }

  return (
    <div className="app">
      <div className="container">
        <div className="container__button">
          <button onClick={fetchRandom}>Fetch Random</button>
        </div>
        <div className="container__users-container">
          {users.map((user) => {
            return (
              <Card
                key={user.id}
                image={user.avatar}
                name={`${user.first_name} ${user.last_name}`}
                job={user.employment.title}
                username={user.username}
                email={user.email}
                phone={user.phone_number}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
