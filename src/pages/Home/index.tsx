import './styles.css'

const Home = () => {
  return (
    <section className="section-container">
      <main>
        <div className="main-content-left">
          <div className="main-content-left-buttom-top">
            <img src="../../../src/assets/images/gitbotao.png" alt="" />
            <div className="main-content-left-buttom-top-text">
              <h1>Github Universe: A global developer event</h1>
              <p id="parag">Register now to get early bird passes 20% off.</p>
            </div>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </a>
          </div>
          <div className="main-content-left-text">
            <h2>Let's build from here,</h2>
            <h2>together.</h2>
            <p>
              The complete developer platform to build, scale, and deliver
              secure software.
            </p>
          </div>
          <div className="main-content-left-button">
            <span>Iniciar</span>
          </div>

          <hr />
        </div>
        <div className="main-content-right"></div>
      </main>
      <div className="main-content-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1680 40"
        >
          <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
        </svg>
        <div className="main-content-bottom-image">
          <div className="main-content-bottom-avatar">
            <img src="../../../src/assets/images/avatar.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
    /*
        <div className="home-container">
            <Link to="/cepsearch">
                <button className="btn btn-primary btn-lg start-button">Iniciar</button>
            </Link>
        </div>
        */
  )
}

export default Home
