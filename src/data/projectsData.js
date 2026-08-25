// src/data/projectsData.js
//
// Archivo central que concentra la informacion de todos los proyectos del portafolio.
// Cada tarjeta de la home enlaza a `/proyectos/<slug>` y aqui es donde se define
// todo el contenido que renderiza el componente ProjectDetailPage.
//
// Estructura de cada proyecto:
//   slug        -> texto unico para la URL (/proyectos/<slug>)
//   title       -> titulo grande del proyecto
//   description -> descripcion que aparece debajo del titulo
//   liveUrl     -> enlace "View Live Project" (o null si el proyecto no esta publicado)
//   heroImages  -> imagenes principales que van debajo de la descripcion
//   gallery     -> galeria de capturas opcional (con pestañas y lightbox)
//   prototype   -> prototipo en Figma embedido opcional
export const projectsData = [
  {
    slug: "discount-calculator",
    title: "Discount Calculator App",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: "https://calculadora-h5rxwlw1q-rouselds-projects.vercel.app/",
    heroImages: [
      { src: "/portafoliopages/media/CalculatorApp/CalculatorApp__Home.png" },
      { src: "/portafoliopages/media/CalculatorApp/CalculatorApp__Result.png" },
      { src: "/portafoliopages/media/CalculatorApp/CalculatorApp__ErrorPopup.png" },
    ],
    gallery: null,
    prototype: null,
  },
  {
    slug: "nanobebe-ecommerce",
    title: "Nanobebe Ecommerce",
    description:
      "This project is focused on providing for employers and students in which it has an ecosystem that allows the user to browse and purchase products through an online store built on Wordpress.",
    liveUrl: "https://nanobebe.com.co/",
    heroImages: [
      { src: "/portafoliopages/media/Nanobebe/Home.png" },
    ],
    gallery: {
      description:
        "This gallery showcases the design of the Nanobebe online store, a complete ecommerce experience. Explore the different views and features that make browsing, product selection and checkout easy.",
      tabs: [
        {
          label: "Desktop",
          className: "tabdesktop",
          images: [
            { src: "/portafoliopages/media/Nanobebe/Thumbnail__2.png", fullSrc: "/portafoliopages/media/Nanobebe/SoloProduct__Complete.png" },
            { src: "/portafoliopages/media/Nanobebe/Thumbnail__3.png", fullSrc: "/portafoliopages/media/Nanobebe/Faqs.png" },
            { src: "/portafoliopages/media/Nanobebe/Thumbnail__5.png", fullSrc: "/portafoliopages/media/Nanobebe/StoreLocator.png" },
            { src: "/portafoliopages/media/Nanobebe/Thumbnail__5.png", fullSrc: "/portafoliopages/media/Nanobebe/Store.png" },
          ],
        },
        {
          label: "Mobile",
          className: "tabmobile",
          images: [
            { src: "/portafoliopages/media/Nanobebe/ThumbnailMobile--1.png", fullSrc: "/portafoliopages/media/Nanobebe/Home Mobile.png", isMobile: true },
            { src: "/portafoliopages/media/Nanobebe/ThumbnailMobile--2.png", fullSrc: "/portafoliopages/media/Nanobebe/Faqs Mobile.png", isMobile: true },
            { src: "/portafoliopages/media/Nanobebe/ThumbnailMobile--3.png", fullSrc: "/portafoliopages/media/Nanobebe/SoloProduct Mobile.png", isMobile: true },
            { src: "/portafoliopages/media/Nanobebe/ThumbnailMobile--4.png", fullSrc: "/portafoliopages/media/Nanobebe/StoreLocator Mobile.png", isMobile: true },
            { src: "/portafoliopages/media/Nanobebe/ThumbnailMobile--5.png", fullSrc: "/portafoliopages/media/Nanobebe/Store Mobile.png", isMobile: true },
          ],
        },
      ],
    },
    prototype: null,
  },
  {
    slug: "dirt-legal-landing",
    title: "Dirt Legal Landing Page",
    description:
      "As a hybrid UI/UX Designer and Technical Web Developer, I specialize in bridging the gap between user-centric design and highly scalable web architectures. My primary objective is to deliver high-converting digital experiences in record time, consistently translating core concepts into high-fidelity Figma prototypes in under five days. To accelerate my workflow and meet tight deadlines, I integrate AI-driven processes, such as using Figma and Freepik AI to quickly craft custom graphic assets.",
    liveUrl: "https://dirt-legal.com/racing/supercross/",
    heroImages: [
      { src: "/portafoliopages/media/DirtLegal/Racing (1).png" },
    ],
    gallery: null,
    prototype: null,
  },
{
    slug: "sitz-landing-page",
    title: "Sitz Landing Page",
    description:
      "For the Sitz application, I spearheaded the foundational UI/UX design phase, focusing entirely on creating a high-converting promotional landing page to drive app downloads. Using Figma, I quickly delivered the complete visual framework and integrated AI tools to create custom graphic assets, establishing a compelling visual identity and a seamless user journey ready for the development handoff.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/Sitz/Homepage (1).png" },
    ],
    gallery: null,
    prototype: null,
  },
  {
    slug: "healthbird-app",
    title: "Healthbird App",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/HealthbirdApp/Home.png", isMobile: true },
    ],
    gallery: {
      description:
        "This gallery showcases the design of the Healthbird app, an all-in-one wellness application. Explore the platform's different views and features, designed to be intuitive and accessible on desktop and mobile.",
      tabs: [
        {
          label: "Mobile",
          className: "tabmobile",
          images: [
            { src: "/portafoliopages/media/HealthbirdApp/Thumbnail__AllInsurances.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Thumbnail__Analytics.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Thumbnail__ConnectDevice.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Thumbnail__DrFinder.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Thumbnail__MyHealth.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Thumbnail__Schedule.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Thumbnail__Sleep.png", fullSrc: "/portafoliopages/media/HealthbirdApp/Health Maintance--Analytics.png", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/BirdyIA--Conversation.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/BirdyIA.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/BirdyIA--Conversation-Poups.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Medication.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Medication--Take.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Medication--Delete.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Medication--ConfirmDelete.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Policies.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/Thumbnail__Hub.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/HealthbirdApp/DrFinder--List.png", fullSrc: "", isMobile: true },
          ],
        },
      ],
    },
    prototype: null,
  },
{
    slug: "dupont-garage-app",
    title: "DupontGarage App",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/DupontGarage/Dupont__Home.png", isMobile: true },
    ],
    gallery: {
      description:
        "This gallery showcases the design of the DupontGarage app, a marketplace where you can browse and inquire about cars. Explore the different views and features that make finding the perfect vehicle easy.",
      tabs: [
        {
          label: "Mobile",
          className: "tabmobile",
          images: [
            { src: "/portafoliopages/media/DupontGarage/My Garage.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/DupontGarage/Thumbnail__Detailview-Details.png", fullSrc: "/portafoliopages/media/DupontGarage/Car Detail View--Details.png", isMobile: true },
            { src: "/portafoliopages/media/DupontGarage/Thumbnail__Detailview-Features.png", fullSrc: "/portafoliopages/media/DupontGarage/Car Detail View--Features.png", isMobile: true },
            { src: "/portafoliopages/media/DupontGarage/Thumbnail__Detailview-Gallery.png", fullSrc: "/portafoliopages/media/DupontGarage/Car Detail View--Gallery.png", isMobile: true },
            { src: "/portafoliopages/media/DupontGarage/Thumbnail__Inquire.png", fullSrc: "/portafoliopages/media/DupontGarage/Inquire.png", isMobile: true },
            { src: "/portafoliopages/media/DupontGarage/Thumbnail__Portafolio.png", fullSrc: "/portafoliopages/media/DupontGarage/Portfolio.png", isMobile: true },
            { src: "/portafoliopages/media/DupontGarage/Thumbnail__Preferences.png", fullSrc: "/portafoliopages/media/DupontGarage/Car Match -- Preferences.png", isMobile: true },
            { src: "/portafoliopages/media/DupontGarage/Thumbnail__Wishlist.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/DupontGarage/Wishlist.png", fullSrc: "", isMobile: true },
            { src: "/portafoliopages/media/DupontGarage/Portafolio-Detail.png", fullSrc: "", isMobile: true },
          ],
        },
      ],
    },
    prototype: {
      description:
        "Experience the flow and functionality of the DupontGarage app with the interactive prototype. Built in Figma, this simulation allows you to navigate through the most important user journeys.",
      iframeSrc:
        "https://embed.figma.com/proto/ipRrlh7tGLbV858NzyNRR1/Car-Garage?node-id=1-3&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1&embed-host=share",
      iframeWidth: "60%",
      iframeHeight: 800,
    },
  },
{
    slug: "medpass-website",
    title: "Medpass Website",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: "https://www.medpassplans.com/",
    heroImages: [
      { src: "/portafoliopages/media/MedpassWebsite/Medpass Home.png" },
    ],
    gallery: {
      description:
        "This gallery showcases the design of the Medpass website, an all-in-one wellness platform. Explore the different views and features, designed to be intuitive and accessible on both desktop and mobile versions.",
      tabs: [
        {
          label: "Desktop",
          className: "tabdesktop",
          images: [
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__Plans.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Medpass Plans.png" },
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__Corporate.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Medpass Corporate.png" },
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__Press.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Medpass Press.png" },
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__Plans__Community.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Medpass Testimonials.png" },
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__Giftcard.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Web__Invitation.png" },
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__BuyGiftcard.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Web__Invitation--Buy-$20.png" },
          ],
        },
        {
          label: "Mobile",
          className: "tabmobile",
          images: [
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__HomeMobile.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Mobile__Home.png", isMobile: true },
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__CorporateMobile.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Mobile__Corporate.png", isMobile: true },
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__PlansMobile.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Mobile__Plans.png", isMobile: true },
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__PressMobile.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Mobile__Press.png", isMobile: true },
            { src: "/portafoliopages/media/MedpassWebsite/Thumbnail__GiftCardMobile.png", fullSrc: "/portafoliopages/media/MedpassWebsite/Mobile__Giftcard.png", isMobile: true },
          ],
        },
      ],
    },
    prototype: {
      description:
        "Navigate through the main pages of the Medpass website with this interactive Figma prototype and explore the complete user journey.",
      iframeSrc:
        "https://embed.figma.com/proto/L2WoGbZE7UAm61MqHUgnnv/Medpass-Web?node-id=4819-1630&p=f&scaling=contain&content-scaling=fixed&page-id=506%3A300&starting-point-node-id=4819%3A1630&show-proto-sidebar=1&embed-host=share",
      iframeWidth: "90%",
      iframeHeight: 900,
    },
  },
{
    slug: "pharmacy-website",
    title: "Pharmacy Website",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/KatyMedical/Katy Medical (2).png" },
    ],
    gallery: null,
    prototype: null,
  },
  {
    slug: "medpass-crm",
    title: "Medpass CRM",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/MedpassCRM/Dashboard.png" },
    ],
    gallery: {
      description:
        "This gallery showcases the design of the Medpass CRM, a platform to manage employees and companies. Explore the different views and features of the dashboard and its detail sections.",
      tabs: [
        {
          label: "Desktop",
          className: "tabdesktop",
          images: [
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__1.png", fullSrc: "/portafoliopages/media/MedpassCRM/Settings.png" },
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__2.png", fullSrc: "/portafoliopages/media/MedpassCRM/Settings--TeamOptions.png" },
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__3.png", fullSrc: "/portafoliopages/media/MedpassCRM/Login--1.png" },
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__4.png", fullSrc: "/portafoliopages/media/MedpassCRM/Employees--Filters.png" },
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__5.png", fullSrc: "/portafoliopages/media/MedpassCRM/Dashboard.png" },
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__6.png", fullSrc: "/portafoliopages/media/MedpassCRM/Company Detail View--Team.png" },
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__7.png", fullSrc: "/portafoliopages/media/MedpassCRM/Company Detail view--Billing.png" },
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__8.png", fullSrc: "/portafoliopages/media/MedpassCRM/Company Detail view--Statistics.png" },
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__9.png", fullSrc: "/portafoliopages/media/MedpassCRM/Billing.png" },
            { src: "/portafoliopages/media/MedpassCRM/Thumbnail__10.png", fullSrc: "/portafoliopages/media/MedpassCRM/Companies.png" },
          ],
        },
      ],
    },
    prototype: null,
  },
{
    slug: "drugstore2door-landing",
    title: "Drugstore2door Landing",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/Drugstore2door/Drugstore2door landing page.png" },
    ],
    gallery: null,
    prototype: null,
  },
  {
    slug: "modern-home-website",
    title: "Modern Home Website",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/Modernhome/Home.png" },
    ],
    gallery: {
      description:
        "This gallery showcases the design of the Modern Home website, a smart home services platform. Explore the different service detail views and features of the site on desktop.",
      tabs: [
        {
          label: "Desktop",
          className: "tabdesktop",
          images: [
            { src: "/portafoliopages/media/Modernhome/Thumbnail__1.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--Security.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__2.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--Schedule.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__3.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--Schedule-1.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__4.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--Outdoor.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__5.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--MotorizedWindows.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__6.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--Maintenance.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__7.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--Lighting.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__8.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--HomeEntretaiment.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__9.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--HomeAutomation.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__10.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--CommercialSecurity.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__11.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--CommercialAV.png" },
            { src: "/portafoliopages/media/Modernhome/Thumbnail__13.png", fullSrc: "/portafoliopages/media/Modernhome/Service__Detail--Audio&Video.png" },
          ],
        },
      ],
    },
    prototype: null,
  },
  {
    slug: "podcast-website",
    title: "Podcast Website BLG",
    description:
      "Life By The Horns is an immersive digital platform designed to host high-impact podcast and video content centered around business, family, health, and mindset. The objective of this UI/UX project was to visually capture the direct, unfiltered attitude of the show, with a dark mode aesthetic and high-contrast typography.",
    liveUrl: "https://lyfebythehorns.com/",
    heroImages: [
      { src: "/portafoliopages/media/LyfeByTheHorns/LGHomepage.png" },
    ],
    gallery: null,
    prototype: null,
  },
  {
    slug: "cybersecurity-app",
    title: "CyberSecurity App",
    description:
      "I spearheaded the UX redesign of a cybersecurity path analysis tool, focusing on turning complex technical data into an intuitive learning experience. I developed a visual discovery-based UI that replaces traditional high-friction forms with an interactive network map, teaching the user industrial terminology and guiding interns in identifying destinations.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/CyberSecurity/Dashboard.png" },
    ],
    gallery: {
      description:
        "This gallery showcases the main screens of the CyberSecurity path analysis tool, including the network map and the detail views of each route.",
      tabs: [
        {
          label: "Desktop",
          className: "tabdesktop",
          images: [
            { src: "/portafoliopages/media/CyberSecurity/Dashboard--AnalyzeRoute-1.png", fullSrc: "/portafoliopages/media/CyberSecurity/Dashboard--AnalyzeRoute-1.png" },
            { src: "/portafoliopages/media/CyberSecurity/Dashboard--AnalyzeRoute-2.png", fullSrc: "/portafoliopages/media/cybersecurity/Dashboard--AnalyzeRoute-2.png" },
            { src: "/portafoliopages/media/CyberSecurity/Dashboard--AnalyzeRoute-3.png", fullSrc: "/portafoliopages/media/cybersecurity/Dashboard--AnalyzeRoute-3.png" },
            { src: "/portafoliopages/media/CyberSecurity/Dashboard--DetailView.png", fullSrc: "/portafoliopages/media/cybersecurity/Dashboard--DetailView.png" },
          ],
        },
      ],
    },
    prototype: null,
  prototype: null,
  },
  {
    slug: "markenguin-lms-website",
    title: "Markenguin LMS Website",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/MarkenguinLMS/MarkenguinLMS__Homepage.png" },
    ],
    gallery: null,
    prototype: null,
  },
  {
    slug: "markenguin-landing-page",
    title: "Markenguin Landing Page",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/MarkenguinLandingPage/Landing Page.png" },
    ],
    gallery: null,
    prototype: null,
  },
  {
    slug: "markenguin-summer-landing",
    title: "Markenguin Summer Landing",
    description:
      "This project is focused on providing for employers and students in which it is an ecosystem that allows registering the activity and grades of the students and on the other hand the verification itself that helps employers validate the potential worker.",
    liveUrl: null,
    heroImages: [
      { src: "/portafoliopages/media/MarkenguinSummerLanding/Landing.png" },
    ],
    gallery: null,
    prototype: null,
  },
  {
    slug: "welder-up-landing-page",
    title: "Welder Up Landing Page",
    description:
      "As a hybrid UI/UX Designer and Technical Web Developer, I specialize in bridging the gap between user-centric design and highly scalable web architectures. My primary objective is to deliver high-converting digital experiences in record time, consistently translating core concepts into high-fidelity Figma prototypes in under five days.",
    liveUrl: "https://dirt-legal.com/partners/welderup",
    heroImages: [
      { src: "/portafoliopages/media/WelderUp/WelderUp (1).png" },
    ],
    gallery: null,
    prototype: null,
  },
];