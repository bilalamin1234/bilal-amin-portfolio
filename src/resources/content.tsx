import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Bilal",
  lastName: "Amin",
  name: `Bilal Amin`,
  role: "Web Developer",
  avatar: "/images/profile-pic.jpeg",
  email: "bilalaminrizwan3@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bilalamin1234",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/bilal_.amin/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@bilal_.amin",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `I'm a ${person.role} who builds clean, modern, and functional web experiences.`,
  headline: <>Turning ideas into modern web experiences</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} focused on{" "}
      <Text as="span" size="xl" weight="strong">building modern websites</Text>,
      where I turn ideas into clean, modern, and functional experiences. </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm {person.firstName}, a {person.role.toLowerCase()} focused on building
        modern, responsive, and visually engaging websites. I enjoy turning ideas
        into clean digital experiences that are simple to use, purposeful, and
        designed around the needs of the audience.
        <br />
        <br />
        Alongside web development, I work with SEO and AEO to help websites become
        more discoverable across search engines and modern AI-powered search
        experiences. I'm also interested in digital marketing and use AI tools to
        improve research, content workflows, development, and creative processes.
        <br />
        <br />
        My approach combines design, development, marketing, and technology to
        create digital experiences that not only look good, but are built with
        visibility, usability, and growth in mind.
      </>
    ),
  },
  work: {
    display: true,
    title: "Projects",
    experiences: [
      {
        company: "R-KLAN",
        timeframe: "2026",
        role: "Web Design & Development",
        achievements: [
          <>
            Designed and developed an aviation-focused website built around the
            R-KLAN identity, combining immersive visuals with a modern interface.
          </>,
          <>
            Focused on responsive layouts, visual hierarchy, navigation, and a
            strong aviation-inspired digital experience.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "R-KLAN aviation website",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Yumna Collection",
        timeframe: "2026",
        role: "Web Design & Development",
        achievements: [
          <>
            Designed and developed a modern fashion e-commerce experience focused
            on elegant presentation and an intuitive shopping interface.
          </>,
          <>
            Created a responsive layout with clean product presentation,
            structured sections, and a refined visual style.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.png",
            alt: "Yumna Collection fashion website",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Learning & Growth",
    institutions: [
      {
        name: "Web Development",
        description: (
          <>
            Continuously developing my skills through hands-on projects,
            experimentation, and practical experience with modern web
            technologies.
          </>
        ),
      },
      {
        name: "SEO, AEO & Digital Marketing",
        description: (
          <>
            Exploring search engine optimization, answer engine optimization,
            content strategy, and digital marketing to help businesses improve
            their online visibility.
          </>
        ),
      },
      {
        name: "AI & Emerging Technologies",
        description: (
          <>
            Using AI tools for research, content creation, development,
            brainstorming, productivity, and improving creative workflows.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Expertise",
    skills: [
      {
        title: "Web Development",
        description: (
          <>
            Building modern, responsive websites with clean interfaces,
            intuitive navigation, and a strong focus on usability.
          </>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
      {
        title: "SEO & AEO",
        description: (
          <>
            Helping websites improve their visibility through search engine
            optimization and answer engine optimization, with a focus on
            discoverability, useful content, and search intent.
          </>
        ),
        tags: [
          {
            name: "SEO",
            icon: "search",
          },
          {
            name: "AEO",
            icon: "sparkles",
          },
          {
            name: "Content Strategy",
            icon: "document",
          },
        ],
        images: [],
      },
      {
        title: "Digital Marketing",
        description: (
          <>
            Interested in using digital marketing strategies to build online
            presence, reach the right audience, and support business growth.
          </>
        ),
        tags: [
          {
            name: "Digital Marketing",
            icon: "globe",
          },
          {
            name: "Content",
            icon: "document",
          },
          {
            name: "Strategy",
            icon: "target",
          },
        ],
        images: [],
      },
      {
        title: "AI Tools",
        description: (
          <>
            Using AI tools to accelerate research, development, content
            workflows, ideation, automation, and creative problem solving.
          </>
        ),
        tags: [
          {
            name: "AI Tools",
            icon: "sparkles",
          },
          {
            name: "AI-Assisted Development",
            icon: "code",
          },
          {
            name: "Automation",
            icon: "bolt",
          },
        ],
        images: [],
      },
      {
        title: "UI & User Experience",
        description: (
          <>
            Creating clean visual layouts with attention to typography,
            spacing, imagery, visual hierarchy, and responsive behavior.
          </>
        ),
        tags: [
          {
            name: "UI Design",
            icon: "figma",
          },
          {
            name: "Responsive Design",
            icon: "layout",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights on web, SEO, AEO & AI...",
  description: `Thoughts, insights, and practical ideas from ${person.name} on web development, SEO, AEO, digital marketing, and AI.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Visual work – ${person.name}`,
  description: `A visual showcase of ${person.name}'s web design and development projects.`,
  images: [
    {
      src: "/images/projects/project-01/cover-01.png",
      alt: "R-KLAN aviation website",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/cover-02.png",
      alt: "Yumna Collection fashion website",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };