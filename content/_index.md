---
title: "Home"
date: 2019-02-20T16:11:19
author: "Fran"
banner_tagline: "To promote, elevate and evolve VFX/CG pipelines"

# The in-person cancellation went out in September and refunds are done, so the hero now
# leads with the online programme. Uncomment to bring back the struck-through line.
# cancelled_event:
#   flag: "Cancelled"
#   what: "In person · BCIT Vancouver · Thursday 17 September 2026"

event_location: "TPC 2026"
# Big amber pills next to the edition label: the first thing people should take away.
event_badges: ["Online", "Free"]
event_address: "Join live from anywhere"
event_date: "Tuesday 20 & Tuesday 27 October 2026"
event_time: "Mornings 09:00 – 12:00 Pacific · Speaker Series kickoff 14:00 Pacific on the 20th"

banner_blurb: "Two free days of talks from people who have built production pipelines at Digital Domain, Stability AI, Pixar, Ubisoft, Sony Pictures Imageworks and The Mill, and on the afternoon of the 20th, the DPPA Online Speaker Series kicks off with Alex Hughes of Miris. Every talk ends in live Q&A, and the tenth Pipeline Awards close out the year in December."

# The hero shows these bullets in place of the blurb (the blurb stays as the meta description).
# Markdown is allowed: lead with a bold phrase so the list scans.
banner_points:
  - "**Two free days of talks** from people who have built production pipelines at Digital Domain, Stability AI, Pixar, Ubisoft, Sony Pictures Imageworks and The Mill"
  - "**DPPA Online Speaker Series kickoff** with Alex Hughes of Miris, on the afternoon of the 20th"
  - "**Live Q&A** at the end of every talk"
  - "**The tenth Pipeline Awards** close out the year in December"

banner_buttons:
  - text: "Register · 20 Oct morning"
    url: "https://luma.com/9kqv63oh"
    style: "btn-accent"
  - text: "Register · 20 Oct afternoon"
    url: "https://www.eventbrite.com/e/large-scale-cloud-native-radiance-field-training-for-streamable-assets-tickets-1994577276326?aff=TPCWebsite"
    style: "btn-accent"
  - text: "Register · 27 Oct morning"
    url: "https://luma.com/ofvxloqb"
    style: "btn-accent"

# The line-up as a row of faces under the hero buttons. Ids are in data/tpc2026_speakers.yaml.
hero_speakers:
  ids: ["hanno-basse", "bert-van-brande", "fermi-perumal", "cyrus-rahgoshay", "alex-hughes", "dan-englesson", "alan-mcseveney", "cole-pearsall"]
  caption: 'Eight speakers across 20 & 27 October · <a href="#events">Meet them</a>'

# Switched off: the cancellation is no longer news. Set show: true to bring the banner back.
status_notice:
  show: false
  flag: "Change of plan"
  title: "The in-person conference on Thursday 17 September 2026 has been cancelled."
  body: 'The Pipeline Conference will not take place at BCIT in Vancouver as planned. Rather than lose a year of programme work, TPC 2026 is moving online! Because we are no longer paying for a room in one city, it is free to attend from anywhere. If you bought a ticket you have been refunded in full and automatically. <a href="/2026-event-schedule/">See what is happening instead</a>.'

# The two headliners of Tuesday 20 October, as alternating spotlights under the hero.
spotlights:
  eyebrow: "Tuesday 20 October"
  heading: "Headlining the 20th"
  intro: "A keynote to open the morning, and the kickoff of the DPPA Online Speaker Series in the afternoon. Stay for both: they are one day of TPC 2026."
  items:
  - id: "hanno-basse"
    eyebrow: "Keynote · The Agentic Pipeline · 20 October, morning"
    credentials:
      - "Former CTO of Digital Domain, Stability AI, Microsoft Azure Media & Entertainment and 20th Century Fox"
      - "Fellow of SMPTE and member of the Academy of Motion Picture Arts and Sciences"
      - "30 patents"
    heading: "Move control out of the prompt, and back into the pipeline."
    body: "Hanno deconstructs how generative models actually work, exposes their built-in limitations, and shows why they require us to take control back into our own pipelines. For pipeline engineers, TDs and heads of technology grappling with the realities of integrating AI into production, this is the session to be in."
    buttons:
      - text: "Register for the morning"
        url: "https://luma.com/9kqv63oh"
        style: "btn-accent"
      - text: "See the full line-up"
        url: "#events"
        style: "btn-transparent"
  - id: "alex-hughes"
    eyebrow: "Speaker Series kickoff · 20 October, 14:00 Pacific"
    credentials:
      - "Founding engineer at Arch Platform Technologies, bringing VFX and M&E studios into the cloud"
      - "Former Head of Pipeline at Vitality VFX; Digital Domain and Zoic Studios before that"
      - "Creator of SEPT, an open-source file-naming toolkit for VFX"
    heading: "Large Scale Cloud Native Radiance Field Training for Streamable Assets"
    body: "Stay on after the morning sessions. Alex shows how Miris trains radiance fields at cloud scale and turns them into 3D assets that stream to any device: the training infrastructure, the cost model, and the pipeline work in between. The first talk of the DPPA Online Speaker Series, and part of the TPC 2026 programme on the 20th."
    sponsor:
      name: "Miris"
      url: "https://www.miris.com/"
      logo: "/img/miris-logo.svg"
      tagline: "Stream 3D content without limits."
    buttons:
      - text: "Register for the afternoon"
        url: "https://www.eventbrite.com/e/large-scale-cloud-native-radiance-field-training-for-streamable-assets-tickets-1994577276326?aff=TPCWebsite"
        style: "btn-accent"
      - text: "See the full line-up"
        url: "#events"
        style: "btn-transparent"

