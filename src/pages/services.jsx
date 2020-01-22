import React from "react"
import Layout from "../templates/Layout"

const Service = () => (
  <section id="Service" className="section">
    <div className="service columns is-centered">
      <div className="column is-three-quarters">
        <div className=" columns is-vcentered has-text-centered">
          <div className="column">
            <h2>
              Services<span>_</span>
            </h2>
            <h3>"Being of service to others is what brings true happiness."</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-three-quarters">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="service-tile tile is-child">
              <h3>Web design (UI/UX)</h3>
              <div className="">
                <p>
                  My core business is designing pixel perfect websites and
                  interfaces.
                </p>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="service-tile tile is-child">
              <h3>Web development</h3>
              <div className="">
                <p>
                  I build websites from scratch that the customer can edit
                  themselves.
                </p>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="service-tile tile is-child">
              <h3>Prototyping</h3>
              <div className="">
                <p>
                  I use high fidelity prototypes to learn how your website
                  interacts.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="service-tile tile is-child">
              <h3>Web design (UI/UX)</h3>
              <div className="">
                <p>
                  My core business is designing pixel perfect websites and
                  interfaces.
                </p>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="service-tile tile is-child">
              <h3>Web development</h3>
              <div className="">
                <p>
                  I build websites from scratch that the customer can edit
                  themselves.
                </p>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="service-tile tile is-child">
              <h3>Web development</h3>
              <div className="">
                <p>
                  I build websites from scratch that the customer can edit
                  themselves.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Skills = () => (
  <section id="skills" className="section">
    <div className="skills columns is-centered">
      <div className="column is-three-quarters">
        <div className="skills-header columns is-vcentered has-text-centered">
          <div className="column">
            <h2>
              Skills<span>_</span>
            </h2>
            <h3>
              "I can accept failure, everyone fails at something. But I can’t
              accept not trying."
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-three-quarters">
        <div className="skills-body tile is-ancestor">
          <div className="tile is-parent">
            <div className="skills-tile tile is-child is-2">
              <h3>User experience &#9660;</h3>
            </div>
            <div className="tile is-child is-6">
              The program looks up every word in the database, checks which form
              of it is present and the analysis even detects relations between
              words! Latin-is-Simple.com yet also detects clauses in your
              sentence (ACI, NCI, Ablativus Absolutus, Participium Coniunctum)
              and helps you with the translation.
            </div>
            <div className="tile is-child is-4"></div>
          </div>
        </div>
        <div className="skills-body tile is-ancestor">
          <div className="tile is-parent">
            <a className="skills-tile tile is-child">
              <h3>Front-end &#9660;</h3>
            </a>
          </div>
        </div>
        <div className="skills-body tile is-ancestor">
          <div className="tile is-parent">
            <a className="skills-tile tile is-child">
              <h3>Back-end &#9660;</h3>
            </a>
          </div>
        </div>
        <div className="skills-body tile is-ancestor">
          <div className="tile is-parent">
            <a className="skills-tile tile is-child">
              <h3>Business strategy &#9660;</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default () => (
  <Layout>
    <Service />
    <Skills />
  </Layout>
)
