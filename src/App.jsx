const EMAIL = 'founder@maverickeda.com';
const MAILTO = 'mailto:founder@maverickeda.com?subject=Maverick%20Inquiry';

const problemBullets = [
  'Datasheets bury critical pins, ratings, timing notes, and wiring constraints across dozens of pages.',
  'Small wiring or voltage mistakes can waste hours, damage parts, or derail a prototype session.',
  'BOM decisions, power paths, and validation steps are often scattered across forums, examples, and vendor docs.',
  'Software builders now have strong AI workflows, while hardware prototyping still depends on manual document work.',
];

const featureCards = [
  {
    title: 'Architecture from requirements',
    copy: 'Describe the build goal and Maverick drafts a hardware architecture across compute, sensors, power, communications, and mechanical constraints.',
  },
  {
    title: 'Datasheet-aware extraction',
    copy: 'Upload component PDFs so the system can extract pinouts, bus protocols, voltage ranges, ratings, and connection constraints.',
  },
  {
    title: 'Pin-level wiring guidance',
    copy: 'Generate wiring plans for controllers such as ESP32 and Arduino Nano across I2C, SPI, UART, GPIO, analog, and power.',
  },
  {
    title: 'Buildable materials lists',
    copy: 'Turn an architecture into exact parts, quantities, support components, ratings, and practical buying notes.',
  },
  {
    title: 'Validation before build',
    copy: 'Surface checks for power, current, compatibility, wiring, safety, and test steps before the first prototype is assembled.',
  },
];

const workflowSteps = [
  {
    title: 'Idea / Datasheet',
    copy: 'Start with a concept, rough requirements, or a PDF datasheet for a component you want to use.',
  },
  {
    title: 'Architecture',
    copy: 'Maverick maps compute, sensors, power, buses, displays, enclosures, and dependencies into a coherent system plan.',
  },
  {
    title: 'BOM',
    copy: 'The plan becomes a parts list with quantities, ratings, support components, and buying notes.',
  },
  {
    title: 'Wiring',
    copy: 'Pin-level guidance connects components to the selected controller and calls out protocol-specific constraints.',
  },
  {
    title: 'Validation',
    copy: 'Power rails, ratings, pullups, current budgets, compatibility, and test steps are checked before assembly.',
  },
  {
    title: 'Prototype Plan',
    copy: 'Users leave with a build workflow that is specific enough to assemble, test, and iterate.',
  },
];

const outputPackage = ['Architecture JSON', 'BOM', 'Wiring Map', 'Validation Report'];

const designWarnings = [
  'I2C pullups required',
  'Display current budget flagged',
  'Battery runtime estimate needed',
];

const exampleRequirements = [
  'Measure temperature, humidity, and pressure',
  'Show readings on a small display',
  'Run from a rechargeable battery',
  'Use common beginner-accessible parts',
  'Include validation checks before wiring',
];

const exampleOutputGroups = [
  {
    title: 'Architecture',
    items: [
      'ESP32 controller',
      'BME280 sensor over I2C',
      'OLED display over I2C',
      'Li-ion battery',
      'TP4056 charging module',
      '3.3V regulator',
      'Power switch',
    ],
  },
  {
    title: 'BOM',
    items: [
      'ESP32 development board',
      'BME280 breakout',
      '0.96 inch I2C OLED',
      '3.7V Li-ion cell',
      'TP4056 charger module',
      '3.3V regulator',
      'Pull-up resistors if breakout does not include them',
      'Jumper wires / breadboard',
    ],
  },
  {
    title: 'Validation',
    items: [
      'Confirm all I2C devices support 3.3V logic',
      'Check OLED + ESP32 current draw against regulator rating',
      'Confirm battery discharge current is safe',
      'Confirm BME280 address conflict is handled',
      'Confirm charger output does not directly feed 5V-only rails',
    ],
  },
];

const checkCards = [
  {
    title: 'Power compatibility',
    copy: 'Voltage rails, current budgets, regulator limits, battery constraints, and ground references.',
  },
  {
    title: 'Bus/protocol constraints',
    copy: 'I2C pullups, SPI chip-selects, UART voltage levels, address conflicts, and timing-sensitive pins.',
  },
  {
    title: 'Pin mapping',
    copy: 'Controller pin capabilities, analog/digital constraints, PWM availability, boot pins, and reserved pins.',
  },
  {
    title: 'Support components',
    copy: 'Decoupling capacitors, pullups, level shifting, protection components, connectors, and common reference circuits.',
  },
  {
    title: 'Build/test workflow',
    copy: 'Step-by-step assembly order, bring-up tests, expected measurements, and failure checks.',
  },
];

