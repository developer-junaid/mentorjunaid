"use client"

import { useState } from "react"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react"

import { Fragment } from "react"
import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid"

import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid"

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "My Roadmaps", href: "#", icon: FolderIcon, current: false },
  { name: "Explore Roadmaps", href: "#", icon: ChartPieIcon, current: false },
  { name: "Achievements", href: "#", icon: CalendarIcon, current: false },
  { name: "Resources", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "MentorGPT", href: "#", icon: Cog6ToothIcon, current: false },
]

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
]
const stats = [
  { id: 1, name: "Roadmaps Started", value: "0" },
  { id: 2, name: "Lessons Completed", value: "0" },
  { id: 3, name: "Badges Earned", value: "0" },
  { id: 4, name: "Time Spent Learning", value: "0 min" },
]

const activity = [
  {
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 2,
    type: "assignment",
    person: { name: "Hilary Mahy", href: "#" },
    assigned: { name: "Kristin Watson", href: "#" },
    date: "2d ago",
  },
  {
    id: 3,
    type: "tags",
    person: { name: "Hilary Mahy", href: "#" },
    tags: [
      { name: "Bug", href: "#", color: "fill-red-500" },
      { name: "Accessibility", href: "#", color: "fill-indigo-500" },
    ],
    date: "6h ago",
  },
  {
    id: 4,
    type: "comment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
]

const roadmaps = [
  {
    id: 1,
    title: "Fullstack Development",
    description:
      "Master full-stack development with HTML, CSS, JS, React.js, Firebase ...",
    href: "/roadmaps/fullstack-development",
    imageSrc:
      "https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Fullstack Development roadmap preview.",
    level: "Intermediate to Advanced",
    duration: "12 Weeks",
  },
  {
    id: 2,
    title: "Web Design",
    description: "Master Figma, UI/UX Design, and create stunning interfaces.",
    href: "/roadmaps/web-design",
    imageSrc:
      "https://images.pexels.com/photos/4348400/pexels-photo-4348400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Web design roadmap preview.",
    level: "Beginner to Advanced",
    duration: "6 Weeks",
  },
  {
    id: 3,
    title: "Freelancing",
    description:
      "Learn Fiverr, Upwork, Guru.com, and other platforms to build your career.",
    href: "/roadmaps/freelancing",
    imageSrc:
      "https://cdn.sanity.io/images/oz7gze2w/production/12041939beaeed18fd182b67a1a9e331a8cf14d4-2400x3600.jpg",
    imageAlt: "Freelancing roadmap preview.",
    level: "All Levels",
    duration: "4 Weeks",
  },
  {
    id: 4,
    title: "Personal Finance",
    description:
      "Master financial literacy, budgeting, and personal finance skills.",
    href: "/roadmaps/personal-finance",
    imageSrc:
      "https://cdn.sanity.io/images/oz7gze2w/production/7ca181fe01f9674dabfba7819b15b8966d73c51a-1920x2400.jpg",
    imageAlt: "Personal Finance roadmap preview.",
    level: "All Levels",
    duration: "5 Weeks",
  },
  {
    id: 5,
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, React.js, Bootstrap, and more.",
    href: "/roadmaps/frontend-development",
    imageSrc:
      "https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Frontend Development roadmap preview.",
    level: "Beginner to Intermediate",
    duration: "10 Weeks",
  },
]
const statuses = {
  Complete: "text-green-700 bg-green-50 ring-green-600/20",
  "In progress": "text-gray-600 bg-gray-50 ring-gray-500/10",
  Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
}
const projects = [
  {
    id: 1,
    name: "GraphQL API",
    href: "#",
    status: "Complete",
    createdBy: "Leslie Alexander",
    dueDate: "March 17, 2023",
    dueDateTime: "2023-03-17T00:00Z",
  },
  {
    id: 2,
    name: "New benefits plan",
    href: "#",
    status: "In progress",
    createdBy: "Leslie Alexander",
    dueDate: "May 5, 2023",
    dueDateTime: "2023-05-05T00:00Z",
  },
  {
    id: 3,
    name: "Onboarding emails",
    href: "#",
    status: "In progress",
    createdBy: "Courtney Henry",
    dueDate: "May 25, 2023",
    dueDateTime: "2023-05-25T00:00Z",
  },
  {
    id: 4,
    name: "iOS app",
    href: "#",
    status: "In progress",
    createdBy: "Leonard Krasner",
    dueDate: "June 7, 2023",
    dueDateTime: "2023-06-07T00:00Z",
  },
  {
    id: 5,
    name: "Marketing site redesign",
    href: "#",
    status: "Archived",
    createdBy: "Courtney Henry",
    dueDate: "June 10, 2023",
    dueDateTime: "2023-06-10T00:00Z",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <div className="w-[32px] h-[32px] text-5xl"> 🎓</div>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className="size-6 shrink-0"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="size-6 shrink-0"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <div className="w-[32px] h-[32px] text-5xl"> 🎓</div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="size-6 shrink-0"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="h-6 w-px bg-gray-900/10 lg:hidden"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                />
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                {/* Separator */}
                <div
                  aria-hidden="true"
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://media.licdn.com/dms/image/v2/C4D03AQEaZWgEBJtukA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1642747475546?e=1745452800&v=beta&t=YPmAn2J8MPylShG4v0zWyRNN8p0PKeKwznDK3n68ycU"
                      className="size-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm/6 font-semibold text-gray-900"
                      >
                        Junaid Qureshi
                      </span>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="ml-2 size-5 text-gray-400"
                      />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-2">
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Stats */}
              <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col bg-gray-400/5 p-8"
                  >
                    <dt className="text-sm/6 font-semibold text-gray-600">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Two Columns */}
              <div className="flex flex-col 2xl:flex-row">
                {/* Left Col: Roadmaps, Progress */}
                <div className="w-full 2xl:w-3/5 border-r">
                  {/* Roadmaps */}
                  <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 pt-2 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
                      <div className="mt-2 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 2xl:grid-cols-3 4xl:grid-cols-4 xl:gap-x-8">
                        {roadmaps.map((roadmap) => (
                          <div key={roadmap.id}>
                            <div className="relative">
                              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                <img
                                  alt={roadmap.imageAlt}
                                  src={roadmap.imageSrc}
                                  className="size-full object-cover"
                                />
                              </div>
                              <div className="relative mt-4">
                                <h3 className="text-sm font-medium text-gray-900">
                                  {roadmap.title}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                  {roadmap.description}
                                </p>
                              </div>
                              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                <div
                                  aria-hidden="true"
                                  className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black opacity-50"
                                />
                                <p className="relative text-lg font-semibold text-white">
                                  {roadmap.duration}
                                </p>
                              </div>
                            </div>
                            <div className="mt-6">
                              <a
                                href={roadmap.href}
                                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                              >
                                Continue Learning
                                <span className="sr-only">
                                  , {roadmap.title}
                                </span>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Col: Leaderboard, Recent Activity */}
                <div className="w-full  2xl:w-2/5 pl-4">
                  <h2 className="my-3 text-black text-xl font-bold">
                    Leaderboard
                  </h2>
                  {/* Leaderboard */}
                  <ul role="list" className="divide-y divide-gray-100">
                    {projects.map((project) => (
                      <li
                        key={project.id}
                        className="flex items-center justify-between gap-x-6 py-5"
                      >
                        <div className="min-w-0">
                          <div className="flex items-start gap-x-3">
                            <p className="text-sm/6 font-semibold text-gray-900">
                              {project.name}
                            </p>
                            <p
                              className={classNames(
                                statuses[project.status],
                                "mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset"
                              )}
                            >
                              {project.status}
                            </p>
                          </div>
                          <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                            <p className="whitespace-nowrap">
                              Due on{" "}
                              <time dateTime={project.dueDateTime}>
                                {project.dueDate}
                              </time>
                            </p>
                            <svg
                              viewBox="0 0 2 2"
                              className="size-0.5 fill-current"
                            >
                              <circle r={1} cx={1} cy={1} />
                            </svg>
                            <p className="truncate">
                              Created by {project.createdBy}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-none items-center gap-x-4">
                          <a
                            href={project.href}
                            className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:block"
                          >
                            View project
                            <span className="sr-only">, {project.name}</span>
                          </a>
                          <Menu as="div" className="relative flex-none">
                            <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                              <span className="sr-only">Open options</span>
                              <EllipsisVerticalIcon
                                aria-hidden="true"
                                className="size-5"
                              />
                            </MenuButton>
                            <MenuItems
                              transition
                              className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                              <MenuItem>
                                <a
                                  href="#"
                                  className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                >
                                  Edit
                                  <span className="sr-only">
                                    , {project.name}
                                  </span>
                                </a>
                              </MenuItem>
                              <MenuItem>
                                <a
                                  href="#"
                                  className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                >
                                  Move
                                  <span className="sr-only">
                                    , {project.name}
                                  </span>
                                </a>
                              </MenuItem>
                              <MenuItem>
                                <a
                                  href="#"
                                  className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                >
                                  Delete
                                  <span className="sr-only">
                                    , {project.name}
                                  </span>
                                </a>
                              </MenuItem>
                            </MenuItems>
                          </Menu>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Activity */}
                  <h2 className="my-3 text-black text-xl font-bold">
                    Activity
                  </h2>{" "}
                  <div className="flow-root">
                    <ul role="list" className="-mb-8">
                      {activity.map((activityItem, activityItemIdx) => (
                        <li key={activityItem.id}>
                          <div className="relative pb-8">
                            {activityItemIdx !== activity.length - 1 ? (
                              <span
                                aria-hidden="true"
                                className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                              />
                            ) : null}
                            <div className="relative flex items-start space-x-3">
                              {activityItem.type === "comment" ? (
                                <>
                                  <div className="relative">
                                    <img
                                      alt=""
                                      src={activityItem.imageUrl}
                                      className="flex size-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                    />

                                    <span className="absolute -right-1 -bottom-0.5 rounded-tl bg-white px-0.5 py-px">
                                      <ChatBubbleLeftEllipsisIcon
                                        aria-hidden="true"
                                        className="size-5 text-gray-400"
                                      />
                                    </span>
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div>
                                      <div className="text-sm">
                                        <a
                                          href={activityItem.person.href}
                                          className="font-medium text-gray-900"
                                        >
                                          {activityItem.person.name}
                                        </a>
                                      </div>
                                      <p className="mt-0.5 text-sm text-gray-500">
                                        Commented {activityItem.date}
                                      </p>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-700">
                                      <p>{activityItem.comment}</p>
                                    </div>
                                  </div>
                                </>
                              ) : activityItem.type === "assignment" ? (
                                <>
                                  <div>
                                    <div className="relative px-1">
                                      <div className="flex size-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                        <UserCircleIcon
                                          aria-hidden="true"
                                          className="size-5 text-gray-500"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="min-w-0 flex-1 py-1.5">
                                    <div className="text-sm text-gray-500">
                                      <a
                                        href={activityItem.person.href}
                                        className="font-medium text-gray-900"
                                      >
                                        {activityItem.person.name}
                                      </a>{" "}
                                      assigned{" "}
                                      <a
                                        href={activityItem.assigned.href}
                                        className="font-medium text-gray-900"
                                      >
                                        {activityItem.assigned.name}
                                      </a>{" "}
                                      <span className="whitespace-nowrap">
                                        {activityItem.date}
                                      </span>
                                    </div>
                                  </div>
                                </>
                              ) : activityItem.type === "tags" ? (
                                <>
                                  <div>
                                    <div className="relative px-1">
                                      <div className="flex size-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                        <TagIcon
                                          aria-hidden="true"
                                          className="size-5 text-gray-500"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="min-w-0 flex-1 py-0">
                                    <div className="text-sm/8 text-gray-500">
                                      <span className="mr-0.5">
                                        <a
                                          href={activityItem.person.href}
                                          className="font-medium text-gray-900"
                                        >
                                          {activityItem.person.name}
                                        </a>{" "}
                                        added tags
                                      </span>{" "}
                                      <span className="mr-0.5">
                                        {activityItem.tags.map((tag) => (
                                          <Fragment key={tag.name}>
                                            <a
                                              href={tag.href}
                                              className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-gray-200 ring-inset"
                                            >
                                              <svg
                                                viewBox="0 0 6 6"
                                                aria-hidden="true"
                                                className={classNames(
                                                  tag.color,
                                                  "size-1.5"
                                                )}
                                              >
                                                <circle r={3} cx={3} cy={3} />
                                              </svg>
                                              {tag.name}
                                            </a>{" "}
                                          </Fragment>
                                        ))}
                                      </span>
                                      <span className="whitespace-nowrap">
                                        {activityItem.date}
                                      </span>
                                    </div>
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
