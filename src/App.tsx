import { useState } from "react";
import { figmaJourneySlides } from "./figma-slides";

type IconName =
  | "arrow"
  | "bank"
  | "check"
  | "chevron"
  | "cloud"
  | "document"
  | "farm"
  | "id"
  | "leaf"
  | "lock"
  | "phone"
  | "satellite"
  | "shield"
  | "shop"
  | "sprout"
  | "user";

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    bank: <><path d="M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M12 3l9 5H3l9-5Z" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m8 10 4 4 4-4" />,
    cloud: <path d="M7 18h11a4 4 0 0 0 .5-8 7 7 0 0 0-13.2-1.8A5 5 0 0 0 7 18Z" />,
    document: <><path d="M6 2h8l4 4v16H6Z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></>,
    farm: <><path d="M3 20h18M4 17c3-3 5-3 8 0 3-3 5-3 8 0M4 12c3-3 5-3 8 0 3-3 5-3 8 0" /><path d="M12 4v5m0-3c-2-2-4-1-4-1m4 1c2-2 4-1 4-1" /></>,
    id: <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M6 16c.8-2 5.2-2 6 0m3-5h3m-3 4h3" /></>,
    leaf: <><path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z" /><path d="M4 21c3-6 7-9 13-13" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M9 6h6m-6 4h6m-6 4h4m-2 4h2" /></>,
    satellite: <><path d="m10 14 4-4m-8 8 2-2m8-8 2-2" /><rect x="8" y="8" width="8" height="8" rx="1" transform="rotate(45 12 12)" /><path d="m4 10-2-2 4-4 2 2m8 12 2 2 4-4-2-2M9 21H4v-5" /></>,
    shield: <><path d="M12 2 4 5v6c0 5.2 3.4 9.2 8 11 4.6-1.8 8-5.8 8-11V5Z" /><path d="m8 12 3 3 5-6" /></>,
    shop: <><path d="M4 10v11h16V10M3 10l2-6h14l2 6" /><path d="M3 10c0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0M8 21v-6h5v6" /></>,
    sprout: <><path d="M12 21V9" /><path d="M12 13C8 13 5 11 5 7c4 0 7 2 7 6Zm0-3c0-4 3-6 7-6 0 4-3 6-7 6Z" /></>,
    user: <><circle cx="12" cy="7" r="4" /><path d="M4 22c0-5 3-8 8-8s8 3 8 8" /></>,
  };
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</g>
    </svg>
  );
}

function Brand() {
  return (
    <div className="brand" aria-label="Furtu by Cooperative Bank of Oromia">
      <span className="brand-mark"><Icon name="sprout" size={23} /></span>
      <span className="brand-name">furtu</span>
      <span className="brand-divider" />
      <span className="brand-bank">Cooperative Bank<br />of Oromia</span>
    </div>
  );
}