const computeUseCases = [
  'LLM inference for architecture generation',
  'Datasheet parsing and retrieval',
  'Component compatibility reasoning',
  'Wiring and validation agent runs',
  'Benchmarking against known-good circuit blocks',
  'Future multimodal analysis of schematics, PCB layouts, and test results',
];

const computePipeline = [
  'Datasheet parsing',
  'Structured component model',
  'Architecture generation',
  'Wiring plan',
  'Validation checks',
  'Evaluation dataset',
];

const useCases = [
  {
    title: 'Student builders',
    copy: 'Turn a project idea into a parts list, wiring plan, and test sequence without hunting through scattered examples.',
  },
  {
    title: 'Startup prototyping',
    copy: 'Quickly evaluate sensor, controller, power, and display architectures before committing to a prototype path.',
  },
  {
    title: 'Robotics and IoT teams',
    copy: 'Generate architecture and wiring plans for sensor-heavy systems with multiple buses and power constraints.',
  },
  {
    title: 'Hardware education',
    copy: 'Help beginners understand why parts connect the way they do, not just where wires go.',
  },
];

const stackCards = [
  {
    title: 'Frontend',
    copy: 'React, Vite, interactive canvas, schematic editor, and guided workflow surfaces.',
  },
  {
    title: 'Backend',
    copy: 'Flask API, PDF processing, datasheet extraction, BOM generation, and validation engine.',
  },
  {
    title: 'AI Layer',
    copy: 'Local LLM prototype today, with hosted model APIs planned for scalable inference and evaluation.',
  },
  {
    title: 'Hardware Domain',
    copy: 'MCUs, sensors, power systems, buses, pinouts, wiring constraints, BOMs, and test workflows.',
  },
];

const prototypeBadges = [
  'AI-generated hardware architecture',
  'Exact BOM generation',
  'Datasheet upload',
  'Pin extraction',
  'Arduino Nano / ESP32 wiring guidance',
  'I2C / SPI / UART support',
  'Visual architecture canvas',
  'Step-by-step build workflow',
  'Validation requirements',
];

const roadmapCards = [
  'Expand controller support beyond Arduino and ESP32',
  'Build a verified circuit-block library',
  'Add design quality benchmarks',
  'Add PCB handoff and KiCad export',
  'Add simulation and digital twin checks',
  'Create a real-world test-result feedback loop',
  'Build an agentic hardware debugging workflow',
];

function LogoMark({ className = 'logo-mark' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path className="logo-stroke logo-stroke-main" d="M18 76V34L50 66L82 34V76" />
      <path className="logo-stroke" d="M22 22L50 50L78 22" />
      <path className="logo-stroke logo-stroke-inner" d="M32 76V56L44 68" />
      <path className="logo-stroke logo-stroke-inner" d="M68 76V56L56 68" />
      <path className="logo-stroke logo-stroke-terminal" d="M18 34H30" />
      <path className="logo-stroke logo-stroke-terminal" d="M82 34H70" />
    </svg>
  );
}

function MaverickLogo() {
  return (
    <span className="logo-lockup" aria-label="Maverick">
      <LogoMark />
      <span className="logo-word">Maverick</span>
    </span>
  );
}

