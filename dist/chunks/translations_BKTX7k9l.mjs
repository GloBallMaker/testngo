import { c as createComponent, r as renderTemplate, d as renderSlot, e as renderHead, b as addAttribute, f as createAstro, m as maybeRenderHead } from './astro/server_D_TYJbV6.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Making the world a better place"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"><meta name="generator"', "><title>", "</title>", '</head> <body class="bg-black"> <div class="stars"></div> ', ` <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script> <script>
			document.addEventListener('DOMContentLoaded', function() {
				AOS.init({
					duration: 800,
					once: true,
				});
			});
		<\/script> </body> </html> `])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/project/src/layouts/Layout.astro", undefined);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed w-full bg-black/50 backdrop-blur-lg shadow-lg z-50 border-b border-cosmic-300/20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex-shrink-0 flex items-center"> <span class="text-2xl font-bold bg-cosmic-gradient text-transparent bg-clip-text">GlobalCare</span> </div> <div class="hidden md:flex items-center space-x-8"> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-white/90 hover:text-cosmic-300 transition-colors"> ${item.name} </a>`)} <a href="#donate" class="bg-cosmic-gradient text-white px-6 py-2 rounded-full hover:opacity-90 transition-all glow">
Donate Now
</a> </div> </div> </div> </nav>`;
}, "/home/project/src/components/Navbar.astro", undefined);

const $$Astro = createAstro();
const $$LanguageToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LanguageToggle;
  const { currentLang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-4 right-4 z-50"> <select id="language-select" class="bg-black/50 text-white border border-cosmic-300/20 rounded-lg px-3 py-1 text-sm backdrop-blur-lg"${addAttribute(currentLang, "value")}> <option value="en">English</option> <option value="uk">Українська</option> </select> </div> `;
}, "/home/project/src/components/LanguageToggle.astro", undefined);

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      impact: "Impact",
      contact: "Contact",
      donate: "Donate Now"
    },
    hero: {
      title: "Illuminating",
      titleSpan: "Lives",
      description: "Like a supernova illuminating the cosmos, we're spreading light and hope across the globe, transforming communities with the energy of positive change.",
      cta: {
        primary: "Ignite Change",
        secondary: "Explore Our Universe"
      }
    },
    impact: {
      stats: {
        lives: {
          number: "2.5M+",
          title: "Stars Ignited",
          description: "Lives transformed through our global initiatives"
        },
        projects: {
          number: "1,200+",
          title: "Constellations Created",
          description: "Projects connecting communities worldwide"
        },
        countries: {
          number: "35+",
          title: "Galaxies Reached",
          description: "Countries where we've sparked positive change"
        }
      }
    },
    about: {
      title: "Our Cosmic Mission",
      description: "Like a supernova releasing immense energy into the cosmos, we channel our resources and passion into creating lasting positive change across the globe.",
      features: {
        development: {
          title: "Stellar Development",
          description: "Building sustainable futures that shine bright"
        },
        empowerment: {
          title: "Galactic Empowerment",
          description: "Igniting potential in communities worldwide"
        },
        protection: {
          title: "Universal Protection",
          description: "Preserving our planet for future generations"
        }
      }
    },
    projects: {
      title: "Our Stellar Initiatives",
      items: {
        water: {
          title: "Aqua Luminescence",
          description: "Bringing the life-giving flow of clean water to communities in need, like stars bringing light to the darkest corners of space."
        },
        education: {
          title: "Knowledge Nova",
          description: "Igniting minds through education, spreading knowledge like a supernova spreads elements across the universe."
        },
        agriculture: {
          title: "Terra Luminous",
          description: "Cultivating sustainable agriculture practices that nurture our planet like distant stars nurture their solar systems."
        }
      }
    },
    contact: {
      title: "Join Our Constellation",
      description: "Become part of our cosmic community of change-makers. Together, we can illuminate the path to a brighter future for all.",
      cta: "Connect With Us",
      info: {
        email: "Email: contact@globalcare.org",
        phone: "Phone: +1 (555) 123-4567",
        address: "Address: 123 Stellar Street, Cosmic City, 10001"
      }
    },
    donate: {
      title: "Fuel Our Mission",
      description: "Your contribution is like stardust - small yet essential, coming together to create something magnificent. Join us in illuminating lives across the globe.",
      cta: "Spark Change Now",
      legal: "GlobalCare is a registered 501(c)(3) nonprofit organization.\nAll donations are tax-deductible to the extent allowed by law."
    }
  },
  uk: {
    nav: {
      home: "Головна",
      about: "Про нас",
      projects: "Проекти",
      impact: "Вплив",
      contact: "Контакти",
      donate: "Підтримати"
    },
    hero: {
      title: "Осяюємо",
      titleSpan: "Життя",
      description: "Немов наднова зірка, що освітлює космос, ми поширюємо світло та надію по всьому світу, трансформуючи спільноти енергією позитивних змін.",
      cta: {
        primary: "Запалити Зміни",
        secondary: "Дослідити Всесвіт"
      }
    },
    impact: {
      stats: {
        lives: {
          number: "2.5M+",
          title: "Запалених Зірок",
          description: "Життів змінено через наші глобальні ініціативи"
        },
        projects: {
          number: "1,200+",
          title: "Створених Сузір'їв",
          description: "Проектів, що об'єднують спільноти по всьому світу"
        },
        countries: {
          number: "35+",
          title: "Досягнутих Галактик",
          description: "Країн, де ми запалили позитивні зміни"
        }
      }
    },
    about: {
      title: "Наша Космічна Місія",
      description: "Подібно до наднової, що вивільняє величезну енергію в космос, ми спрямовуємо наші ресурси та пристрасть на створення довготривалих позитивних змін у всьому світі.",
      features: {
        development: {
          title: "Зоряний Розвиток",
          description: "Будуємо стале майбутнє, що сяє яскраво"
        },
        empowerment: {
          title: "Галактичне Посилення",
          description: "Запалюємо потенціал у спільнотах по всьому світу"
        },
        protection: {
          title: "Універсальний Захист",
          description: "Зберігаємо нашу планету для майбутніх поколінь"
        }
      }
    },
    projects: {
      title: "Наші Зоряні Ініціативи",
      items: {
        water: {
          title: "Водне Сяйво",
          description: "Приносимо життєдайний потік чистої води громадам, які її потребують, як зірки приносять світло в найтемніші куточки космосу."
        },
        education: {
          title: "Нова Знань",
          description: "Запалюємо розуми через освіту, поширюючи знання, як наднова поширює елементи всесвітом."
        },
        agriculture: {
          title: "Сяюча Земля",
          description: "Розвиваємо практики сталого землеробства, які живлять нашу планету, як далекі зірки живлять свої сонячні системи."
        }
      }
    },
    contact: {
      title: "Приєднуйтесь до Нашого Сузір'я",
      description: "Станьте частиною нашої космічної спільноти творців змін. Разом ми можемо освітлити шлях до яскравішого майбутнього для всіх.",
      cta: "Зв'яжіться з Нами",
      info: {
        email: "Email: contact@globalcare.org",
        phone: "Телефон: +1 (555) 123-4567",
        address: "Адреса: вул. Зоряна 123, Космічне Місто, 10001"
      }
    },
    donate: {
      title: "Підтримайте Нашу Місію",
      description: "Ваш внесок як зоряний пил - малий, але важливий, об'єднуючись для створення чогось величного. Приєднуйтесь до нас у освітленні життів по всьому світу.",
      cta: "Підтримати Зараз",
      legal: "GlobalCare є зареєстрованою благодійною організацією 501(c)(3).\nУсі пожертви підлягають податковому відрахуванню в межах, дозволених законом."
    }
  }
};

export { $$Navbar as $, $$LanguageToggle as a, $$Layout as b, translations as t };
