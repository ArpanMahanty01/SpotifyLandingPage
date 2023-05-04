import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Btn from "../components/SpotifyBtn"
import "./HomePage.css"

const Homepage = () => {
  return (<>
    <Navbar />
    <main>
      <section className='section1'>
        <article>
          <div className='s1-container'>
            <div className='s1-image'>
              <svg viewBox='0 0 290 590.58' aria-hidden="true" focusable="false">
                <path d="M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z" fill="#fff"></path>
                <path d="M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z" fill="#231f20"></path>
              </svg>
              <div className="appImage">
                <img src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b"  alt="" />
              </div>
            </div>
            <div className='s1-text'>
              <h1>Play millions of songs and podcasts,for free.</h1>
            <Btn/>
            </div>
          </div>
        </article>
      </section>
      <section className='section2'>
        <article>
          <header>
            <h2>Why Spotify?</h2>
          </header>
          <ul>
            <li className='l1'>
              <div className='l1i'></div>
              <div className='l1t'>
                <p className='l1tp1'>Play your favourites.</p>
                <p className='l1tp2'>Listen to the songs you love, and discover new music and podcasts.</p>
              </div>
            </li>
            <li className='l2'>
              <div className='l2i'></div>
              <div className='l1t'>
                <p className='l1tp1'>Playlists made easy.</p>
                <p className='l1tp2'>We'll help you make playlists. Or enjoy playlists made by music experts.</p>
              </div>
            </li>
            <li className='l3'>
              <div className='l3i'></div>
              <div className='l1t'>
                <p className='l1tp1'>Make it yours.</p>
                <p className='l1tp2'>Tell us what you like, and we'll recommend music for you.</p>
              </div>
            </li>
            <li className='l4'>
            <div className='l4i'></div>
              <div className='l1t'>
                <p className='l1tp1'>Save mobile data.</p>
                <p className='l1tp2'>To use less data when you play music, turn on Data Saver in Settings.</p>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <section className='section3'>
          <article>
            <div className='s3bg'>
              <h2>It's free</h2>
              <h2>No credit card required.</h2>
            </div>
          </article>
      </section>
      <section className='section4'>
        <article>
          <header>
            <h2>Got questions?</h2>
          </header>
          <ul>
            <li>
              <details>
                <summary>
                  <div>How do I create a playlist?</div>
                  <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" class="Svg-ytk21e-0 fJEWJR sc-gVFcvn jrzUMQ"><polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg>
                </summary>
                <p>
                Playlists are a great way to save collections of music, either for your own listening or to share.
                <br />
                <br />
                To create one:
                <br />
                <br />
                1.  Tap Your Library.
                <br />
                2. Tap 
                <strong>CREATE</strong>
                .
                <br />
                3. Give your playlist a name.
                <br />
                4. Start adding songs (and we'll help you along).
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <div>
                  How do I activate Data Saver mode?
                  </div>
                  <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" class="Svg-ytk21e-0 fJEWJR sc-gVFcvn jrzUMQ"><polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg>
                </summary>
                <p>
                1. Tap 
                <strong>Home</strong>
                .
                <br />
                2. Tap 
                <strong>Settings</strong>
                .
                <br />
                3. Tap 
                <strong>Data Saver</strong>
                .
                <br />
                4. Switch on Data Saver.
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary>
                <div>Is it only possible to shuffle play music?</div>
                <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" class="Svg-ytk21e-0 fJEWJR sc-gVFcvn jrzUMQ"><polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg>
                </summary>
                <p>
                <p class="sc-gkCoMD enpFfZ">Any playlist with the shuffle icon will play on shuffle.<br/><br/>Some playlists won't have the shuffle icon, so you can tap any song to play it.</p>
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <div>Where can I find Podcasts?</div>
                  <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" class="Svg-ytk21e-0 fJEWJR sc-gVFcvn jrzUMQ"><polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg>
                  </summary>
                <p>
                <p class="sc-gkCoMD enpFfZ">Tap <strong>Search</strong>. Under <strong>Browse All</strong>, tap Podcasts.</p>
                </p>
              </details>
            </li>
          </ul>
        </article>
      </section>
      <section className='section5'>
        <article>
          <div className='s5' >
          <h2>Ready? Let’s play.</h2>
          <div>
            <Btn/>
          </div>
          </div>
        </article>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Homepage
