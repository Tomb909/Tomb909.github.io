import { useEffect, useState } from 'react'

const EMAIL = 'thomasbarker909@gmail.com'
const GITHUB = 'https://github.com/Tomb909'
const LINKEDIN = 'https://www.linkedin.com/in/thomas-barker-06834128b'

function App() {
  const [heroCopied, setHeroCopied] = useState(false)
  const [tileCopied, setTileCopied] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  function copyEmail(set: (v: boolean) => void) {
    navigator.clipboard.writeText(EMAIL).then(() => {
      set(true)
      setTimeout(() => set(false), 1600)
    })
  }

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#top">
            thomas<span className="p">@</span>barker<span className="p"> ~ %</span>
          </a>
          <nav className="links">
            <a href="#projects">projects</a>
            <a href="#work">work</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
            <a className="cta" href={GITHUB} target="_blank" rel="noopener">
              github →
            </a>
          </nav>
        </div>
      </header>

      <span id="top" />
      <main className="wrap pad">
        <div className="grid">
          {/* hero */}
          <section className="tile hero texture">
            <div className="top">
              <span className="path">
                ~/<b>thomas-barker</b>
              </span>
              <span className="chip">
                <span className="led" />
                open to summer 2027 internships
              </span>
            </div>
            <div>
              <div className="name">
                Thomas Barker<span className="dot">.</span>
              </div>
              <div className="sub">
                computer science @ st andrews · software engineering
                <span className="car" />
              </div>
              <p className="lead">
                I build software that ships and systems that hold up.
                I'm in my penultimate year, studying computer science at St Andrews.{' '}
                <b>Five summers of production work</b>, plus emulators and
                market-data tools built from scratch to understand them.
              </p>
              <div className="actions">
                <a className="act primary" href={`mailto:${EMAIL}`}>
                  Email me <span className="a">→</span>
                </a>
                <button
                  className={`act${heroCopied ? ' copied' : ''}`}
                  type="button"
                  onClick={() => copyEmail(setHeroCopied)}
                >
                  {heroCopied ? 'Copied ✓' : 'Copy email'}
                </button>
                <a className="act" href={GITHUB} target="_blank" rel="noopener">
                  GitHub <span className="a">↗</span>
                </a>
                <a className="act" href={LINKEDIN} target="_blank" rel="noopener">
                  LinkedIn <span className="a">↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* quick scan card */}
          <aside className="tile idcard">
            <div className="eyebrow">// quick scan</div>
            <dl className="spec">
              <div className="r">
                <dt>i build</dt>
                <dd>Full-stack · systems · data pipelines</dd>
              </div>
              <div className="r">
                <dt>production</dt>
                <dd>most recent summer at <a href="https://actrixft.com" target="_blank" rel="noopener">Actrix Financial Technology</a></dd>
                <dd>previous 4 summers at <a href="https://micronclean.com" target="_blank" rel="noopener">Micronclean</a></dd>
              </div>
              <div className="r">
                <dt>study</dt>
                <dd>MSci CS · St Andrews · 2024-28</dd>
              </div>
              <div className="r">
                <dt>status</dt>
                <dd>
                  <span className="ok">●</span> Internships summer '27
                </dd>
              </div>
            </dl>
          </aside>

          {/* stats */}
          <div className="tile lift stat">
            <div className="num">
              180<span className="u">h</span>
            </div>
            <div className="lbl">saved per year - inventory dashboard at Micronclean</div>
          </div>
          <div className="tile lift stat">
            <div className="num">
              3<span className="u">×</span>
            </div>
            <div className="lbl">software engineering summers, production code</div>
          </div>
          <div className="tile lift stat">
            <div className="num">
              1<span className="u">st</span>
            </div>
            <div className="lbl">on track for a first - direct entry, St Andrews</div>
          </div>
          <div className="tile lift stat">
            <div className="num">60</div>
            <div className="lbl">daily users on the tooling I shipped</div>
          </div>

          {/* projects */}
          <div className="head-row reveal" id="projects">
            <span className="pr">~ %</span>
            <h2>Selected projects</h2>
            <span className="rule" />
          </div>
          <a
            className="tile lift proj reveal"
            href="https://github.com/Tomb909/Market-Data-Server"
            target="_blank"
            rel="noopener"
          >
            <div className="ptop">
              <span className="lang">
                <span className="sq" style={{ background: '#8EC07C' }} />
                python
              </span>
              <span className="arr">→</span>
            </div>
            <h3>market-data-server</h3>
            <p>
              US Treasury yields (FRED) and UK gilt data (Bank of England) into SQLite,
              served via a Flask API and Streamlit UI — with yield-curve construction
              using Nelson-Siegel-Svensson interpolation.
            </p>
            <div className="tags">
              <span className="tag">Flask</span>
              <span className="tag">SQLite</span>
              <span className="tag">Streamlit</span>
              <span className="tag">pandas</span>
            </div>
          </a>
          <a
            className="tile lift proj reveal"
            href="https://github.com/Tomb909/chip8-emulator"
            target="_blank"
            rel="noopener"
          >
            <div className="ptop">
              <span className="lang">
                <span className="sq" style={{ background: '#A89984' }} />
                c++
              </span>
              <span className="arr">→</span>
            </div>
            <h3>chip8-emulator</h3>
            <p>
              A CHIP-8 interpreter written from scratch in modern C++20 — full instruction
              set, 64x32 monochrome display, keyboard input and adjustable clock. Runs
              Tetris and the IBM-logo ROM.
            </p>
            <div className="tags">
              <span className="tag">C++20</span>
              <span className="tag">CMake</span>
              <span className="tag">SDL</span>
            </div>
          </a>
          <div className="tile lift proj reveal">
            <div className="ptop">
              <span className="lang">
                <span className="sq" style={{ background: '#8EC07C' }} />
                python
              </span>
            </div>
            <h3>digit-recognition-nn</h3>
            <p>
              A neural network built from scratch with NumPy — backpropagation and gradient
              descent by hand, to understand the calculus underneath. Visualised with
              Matplotlib and tkinter.
            </p>
            <div className="tags">
              <span className="tag">NumPy</span>
              <span className="tag">Matplotlib</span>
              <span className="tag">from scratch</span>
            </div>
          </div>
          <div className="tile lift proj reveal">
            <div className="ptop">
              <span className="lang">
                <span className="sq" style={{ background: '#B8BB26' }} />
                javascript
              </span>
            </div>
            <h3>fog-of-war-map</h3>
            <p>
              A Durham Hackathon project — a web app that reveals the parts of a world map
              you've travelled and fogs the rest. Designed and shipped with a team under
              time pressure.
            </p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">hackathon</span>
            </div>
          </div>

          {/* work */}
          <div className="head-row reveal" id="work">
            <span className="pr">~ %</span>
            <h2>Experience</h2>
            <span className="rule" />
          </div>
          <article className="tile xp reveal">
            <div className="xhead">
              <span className="role">Software engineer</span>
              <span className="co">Micronclean Ltd</span>
              <span className="when">summers 2022-2025 · skegness, uk</span>
            </div>
            <div className="bul">
              <div>
                Full-stack delivery in <b>C# (.NET Core)</b>, JavaScript and HTML/CSS,
                with <b>SQL</b> tables and views — Git, Agile.
              </div>
              <div>
                Shipped a <b>real-time inventory dashboard</b> used daily by 40 external
                and 20 internal users — <b>~180 hrs/yr</b> saved.
              </div>
              <div>
                Wrote API classes surfacing <b>trending lab data</b> to reduce deviations
                in cleanroom operations; built cost-model tooling for the textile business.
              </div>
              <div>
                Automated India-plant reporting (~6 hrs/mo) and proof-of-delivery and
                irradiation-certificate emailing.
              </div>
            </div>
            <div className="press">
              →{' '}
              <a
                href="https://www.cleanroomtechnology.com/news/article_page/Microclean_delivers_improvements_to_its_market_leading_garment_portal/204768"
                target="_blank"
                rel="noopener"
              >
                Featured in Cleanroom Technology — garment-portal improvements
              </a>
            </div>
          </article>

          {/* about */}
          <div className="head-row reveal" id="about">
            <span className="pr">~ %</span>
            <h2>About</h2>
            <span className="rule" />
          </div>
          <section className="tile about reveal">
            <p>
              I like turning messy real-world data and low-level detail into things that{' '}
              <b>actually work</b>: emulators, market-data pipelines, dashboards people
              open every morning.
            </p>
            <p>
              Comfortable across the stack.
              Outside code: <b>deputy head boy</b>, GCSE maths coach, and a{' '}
              <b>top-three CTF</b> finish on the NCSC CyberFirst Advanced course.
            </p>
          </section>
          <section className="tile edu reveal">
            <div className="row">
              <span className="l">degree</span>
              <span className="r">
                <b>MSci computer science</b>
                <br />
                St Andrews · 2024-28
              </span>
            </div>
            <div className="row">
              <span className="l">entry</span>
              <span className="r">direct entry - skipped year one</span>
            </div>
            <div className="row">
              <span className="l">a-levels</span>
              <span className="r">
                f. maths A* · maths A*
                <br />
                comp sci A · physics A
              </span>
            </div>
            <div className="row">
              <span className="l">cert</span>
              <span className="r">NCSC CyberFirst Advanced</span>
            </div>
          </section>

          {/* connect */}
          <div className="head-row reveal" id="contact">
            <span className="pr">~ %</span>
            <h2>Connect</h2>
            <span className="rule" />
          </div>
          <a className="tile lift lt reveal" href={GITHUB} target="_blank" rel="noopener">
            <span className="arr">→</span>
            <svg className="ico" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
            <div>
              <div className="lab">github</div>
              <div className="sub">github.com/Tomb909</div>
            </div>
          </a>
          <a className="tile lift lt reveal" href={LINKEDIN} target="_blank" rel="noopener">
            <span className="arr">→</span>
            <svg className="ico" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
            <div>
              <div className="lab">linkedin</div>
              <div className="sub">in/thomas-barker</div>
            </div>
          </a>
          <div className="tile lift lt">
            <button
              className={`copybtn${tileCopied ? ' copied' : ''}`}
              type="button"
              onClick={() => copyEmail(setTileCopied)}
            >
              {tileCopied ? 'copied ✓' : 'copy'}
            </button>
            <a className="arr" href={`mailto:${EMAIL}`} aria-label="email">
              →
            </a>
            <svg
              className="ico"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m3 6 9 7 9-7" />
            </svg>
            <a href={`mailto:${EMAIL}`} style={{ color: 'inherit' }}>
              <div className="lab">email</div>
              <div className="sub">{EMAIL}</div>
            </a>
          </div>

          <footer className="tile foot texture">
            <div className="fmeta">
              st andrews, uk · 2026
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}

export default App
