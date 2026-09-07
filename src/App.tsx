import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="footer">
        {/* Title Footer & Description Footer */}
        <div className="footer-content">
          <div className="title-footer">
            <h2>AhmadDev</h2>
            {/* bisa dihapus kalau sekiranya butuh divider
              <div className='divider'></div>
            */}
          </div>
          <div className="description-footer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        {/* Link Footer */}
        <div className="link">
          <div className="link-footer">
            <h3>Navigasi Utama</h3>
            {/* bisa dihapus kalau sekiranya butuh divider
              <div className='divider'></div>
            */}
            <div className="item-footer">
              <a href="#home">Home</a>
            </div>
            <div className="item-footer">
              <a href="#about">About</a>
            </div>
            <div className="item-footer">
              <a href="#projects">Projects</a>
            </div>
            <div className="item-footer">
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="social-footer">
            <h3>Sosial Media</h3>
            {/* bisa dihapus kalau sekiranya butuh divider
              <div className='divider'></div>
            */}
            <a href="#github" className="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
                <path d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0" />
              </svg>
              <p>Github</p>
            </a>
            <a href="#instagram" className="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24">
                <path d="M320.3 205c-63.5-.2-115.1 51.2-115.3 114.7S256.2 434.8 319.7 435S434.8 383.8 435 320.3S383.8 205.2 320.3 205m-.6 40.4c41.2-.2 74.7 33.1 74.9 74.3s-33.1 74.7-74.3 74.9s-74.7-33.1-74.9-74.3s33.1-74.7 74.3-74.9m93.4-45.1c0-14.8 12-26.8 26.8-26.8s26.8 12 26.8 26.8s-12 26.8-26.8 26.8s-26.8-12-26.8-26.8m129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M495 452c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1" />
              </svg>
              Instagram
            </a>
            <a href="#linkedin" className="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M4.75 1.875a2.125 2.125 0 1 0 0 4.25a2.125 2.125 0 0 0 0-4.25m-2 6A.125.125 0 0 0 2.625 8v13c0 .069.056.125.125.125h4A.125.125 0 0 0 6.875 21V8a.125.125 0 0 0-.125-.125zm6.5 0A.125.125 0 0 0 9.125 8v13c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-7a1.875 1.875 0 1 1 3.75 0v7c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-8.62c0-2.427-2.11-4.325-4.525-4.106a7.2 7.2 0 0 0-2.169.548l-1.306.56V8a.125.125 0 0 0-.125-.125z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
