import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
const heroBg = "/assets/hero-bg-B4OdfLii.jpg";
const thirdPlaceImg = "/assets/third-place-leiWEfCF.jpg";
const psychologyImg = "/assets/psychology-BlV9e9QR.jpg";
const concertImg = "/assets/concert-MJ7iHKfO.jpg";
const sandboxImg = "/assets/sandbox-Ue99UwWj.jpg";
const eulaImg = "/assets/eula-BSFcwPzg.jpg";
const avatarImg = "/assets/avatar-B_B7kCMK.gif";
function Cite({
  href,
  children
}) {
  return /* @__PURE__ */ jsx("a", { href, className: "underline-offset-4 hover:underline", target: "_blank", rel: "noreferrer", children });
}
function SourceTag({
  label,
  href
}) {
  const Tag = href ? "a" : "span";
  return /* @__PURE__ */ jsxs(Tag, { ...href ? {
    href,
    target: "_blank",
    rel: "noreferrer"
  } : {}, className: "inline-flex items-center gap-2 rounded-full border hairline bg-card px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground", children: [
    /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
    /* @__PURE__ */ jsxs("span", { children: [
      "Source Used: ",
      label
    ] })
  ] });
}
function Index() {
  useReveal();
  const chapters = [{
    n: "01",
    kicker: "Intro",
    title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "From software we play to ",
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "places we inhabit." })
    ] }),
    image: thirdPlaceImg,
    alt: "Empty café interior at dusk",
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "Video games have transitioned from being pure software we play to places we inhabit. In a world where recreational activities are almost always costly, people often find it hard to socialise in places other than cafés or restaurants. Although video games used to carry a negative tag — considered mere entertainment or escape — they're now places where people talk, build relationships, and express identity." }),
      /* @__PURE__ */ jsx("p", { children: "For many players, joining a video game feels like entering a familiar social space — an alternative to paid meetups. Games like Minecraft, Fortnite, and Red Dead Redemption 2 show how gaming has become part of everyday life, building communities of its own." }),
      /* @__PURE__ */ jsx("div", { className: "reveal mt-8 flex flex-wrap gap-3", children: /* @__PURE__ */ jsx(SourceTag, { label: "Steinkuehler & Williams — online games as third places", href: "https://academic.oup.com/jcmc/article/11/4/885/4617703" }) })
    ] })
  }, {
    n: "02",
    kicker: "The Framework",
    title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "What are ",
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "third places?" })
    ] }),
    image: eulaImg,
    alt: "Soft blue light through chain link",
    imageLeft: true,
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "Third places are social environments outside one's home (first place) and school or work (second place) — parks, restaurants, cafés, public libraries. Communal grounds where one can relax and feel a sense of belonging without necessarily having to spend money." }),
      /* @__PURE__ */ jsx("p", { children: "Urbanisation and the cost of living are causing many of these physical places to disappear. Online games and digital platforms now offer the same affordance: interfaces that feel like physical social spaces, with the added ability to communicate fluidly and express identity through skins and costumes. Video games have the capacity to be a new third place for informal socialising." }),
      /* @__PURE__ */ jsx("div", { className: "reveal mt-8 flex flex-wrap gap-3", children: /* @__PURE__ */ jsx(SourceTag, { label: "Steinkuehler & Williams — online games as third places", href: "https://academic.oup.com/jcmc/article/11/4/885/4617703" }) })
    ] })
  }, {
    n: "03",
    kicker: "Psychology",
    title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Connection, rendered ",
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "through an avatar." })
    ] }),
    image: psychologyImg,
    alt: "Glowing network of connection points",
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "A psychology study by Kowert, Domahidi, and Quandt found that online games can help players form friendships, especially for people who feel less comfortable in face-to-face social situations. Because games allow communication through avatars, text chat, voice chat, and shared goals, socialising feels less intimidating." }),
      /* @__PURE__ */ jsx("p", { children: "This supports the idea that games are not just entertainment, but digital spaces where players can build confidence, connection, and a sense of belonging." }),
      /* @__PURE__ */ jsx("div", { className: "reveal mt-8 flex flex-wrap gap-3", children: /* @__PURE__ */ jsx(SourceTag, { label: "Kowert et al. — gaming-related friendships" }) })
    ] })
  }, {
    n: "04",
    kicker: "The Shift",
    title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The death of the ",
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "win-condition." })
    ] }),
    image: concertImg,
    alt: "Empty stadium lit by stage lights",
    imageLeft: true,
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-primary", children: "Case Study A — Fortnite's Party Royale" }),
      /* @__PURE__ */ jsx("p", { children: "For a long time, video games revolved around scores, timers, lives, and explicit wins or losses. Contemporary gaming has shifted away from this. Players now log in just to experience the environment." }),
      /* @__PURE__ */ jsx("p", { children: "Fortnite is traditionally a battle royale — a competitive space where players earn points by eliminating others. In 2020, Epic Games introduced Party Royale: a weaponless space for skydiving and live events. When Travis Scott brought his virtual concert there, 12.3 million people queued up to witness it. No combat. No competition. DJ Marshmello's 2019 set drew 10.7 million. What once seemed absurd is now routine." }),
      /* @__PURE__ */ jsxs("div", { className: "reveal mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx(SourceTag, { label: "Variety — Fortnite live event audience numbers", href: "https://variety.com/2020/digital/news/travis-scott-fortnite-record-viewers-live-1234589033/" }),
        /* @__PURE__ */ jsx(SourceTag, { label: "ExitLag — Fortnite Party Royale", href: "https://www.exitlag.com/blog/fortnite-party-royale/" })
      ] })
    ] })
  }, {
    n: "05",
    kicker: "The Sandbox",
    title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Decentralised ",
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "neighbourhoods." })
    ] }),
    image: sandboxImg,
    alt: "Translucent floating blocks",
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-primary", children: "Case Study B — Minecraft & Roblox" }),
      /* @__PURE__ */ jsx("p", { children: "In Minecraft creative servers or Roblox hangout worlds, the game is entirely blank when you first enter. Players treat these platforms less like software and more like digital Lego sets — the true objective is to express creativity and engage in conversation." }),
      /* @__PURE__ */ jsx("p", { children: "Users build experiences that other users can step into. They shop, converse, and navigate roughly 40 million different experiences — building a virtual house together is the equivalent of hanging out in the neighbourhood." }),
      /* @__PURE__ */ jsx("div", { className: "reveal mt-8 flex flex-wrap gap-3", children: /* @__PURE__ */ jsx(SourceTag, { label: "Metavert Meditations — creator-driven worlds", href: "https://meditations.metavert.io/p/creator-driven-worlds-are-taking" }) })
    ] })
  }, {
    n: "06",
    kicker: "Identity",
    title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The avatar as ",
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "a mirror." })
    ] }),
    image: avatarImg,
    alt: "Avatar self-expression in a digital space",
    imageLeft: true,
    aspectClass: "aspect-[3/4]",
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "Character creation is more than choosing a costume. In many games, players use avatars, skins, outfits, usernames, and emotes to explore different versions of themselves. They can try on styles, personalities, and identities that they may hesitate to express in real life." }),
      /* @__PURE__ */ jsx("p", { children: "Games create a kind of personal external world, where the player becomes the main character. Through anonymity and freedom, players can control how they appear, how they move, and how they are recognised by others. This makes gaming a space for self-expression, where identity can be tested without the same pressure, judgement, or social limits that exist offline." }),
      /* @__PURE__ */ jsx("p", { children: "In this way, the avatar becomes a mirror. It reflects not only who the player is, but also who they might want to become." }),
      /* @__PURE__ */ jsx("div", { className: "reveal mt-8 flex flex-wrap gap-3", children: /* @__PURE__ */ jsx(SourceTag, { label: "Dean & Francis Press — avatar & identity in games", href: "https://www.deanfrancispress.com/index.php/hc/article/view/1544" }) })
    ] })
  }];
  return /* @__PURE__ */ jsxs("div", { className: "dark min-h-screen bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsx("header", { className: "fixed inset-x-0 top-0 z-50 border-b hairline bg-background/60 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-8 py-5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium tracking-tight", children: "Games as a Social Space" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-10 text-xs font-light text-muted-foreground md:flex", children: [
        /* @__PURE__ */ jsx("a", { href: "#intro", className: "transition-opacity hover:opacity-60", children: "Intro" }),
        /* @__PURE__ */ jsx("a", { href: "#chapters", className: "transition-opacity hover:opacity-60", children: "Chapters" }),
        /* @__PURE__ */ jsx("a", { href: "#limits", className: "transition-opacity hover:opacity-60", children: "Limits" }),
        /* @__PURE__ */ jsx("a", { href: "#evaluation", className: "transition-opacity hover:opacity-60", children: "Evaluation" }),
        /* @__PURE__ */ jsx("a", { href: "#references", className: "transition-opacity hover:opacity-60", children: "References" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative flex h-screen w-full items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: heroBg, alt: "", width: 1920, height: 1080, className: "absolute inset-0 h-full w-full object-cover opacity-70" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-6xl px-8 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "reveal mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "A Game Design Project" }),
        /* @__PURE__ */ jsxs("h1", { className: "reveal text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]", children: [
          "Games as a",
          /* @__PURE__ */ jsx("br", {}),
          "Social Space."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "reveal mx-auto mt-10 max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg", children: "Where play becomes a place, and the people you meet there know your heart." }),
        /* @__PURE__ */ jsx("div", { className: "reveal mt-14", children: /* @__PURE__ */ jsxs("a", { href: "#intro", className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:opacity-90", children: [
          "Enter the Space",
          /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Scroll" })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "intro", className: "border-t hairline px-8 pt-40 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsx("p", { className: "reveal mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-primary", children: "The Argument" }),
      /* @__PURE__ */ jsxs("p", { className: "reveal text-balance text-2xl font-light leading-[1.35] tracking-tight text-foreground sm:text-3xl lg:text-4xl", children: [
        "This project argues that online games now function as",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "digital third places" }),
        " — social environments where players build friendships, express identity, and experience belonging. However, these spaces are also shaped by corporate control, exclusion, and overuse."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { id: "chapters" }),
    chapters.map((c, i) => /* @__PURE__ */ jsx("section", { className: `px-8 ${i === 0 ? "pt-48 pb-32" : "py-32"} ${i !== 0 ? "border-t hairline" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-20", children: [
      /* @__PURE__ */ jsx("div", { className: `${c.imageLeft ? "md:order-1 md:col-span-6" : "md:order-2 md:col-span-6 md:col-start-7"}`, children: /* @__PURE__ */ jsx("div", { className: "reveal overflow-hidden rounded-2xl border hairline", children: /* @__PURE__ */ jsx("img", { src: c.image, alt: c.alt, width: 1600, height: 1e3, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: `${c.imageLeft ? "md:order-2 md:col-span-5 md:col-start-8" : "md:order-1 md:col-span-5"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-widest text-primary", children: c.n }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-border" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground", children: c.kicker })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "reveal mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl", children: c.title }),
        /* @__PURE__ */ jsx("div", { className: "reveal mt-8 space-y-6 text-base font-light leading-relaxed text-muted-foreground sm:text-lg", children: c.body })
      ] })
    ] }) }, c.n)),
    /* @__PURE__ */ jsx("section", { id: "hostile", className: "border-t hairline px-8 py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12 md:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-widest text-primary", children: "07" }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-border" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "The Other Side" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "reveal mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl", children: [
          "Hostile ",
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "lobbies." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-6 md:col-start-7", children: /* @__PURE__ */ jsxs("div", { className: "reveal space-y-6 text-base font-light leading-relaxed text-foreground/90 sm:text-lg", children: [
        /* @__PURE__ */ jsx("p", { children: "Online games can also reproduce real-world problems such as harassment, toxic voice chat, racism, sexism, homophobia, and gatekeeping. This means games may act like social spaces, but not everyone experiences them as safe or welcoming." }),
        /* @__PURE__ */ jsx("p", { children: "A third place is only as inclusive as the people who hold its door open. When that door is guarded by hostility, the invitation to belong quietly turns into a test of who is allowed to stay." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "limits", className: "border-t hairline px-8 py-48", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-24 max-w-3xl", children: [
        /* @__PURE__ */ jsx("p", { className: "reveal mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "Complexities & Limitations" }),
        /* @__PURE__ */ jsxs("h2", { className: "reveal text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl", children: [
          "The cost of the ",
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "always-open door." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "reveal mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground", children: "These spaces offer profound social comfort, but they are not without consequence. The same architecture that lowers the bar to connection can also blur the line between time spent and time lost." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-px overflow-hidden rounded-2xl border hairline bg-border md:grid-cols-3", children: [{
        n: "i.",
        title: "Time and attention",
        body: "Frictionless access can tip into compulsive use. Sessions stretch from a quick hangout into hours, eroding sleep, study, and obligations that sit outside the screen."
      }, {
        n: "ii.",
        title: "Reality drift",
        body: "When the in-game world becomes more reliable than the one outside, players can begin to live mentally inside it — treating the offline world as the secondary place, not the primary one."
      }, {
        n: "iii.",
        title: "Rented ground",
        body: "These third places are corporate-owned. Access is monetised, moderated, and revocable by EULA — democratic in feel, but never quite public in the way a park or library is."
      }].map((f) => /* @__PURE__ */ jsxs("article", { className: "reveal group flex flex-col justify-between bg-card p-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-card/60 md:min-h-[26rem] md:p-14", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-widest text-primary", children: f.n }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold tracking-tight sm:text-3xl", children: f.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm font-light leading-relaxed text-muted-foreground sm:text-base", children: f.body })
        ] })
      ] }, f.n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "evaluation", className: "border-t hairline px-8 py-48", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsx("p", { className: "reveal mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "Evaluation" }),
      /* @__PURE__ */ jsxs("h2", { className: "reveal text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl", children: [
        "On balance, the door is ",
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "worth walking through." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "reveal mt-12 space-y-6 text-lg font-light leading-relaxed text-muted-foreground sm:text-xl", children: [
        /* @__PURE__ */ jsx("p", { children: "For all their complications, the positive impact of games as social spaces appears to outweigh the negatives. Even though these worlds are centralised and corporately owned, they still hand millions of people a place to express themselves, socialise, and connect — with fun built into the same gesture. They offer a low-stakes outlet for stress, a release from the pressure of the day, and a sense of company that is often easier to access than its offline equivalent." }),
        /* @__PURE__ */ jsx("p", { children: "That said, value here is conditional on moderation. Players who lose themselves in these third worlds for too long can begin to disconnect from the physical one, and prolonged immersion has been linked to compulsive behaviour and a softened grip on reality. Used with intention, games are a place to gather. Used without it, they become a place to disappear." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "reveal mt-10 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx(SourceTag, { label: "Acta Psychologica (2023) — gaming, well-being & problematic use", href: "https://www.sciencedirect.com/science/article/pii/S0001691823002238" }),
        /* @__PURE__ */ jsx(SourceTag, { label: "PMC / NIH — gaming behaviour, mental health & problematic use", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679145/" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-8 py-48", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl text-center", children: /* @__PURE__ */ jsxs("h2", { className: "reveal text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl", children: [
      '"Online friends are not ',
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "'lesser' friends." }),
      ' They are simply people you met in a different world who know your heart just as well as the ones you pass every day."'
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "references", className: "border-t hairline px-8 py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsx("p", { className: "reveal mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground", children: "Bibliography" }),
      /* @__PURE__ */ jsx("h2", { className: "reveal text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl", children: "References." }),
      /* @__PURE__ */ jsxs("ol", { className: "reveal mt-12 space-y-6 text-sm font-light leading-relaxed text-muted-foreground sm:text-base", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "Kowert, R., Domahidi, E., & Quandt, T. (2014).",
          " ",
          /* @__PURE__ */ jsx("em", { children: "The Relationship Between Online Video Game Involvement and Gaming-Related Friendships Among Emotionally Sensitive Individuals." }),
          " ",
          "Cyberpsychology, Behavior, and Social Networking."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          'Steinkuehler, C. A., & Williams, D. (2006). Where Everybody Knows Your (Screen) Name: Online Games as "Third Places." ',
          /* @__PURE__ */ jsx("em", { children: "Journal of Computer-Mediated Communication" }),
          ", 11(4), 885–909.",
          " ",
          /* @__PURE__ */ jsx(Cite, { href: "https://academic.oup.com/jcmc/article/11/4/885/4617703", children: "https://academic.oup.com/jcmc/article/11/4/885/4617703" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Variety. (2020). ",
          /* @__PURE__ */ jsx("em", { children: "Travis Scott's Fortnite Concert Draws Record 12.3 Million Concurrent Viewers." }),
          " ",
          /* @__PURE__ */ jsx(Cite, { href: "https://variety.com/2020/digital/news/travis-scott-fortnite-record-viewers-live-1234589033/", children: "https://variety.com/2020/digital/news/travis-scott-fortnite-record-viewers-live-1234589033/" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "ExitLag. ",
          /* @__PURE__ */ jsx("em", { children: "Fortnite Party Royale: The Social Side of Fortnite." }),
          " ",
          /* @__PURE__ */ jsx(Cite, { href: "https://www.exitlag.com/blog/fortnite-party-royale/", children: "https://www.exitlag.com/blog/fortnite-party-royale/" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Metavert Meditations. ",
          /* @__PURE__ */ jsx("em", { children: "Creator-Driven Worlds Are Taking Over." }),
          " ",
          /* @__PURE__ */ jsx(Cite, { href: "https://meditations.metavert.io/p/creator-driven-worlds-are-taking", children: "https://meditations.metavert.io/p/creator-driven-worlds-are-taking" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Dean & Francis Press. ",
          /* @__PURE__ */ jsx("em", { children: "Avatar, Identity and Self-Expression in Video Games." }),
          " Humanities and Social Sciences Communications.",
          " ",
          /* @__PURE__ */ jsx(Cite, { href: "https://www.deanfrancispress.com/index.php/hc/article/view/1544", children: "https://www.deanfrancispress.com/index.php/hc/article/view/1544" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("em", { children: "Acta Psychologica" }),
          " (2023). Study on video gaming, well-being and problematic engagement.",
          " ",
          /* @__PURE__ */ jsx(Cite, { href: "https://www.sciencedirect.com/science/article/pii/S0001691823002238", children: "https://www.sciencedirect.com/science/article/pii/S0001691823002238" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "PMC / NIH. ",
          /* @__PURE__ */ jsx("em", { children: "Gaming behaviour, mental health and problematic use." }),
          " ",
          /* @__PURE__ */ jsx(Cite, { href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679145/", children: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679145/" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { id: "footer", className: "border-t hairline px-8 py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium tracking-tight", children: "Games as a Social Space" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-xs font-light text-muted-foreground md:flex-row md:gap-10", children: [
        /* @__PURE__ */ jsx("span", { children: "Rehaan Goyal · 1811174" }),
        /* @__PURE__ */ jsx("a", { href: "#references", className: "transition-opacity hover:opacity-60", children: "References" })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
