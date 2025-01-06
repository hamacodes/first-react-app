import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById("root"))


function Header() {
  return (
    <header>
        <img src="src/assets/react.svg" alt="React logo" width="40px" />
      </header>
  );
}

function MainContent() {
  return (
    <main>
        <h1>Reasons I am excited to learn React</h1>
        <ol>
          <li>React is a popular library, so I will be able to fit in with all the cool devs out there!</li>
          <li>I am more likely to get a job as a front end developer if I know React.</li>
        </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
        <small></small>
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}


root.render(
  <Page />
)