function HeroScene({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={compact ? "hero-scene compact" : "hero-scene"} viewBox="0 0 720 590" role="img" aria-label="A confident Ethiopian farmer standing in a healthy field">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#dff5fb" /><stop offset="1" stopColor="#f8f4e8" /></linearGradient>
        <linearGradient id="field" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b9d780" /><stop offset="1" stopColor="#5f913a" /></linearGradient>
        <filter id="soft"><feDropShadow dx="0" dy="15" stdDeviation="15" floodOpacity=".12" /></filter>
      </defs>
      <rect width="720" height="590" rx="40" fill="url(#sky)" />
      <circle cx="590" cy="95" r="44" fill="#f6c65b" opacity=".85" />
      <path d="M0 332c130-75 234-72 357-13 137 66 236-14 363-30v301H0Z" fill="#dcebb6" />
      <path d="M0 400c147-56 260-48 382 11 111 54 221 11 338-8v187H0Z" fill="url(#field)" />
      <path d="M21 472c174-52 353-52 678 37M14 524c233-59 451-46 688 14" fill="none" stroke="#e7f2c9" strokeWidth="14" strokeLinecap="round" opacity=".8" />
      <g fill="#497a32" opacity=".85">
        {Array.from({ length: 14 }).map((_, i) => <path key={i} d={`M${35 + i * 50} ${505 - (i % 3) * 10}v-36m0 18-12-13m12 5 13-16`} stroke="#497a32" strokeWidth="6" strokeLinecap="round" />)}
      </g>
      <g transform="translate(362 124)" filter="url(#soft)">
        <path d="M72 135c-39 36-50 108-38 194l15 114h50l14-126 20 126h50l-5-129c-4-92-18-149-52-180Z" fill="#f5f0df" />
        <path d="M54 180c13-44 24-68 57-73 42 5 58 38 69 101l-45 15-22-63-11 66-61-16Z" fill="#00ADEF" />
        <path d="M91 45c-17 9-20 29-11 51 8 20 36 25 52 4 11-15 8-46-7-57-10-8-23-5-34 2Z" fill="#7c4931" />
        <path d="M78 59c4-30 58-38 66-2-24-7-45-8-66 2Z" fill="#f2cf68" />
        <path d="M81 57c10-18 42-26 59-5" fill="none" stroke="#403028" strokeWidth="8" strokeLinecap="round" />
        <path d="M91 103c10 13 24 14 35 0" fill="none" stroke="#5c3027" strokeWidth="3" strokeLinecap="round" />
        <path d="M55 189 9 273m160-65 38 80" fill="none" stroke="#7c4931" strokeWidth="20" strokeLinecap="round" />
        <path d="M41 208c18 11 36 17 59 18l13-66 22 63c16-2 31-7 45-15" fill="none" stroke="#008dc5" strokeWidth="4" />
        <path d="M70 443h44l-5 22H59Zm63 0h53l7 22h-58Z" fill="#403028" />
      </g>
      <g transform="translate(64 190)" filter="url(#soft)">
        <rect width="178" height="124" rx="25" fill="white" />
        <circle cx="42" cy="42" r="23" fill="#e2f6fd" />
        <path d="M42 55V31m0 14c-13-3-17-12-17-20 11 0 17 8 17 20Zm0-5c4-11 11-16 21-15-1 11-8 17-21 15Z" fill="#5d973b" />
        <text x="78" y="41" fontSize="15" fontWeight="700" fill="#17342b">Seeds</text>
        <text x="78" y="62" fontSize="12" fill="#688076">For the season</text>
        <path d="M25 91h127" stroke="#e6eee9" strokeWidth="2" />
        <circle cx="43" cy="104" r="9" fill="#f6c65b" />
        <circle cx="74" cy="104" r="9" fill="#00ADEF" />
        <circle cx="105" cy="104" r="9" fill="#79a84a" />
      </g>
      <g transform="translate(545 330)" filter="url(#soft)">
        <rect width="125" height="86" rx="22" fill="#fff" />
        <circle cx="35" cy="43" r="20" fill="#e2f6fd" />
        <path d="M27 46h16m-12-6h8m-6 12h4" stroke="#00ADEF" strokeWidth="3" strokeLinecap="round" />
        <text x="62" y="39" fontSize="12" fontWeight="700" fill="#17342b">Furtu</text>
        <text x="62" y="57" fontSize="10" fill="#688076">access</text>
      </g>
    </svg>
  );
}

const storySteps = [
  { title: "Need", icon: "sprout" as IconName, text: "Every season starts with a need.", note: "Seeds · Fertilizer · Crop care" },
  { title: "Apply", icon: "bank" as IconName, text: "Bring your land information to CBO.", note: "Land Unique ID + National ID" },
  { title: "Assess", icon: "document" as IconName, text: "We look at the whole picture.", note: "Data supports a human decision" },
  { title: "Approve", icon: "check" as IconName, text: "A clear decision. A new opportunity.", note: "You are kept informed by SMS" },
  { title: "Finance", icon: "lock" as IconName, text: "Financing ready for your farm.", note: "Protected for agricultural inputs" },
  { title: "Input", icon: "shop" as IconName, text: "Choose what your farm needs.", note: "At a participating local supplier" },
  { title: "Grow", icon: "leaf" as IconName, text: "From inputs to agricultural activity.", note: "Creating room for progress" },
  { title: "Monitor", icon: "satellite" as IconName, text: "Support continues after disbursement.", note: "Farm conditions stay visible" },
];