function SectionHeader({ eyebrow, title, titleId, children }) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId}>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function ProductMockup() {
  return (
    <div
      className="product-mockup"
      role="img"
      aria-label="Maverick interface showing a weather station prompt, architecture graph, generated files, and design warnings."
    >
      <div className="mockup-topbar">
        <LogoMark className="mockup-logo-mark" />
        <span className="mockup-title">Maverick Workspace</span>
        <span className="mockup-status">Prototype Plan</span>
      </div>

      <div className="mockup-grid">
        <aside className="mockup-sidebar">
          <p className="mockup-label">Input prompt</p>
          <p className="mockup-prompt">Build a battery-powered weather station with BME280, ESP32, and display</p>
          <div className="output-stages" aria-label="Output stages">
            {['Architecture', 'BOM', 'Wiring', 'Validation'].map((stage) => (
              <span key={stage}>{stage}</span>
            ))}
          </div>
        </aside>

        <div className="graph-panel" aria-label="Architecture graph">
          <div className="panel-heading">
            <div>
              <p className="mockup-label">Architecture</p>
              <h3>Weather station v0.1</h3>
            </div>
            <span className="chip">I2C + battery</span>
          </div>
          <div className="graph-map" aria-hidden="true">
            <svg className="graph-lines" viewBox="0 0 520 330" preserveAspectRatio="none">
              <path d="M260 82 L126 166 L260 248 L396 166 Z" />
              <path d="M260 82 L260 248" />
              <path d="M126 166 H396" />
            </svg>
            <span className="graph-node node-controller">ESP32</span>
            <span className="graph-node node-sensor">BME280</span>
            <span className="graph-node node-display">Display</span>
            <span className="graph-node node-battery">Battery</span>
            <span className="graph-node node-regulator">Regulator</span>
          </div>
        </div>

        <aside className="validation-panel" aria-label="Design warnings">
          <div className="panel-heading compact">
            <div>
              <p className="mockup-label">Design warnings</p>
              <h3>Before wiring</h3>
            </div>
          </div>
          <ul className="check-list warning-list">
            {designWarnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="output-package" aria-label="Generated files">
        <span>Output package</span>
        {outputPackage.map((file) => (
          <strong key={file}>{file}</strong>
        ))}
      </div>
    </div>
  );
}

function ExampleOutputSection() {
  return (
    <section className="section-band example-output" id="example-output" aria-labelledby="example-output-title">
      <div className="container">
        <SectionHeader
          eyebrow="Example Output"
          title="From prompt to build plan."
          titleId="example-output-title"
        >
          An example of the kind of structured output Maverick is designed to generate from a hardware idea or datasheet.
        </SectionHeader>

        <div className="example-panel">
          <article className="example-input-card" aria-label="Example input prompt">
            <p className="mockup-label">Input</p>
            <h3>Build a battery-powered environmental monitor with ESP32, BME280, OLED display, and Li-ion charging.</h3>
            <div className="requirements-list" aria-label="Requirements">
              {exampleRequirements.map((requirement) => (
                <p key={requirement}>{requirement}</p>
              ))}
            </div>
          </article>

          <article className="generated-output-card" aria-label="Generated output">
            <div className="generated-header">
              <p className="mockup-label">Generated output</p>
              <span className="chip">Structured plan</span>
            </div>
            <div className="generated-groups">
              {exampleOutputGroups.map((group) => (
                <section className="generated-group" key={group.title} aria-label={group.title}>
                  <h3>{group.title}</h3>
                  <div className="generated-items">
                    {group.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand-link" href="#top" aria-label="Maverick home">
            <MaverickLogo />
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#workflow">Workflow</a>
            <a href="#example-output">Example</a>
            <a href="#compute">Compute</a>
          </nav>
          <a className="nav-cta" href={MAILTO}>Contact Founder</a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-band" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-product">
            <ProductMockup />
          </div>
          <div className="container hero-content">
            <p className="status-pill">Working prototype</p>
            <h1 id="hero-title">AI-assisted hardware prototyping.</h1>
            <p className="hero-subhead">
              Maverick turns hardware ideas and datasheets into buildable architectures, exact parts lists, wiring plans, and validation workflows - helping builders move from concept to prototype faster.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href={MAILTO}>Contact Founder</a>
              <a className="button secondary" href="#workflow">See Workflow</a>
            </div>
            <p className="credibility-line">
              Working prototype: architecture generation, datasheet parsing, BOM creation, and wiring guidance.
            </p>
          </div>
        </section>

        <section className="section-band problem" id="problem" aria-labelledby="problem-title">
          <div className="container two-column">
            <SectionHeader eyebrow="Problem" title="Hardware prototyping is still too slow." titleId="problem-title">
              Hardware teams still assemble context by hand across datasheets, reference circuits, wiring diagrams, part catalogs, and test notes.
            </SectionHeader>
            <div className="problem-list">
              {problemBullets.map((item) => (
                <div className="problem-item" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band solution" id="solution" aria-labelledby="solution-title">
          <div className="container">
            <SectionHeader eyebrow="Solution" title="A co-pilot for buildable hardware plans." titleId="solution-title">
              Maverick reasons across component requirements, datasheets, voltage levels, protocols, pinouts, power paths, and build constraints. The output is a visual architecture, exact materials list, wiring plan, and validation workflow.
            </SectionHeader>
            <div className="feature-grid">
              {featureCards.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-rule" aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band workflow" id="workflow" aria-labelledby="workflow-title">
          <div className="container">
            <SectionHeader eyebrow="Workflow" title="From rough input to prototype plan." titleId="workflow-title" />
            <div className="workflow-track">
              {workflowSteps.map((step, index) => (
                <article className="workflow-step" key={step.title}>
                  <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ExampleOutputSection />

        <section className="section-band checks" id="checks" aria-labelledby="checks-title">
          <div className="container">
            <SectionHeader eyebrow="Engineering Checks" title="What Maverick checks." titleId="checks-title">
              The product has to reason about real electrical and build constraints, not just produce a plausible-looking parts list.
            </SectionHeader>
            <div className="checks-grid">
              {checkCards.map((card) => (
                <article className="check-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band compute" id="compute" aria-labelledby="compute-title">
          <div className="container compute-layout">
            <div>
              <SectionHeader eyebrow="Compute Use" title="Why Maverick needs compute." titleId="compute-title">
                Maverick's core workflow depends on repeated LLM reasoning over long datasheets, component constraints, pinouts, protocols, power requirements, and generated design alternatives. Startup compute credits would support hosted inference, document processing, evaluation runs, and early user testing.
              </SectionHeader>
              <p className="compute-note">
                Maverick will use credits to reduce early inference costs while building evaluation datasets, testing model quality, and supporting early users.
              </p>
            </div>
            <div className="compute-grid" aria-label="Compute use cases">
              {computeUseCases.map((item) => (
                <div className="compute-card" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container llm-panel">
            <div className="llm-copy">
              <p className="eyebrow">Reasoning Pipeline</p>
              <h3>Why this is hard for LLMs.</h3>
              <p>
                Hardware planning is not a single prompt problem. Maverick has to repeatedly reason over long datasheets, incomplete requirements, part constraints, protocol rules, power limits, and generated alternatives. The system needs inference for generation, retrieval, validation, evaluation, and iteration.
              </p>
            </div>
            <div className="pipeline" aria-label="Compute pipeline">
              {computePipeline.map((step, index) => (
                <span key={step}>{index === 0 ? step : '-> ' + step}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band use-cases" id="use-cases" aria-labelledby="use-cases-title">
          <div className="container">
            <SectionHeader eyebrow="Use Cases" title="Built for early hardware iteration." titleId="use-cases-title" />
            <div className="use-case-grid">
              {useCases.map((useCase) => (
                <article className="use-case-card" key={useCase.title}>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band architecture" id="architecture" aria-labelledby="architecture-title">
          <div className="container">
            <SectionHeader eyebrow="Technical Architecture" title="A practical AI workflow for electronics." titleId="architecture-title" />
            <div className="stack-grid">
              {stackCards.map((card) => (
                <article className="stack-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band prototype" id="prototype" aria-labelledby="prototype-title">
          <div className="container prototype-layout">
            <SectionHeader eyebrow="Current Prototype" title="Current prototype capabilities" titleId="prototype-title">
              The product is early, but the core workflow is already represented in the working prototype.
            </SectionHeader>
            <div className="badge-cloud" aria-label="Prototype capabilities">
              {prototypeBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band roadmap" id="roadmap" aria-labelledby="roadmap-title">
          <div className="container">
            <SectionHeader eyebrow="Roadmap" title="Roadmap" titleId="roadmap-title" />
            <div className="roadmap-grid">
              {roadmapCards.map((item, index) => (
                <article className="roadmap-card" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band why-now" id="why-now" aria-labelledby="why-now-title">
          <div className="container why-now-layout">
            <SectionHeader eyebrow="Why Now" title="AI changed software development. Hardware is next." titleId="why-now-title">
              Code generation tools made software prototyping faster. Hardware still requires interpreting datasheets, selecting parts, wiring correctly, validating electrical constraints, and debugging physical failures. Maverick brings an AI-assisted workflow to that process without claiming to replace engineering judgment.
            </SectionHeader>
            <div className="signal-panel" aria-label="Maverick positioning">
              <p>Maverick turns hardware ideas and datasheets into buildable architectures, BOMs, wiring plans, and validation workflows.</p>
              <p>It is designed for founders, students, and engineers who need a clearer path from concept to prototype.</p>
            </div>
          </div>
        </section>

        <section className="section-band final-cta" id="contact" aria-labelledby="contact-title">
          <div className="container final-cta-content">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Building hardware should feel less scattered.</h2>
            <p>
              Maverick is early, focused, and actively moving from local prototype workflows toward scalable AI-assisted hardware planning.
            </p>
            <div className="hero-actions" aria-label="Contact actions">
              <a className="button primary" href={MAILTO}>Contact Founder</a>
              <a className="button secondary" href="#compute">Review Compute Use</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <a className="brand-link" href="#top" aria-label="Maverick home">
              <MaverickLogo />
            </a>
            <p>AI hardware development platform</p>
          </div>
          <div>
            <p>Contact: <a href={MAILTO}>{EMAIL}</a></p>
            <p>Built for founders, students, and engineers building real electronics.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
