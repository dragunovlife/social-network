import React from 'react';
import './App.css';



function App() {
  return (
    <div className='app-wrapper'>

    <header className='header'>
      <img src="https://avatars.mds.yandex.net/get-pdb/236760/db1cde15-b660-4984-a34e-570f1fc48587/s1200" />
    </header>

    <nav className="nav">
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>

    <div className="content">
        <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/1736242/a7f9c41c-4eb1-4870-8711-0e241ffed085/s1200" />
        </div>

        <div>
          ava+description
        </div>

        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>

    </div>

    </div>
  );
}

export default App;
