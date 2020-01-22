import React from "react"
import "../styles/styles.scss"
import Layout from "../templates/Layout"

const AboutHeader = () => (
  <section id="AboutHeader" className="section">
    <div className="columns is-centered">
      <div className="column is-three-quarters">
        <div className="columns about__header ">
          <div className="column">
            <h2>Nice to meet you,</h2>
            <h1>
              Greetings
              <br />
              from Ryan<span>_</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-three-quarters">
        <div className="tile is-ancestor">
          <div className="tile is-parent about__header--image"></div>
          <div className="tile is-parent about__header--desc">
            <article className="tile is-child">
              <h1>
                Val
                <br />
                ues.
              </h1>
              <h2>
                Disrupt with the digital innovation. Become a leader you can
                believe in.
              </h2>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const AboutBody = () => (
  <section id="AboutBody" className="section">
    <div className="columns is-centered">
      <div className="column is-three-quarters">
        <div className="tile is-ancestor">
          <div className="tile is-parent about__body--title is-text-centered">
            <article className="tile is-child">
              <h1>User friendly inside,</h1>
              <h2>innovation all around.</h2>
            </article>
          </div>
          <div className="tile is-parent about__body--desc">
            <article className="tile is-child">
              <p>
                Lots of great ideas are ruined by a lack of ambition, but also
                by a lack of distinction between what is beautiful and what is
                useful. This is why we take plenty of time to study your targets
                before suggesting an optimized, realistic user experience. We
                apply our highest standards to every aspect of our process in
                order to make your project an outstanding experience.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const AboutContact = () => (
  <section id="AboutContact" className="section">
    <div className="columns is-centered">
      <div className="column is-two-fifths has-text-centered">
        <div className="about__contact--header">
          <h2>"Ideas, Network, Grow"</h2>
          <h1>It's coffee time!</h1>
        </div>
        <div className="tile is-ancestor about__contact--detail">
          <div className="tile is-parent">
            <article className="tile is-child">
              <h1>Contact</h1>
              <a
                // href="//mailto:hello@gmail.com"
                target="_blank"
                className="link"
              >
                hello@ryanjeon.com
              </a>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child">
              <h1>Social</h1>
              <ul>
                <li>
                  <a
                    // href="https://www.linkedin.com/in/ryandhjeon"
                    target="_blank"
                    className="link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    // href="https://www.instagram.com/royalhoney__"
                    target="_blank"
                    className="link"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    // href="https://www.facebook.com/ryandhjeon"
                    target="_blank"
                    className="link"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    // href="https://www.github.com/ryandhjeon"
                    target="_blank"
                    className="link"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default () => (
  <Layout>
    <AboutHeader />
    <AboutBody />
    <AboutContact />
  </Layout>
)
