"use client"

import { useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import {
  ChartBarIcon,
  CodeBracketIcon,
  MapIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import Image from "next/image"

const featuredTestimonial = {
  body: "I built MentorJunaid to provide aspiring developers with the structured learning, hands-on projects, and expert guidance I wish I had when starting. Our mission is to make web development accessible and career-changing for everyone.",
  author: {
    name: "🚀 Junaid Qureshi",
    handle: "Founder & Full-Stack Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4D03AQEaZWgEBJtukA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1642747475546?e=1745452800&v=beta&t=YPmAn2J8MPylShG4v0zWyRNN8p0PKeKwznDK3n68ycU",
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQHvvNKkdai7fA/company-logo_100_100/company-logo_100_100/0/1723751554273/devnito_logo?e=1747872000&v=beta&t=O4ugvAlTLICGCgLY2nv6POeNV0R81dwgqgoYHkN6-To",
  },
}
const testimonials = [
  [
    [
      {
        body: "The progress tracking and structured roadmaps kept me motivated. Best decision I made!",
        author: {
          name: "Samar Ali",
          handle: "Founder of Podiocut",
          imageUrl:
            "https://media.licdn.com/dms/image/v2/D4D03AQHU5RSG2BjaNw/profile-displayphoto-shrink_200_200/B4DZTBL_fIGcAg-/0/1738407934551?e=1745452800&v=beta&t=kWbN0ePPLD9NVeO7e4A5Ld0dvc8SVYYtd6ErTbIZRVc",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "The hands-on projects and interactive learning approach made it easy to grasp complex concepts. Highly recommend!",
        author: {
          name: "Shehzor Memon",
          handle: "MERN Stack Developer",
          imageUrl:
            "https://media.licdn.com/dms/image/v2/D4D35AQFLrL9aByeYqw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1724691528674?e=1740646800&v=beta&t=qiTu_genl6R_5pt4Xnkl43XBNIP2_lSl_11VvrAbUtA",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "This platform provides everything needed to become a full-stack developer. The step-by-step guidance is top-notch!",
        author: {
          name: "Maroof Qureshi",
          handle: "Full Stack Developer",
          imageUrl:
            "https://media.licdn.com/dms/image/v2/D4D35AQGBRRi15C196Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1722693756410?e=1740646800&v=beta&t=EdkPVfj17SP9LCiAtz1MwyQXyVi4f95mYArVsCK--sU",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "The structured roadmap for front-end development helped me gain confidence and land my first job as a React developer!",
        author: {
          name: "Muhammad Bilal",
          handle: "React Developer",
          imageUrl:
            "https://media.licdn.com/dms/image/v2/D4D35AQEdrWT03uv_6w/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1714738448385?e=1740646800&v=beta&t=qCO_TCzzg8GrNn8Rb_XRiB3TR_VrbbNipAvlg5wbMf0",
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

const navigation = [
  { name: "Roadmaps", href: "#" },
  { name: "Features", href: "#" },
  { name: "Community", href: "#" },
  { name: "About", href: "#" },
]
const stats = [
  { id: 1, name: "Websites Developed", value: "📌 200+" },
  { id: 2, name: "Happy Clients Worldwide", value: "🌍 60+" },
  { id: 3, name: "Earned from Web Development", value: "📈 $100K+" },
  { id: 4, name: "Uptime & Reliability", value: "⚡ 99.9%" },
]
const features = [
  {
    name: "Learn by Doing",
    description:
      "Practice coding with real-world projects, interactive exercises, and step-by-step guidance to master web development.",
    href: "#",
    icon: CodeBracketIcon,
    cta: "🔗 Learn More →",
  },
  {
    name: "Follow a Clear Learning Path",
    description:
      "Progress through carefully designed roadmaps covering front-end, back-end, and full-stack development.",
    href: "#",
    icon: MapIcon,
    cta: "📚 Explore Roadmaps →",
  },
  {
    name: "Stay Motivated & Achieve Goals",
    description:
      "Mark lessons as complete, earn badges, and track your progress as you advance in your web development journey.",
    href: "#",
    icon: ChartBarIcon,
    cta: "🎯 Start Learning →",
  },
]

const footerNavigation = {
  mentorship: [
    { name: "Roadmaps", href: "#" },
    { name: "Community", href: "#" },
    { name: "MentorGPT", href: "#" },
    { name: "Resources", href: "#" },
  ],
  support: [{ name: "FAQs", href: "#" }],
  company: [{ name: "About Us", href: "#" }],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  social: [
    {
      name: "YouTube",
      href: "https://www.youtube.com/DeveloperJunaid",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/developer-junaid/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/developer-junaid/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3.5 8h3v11h-3V8zm7.5 0h2.8v1.54h.04a3.07 3.07 0 0 1 2.76-1.52c2.94 0 3.5 1.94 3.5 4.48V19h-3v-5.07c0-1.21-.03-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V19h-3V8z" />
        </svg>
      ),
    },
  ],
}

const faqs = [
  {
    question: "1. What is MentorJunaid?",
    answer:
      "🚀 MentorJunaid is a structured learning platform that helps developers master web development through guided roadmaps, progress tracking, and real-world projects.",
  },
  {
    question: "2. Who is this platform for?",
    answer:
      "💡 Whether you're a beginner starting from scratch or an experienced developer looking to upskill, MentorJunaid provides learning paths for all levels.",
  },
  {
    question: "3. How do I track my progress?",
    answer:
      "📊 You can mark lessons as complete, earn badges, and track your progress with an interactive dashboard.",
  },
  {
    question: "4. Are the courses free?",
    answer:
      "💰 Some roadmaps and resources are free, while premium content requires a one-time fee or subscription for full access.",
  },
  {
    question: "5. Can I get a certificate after completing a roadmap?",
    answer:
      "📜 Certificates will be available in future updates, allowing you to showcase your skills and achievements.",
  },
  {
    question: "6. Do I need prior coding experience?",
    answer:
      "🖥️ No, our beginner-friendly roadmaps guide you step-by-step, starting with the fundamentals.",
  },
  {
    question: "7. What technologies do you cover?",
    answer:
      "🛠 We cover front-end (HTML, CSS, JavaScript, React), back-end (Node.js, Express, MongoDB), and full-stack development.",
  },
  {
    question: "8. Can I access the platform on mobile?",
    answer:
      "📱 Yes, the platform is mobile-friendly, so you can learn anytime, anywhere.",
  },
  {
    question: "9. Will there be live mentorship sessions?",
    answer:
      "🎤 Live Q&A sessions and mentorship features are planned for future updates.",
  },
  {
    question: "10. How do I get started?",
    answer: "🔥 Simply sign up, choose a roadmap, and start learning!",
  },
  // More questions...
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Hero Section with App Screenshot */}
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {/* <Image
                  alt="Company Logo"
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  width={32} // Adjust based on actual size
                  height={32}
                  className="h-8 w-auto"
                /> */}
                <div className="w-[32px] h-[32px] text-5xl"> 🎓</div>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  {/* <Image
                    alt="Company Logo"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    width={32} // Adjust as needed
                    height={32}
                    className="h-8 w-auto"
                  /> */}
                  <div className="w-[32px] h-[32px] text-5xl"> 🎓</div>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className="relative isolate pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                  🎓 From Beginner to Pro—Follow the Right Roadmap
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Learn from structured roadmaps, track progress, and level up
                  your skills with real-world projects. Stay ahead with the
                  latest web technologies, mentorship, and gamified learning.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Explore Roadmaps <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    alt="App screenshot"
                    src="https://tailwindui.com/plus-assets/img/component-images/project-app-screenshot.png"
                    width={2432}
                    height={1442}
                    className="rounded-md ring-1 shadow-2xl ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              🚀 Learn Faster
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Everything You Need to Master Web Development
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Gain the skills, knowledge, and confidence to build real-world
              projects with expert guidance and structured learning.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-indigo-600"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm/6 font-semibold text-indigo-600"
                      >
                        {feature.cta} <span aria-hidden="true"></span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              👨‍💻 Learn. Build. Grow.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
              Gain hands-on experience, track your progress, and achieve your
              development goals with structured learning.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                🚀 Trusted by Developers Worldwide
              </h2>
              <p className="mt-4 text-lg/8 text-gray-600">
                Empowering learners & mentors to grow in web development.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm/6 font-semibold text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="ml-[max(50%,38rem)] aspect-1313/771 w-[82.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="ml-[-22rem] aspect-1313/771 w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              💬 Testimonials
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Helping developers achieve their goals with expert guidance.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <img
                  alt=""
                  src={featuredTestimonial.author.imageUrl}
                  className="size-10 flex-none rounded-full bg-gray-50"
                />
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-gray-600">{`${featuredTestimonial.author.handle}`}</div>
                </div>
                <img
                  alt=""
                  src={featuredTestimonial.author.logoUrl}
                  className="h-10 w-auto flex-none"
                />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8"
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <img
                            alt=""
                            src={testimonial.author.imageUrl}
                            className="size-10 rounded-full bg-gray-50"
                          />
                          <div>
                            <div className="font-semibold">
                              {testimonial.author.name}
                            </div>
                            <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Frequently asked questions
            </h2>
            <dl className="mt-16 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure
                  key={faq.question}
                  as="div"
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-data-open:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-indigo-400">
              Get started
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Take Your Web Development Skills to the Next Level.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-400">
              A subtle and refined approach to achieving your goals, blending
              expertise with efficiency to create seamless experiences.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                🔍 Find Your Path
              </a>
            </div>
          </div>
          <div className="mt-24 border-t border-white/10 pt-12 xl:grid xl:grid-cols-3 xl:gap-8">
            {/* <img
              alt="Company name"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-9"
            /> */}
            <div className="w-[32px] h-[32px] text-5xl"> 🎓</div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">
                    Mentorship
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.mentorship.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-400 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="no-referrrer"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-0">
              &copy; 2025 Mentor Junaid. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
