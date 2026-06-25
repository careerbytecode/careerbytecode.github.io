/* ──────────────────────────────────────────────────────────────────────────
   programs-data.js — Single source of truth for the "Programs" page.

   ❶  To add a RUNNING program: append an object to `running`.
   ❷  To add an UPCOMING program: append an object to `upcoming`.
       Save → the page renders the cards, badges and stat strip automatically.

   FIELD REFERENCE
   running: [{
     title, domain, accent,         // accent: blue | rose | teal | purple | gold | cyan
     description,                    // one or two lines
     duration, mentor, format,      // shown in the meta row
     tags: [],                      // small pills
     url                            // link to the live program site
   }]
   upcoming: [{
     title, city, domain, accent, url   // url = where "Register interest" points
   }]

   domain controls the card icon. Supported: DevOps, Kubernetes, Marketing,
   AI, GenAI, "AI/ML", Cloud, Security, Data. Anything else → a default icon.
   ────────────────────────────────────────────────────────────────────────── */

window.CBC_PROGRAMS = {

  running: [
    {
      title: "DevOps with AI Automation",
      domain: "DevOps",
      accent: "blue",
      description: "A hands-on, mentor-led journey through Linux, AWS, Azure, Docker, Kubernetes and AI-powered automation - built to make you production-ready.",
      duration: "90 days",
      mentor: "Saurabh Bhoyar",
      format: "Mentor-led, live",
      tags: ["Linux", "AWS", "Azure", "Docker", "Kubernetes", "AI Automation"],
      url: "https://careerbytecode.github.io/devops-course/"
    },
    {
      title: "Advanced Digital Marketing",
      domain: "Marketing",
      accent: "rose",
      description: "57 hands-on modules with live mentorship - SEO, social, content, paid ads and analytics, all built around real, career-focused projects.",
      duration: "57 modules",
      mentor: "Sonali Kurade",
      format: "Live mentorship",
      tags: ["SEO", "Social", "Content", "Paid Ads", "Analytics"],
      url: "https://careerbytecode.github.io/digital-marketing/"
    },
    {
      title: "Kubernetes Bootcamp",
      domain: "Kubernetes",
      accent: "teal",
      description: "10 hands-on days with Shubh Dadhich - deploy, automate and run Kubernetes through project-driven, real-world labs and GitOps workflows.",
      duration: "10 days",
      mentor: "Shubh Dadhich",
      format: "Project-driven",
      tags: ["Kubernetes", "GitOps", "CI/CD", "Hands-on"],
      url: "https://careerbytecode.github.io/kubernetes-bootcamp/"
    }
  ],

  upcoming: [
    { title: "DevOps Internship",      city: "Bangalore", domain: "DevOps", accent: "blue",   url: "https://www.linkedin.com/in/careerbytecode" },
    { title: "GenAI Internship",       city: "Bangalore", domain: "GenAI",  accent: "purple", url: "https://www.linkedin.com/in/careerbytecode" },
    { title: "AI / GenAI Internship",  city: "Chennai",   domain: "AI",     accent: "purple", url: "https://www.linkedin.com/in/careerbytecode" },
    { title: "AI / ML Internship",     city: "Hyderabad", domain: "AI/ML",  accent: "gold",   url: "https://www.linkedin.com/in/careerbytecode" }
  ]

};
