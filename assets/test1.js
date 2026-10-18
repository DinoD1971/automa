/* Automa Test1: product tour, story player and pitch mode. Bilingual through data-lang spans. */
(function () {
  'use strict';
  var D = {"tour": [{"title": {"en": "Start a project in minutes", "es": "Inicie un proyecto en minutos"}, "tab": {"en": "Inception", "es": "Inicio"}, "bullets": [{"en": "Describe the product in plain words", "es": "Describa el producto en palabras sencillas"}, {"en": "Drop in your deck, interviews and specs", "es": "Suba su presentación, entrevistas y especificaciones"}, {"en": "Pick Claude access, cloud, budget and your hours", "es": "Elija acceso a Claude, nube, presupuesto y su horario"}], "img": 1}, {"title": {"en": "Import your capability map", "es": "Importe su mapa de capacidades"}, "tab": {"en": "Capability map", "es": "Mapa de capacidades"}, "bullets": [{"en": "Bring a spreadsheet or let Automa draft one", "es": "Traiga una hoja de cálculo o deje que Automa la redacte"}, {"en": "Every capability links to its stories", "es": "Cada capacidad se vincula a sus historias"}, {"en": "Gaps are flagged, with stories suggested", "es": "Se señalan los vacíos, con historias sugeridas"}], "img": 2}, {"title": {"en": "Write the first stories in your words", "es": "Escriba sus primeras historias"}, "tab": {"en": "Human stories", "es": "Historias humanas"}, "bullets": [{"en": "You write the story and acceptance criteria", "es": "Usted escribe la historia y los criterios de aceptación"}, {"en": "The product owner suggests splits and asks questions", "es": "El product owner sugiere divisiones y hace preguntas"}, {"en": "Nothing changes until you accept", "es": "Nada cambia hasta que usted acepte"}], "img": 3}, {"title": {"en": "Groom and approve the sprint", "es": "Refine y apruebe el sprint"}, "tab": {"en": "Grooming", "es": "Refinamiento"}, "bullets": [{"en": "Drag stories into the sprint, check sizes", "es": "Arrastre historias al sprint, revise tamaños"}, {"en": "See team capacity, your review time and budget", "es": "Vea la capacidad del equipo, su tiempo de revisión y el presupuesto"}, {"en": "Answer design choices, then approve", "es": "Responda decisiones de diseño y luego apruebe"}], "img": 4}, {"title": {"en": "Watch the team deliver", "es": "Vea al equipo entregar"}, "tab": {"en": "Execution", "es": "Ejecución"}, "bullets": [{"en": "Every story moves through spec, tests, build, QA, review, merge", "es": "Cada historia pasa por especificación, pruebas, construcción, QA, revisión y merge"}, {"en": "Live activity, tests and spend per story", "es": "Actividad en vivo, pruebas y gasto por historia"}, {"en": "All your projects on one dashboard", "es": "Todos sus proyectos en un solo tablero"}], "img": 5}, {"title": {"en": "Work alongside the agents", "es": "Trabaje junto a los agentes"}, "tab": {"en": "Working with agents", "es": "Trabajo con agentes"}, "bullets": [{"en": "Read and join any thread", "es": "Lea y participe en cualquier hilo"}, {"en": "QA, developers and architect hand off on the record", "es": "QA, desarrolladores y arquitecto se pasan el trabajo con registro"}, {"en": "Agent Admin coordinates across projects, with your approval", "es": "Agent Admin coordina entre proyectos, con su aprobación"}], "img": 6}, {"title": {"en": "Decide from one inbox", "es": "Decida desde una sola bandeja"}, "tab": {"en": "Your inbox", "es": "Su bandeja"}, "bullets": [{"en": "Story approvals, decisions, cost approvals, stalls", "es": "Aprobación de historias, decisiones, aprobación de costos, bloqueos"}, {"en": "Options and a recommendation on every choice", "es": "Opciones y una recomendación en cada decisión"}, {"en": "One click posts your decision to GitHub as you", "es": "Un clic publica su decisión en GitHub a su nombre"}], "img": 7}, {"title": {"en": "Coordinate every project from one agent", "es": "Coordine todo desde un solo agente"}, "tab": {"en": "Agent Admin", "es": "Agent Admin"}, "bullets": [{"en": "One admin agent per project, one over all", "es": "Un agente administrador por proyecto y uno general"}, {"en": "It proposes cross-project instructions; you approve", "es": "Propone instrucciones entre proyectos; usted aprueba"}, {"en": "You set each admin's permissions", "es": "Usted define los permisos de cada administrador"}], "img": 8}, {"title": {"en": "Set the rules once", "es": "Defina las reglas una vez"}, "tab": {"en": "Settings", "es": "Configuración"}, "bullets": [{"en": "Claude subscription, API key or Foundry, per project", "es": "Suscripción a Claude, clave de API o Foundry, por proyecto"}, {"en": "Spend caps per project and per story", "es": "Topes de gasto por proyecto y por historia"}, {"en": "Core guardrails locked on; the rest are yours to tune", "es": "Salvaguardas esenciales siempre activas; el resto lo ajusta usted"}], "img": 9}], "story": {"label": {"en": "Example project", "es": "Proyecto de ejemplo"}, "title": {"en": "Northwind Field Service", "es": "Northwind Field Service"}, "stations": [{"phase": "bulk", "key": "PO", "role": {"en": "Product owner", "es": "Product owner"}, "step": {"en": "Idea", "es": "Idea"}, "what": {"en": "Turns your brief, deck or capability map into a whole backlog at once, or helps you write the stories yourself.", "es": "Convierte su brief, presentación o mapa de capacidades en todo un backlog de una vez, o le ayuda a escribir las historias usted mismo."}, "log": {"en": "Turned the brief into a first backlog across the capability map.", "es": "Convirtió el brief en un primer backlog sobre el mapa de capacidades."}}, {"phase": "bulk", "key": "YOU", "role": {"en": "You", "es": "Usted"}, "step": {"en": "Backlog", "es": "Backlog"}, "what": {"en": "You groom the backlog in bulk: edit, split, add your own stories and set priorities.", "es": "Usted refina el backlog en bloque: edita, divide, agrega sus propias historias y fija prioridades."}, "log": {"en": "Groomed the backlog and picked #57 for the sprint.", "es": "Refinó el backlog y eligió la #57 para el sprint."}}, {"phase": "one", "key": "YOU", "gate": true, "role": {"en": "You", "es": "Usted"}, "step": {"en": "Approve", "es": "Aprobar"}, "what": {"en": "No work starts on any story you have not signed off.", "es": "No empieza ningún trabajo en una historia que usted no haya aprobado."}, "log": {"en": "Approved #57. The team starts now.", "es": "Aprobó la #57. El equipo empieza ahora."}}, {"phase": "one", "key": "ARC", "role": {"en": "Architect", "es": "Arquitecto"}, "step": {"en": "Design", "es": "Diseño"}, "what": {"en": "Designs, sizes and writes the test cases. Any new cloud resource and its monthly cost waits for your approval.", "es": "Diseña, estima y escribe los casos de prueba. Cualquier recurso nuevo en la nube y su costo mensual espera su aprobación."}, "log": {"en": "Spec written, sized M, test cases ready for the developers.", "es": "Especificación lista, tamaño M, casos de prueba listos para los desarrolladores."}}, {"phase": "one", "key": "DEV", "role": {"en": "Developers A and B", "es": "Desarrolladores A y B"}, "step": {"en": "Build", "es": "Desarrollo"}, "what": {"en": "Two developers build in parallel, with automated tests.", "es": "Dos desarrolladores construyen en paralelo, con pruebas automatizadas."}, "log": {"en": "Pushed the van stock API client and the job card badge, with tests.", "es": "Subió el cliente de API de stock y la insignia en la ficha, con pruebas."}}, {"phase": "one", "key": "QA", "role": {"en": "QA and review", "es": "QA y revisión"}, "step": {"en": "Verify", "es": "Verificación"}, "what": {"en": "QA tries to break it and a different role reviews the code. Failing checks are fixed and re-verified.", "es": "QA intenta romperlo y un rol distinto revisa el código. Las verificaciones fallidas se corrigen y se vuelven a verificar."}, "log": {"en": "Found one defect, fixed and re-verified. Review approved.", "es": "Encontró un defecto, corregido y verificado de nuevo. Revisión aprobada."}}, {"phase": "one", "key": "SEC", "after": true, "role": {"en": "Security reviewer", "es": "Revisor de seguridad"}, "step": {"en": "Security gate", "es": "Control de seguridad"}, "what": {"en": "Before anything merges, checks every change that touches sign-in, secrets, the API, infrastructure or the database. Gaps are filed as bugs; a critical finding blocks the merge until it is fixed.", "es": "Antes de cualquier merge, revisa cada cambio que toca el inicio de sesión, los secretos, la API, la infraestructura o la base de datos. Los vacíos se registran como bugs; un hallazgo crítico bloquea el merge hasta que se corrige."}, "log": {"en": "Checked the API change: no gaps. Security gate passed.", "es": "Revisó el cambio de API: sin vacíos. Control de seguridad aprobado."}}, {"phase": "one", "key": "CQ", "after": true, "role": {"en": "Code quality reviewer", "es": "Revisor de calidad"}, "step": {"en": "Quality gate", "es": "Control de calidad"}, "what": {"en": "Before anything merges, checks the code against the team's standards. Gaps are filed as bugs for the team to fix.", "es": "Antes de cualquier merge, revisa el código frente a los estándares del equipo. Los vacíos se registran como bugs para que el equipo los corrija."}, "log": {"en": "Found one gap and filed it as bug #63; the developers fixed it. Quality gate passed.", "es": "Encontró un vacío y lo registró como bug #63; los desarrolladores lo corrigieron. Control de calidad aprobado."}}, {"phase": "one", "key": "SHIP", "role": {"en": "Pipeline", "es": "Pipeline"}, "step": {"en": "Ship", "es": "Lanzamiento"}, "what": {"en": "With every gate passed: merge and deploy to your cloud.", "es": "Con todos los controles aprobados: merge y despliegue en su nube."}, "log": {"en": "#57 merged and deployed to your cloud.", "es": "#57 integrada y desplegada en su nube."}}, {"phase": "one", "key": "PO", "loop": true, "role": {"en": "Product owner", "es": "Product owner"}, "step": {"en": "Back to backlog", "es": "De vuelta al backlog"}, "what": {"en": "Each iteration can create new stories: bugs from QA and the gates, splits, and ideas you add along the way. They go back into the backlog for your approval, and the next story begins.", "es": "Cada iteración puede crear historias nuevas: bugs de QA y de los controles, divisiones e ideas que usted agrega en el camino. Vuelven al backlog para su aprobación, y empieza la siguiente historia."}, "log": {"en": "Added \"Low stock alert\" to the backlog, suggested while building #57. Waiting for your approval; the next story starts.", "es": "Agregó \"Alerta de stock bajo\" al backlog, sugerida durante la #57. Espera su aprobación; empieza la siguiente historia."}}]}, "pitch": [{"kind": "title", "eyebrow": {"en": "Automa Solution Delivery", "es": "Automa Solution Delivery"}, "h": {"en": "Your software team, on autopilot", "es": "Su equipo de software, en piloto automático"}, "p": {"en": "AI delivery teams that plan, build, test and ship your product, with you approving every step that matters.", "es": "Equipos de entrega con IA que planifican, construyen, prueban y lanzan su producto, con su aprobación en cada paso importante."}, "stats": [["7", {"en": "AI specialists on your backlog", "es": "especialistas de IA en su backlog"}], ["1", {"en": "owner with the keys: you", "es": "dueño con las llaves: usted"}], ["24/7", {"en": "delivery, every step on the record", "es": "entrega, cada paso queda registrado"}]]}, {"kind": "cards", "h": {"en": "Software takes too long and costs too much", "es": "El software tarda demasiado y cuesta demasiado"}, "cards": [[{"en": "Slow to start", "es": "Lento para arrancar"}, {"en": "Weeks to hire or contract a team before the first line of code is written.", "es": "Semanas para contratar un equipo antes de escribir la primera línea de código."}], [{"en": "Expensive to run", "es": "Costoso de operar"}, {"en": "Even offshore, a small product team costs tens of thousands of dollars a month.", "es": "Incluso offshore, un equipo de producto pequeño cuesta decenas de miles de dólares al mes."}], [{"en": "Hard to see", "es": "Difícil de ver"}, {"en": "Status lives in meetings and slide decks, not in the work. Surprises arrive late.", "es": "El estado vive en reuniones y presentaciones, no en el trabajo. Las sorpresas llegan tarde."}]]}, {"kind": "team", "h": {"en": "A complete delivery team made of AI agents", "es": "Un equipo de entrega completo hecho de agentes de IA"}, "p": {"en": "Seven specialist roles work your backlog around the clock, in your GitHub, on your cloud.", "es": "Siete roles especializados trabajan su backlog día y noche, en su GitHub, en su nube."}, "roles": [[{"en": "You", "es": "Usted"}, {"en": "Owner. Nothing ships without you.", "es": "Dueño. Nada sale sin usted."}, "owner"], [{"en": "Product owner", "es": "Product owner"}, {"en": "Turns ideas into stories", "es": "Convierte ideas en historias"}, ""], [{"en": "Architect", "es": "Arquitecto"}, {"en": "Designs, sizes and reviews", "es": "Diseña, estima y revisa"}, ""], [{"en": "Developer A", "es": "Desarrollador A"}, {"en": "Builds in parallel", "es": "Construye en paralelo"}, ""], [{"en": "Developer B", "es": "Desarrollador B"}, {"en": "Builds in parallel", "es": "Construye en paralelo"}, ""], [{"en": "QA", "es": "QA"}, {"en": "Writes test cases and tries to break it", "es": "Escribe casos de prueba e intenta romperlo"}, ""], [{"en": "Security reviewer", "es": "Revisor de seguridad"}, {"en": "Gate before merge for every risky change", "es": "Control antes del merge para cada cambio sensible"}, "rev"], [{"en": "Code quality reviewer", "es": "Revisor de calidad"}, {"en": "Gate before merge for code quality", "es": "Control antes del merge para la calidad del código"}, "rev"]]}, {"kind": "steps", "h": {"en": "Build the backlog once, then iterate one story at a time", "es": "Arme el backlog una vez y luego itere una historia a la vez"}, "groups": [[{"en": "One time · at project start", "es": "Una vez · al inicio del proyecto"}, [{"en": "Idea", "es": "Idea"}, {"en": "Backlog", "es": "Backlog"}]], [{"en": "Iterative · one story at a time", "es": "Iterativo · una historia a la vez"}, [{"en": "Approve", "es": "Aprobar"}, {"en": "Design", "es": "Diseño"}, {"en": "Build", "es": "Desarrollo"}, {"en": "Verify", "es": "Verificación"}, {"en": "Security & quality", "es": "Seguridad y calidad"}, {"en": "Ship", "es": "Lanzamiento"}]]], "p": {"en": "Your gates: you approve every story before work starts, and every cloud resource and its monthly cost before it exists. Nothing merges until the security and quality gates pass. New stories found along the way go back into the backlog for your approval.", "es": "Sus controles: usted aprueba cada historia antes de que empiece el trabajo, y cada recurso en la nube y su costo mensual antes de que exista. Nada se integra hasta que pasan los controles de seguridad y calidad. Las historias nuevas que surgen en el camino vuelven al backlog para su aprobación."}}, {"kind": "reviewers", "h": {"en": "Two gates before every merge", "es": "Dos controles antes de cada merge"}, "p": {"en": "Nothing merges or deploys until security and code quality pass. Every gap they find is filed as a bug.", "es": "Nada se integra ni se despliega hasta que pasan seguridad y calidad de código. Cada vacío que encuentran se registra como bug."}, "cards": [[{"en": "Security reviewer", "es": "Revisor de seguridad"}, {"en": "Checks every change that touches sign-in, secrets, the API, infrastructure or the database. A critical finding blocks the merge until it is fixed.", "es": "Revisa cada cambio que toca el inicio de sesión, los secretos, la API, la infraestructura o la base de datos. Un hallazgo crítico bloquea el merge hasta que se corrige."}], [{"en": "Code quality reviewer", "es": "Revisor de calidad de código"}, {"en": "Checks the code against the team's standards, and each epic as a whole. Gaps go back to the team as bugs.", "es": "Revisa el código frente a los estándares del equipo, y cada épica completa. Los vacíos vuelven al equipo como bugs."}]]}, {"kind": "cards", "h": {"en": "Autonomous team, guardrails you control", "es": "Equipo autónomo, salvaguardas que usted controla"}, "cards": [[{"en": "You approve every story", "es": "Usted aprueba cada historia"}, {"en": "No work starts on anything you have not signed off.", "es": "No empieza ningún trabajo que usted no haya aprobado."}], [{"en": "You approve every cloud cost", "es": "Usted aprueba cada costo de nube"}, {"en": "Sizes and monthly cost are shown before any resource is created.", "es": "Se muestran tamaños y costo mensual antes de crear cualquier recurso."}], [{"en": "Rules enforced in code", "es": "Reglas aplicadas en código"}, {"en": "Role permissions and protected files are checked by the pipeline, with tests.", "es": "El pipeline verifica permisos por rol y archivos protegidos, con pruebas."}], [{"en": "No self-review", "es": "Sin autorrevisión"}, {"en": "A different role reviews the code, and the security and quality gates must pass before it merges.", "es": "Lo revisa un rol distinto, y los controles de seguridad y calidad deben pasar antes del merge."}], [{"en": "Everything on the record", "es": "Todo queda registrado"}, {"en": "Every decision, message and run is logged in GitHub.", "es": "Cada decisión, mensaje y ejecución se registra en GitHub."}], [{"en": "Budgets on model spend", "es": "Presupuestos de gasto en modelos"}, {"en": "Spend is tracked per story and capped.", "es": "El gasto se mide por historia y tiene tope."}]]}, {"kind": "proof", "h": {"en": "Proof: Automa is building itself", "es": "Prueba: Automa se construye a sí mismo"}, "stats": [["52", {"en": "work items delivered in 5.4 days", "es": "ítems de trabajo entregados en 5.4 días"}], ["5,625", {"en": "automated tests, written and passing", "es": "pruebas automatizadas, escritas y aprobadas"}], ["167k", {"en": "lines delivered (60k product, 107k test)", "es": "líneas entregadas (60k producto, 107k pruebas)"}], ["$541", {"en": "model spend at list API prices", "es": "de gasto en modelos a precios de lista de API"}]], "big": ["$112,729", {"en": "cost avoided versus a human team at $50 an hour: about 210 times less.", "es": "de costo evitado frente a un equipo humano a US$50/h: unas 210 veces menos."}], "fine": {"en": "GitHub record of the Automa harness repository as of 17 October 2026. Human estimate counts coding time only. Neither figure includes owner time or cloud hosting.", "es": "Registro en GitHub del repositorio del harness de Automa al 17 de octubre de 2026. La estimación humana cuenta solo el tiempo de programación. Ninguna cifra incluye el tiempo del dueño ni el hosting en la nube."}}, {"kind": "cards", "h": {"en": "Four ways to work with Automa", "es": "Cuatro formas de trabajar con Automa"}, "cards": [[{"en": "Pilot sprint", "es": "Sprint piloto"}, {"en": "A fixed-scope first sprint on your idea. Working, tested software in your GitHub in days.", "es": "Un primer sprint de alcance fijo sobre su idea. Software funcional y probado en su GitHub en días."}], [{"en": "Solution delivery", "es": "Entrega de soluciones"}, {"en": "We run the Automa team on your product end to end, from capability map to production.", "es": "Operamos el equipo de Automa en su producto de punta a punta, del mapa de capacidades a producción."}], [{"en": "Automa in your Azure", "es": "Automa en su Azure"}, {"en": "We set up the harness in your subscription and train your owner to run it.", "es": "Instalamos el harness en su suscripción y capacitamos a su dueño para operarlo."}], [{"en": "Managed delivery", "es": "Entrega gestionada"}, {"en": "Ongoing roadmap delivery and support, with a named human lead and monthly review.", "es": "Entrega continua del roadmap y soporte, con un líder humano designado y revisión mensual."}]]}, {"kind": "cta", "h": {"en": "Let's build your next product", "es": "Construyamos su próximo producto"}, "p": {"en": "Start with a pilot sprint: bring an idea, leave with working, tested software. First conversation is free.", "es": "Empiece con un sprint piloto: traiga una idea y llévese software funcional y probado. La primera conversación es gratis."}}]};
  var reduce = false;
  try { reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function t(p) { return '<span data-lang="en">' + esc(p.en) + '</span><span data-lang="es">' + esc(p.es) + '</span>'; }
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function when(id, fn) {
    var el = document.getElementById(id);
    if (el) return fn(el);
    var n = 0, iv = setInterval(function () { el = document.getElementById(id); if (el || ++n > 200) { clearInterval(iv); if (el) fn(el); } }, 100);
  }
  function inView(el, cb) {
    if (!('IntersectionObserver' in window)) return cb(true);
    new IntersectionObserver(function (es) { es.forEach(function (e) { cb(e.isIntersecting); }); }, { threshold: 0.35 }).observe(el);
  }
  var ICON = {
    play: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.2v11.6c0 .6.7 1 1.2.7l9-5.8a.8.8 0 0 0 0-1.4l-9-5.8C4.7 1.2 4 1.6 4 2.2z"/></svg>',
    pause: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="2" width="3.6" height="12" rx="1"/><rect x="9.4" y="2" width="3.6" height="12" rx="1"/></svg>',
    prev: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10.5 2.5 5 8l5.5 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.5 2.5 11 8l-5.5 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    replay: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5a5.5 5.5 0 1 1-5.2 3.7l1.4.5A4 4 0 1 0 8 4v2L4.8 3.3 8 .5z"/></svg>',
    close: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 3.5l9 9m0-9-9 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };
  var L = {
    step: { en: 'Step', es: 'Paso' }, of: { en: 'of', es: 'de' },
    play: { en: 'Play', es: 'Reproducir' }, pause: { en: 'Pause', es: 'Pausar' },
    prev: { en: 'Previous', es: 'Anterior' }, next: { en: 'Next', es: 'Siguiente' },
    replay: { en: 'Play again', es: 'Ver de nuevo' }, follow: { en: 'Follow it through the team', es: 'Sígala por el equipo' },
    after: { en: 'Gate before merge', es: 'Control antes del merge' }, bulk: { en: 'One time', es: 'Una vez' }, one: { en: 'Iterative', es: 'Iterativo' }, bulkLong: { en: 'One time · at project start', es: 'Una vez · al inicio del proyecto' }, oneLong: { en: 'Iterative · one story at a time', es: 'Iterativo · una historia a la vez' }, gate: { en: 'Your gate', es: 'Su control' },
    close: { en: 'Close', es: 'Cerrar' }, email: { en: 'Email us', es: 'Escríbanos' },
    explore: { en: 'Explore the site', es: 'Explorar el sitio' }, pilot: { en: 'Scope a pilot sprint', es: 'Defina un sprint piloto' },
    activity: { en: 'Team activity', es: 'Actividad del equipo' }, waiting: { en: 'Press play to watch the story move.', es: 'Pulse reproducir para ver avanzar la historia.' }
  };

  /* ------------------------------------------------------------ product tour */
  function buildTour(m) {
    var steps = D.tour, n = steps.length, cur = 0, playing = !reduce, visible = false, timer = null, DUR = 6500;
    var tabs = steps.map(function (s, i) {
      return '<button type="button" role="tab" class="tour-tab" id="tour-tab-' + i + '" aria-controls="tour-panel" aria-selected="false" data-i="' + i + '"><span class="n">' + two(i + 1) + '</span><span class="l">' + t(s.tab) + '</span></button>';
    }).join('');
    var shots = steps.map(function (s, i) {
      return '<div class="tour-shot" data-i="' + i + '"><img data-lang="en" alt="" width="1600" height="900" data-src="assets/tour-' + s.img + '-en.webp"><img data-lang="es" alt="" width="1600" height="900" data-src="assets/tour-' + s.img + '-es.webp"></div>';
    }).join('');
    m.innerHTML =
      '<div class="tour" tabindex="-1">' +
        '<div class="tour-tabs" role="tablist" aria-label="Product tour">' + tabs + '</div>' +
        '<div class="tour-stage" id="tour-panel" role="tabpanel">' +
          '<div class="tour-frame">' + shots + '</div>' +
          '<div class="tour-cap">' +
            '<div class="tour-count"></div><h4 class="tour-title"></h4><ul class="tour-bullets"></ul>' +
            '<div class="tour-ctrl">' +
              '<button type="button" class="ctl" data-act="prev">' + ICON.prev + '<span class="sr">' + t(L.prev) + '</span></button>' +
              '<button type="button" class="ctl" data-act="toggle"></button>' +
              '<button type="button" class="ctl" data-act="next">' + ICON.next + '<span class="sr">' + t(L.next) + '</span></button>' +
              '<div class="tour-bar"><i></i></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    var root = m.firstChild, bar = m.querySelector('.tour-bar i'), tog = m.querySelector('[data-act="toggle"]');
    function load(i) {
      var imgs = m.querySelectorAll('.tour-shot[data-i="' + i + '"] img');
      for (var k = 0; k < imgs.length; k++) if (!imgs[k].src) imgs[k].src = imgs[k].getAttribute('data-src');
    }
    function paintToggle() { tog.innerHTML = (playing ? ICON.pause : ICON.play) + '<span class="sr">' + t(playing ? L.pause : L.play) + '</span>'; tog.setAttribute('aria-pressed', String(playing)); }
    function go(i, fromUser) {
      cur = (i + n) % n; var s = steps[cur];
      load(cur); load((cur + 1) % n);
      var sh = m.querySelectorAll('.tour-shot'); for (var k = 0; k < sh.length; k++) sh[k].classList.toggle('on', k === cur);
      var tb = m.querySelectorAll('.tour-tab'); for (k = 0; k < tb.length; k++) { tb[k].classList.toggle('on', k === cur); tb[k].setAttribute('aria-selected', String(k === cur)); }
      var active = tb[cur]; if (active && active.parentNode.scrollWidth > active.parentNode.clientWidth) active.parentNode.scrollTo({ left: active.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' });
      m.querySelector('.tour-count').innerHTML = t({ en: 'Step ' + (cur + 1) + ' of ' + n, es: 'Paso ' + (cur + 1) + ' de ' + n });
      m.querySelector('.tour-title').innerHTML = t(s.title);
      m.querySelector('.tour-bullets').innerHTML = s.bullets.map(function (b) { return '<li>' + t(b) + '</li>'; }).join('');
      if (fromUser) playing = false;
      paintToggle(); schedule();
    }
    function schedule() {
      clearTimeout(timer); bar.style.transition = 'none'; bar.style.width = '0%';
      if (!playing || !visible) return;
      void bar.offsetWidth; bar.style.transition = 'width ' + DUR + 'ms linear'; bar.style.width = '100%';
      timer = setTimeout(function () { go(cur + 1); }, DUR);
    }
    m.addEventListener('click', function (e) {
      var tab = e.target.closest('.tour-tab'); if (tab) return go(+tab.getAttribute('data-i'), true);
      var b = e.target.closest('[data-act]'); if (!b) return;
      var a = b.getAttribute('data-act');
      if (a === 'prev') go(cur - 1, true); else if (a === 'next') go(cur + 1, true);
      else { playing = !playing; paintToggle(); schedule(); }
    });
    root.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { go(cur + 1, true); e.preventDefault(); } if (e.key === 'ArrowLeft') { go(cur - 1, true); e.preventDefault(); } });
    var x0 = null;
    m.querySelector('.tour-frame').addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    m.querySelector('.tour-frame').addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1), true); });
    m.querySelector('.tour-frame').addEventListener('click', function () { go(cur + 1, true); });
    inView(m, function (v) { visible = v; schedule(); });
    go(0);
  }

  /* ------------------------------------------------------------ story player */
  function buildStory(m) {
    var S = D.story, st = S.stations, n = st.length, cur = -1, playing = false, timer = null, started = false, STEP = reduce ? 900 : 2100;
    var track = st.map(function (s, i) {
      return (i === 0 || st[i - 1].phase !== s.phase ? '<li class="sep" aria-hidden="true"><span>' + t(s.phase === 'bulk' ? L.bulk : L.one) + '</span></li>' : '') +
        '<li><button type="button" class="stn' + (s.gate ? ' gate' : '') + (s.after ? ' after' : '') + (s.loop ? ' loop' : '') + '" data-i="' + i + '">' +
          '<span class="dot">' + (s.loop ? '↻' : esc(s.key === 'YOU' ? (s.gate ? '✓' : 'YOU') : s.key)) + '</span>' +
          '<span class="st">' + t(s.step) + '</span><span class="rl">' + t(s.role) + '</span></button></li>';
    }).join('');
    m.innerHTML =
      '<div class="story">' +
        '<div class="story-head">' +
          '<div class="story-id"><span class="tag">' + t(S.label) + '</span><b>' + t(S.title) + '</b></div>' +
          '<div class="story-ctl"><button type="button" class="btn-play" data-act="toggle"></button></div>' +
        '</div>' +
        '<ol class="story-track">' + track + '</ol>' +
        '<div class="story-body">' +
          '<div class="story-detail" aria-live="polite"></div>' +
          '<div class="story-log"><div class="h">' + t(L.activity) + '</div><ul></ul></div>' +
        '</div>' +
      '</div>';
    var btn = m.querySelector('[data-act="toggle"]'), log = m.querySelector('.story-log ul'), det = m.querySelector('.story-detail');
    function paint() {
      var label = playing ? L.pause : (cur >= n - 1 ? L.replay : (cur < 0 ? L.follow : L.play));
      btn.innerHTML = (playing ? ICON.pause : (cur >= n - 1 ? ICON.replay : ICON.play)) + t(label);
      var b = m.querySelectorAll('.stn');
      for (var k = 0; k < b.length; k++) { var i = +b[k].getAttribute('data-i'); b[k].classList.toggle('done', i < cur); b[k].classList.toggle('on', i === cur); b[k].setAttribute('aria-current', i === cur ? 'step' : 'false'); }
      if (cur < 0) { det.innerHTML = '<p class="idle">' + t(L.waiting) + '</p>'; log.innerHTML = ''; return; }
      var s = st[cur];
      det.innerHTML = '<div class="who"><span class="dot k-' + s.key + (s.after ? ' after' : '') + '">' + esc(s.key === 'YOU' ? 'YOU' : s.key) + '</span><div><div class="r">' + t(s.role) + '</div><div class="s">' + t(s.phase === 'bulk' ? L.bulkLong : L.oneLong) + ' · ' + t(s.step) + (s.gate ? ' · ' + t(L.gate) : '') + (s.after ? ' · ' + t(L.after) : '') + '</div></div></div><p>' + t(s.what) + '</p>';
      log.innerHTML = st.slice(0, cur + 1).map(function (x, i) {
        return '<li class="' + (i === cur ? 'new' : '') + (x.after ? ' after' : '') + (x.gate ? ' gate' : '') + (x.loop ? ' loop' : '') + '"><span class="k">' + esc(x.key === 'YOU' ? 'YOU' : x.key) + '</span><span>' + t(x.log) + '</span></li>';
      }).reverse().join('');
    }
    function tick() { clearTimeout(timer); if (!playing) return; if (cur >= n - 1) { playing = false; paint(); return; } cur++; paint(); timer = setTimeout(tick, STEP); }
    function setPlaying(p) { playing = p; if (p && cur >= n - 1) cur = -1; paint(); clearTimeout(timer); if (p) timer = setTimeout(tick, cur < 0 ? 200 : STEP); }
    m.addEventListener('click', function (e) {
      var s = e.target.closest('.stn'); if (s) { started = true; playing = false; clearTimeout(timer); cur = +s.getAttribute('data-i'); paint(); return; }
      if (e.target.closest('[data-act="toggle"]')) { started = true; setPlaying(!playing); }
    });
    inView(m, function (v) { if (v && !started && !reduce) { started = true; setPlaying(true); } if (!v && playing) { playing = false; clearTimeout(timer); paint(); } });
    paint();
  }

  /* ------------------------------------------------------------ pitch mode */
  var pitchEl = null, pIdx = 0, pPlay = true, pTimer = null, PDUR = 9000, lastFocus = null;
  function slideHTML(s, i) {
    var h = '<div class="pslide k-' + s.kind + '" data-i="' + i + '" role="group" aria-roledescription="slide"><div class="pin">';
    if (s.eyebrow) h += '<div class="pe">' + t(s.eyebrow) + '</div>';
    h += '<h2 class="ph">' + t(s.h) + '</h2>';
    if (s.p && s.kind !== 'steps') h += '<p class="pp">' + t(s.p) + '</p>';
    if (s.kind === 'title') h += '<div class="pstats">' + s.stats.map(function (x) { return '<div><b>' + esc(x[0]) + '</b><span>' + t(x[1]) + '</span></div>'; }).join('') + '</div>';
    if (s.kind === 'cards' || s.kind === 'reviewers') h += '<div class="pcards n' + s.cards.length + '">' + s.cards.map(function (c) { return '<div class="pcard"><h3>' + t(c[0]) + '</h3><p>' + t(c[1]) + '</p></div>'; }).join('') + '</div>';
    if (s.kind === 'team') h += '<div class="pteam">' + s.roles.map(function (r) { return '<div class="prole ' + r[2] + '"><h3>' + t(r[0]) + '</h3><p>' + t(r[1]) + '</p></div>'; }).join('') + '</div>';
    if (s.kind === 'steps') { var num = 0; h += '<div class="pgroups">' + s.groups.map(function (g, gi) { return '<div class="pgroup g' + gi + '"><div class="plabel">' + t(g[0]) + '</div><ol class="psteps">' + g[1].map(function (x) { num++; var cls = num === 3 ? 'gate' : (num === 7 ? 'rgate' : ''); return '<li class="' + cls + '"><span class="num">' + two(num) + '</span>' + t(x) + '</li>'; }).join('') + '</ol></div>'; }).join('') + '</div><p class="pp gate-note">' + t(s.p) + '</p>'; }
    if (s.kind === 'proof') h += '<div class="pstats four">' + s.stats.map(function (x) { return '<div><b>' + esc(x[0]) + '</b><span>' + t(x[1]) + '</span></div>'; }).join('') + '</div><div class="pbig"><b>' + esc(s.big[0]) + '</b><span>' + t(s.big[1]) + '</span></div><p class="pfine">' + t(s.fine) + '</p>';
    if (s.kind === 'cta') h += '<div class="pcta"><a class="pbtn" href="mailto:info@automaconsulting.com?subject=Pilot%20sprint">' + t(L.pilot) + '</a><a class="pbtn ghost" href="mailto:info@automaconsulting.com">info@automaconsulting.com</a><button type="button" class="pbtn ghost" data-pact="close">' + t(L.explore) + '</button></div>';
    return h + '</div></div>';
  }
  function buildPitch() {
    var P = D.pitch;
    pitchEl = document.createElement('div');
    pitchEl.id = 'pitch'; pitchEl.setAttribute('role', 'dialog'); pitchEl.setAttribute('aria-modal', 'true'); pitchEl.setAttribute('aria-label', 'Automa pitch');
    pitchEl.innerHTML =
      '<div class="ptop"><img src="assets/automa-mark.png" alt="" class="pmark"><span class="pbrand">Automa</span><button type="button" class="pclose" data-pact="close">' + ICON.close + '<span class="sr">' + t(L.close) + '</span></button></div>' +
      '<div class="pdeck">' + P.map(slideHTML).join('') + '</div>' +
      '<div class="pbot">' +
        '<button type="button" class="pctl" data-pact="prev">' + ICON.prev + '<span class="sr">' + t(L.prev) + '</span></button>' +
        '<div class="pdots">' + P.map(function (_, i) { return '<button type="button" data-pgo="' + i + '" aria-label="' + (i + 1) + '"></button>'; }).join('') + '</div>' +
        '<button type="button" class="pctl" data-pact="toggle"></button>' +
        '<button type="button" class="pctl" data-pact="next">' + ICON.next + '<span class="sr">' + t(L.next) + '</span></button>' +
      '</div><div class="pprog"><i></i></div>';
    document.body.appendChild(pitchEl);
    pitchEl.addEventListener('click', function (e) {
      var d = e.target.closest('[data-pgo]'); if (d) { pPlay = false; return pgo(+d.getAttribute('data-pgo')); }
      var b = e.target.closest('[data-pact]'); if (!b) return;
      var a = b.getAttribute('data-pact');
      if (a === 'close') closePitch(); else if (a === 'prev') { pPlay = false; pgo(pIdx - 1); } else if (a === 'next') { pPlay = false; pgo(pIdx + 1); } else { pPlay = !pPlay; pgo(pIdx); }
    });
    var x0 = null;
    pitchEl.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    pitchEl.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 50) { pPlay = false; pgo(pIdx + (dx < 0 ? 1 : -1)); } });
  }
  function pgo(i) {
    var n = D.pitch.length; pIdx = Math.max(0, Math.min(n - 1, i));
    var sl = pitchEl.querySelectorAll('.pslide'); for (var k = 0; k < sl.length; k++) { sl[k].classList.toggle('on', k === pIdx); sl[k].setAttribute('aria-hidden', String(k !== pIdx)); }
    var dots = pitchEl.querySelectorAll('[data-pgo]'); for (k = 0; k < dots.length; k++) dots[k].classList.toggle('on', k === pIdx);
    pitchEl.querySelector('[data-pact="prev"]').disabled = pIdx === 0;
    pitchEl.querySelector('[data-pact="next"]').disabled = pIdx === n - 1;
    if (pIdx === n - 1) pPlay = false;
    var tg = pitchEl.querySelector('[data-pact="toggle"]'); tg.innerHTML = (pPlay ? ICON.pause : ICON.play) + '<span class="sr">' + t(pPlay ? L.pause : L.play) + '</span>'; tg.setAttribute('aria-pressed', String(pPlay));
    var bar = pitchEl.querySelector('.pprog i'); clearTimeout(pTimer); bar.style.transition = 'none'; bar.style.width = '0%';
    if (pPlay) { void bar.offsetWidth; bar.style.transition = 'width ' + PDUR + 'ms linear'; bar.style.width = '100%'; pTimer = setTimeout(function () { pgo(pIdx + 1); }, PDUR); }
  }
  function onPitchKey(e) {
    if (!pitchEl || !pitchEl.classList.contains('open')) return;
    if (e.key === 'Escape') closePitch();
    else if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); pPlay = false; pgo(pIdx + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); pPlay = false; pgo(pIdx - 1); }
  }
  function openPitch() {
    if (!pitchEl) buildPitch();
    lastFocus = document.activeElement; pPlay = !reduce;
    pitchEl.classList.add('open'); document.documentElement.classList.add('pitch-open');
    pgo(0); document.addEventListener('keydown', onPitchKey);
    setTimeout(function () { var c = pitchEl.querySelector('[data-pact="next"]'); if (c) c.focus({ preventScroll: true }); }, 50);
  }
  function closePitch() {
    clearTimeout(pTimer); pitchEl.classList.remove('open'); document.documentElement.classList.remove('pitch-open');
    document.removeEventListener('keydown', onPitchKey);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('[data-open-pitch]')) { e.preventDefault(); openPitch(); } });
  window.automaOpenPitch = openPitch;

  /* The page runtime renders the template after this script runs and may replace nodes, so build into the
     rendered mount points (not the hidden template copy) and rebuild if a mount is ever replaced. */
  var MOUNTS = { 'tour-mount': buildTour, 'story-mount': buildStory };
  function ensure() {
    for (var id in MOUNTS) {
      var el = document.getElementById(id);
      if (el && !el.__built && !(el.closest && el.closest('x-dc')) && el.isConnected) { el.__built = true; MOUNTS[id](el); }
    }
  }
  ensure();
  try { new MutationObserver(ensure).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) { setInterval(ensure, 400); }
})();
