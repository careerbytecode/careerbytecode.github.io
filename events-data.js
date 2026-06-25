/* ──────────────────────────────────────────────────────────────────────────
   events-data.js - Single source of truth for the "Our Journey" page.

   ❶  To add a new event: append a new object to the `events` array below.
       Save the file. Commit. Done - the page handles sorting, year grouping,
       filters, search, accordion behavior, stats, and lazy rendering for you.

   ❷  Photos:
       - Put event photos in `images/events/<slug>/`
       - Reference them in `bannerImage` and the `gallery` array
       - Missing photos fall back to gradient placeholders / initials avatars

   ❸  All fields except `slug`, `name`, `date` are optional and degrade
       gracefully. Empty arrays hide their subsection entirely.

   ❹  Newest events show first automatically - no manual reordering needed.

   FIELD REFERENCE:
   {
     slug:        "kebab-case-id"  (required, must be unique, used in URL #anchor)
     name:        "Event Title"    (required)
     tagline:     "One-line hook"  (optional)
     date:        "2026-01-25"     (required, YYYY-MM-DD)
     city:        "Bengaluru"      (optional)
     venue:       "Venue Name"     (optional)
     hashtag:     "#CBCMeetup1"    (optional)
     domain:      "Cloud"          (optional - used for filtering; e.g. "Cloud","AI","DevOps","Career","Leadership")
     bannerImage: "images/..."     (optional - hero background image)
     about:       "Paragraph..."   (optional)
     stats: {
       attendees: 120, sessions: 5, speakers: 4, durationHours: 6
     },
     agenda:    [{ time, title, speaker }],
     speakers:  [{ name, role, bio, photo, linkedin }],
     demos:     [{ title, speaker, stack: [], description, github, slides }],
     gallery:   ["images/events/<slug>/photo1.jpg", ...],
     sponsors:  [{ name, tier: "Title|Gold|Silver|Community", logo, url }],
     feedback:  [{ name, linkedin, role, photo, quote }],  // name + linkedin required
     resources: [{ label, url, type: "recording|deck|repo|article" }]
   }
   ────────────────────────────────────────────────────────────────────────── */

window.JOURNEY_EVENTS = [

  // ─────────────────── CareerByteCode Chennai AI Meetup 2026 ───────────────
  {
    slug: "chennai-ai-meetup-2026",
    name: "CareerByteCode Chennai AI Meetup 2026",
    tagline: "A full day of practical AI - live demos, real-world use cases and a packed room at IIT Madras Research Park.",
    date: "2026-05-24",
    city: "Chennai",
    venue: "BrahmaGupta Event Hall, IIT Madras Research Park",
    domain: "AI",
    bannerImage: "assets/img/events/chennai-ai-meetup-2026/banner.jpg",
    about: "CareerByteCode's first in-person AI meetup in Chennai brought together developers, AI enthusiasts, cloud engineers, students and working professionals for a full day of practical AI. Hosted at the BrahmaGupta Event Hall inside IIT Madras Research Park, the day featured live demos, real-world use cases, an interactive prompt battle and a career-growth session - all centred on how AI is actually built and shipped in production.",
    stats: { attendees: 45, sessions: 5, speakers: 7, durationHours: 5 },
    agenda: [],
    speakers: [
      { name: "Kiruthiga Ravi", role: "AI Engineer", bio: "Hosted the opening and closing of the meetup.", photo: "", linkedin: "https://www.linkedin.com/in/aiwithkiruthiga/" },
      { name: "Swathipriya D.G", role: "AI Engineer", bio: "Event host and co-presenter of the MediRAG AI medical assistant demo.", photo: "", linkedin: "https://www.linkedin.com/in/swathi-priya-d-g-curious2upgrade/" },
      { name: "Dharshini K", role: "Data Mentor", bio: "Co-presented the MediRAG AI medical assistant demo.", photo: "", linkedin: "https://www.linkedin.com/in/askdharshiniai/" },
      { name: "Infantus Godfrey", role: "Cloud DevOps", bio: "Presented the Fastly web content acceleration use case.", photo: "", linkedin: "https://www.linkedin.com/in/infantusgodfrey/" },
      { name: "Siva Ranjan", role: "AI/ML Engineer", bio: "Co-presented the Fastly web content acceleration use case.", photo: "", linkedin: "https://www.linkedin.com/in/sivaaiexpert" },
      { name: "Jenefer R George", role: "NLP Specialist", bio: "Co-presented the Fastly web content acceleration use case.", photo: "", linkedin: "https://www.linkedin.com/in/jenwithai/" },
      { name: "Daisy G Thomas", role: "AI Engineer", bio: "Led the career-growth session.", photo: "", linkedin: "https://www.linkedin.com/in/daisy-grace-thomas-38034b189/" }
    ],
    demos: [
      { title: "MediRAG - AI Medical Assistant", speaker: "Swathipriya D.G & Dharshini K", stack: ["Python", "LangChain", "RAG", "LLM"], description: "A retrieval-augmented medical assistant that answers health queries from trusted medical sources - a demonstration of safe, grounded GenAI in healthcare.", github: "", slides: "" },
      { title: "Fastly - Web Content Acceleration", speaker: "Infantus Godfrey, Siva Ranjan & Jenefer R George", stack: ["Fastly", "CDN", "Edge", "VCL"], description: "How edge caching and CDN strategies accelerate global web content delivery, with a walkthrough of real-world performance gains.", github: "", slides: "" }
    ],
    gallery: [
      "assets/img/events/chennai-ai-meetup-2026/01.jpg",
      "assets/img/events/chennai-ai-meetup-2026/02.jpg",
      "assets/img/events/chennai-ai-meetup-2026/03.jpg",
      "assets/img/events/chennai-ai-meetup-2026/04.jpg",
      "assets/img/events/chennai-ai-meetup-2026/05.jpg",
      "assets/img/events/chennai-ai-meetup-2026/06.jpg",
      "assets/img/events/chennai-ai-meetup-2026/07.jpg",
      "assets/img/events/chennai-ai-meetup-2026/08.jpg",
      "assets/img/events/chennai-ai-meetup-2026/09.jpg"
    ],
    sponsors: [
      { name: "CareerByteCode", tier: "Title", logo: "assets/img/cbc-logo.png", url: "https://www.careerbytecode.com" },
      { name: "Fastly", tier: "Gold", logo: "assets/img/fastly-logo.svg", url: "https://www.fastly.com" }
    ],
    feedback: [],
    resources: [
      { label: "View on Meetup", url: "https://www.meetup.com/careerbytecode-ai-cloud-emerging-leaders/events/314755402/", type: "article" },
      { label: "Photo Album on Meetup", url: "https://www.meetup.com/careerbytecode-ai-cloud-emerging-leaders/photos/35998111/", type: "article" }
    ]
  }

  // ─────────────────── Add new events below - same shape as above. ─────────

];