function StoryPanel({ active }: { active: number }) {
  const step = storySteps[active];
  return (
    <div className="story-panel">
      <div className="story-visual">
        <div className={`story-art story-art-${active}`}>
          <div className="land-lines" />
          <div className="art-sun" />
          <div className="art-icon"><Icon name={step.icon} size={54} /></div>
          <div className="farmer-mini">
            <span className="head" /><span className="body" /><span className="legs" />
          </div>
          {active === 0 && <div className="input-bubbles"><span>SEED</span><span>SOIL</span><span>CARE</span></div>}
          {active === 4 && <div className="money-route"><span>FINANCE</span><Icon name="arrow" /><span>INPUTS</span></div>}
          {active === 7 && <div className="signal-lines"><i /><i /><i /></div>}
        </div>
      </div>
      <div className="story-copy">
        <span className="eyebrow">0{active + 1} / 08 · {step.title}</span>
        <h2>{step.text}</h2>
        <p>{step.note}</p>
        <div className="story-controls">
          <button className="round-btn ghost" aria-label="Previous step" onClick={() => document.getElementById(`step-${Math.max(0, active - 1)}`)?.click()} disabled={active === 0}>←</button>
          <button className="round-btn" aria-label="Next step" onClick={() => document.getElementById(`step-${Math.min(7, active + 1)}`)?.click()} disabled={active === 7}>→</button>
        </div>
      </div>
    </div>
  );
}