online_events:
  eyebrow: "TPC 2026 · Online · Free"
  heading: "Two days of talks and an awards show"
  intro: "We moved TPC 2026 online from Vancouver, and the room just got a whole lot bigger. Tuesday 20 October runs morning and afternoon: The Agentic Pipeline, then the kickoff of the DPPA Online Speaker Series with Alex Hughes of Miris. Core Pipeline Services follows on the 27th, and the tenth Pipeline Awards close out the year. Every session is free: <a href=\"/2026-event-schedule/\">see the full run of show</a>, or <a href=\"https://newsletter.pipedev.org/forms/nfrm_BzLMaLXv\">subscribe to our newsletter</a> to hear about the Awards Show first."
  items:
    - eyebrow: "Tuesday 20 October · Morning"
      title: "The Agentic Pipeline"
      subtitle: "AI and agentic workflows in digital media pipelines"
      date: "Tuesday 20 October 2026"
      end_date: 2026-10-21
      format: "09:00 – 12:00 Pacific · Online · Recorded"
      speaker_ids:
        - id: "hanno-basse"
          tag: "Keynote"
        - "bert-van-brande"
        - "fermi-perumal"
        - "cyrus-rahgoshay"
      cost: "Free"
      accent: "cyan"
      cta_style: "btn-accent"
      body: "Three talks converging on one argument: generative AI only behaves once the pipeline is holding the reins. Why control cannot live in the prompt; what governance and rights management look like inside a working studio pipeline; and what changes when agents run inside standard 3D software rather than alongside it."
      cta_text: "Register free on Luma"
      cta_url: "https://luma.com/9kqv63oh"
    - eyebrow: "Tuesday 20 October · Afternoon"
      title: "Speaker Series Kickoff"
      subtitle: "Large Scale Cloud Native Radiance Field Training for Streamable Assets"
      date: "Tuesday 20 October 2026"
      end_date: 2026-10-21
      format: "14:00 – 15:00 Pacific · Online · Recorded"
      sponsor:
        name: "Miris"
        url: "https://www.miris.com/"
        logo: "/img/miris-logo.svg"
      speaker_ids:
        - "alex-hughes"
      cost: "Free"
      accent: "green"
      body: "Stay on after the morning programme: Alex Hughes of Miris on training radiance fields at cloud scale and turning them into 3D assets that stream to any device. The training infrastructure, the cost model, and the pipeline work in between. It is the first talk of the DPPA Online Speaker Series, and part of TPC 2026 on the 20th."
      cta_text: "Register free on Eventbrite"
      cta_url: "https://www.eventbrite.com/e/large-scale-cloud-native-radiance-field-training-for-streamable-assets-tickets-1994577276326?aff=TPCWebsite"
      cta_style: "btn-accent"
    - eyebrow: "Tuesday 27 October · Morning"
      title: "Core Pipeline Services"
      subtitle: "Pipeline engineering and operations at production scale"
      date: "Tuesday 27 October 2026"
      end_date: 2026-10-28
      format: "09:00 – 12:00 Pacific · Online · Recorded"
      speaker_ids:
        - "cole-pearsall"
        - "dan-englesson"
        - "alan-mcseveney"
      cost: "Free"
      accent: "amber"
      body: "The three layers everything else in a studio sits on: the format, the storage, the automation. Getting to OpenUSD without stalling halfway; taking I/O out of the critical path for rendering, playback and cloud bursting; and handing tedious QC checks to agents on the artist's own workstation, with no proprietary data leaving the building."
      cta_text: "Register free on Luma"
      cta_url: "https://luma.com/ofvxloqb"
    - eyebrow: "December 2026"
      title: "The Pipeline Awards Show"
      subtitle: "Closing out the year on the TPC YouTube channel"
      date: "December 2026"
      date_tba: true
      format: "Streamed show · Free"
      speakers: "Announced on the night"
      cost: "Free"
      accent: "purple"
      body: "The tenth Pipeline Awards, now its own produced show. We present our awardees' work on screen, with each of them speaking to you directly, messages from the judges, and open rooms on Discord afterwards so you can talk to the people whose tools you depend on."
      cta_text: "About the awards"
      cta_url: "/pipeline-awards/"

