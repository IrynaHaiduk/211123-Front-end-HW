
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import About from './components/About/About';
import { useEffect, useState } from 'react';
import Post from './components/Post/Post';


function App() {
  const [isRendered, setIsRendered] = useState(false);

  function handleChange() {
    setIsRendered(!isRendered);
  }

  useEffect(() => {
    handleChange();
  })


  return (
    <>
      <Header />
      <main>
        <Posts />
        <About/>
        <button onClick={handleChange}>Render</button>
        {
          isRendered && <Post title="renderTitle" description="render Description"/>
        }
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