const detailCards = [
  { icon: "id" as IconName, title: "Your land opens the door", body: "Your Land Unique ID connects CBO to verified Ministry of Agriculture records." },
  { icon: "phone" as IconName, title: "Simple phone. Clear updates.", body: "Application and disbursement messages arrive in your preferred language." },
  { icon: "shield" as IconName, title: "Protection is built in", body: "CBO coordinates crop insurance as part of the financing journey." },
  { icon: "satellite" as IconName, title: "The journey stays visible", body: "Satellite monitoring helps CBO understand farm conditions and emerging risks." },
];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [openCard, setOpenCard] = useState<number | null>(0);
  const [layer, setLayer] = useState<"story" | "process" | "systems">("story");

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <nav className="nav">
        <Brand />
        <div className="nav-links">
          <button onClick={() => scrollTo("journey")}>How it works</button>
          <button onClick={() => scrollTo("why")}>Why Furtu</button>
        </div>
        <button className="btn btn-small" onClick={() => scrollTo("start")}>Start your journey <Icon name="arrow" size={17} /></button>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <span className="pill"><span className="pulse" /> Agricultural finance, made human</span>
          <h1>Grow your farm.<br /><em>Furtu helps you get there.</em></h1>
          <p>Agricultural financing that connects farmers with the inputs they need.</p>
          <div className="hero-actions">
            <button className="btn" onClick={() => scrollTo("journey")}>See how Furtu works <Icon name="arrow" size={18} /></button>
            <button className="text-btn" onClick={() => scrollTo("why")}>Why Furtu? <span>↓</span></button>
          </div>
          <div className="trust-row">
            <span><Icon name="shield" size={18} /> Crop protection</span>
            <span><Icon name="phone" size={18} /> Simple SMS updates</span>
            <span><Icon name="leaf" size={18} /> Farm-first finance</span>
          </div>
        </div>
        <div className="hero-art"><HeroScene /></div>
      </header>

      <section className="opening section">
        <div className="section-heading centered">
          <span className="eyebrow">FROM LAND TO GROWTH</span>
          <h2>You bring the land.<br /><em>Furtu builds the bridge.</em></h2>
        </div>
        <div className="story-strip">
          {[
            ["user", "Farmer"], ["farm", "Land"], ["sprout", "Need"], ["bank", "Finance"],
            ["shop", "Inputs"], ["leaf", "Growth"], ["satellite", "Support"],
          ].map(([icon, label], i) => (
            <div className="strip-item" key={label}>
              <span className="strip-icon"><Icon name={icon as IconName} /></span>
              <strong>{label}</strong>
              {i < 6 && <span className="strip-line"><i /></span>}
            </div>
          ))}
        </div>
      </section>

      <section
        id="journey"
        className="journey section figma-journey"
        aria-label="Furtu farmer journey slider"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") setActiveStep((step) => Math.max(0, step - 1));
          if (event.key === "ArrowRight") setActiveStep((step) => Math.min(figmaJourneySlides.length - 1, step + 1));
        }}
        onPointerDown={(event) => {
          event.currentTarget.dataset.swipeStart = String(event.clientX);
        }}
        onPointerUp={(event) => {
          const start = Number(event.currentTarget.dataset.swipeStart);
          const distance = event.clientX - start;
          if (Math.abs(distance) < 48) return;
          setActiveStep((step) => distance > 0 ? Math.max(0, step - 1) : Math.min(figmaJourneySlides.length - 1, step + 1));
        }}
      >
        {(() => {
          const ActiveSlide = figmaJourneySlides[activeStep];
          const viewportWidth = typeof window === "undefined" ? 1440 : window.innerWidth;
          const viewportHeight = typeof window === "undefined" ? 900 : window.innerHeight;
          const scale = Math.min(viewportWidth / 1440, viewportHeight / 900, 1);
          return (
            <div
              className="figma-slide-stage"
              style={{ height: "100svh" }}
              aria-live="polite"
            >
              <div
                className="figma-slide-canvas"
                style={{ transform: `scale(${scale})` }}
                onClickCapture={(event) => {
                  const label = (event.target as HTMLElement).textContent?.trim().toLowerCase() || "";
                  if (label === "previous" || label === "back to story" || label === "close details") {
                    setActiveStep((step) => Math.max(0, step - 1));
                  } else if (label === "back to the beginning") {
                    setActiveStep(0);
                  } else if (label === "next card") {
                    setActiveStep((step) => Math.min(figmaJourneySlides.length - 1, step + 1));
                  } else if (label.startsWith("expand ") || label.startsWith("see the full process")) {
                    setActiveStep(figmaJourneySlides.length - 1);
                  }
                }}
              >
                <ActiveSlide />
              </div>
              <button
                className="figma-page-hit previous"
                aria-label="Previous journey page"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((step) => Math.max(0, step - 1))}
              />
              <button
                className="figma-page-hit next"
                aria-label="Next journey page"
                disabled={activeStep === figmaJourneySlides.length - 1}
                onClick={() => setActiveStep((step) => Math.min(figmaJourneySlides.length - 1, step + 1))}
              />
              <button
                className="figma-slider-arrow previous"
                aria-label="Previous journey page"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((step) => Math.max(0, step - 1))}
              >
                ←
              </button>
              <button
                className="figma-slider-arrow next"
                aria-label="Next journey page"
                disabled={activeStep === figmaJourneySlides.length - 1}
                onClick={() => setActiveStep((step) => Math.min(figmaJourneySlides.length - 1, step + 1))}
              >
                <span>Next</span>
                <span aria-hidden="true">→</span>
              </button>
              <div className="figma-slider-position">
                <strong>{String(activeStep + 1).padStart(2, "0")}</strong>
                <span>/ {figmaJourneySlides.length}</span>
              </div>
              <div className="figma-slider-dots" role="tablist" aria-label="Choose a journey page">
                {figmaJourneySlides.map((_, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-label={`Journey page ${index + 1}`}
                    aria-selected={activeStep === index}
                    className={activeStep === index ? "active" : ""}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      <section className="sms-section section">
        <div className="phone-scene">
          <div className="feature-phone">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <small>FURTU · CBO</small>
              <strong>Your Furtu application is being processed.</strong>
              <span>10:42 AM</span>
            </div>
            <div className="phone-keys">{Array.from({ length: 9 }).map((_, i) => <i key={i}>{i + 1}</i>)}</div>
          </div>
          <div className="signal"><i /><i /><i /></div>
        </div>
        <div className="sms-copy">
          <span className="eyebrow">INCLUSION, BY DESIGN</span>
          <h2>No smartphone?<br /><em>No problem.</em></h2>
          <p>We keep you informed on a simple phone, in the language you prefer.</p>
          <div className="language-chips"><span>Afaan Oromo</span><span>Amharic</span><span>Tigrigna</span></div>
        </div>
      </section>

      <section className="system-section section">
        <div className="section-heading centered">
          <span className="eyebrow">TECHNOLOGY WORKS QUIETLY</span>
          <h2>Your story comes first.<br /><em>Systems support it.</em></h2>
        </div>
        <div className="layer-tabs" role="tablist">
          <button className={layer === "story" ? "active" : ""} onClick={() => setLayer("story")}>1 · Human story</button>
          <button className={layer === "process" ? "active" : ""} onClick={() => setLayer("process")}>2 · Process</button>
          <button className={layer === "systems" ? "active" : ""} onClick={() => setLayer("systems")}>3 · Data & systems</button>
        </div>
        {layer === "story" && (
          <div className="layer-canvas human-flow">
            {[["user", "Farmer"], ["sprout", "Need"], ["lock", "Finance"], ["shop", "Inputs"], ["leaf", "Growth"]].map(([icon, label], i) => (
              <div className="flow-node" key={label}><span><Icon name={icon as IconName} size={30} /></span><strong>{label}</strong>{i < 4 && <i className="flow-arrow">→</i>}</div>
            ))}
          </div>
        )}
        {layer === "process" && (
          <div className="layer-canvas process-flow">
            {[["bank", "Apply"], ["id", "Identify"], ["document", "Submit"], ["check", "Assess"], ["shield", "Protect"], ["lock", "Disburse"], ["satellite", "Monitor"]].map(([icon, label], i) => (
              <div className="process-node" key={label}><small>0{i + 1}</small><span><Icon name={icon as IconName} /></span><strong>{label}</strong></div>
            ))}
          </div>
        )}
        {layer === "systems" && (
          <div className="layer-canvas systems-flow">
            <div className="systems-column data">
              <span className="flow-label">DATA FLOW</span>
              {[["id", "Land Unique ID"], ["bank", "CBO / Sukpass"], ["cloud", "Ministry of Agriculture"], ["document", "Farmer + land profile"]].map(([icon, label]) => (
                <div className="system-node" key={label}><Icon name={icon as IconName} /><strong>{label}</strong></div>
              ))}
            </div>
            <div className="systems-center"><span>Structured<br />assessment</span><Icon name="arrow" size={28} /></div>
            <div className="systems-column money">
              <span className="flow-label">FINANCING FLOW</span>
              {[["check", "CBO credit team"], ["shield", "Crop insurance"], ["lock", "Locked financing"], ["shop", "Local supplier"], ["satellite", "Farm monitoring"]].map(([icon, label]) => (
                <div className="system-node" key={label}><Icon name={icon as IconName} /><strong>{label}</strong></div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="money-section section">
        <div className="money-copy">
          <span className="eyebrow light">PURPOSE-PROTECTED FINANCING</span>
          <h2>Your financing becomes<br /><em>what your farm needs.</em></h2>
          <p>Available in your account. Protected for agricultural inputs. Paid securely to a participating supplier.</p>
        </div>
        <div className="money-flow">
          {[["check", "Approved", "CBO confirms"], ["lock", "Protected", "In your account"], ["shop", "Supplier", "Secure payment"], ["sprout", "Farm inputs", "Ready to use"]].map(([icon, title, note], i) => (
            <div className="money-node" key={title}>
              <div><span><Icon name={icon as IconName} size={28} /></span><strong>{title}</strong><small>{note}</small></div>
              {i < 3 && <i><Icon name="arrow" /></i>}
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="why-section section">
        <div className="section-heading split">
          <div><span className="eyebrow">WHY CBO + FURTU</span><h2>More than a loan.<br /><em>A partner for your farm.</em></h2></div>
          <p>Built around agricultural reality, local relationships, and a farmer's whole journey.</p>
        </div>
        <div className="pillars">
          {[
            ["01", "user", "Access", "Agricultural financing designed around the farmer's needs."],
            ["02", "shop", "Connection", "Farmers connected with trusted local input suppliers."],
            ["03", "satellite", "Support", "Understanding and care that continue beyond disbursement."],
          ].map(([num, icon, title, body]) => (
            <article className="pillar" key={title}>
              <span className="pillar-num">{num}</span><span className="pillar-icon"><Icon name={icon as IconName} size={38} /></span>
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inclusion section">
        <div className="inclusion-copy">
          <span className="eyebrow">FINANCIAL INCLUSION</span>
          <h2>Finance should reach<br /><em>the people who grow our food.</em></h2>
          <p>Furtu brings formal financial access closer to farmers—with dignity, practical tools, and trusted local support.</p>
          <div className="barrier-list">
            <span><Icon name="phone" /> Simple-phone access</span><span><Icon name="farm" /> Land-based identity</span><span><Icon name="bank" /> Local branch support</span>
          </div>
        </div>
        <div className="farmer-cards">
          <div className="farmer-card fc-one"><div className="portrait"><span /><i /></div><strong>Producer</strong><small>Building each season</small></div>
          <div className="farmer-card fc-two"><div className="portrait"><span /><i /></div><strong>Business owner</strong><small>Growing local opportunity</small></div>
          <div className="farmer-card fc-three"><div className="portrait"><span /><i /></div><strong>Community member</strong><small>Connected to support</small></div>
        </div>
      </section>

      <section className="details section">
        <div className="section-heading split">
          <div><span className="eyebrow">A CLOSER LOOK</span><h2>Simple on the surface.<br /><em>Thoughtful underneath.</em></h2></div>
          <p>Open each card to see the support working behind your journey.</p>
        </div>
        <div className="detail-grid">
          {detailCards.map((card, i) => (
            <button className={`detail-card ${openCard === i ? "open" : ""}`} onClick={() => setOpenCard(openCard === i ? null : i)} aria-expanded={openCard === i} key={card.title}>
              <span className="detail-icon"><Icon name={card.icon} /></span>
              <span className="detail-title">{card.title}</span>
              <span className="detail-toggle">{openCard === i ? "−" : "+"}</span>
              <span className="detail-body">{card.body}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="start" className="final-section">
        <div className="final-art"><HeroScene compact /></div>
        <div className="final-copy">
          <Brand />
          <span className="eyebrow light">THE NEXT SEASON STARTS HERE</span>
          <h2>From access<br /><em>to opportunity.</em></h2>
          <p>Agricultural financing that moves with the farmer.</p>
          <div className="hero-actions">
            <button className="btn btn-light">Start your Furtu journey <Icon name="arrow" size={18} /></button>
            <button className="text-btn light">Talk to CBO <span>→</span></button>
          </div>
          <small>Visit your local Cooperative Bank of Oromia branch to learn more.</small>
        </div>
      </section>

      <footer><Brand /><p>Technology behind the experience. The farmer at the center.</p><span>Furtu © 2025</span></footer>
    </main>
  );
}

export default App;