# Who TPC is for, and the case for two mornings off (Michael Herrera's feedback, Oct 2026).
the_case:
  eyebrow: "Who it's for"
  heading: "Two deeply rewarding mornings of Pipeline content"
  intro: "TPC is for the people who build and run production pipelines: pipeline engineers and developers, technical directors and technical artists, and the R&D, infrastructure and production technology teams behind animation, VFX, games and real-time media. Students and people new to the industry are just as welcome. This is where you meet the people doing the work."
  image: "/uploads/2026/07/siggraph/pipeline-bof-2026-room.webp"
  image_alt: "A full room of pipeline professionals at one of the DPPA's Birds of a Feather sessions at SIGGRAPH 2026."
  image_caption: "A full house at one of our pipeline Birds of a Feather sessions, SIGGRAPH 2026."
  panel_heading: "Making the case to your manager"
  points:
    - title: "No travel, no ticket"
      body: "Two three-hour mornings and an afternoon talk, online and free. The only cost is your time."
    - title: "Ideas you can use on Monday"
      body: "How to keep generative models under pipeline control, a staged roadmap to OpenUSD, radiance fields trained at cloud scale and streamed to any device, taking storage I/O off the critical path, and agentic QC that never sends studio data off the workstation."
    - title: "Direct access to thought leaders in the industry"
      body: "Every talk ends in live Q&A with speakers who built pipelines at Digital Domain, Stability AI, Pixar, Ubisoft, Sony Pictures Imageworks, The Mill and Miris."
    - title: "It reaches the whole team"
      body: "Talks are recorded for the TPC YouTube channel, and the discussion carries on in our <a href=\"https://discord.gg/PU8hygUfbf\">Discord</a>, so what you learn travels back to your studio."
  buttons:
    - text: "Register · 20 Oct morning"
      url: "https://luma.com/9kqv63oh"
      style: "btn-accent"
    - text: "Register · 20 Oct afternoon"
      url: "https://www.eventbrite.com/e/large-scale-cloud-native-radiance-field-training-for-streamable-assets-tickets-1994577276326?aff=TPCWebsite"
      style: "btn-accent"
    - text: "Register · 27 Oct morning"
      url: "https://luma.com/ofvxloqb"
      style: "btn-accent"

why_attend:
  heading: "Why come along"
  reasons:
    - title: "Engage with professionals in the industry"
      body: "TPC is by engineers for engineers! The board, organisers and volunteers all work in pipeline engineering themselves, and our community spans pipeline developers, technical directors, R&D and infrastructure people from more than 50 studios across 40-plus countries. Online, the hallway track lives on our Discord, and the speakers stay on after their talks."
      image: "/uploads/2026/07/siggraph/beers-of-a-feather-2026.webp"
      alt: "Pipeline engineers talking shop around a laptop at Beers of a Feather, the DPPA's SIGGRAPH 2026 meetup."
      fit: "cover"
      link_text: "Join the Discord"
      link_url: "https://discord.gg/PU8hygUfbf"
    - title: "Learn about the latest cutting edge techniques"
      body: "This year: a former CTO of Digital Domain and Stability AI on why control cannot live in the prompt; Ubisoft's agentic asset production; one of the team who moved Pixar onto OpenUSD; storage lessons from The Mill and Preymaker; and, kicking off our Speaker Series, Miris on radiance fields that stream to any device. Active projects with real budgets and real deadlines, including the parts that broke."
      image: "/uploads/2026/07/siggraph/pipeline-bof-2026-talk.webp"
      alt: "A packed room at one of the pipeline Birds of a Feather sessions the DPPA coordinated at SIGGRAPH 2026."
      fit: "cover"
      link_text: "See the schedule"
      link_url: "/2026-event-schedule/"
    - title: "Celebrate the latest advances with the Pipeline Awards"
      body: "The tenth Pipeline Awards close out the year in December. Nominations are closed and our independent panel has made its decisions, across two categories: Pipeline Project of the Year, for the tools that save studios months of work, and Pipeline Hero of the Year, for the people who build them."
      image: "/uploads/2026/07/TPC2026-awards-scaled.png"
      alt: "The Pipeline Awards title card over a night-time photograph of the Vancouver skyline."
      fit: "contain"
      link_text: "About the awards"
      link_url: "/pipeline-awards/"
---

The Pipeline Conference is the flagship event of the [Digital Production Pipeline Association](https://pipedev.org), a community that spans more than 50 studios and 40 countries across animation, VFX, games and immersive media. It keeps going year-round through our online speaker series, technical roundtables, [Discord](https://discord.gg/PU8hygUfbf) and the pipeline sessions we coordinate at SIGGRAPH and GDC.
