/* ──────────────────────────────────────────────────────────────────────────
   events-data.js — Single source of truth for the "Our Journey" page.

   ❶  To add a new event: append a new object to the `events` array below.
       Save the file. Commit. Done — the page handles sorting, year grouping,
       filters, search, accordion behavior, stats, and lazy rendering for you.

   ❷  Photos:
       - Put event photos in `images/events/<slug>/`
       - Reference them in `bannerImage` and the `gallery` array
       - Missing photos fall back to gradient placeholders / initials avatars

   ❸  All fields except `slug`, `name`, `date` are optional and degrade
       gracefully. Empty arrays hide their subsection entirely.

   ❹  Newest events show first automatically — no manual reordering needed.

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

  // ─────────────────── EVENT 1 (placeholder — replace with real details) ───
  {
    slug: "event-1",
    name: "CareerByteCode Meetup - Event 1",
    tagline: "A full day of hands-on cloud, AI, and career conversations.",
    date: "2025-09-20",
    city: "City TBD",
    venue: "Venue TBD",
    hashtag: "#CBCMeetup1",
    domain: "Cloud",
    bannerImage: "",
    about: "Event description coming soon. This block will cover the theme, who it was for, and what made the day memorable. Edit the 'about' field in events-data.js to replace this placeholder text.",
    stats: { attendees: 120, sessions: 5, speakers: 6, durationHours: 8 },
    agenda: [
      { time: "09:30", title: "Registration & Coffee", speaker: "" },
      { time: "10:00", title: "Welcome & Opening Note", speaker: "CBC Team" },
      { time: "10:30", title: "Session 1 - To Be Announced", speaker: "Speaker name" },
      { time: "12:00", title: "Networking Lunch", speaker: "" },
      { time: "14:00", title: "Session 2 - To Be Announced", speaker: "Speaker name" },
      { time: "16:00", title: "Panel - Career in Cloud & AI", speaker: "All speakers" },
      { time: "17:30", title: "Closing & Group Photo", speaker: "" }
    ],
    speakers: [
      { name: "Speaker One", role: "Cloud Architect", bio: "Replace this with a 2-line speaker bio. Years of experience, current role, one signature project.", photo: "", linkedin: "https://www.linkedin.com/in/careerbytecode" },
      { name: "Speaker Two", role: "AI Engineer", bio: "Replace this with a 2-line speaker bio. Years of experience, current role, one signature project.", photo: "", linkedin: "https://www.linkedin.com/in/careerbytecode" },
      { name: "Speaker Three", role: "DevOps Lead", bio: "Replace this with a 2-line speaker bio. Years of experience, current role, one signature project.", photo: "", linkedin: "https://www.linkedin.com/in/careerbytecode" }
    ],
    demos: [
      { title: "Demo 1 - Use case title", speaker: "Speaker One", stack: ["Azure", "Terraform", "GitHub Actions"], description: "Brief description of the demo and the real-world problem it solved. Replace this with the actual story.", github: "", slides: "" },
      { title: "Demo 2 - Use case title", speaker: "Speaker Two", stack: ["Python", "OpenAI", "LangChain"], description: "Brief description of the demo and the real-world problem it solved. Replace this with the actual story.", github: "", slides: "" }
    ],
    gallery: [],
    sponsors: [
      { name: "Title Sponsor", tier: "Title", logo: "", url: "#" },
      { name: "Gold Sponsor", tier: "Gold", logo: "", url: "#" },
      { name: "Community Partner", tier: "Community", logo: "", url: "#" }
    ],
    feedback: [
      { name: "Attendee Name", linkedin: "https://www.linkedin.com/in/careerbytecode", role: "Cloud Engineer", photo: "", quote: "Replace with a real attendee testimonial. One to three sentences describing what they got out of the day. Name and LinkedIn are required - bio and photo are optional." },
      { name: "Attendee Name", linkedin: "https://www.linkedin.com/in/careerbytecode", role: "DevOps Practitioner", photo: "", quote: "Replace with a real attendee testimonial. One to three sentences describing what they got out of the day. Name and LinkedIn are required - bio and photo are optional." }
    ],
    resources: [
      { label: "Event Recap on LinkedIn", url: "#", type: "article" },
      { label: "Demo Code Repository", url: "#", type: "repo" }
    ]
  },

  // ─────────────────── EVENT 2 (placeholder — replace with real details) ───
  {
    slug: "event-2",
    name: "CareerByteCode Meetup - Event 2",
    tagline: "Round two - bigger room, sharper demos, same community.",
    date: "2026-01-25",
    city: "City TBD",
    venue: "Venue TBD",
    hashtag: "#CBCMeetup2",
    domain: "AI",
    bannerImage: "",
    about: "Event description coming soon. This block will cover the theme, who it was for, and what made the day memorable. Edit the 'about' field in events-data.js to replace this placeholder text.",
    stats: { attendees: 130, sessions: 6, speakers: 6, durationHours: 8 },
    agenda: [
      { time: "09:30", title: "Registration & Coffee", speaker: "" },
      { time: "10:00", title: "Welcome & Opening Note", speaker: "CBC Team" },
      { time: "10:30", title: "Session 1 - To Be Announced", speaker: "Speaker name" },
      { time: "12:00", title: "Networking Lunch", speaker: "" },
      { time: "14:00", title: "Session 2 - To Be Announced", speaker: "Speaker name" },
      { time: "16:00", title: "Panel - Career in Cloud & AI", speaker: "All speakers" },
      { time: "17:30", title: "Closing & Group Photo", speaker: "" }
    ],
    speakers: [
      { name: "Speaker One", role: "Platform Engineer", bio: "Replace this with a 2-line speaker bio. Years of experience, current role, one signature project.", photo: "", linkedin: "https://www.linkedin.com/in/careerbytecode" },
      { name: "Speaker Two", role: "ML Practitioner", bio: "Replace this with a 2-line speaker bio. Years of experience, current role, one signature project.", photo: "", linkedin: "https://www.linkedin.com/in/careerbytecode" },
      { name: "Speaker Three", role: "FullStack Lead", bio: "Replace this with a 2-line speaker bio. Years of experience, current role, one signature project.", photo: "", linkedin: "https://www.linkedin.com/in/careerbytecode" }
    ],
    demos: [
      { title: "Demo 1 - Use case title", speaker: "Speaker One", stack: ["Kubernetes", "ArgoCD", "Helm"], description: "Brief description of the demo and the real-world problem it solved. Replace this with the actual story.", github: "", slides: "" },
      { title: "Demo 2 - Use case title", speaker: "Speaker Two", stack: ["AWS", "SageMaker", "Lambda"], description: "Brief description of the demo and the real-world problem it solved. Replace this with the actual story.", github: "", slides: "" }
    ],
    gallery: [],
    sponsors: [
      { name: "Title Sponsor", tier: "Title", logo: "", url: "#" },
      { name: "Gold Sponsor", tier: "Gold", logo: "", url: "#" },
      { name: "Silver Sponsor", tier: "Silver", logo: "", url: "#" }
    ],
    feedback: [
      { name: "Attendee Name", linkedin: "https://www.linkedin.com/in/careerbytecode", role: "SRE", photo: "", quote: "Replace with a real attendee testimonial. One to three sentences describing what they got out of the day. Name and LinkedIn are required - bio and photo are optional." },
      { name: "Attendee Name", linkedin: "https://www.linkedin.com/in/careerbytecode", role: "Data Engineer", photo: "", quote: "Replace with a real attendee testimonial. One to three sentences describing what they got out of the day. Name and LinkedIn are required - bio and photo are optional." }
    ],
    resources: [
      { label: "Event Recap on LinkedIn", url: "#", type: "article" }
    ]
  }

  // ─────────────────── Add new events below — same shape as above. ─────────

];
