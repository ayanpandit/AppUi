import React from 'react';

export default function AboutSection() {
  const features = [
    {
      title: "OPEN SOURCE RECOGNITION",
      year: "2024",
      link: "#"
    },
    {
      title: "REACT COMPONENT LIBRARY AWARD",
      year: "2023",
      link: "#"
    },
    {
      title: "TAILWIND CSS INNOVATION",
      year: "2022",
      link: "#"
    },
    {
      title: "DEVELOPER TOOL EXCELLENCE",
      year: "2021",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="px-8 py-8 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between">
          <div>
            <h1 className="text-[80px] font-bold leading-none tracking-tight mb-4">
              ABOUT APP.UI
            </h1>
            <p className="text-white text-base tracking-wide">
              AN OPEN-SOURCE{' '}
              <span className="font-semibold">UI COMPONENT LIBRARY</span> FOR MODERN{' '}
              <span className="underline underline-offset-4 decoration-1">
                REACT DEVELOPERS
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-3 h-3 rounded-full bg-[#c4ff0e]"></div>
            <button className="px-6 py-2.5 bg-[#c4ff0e] text-black text-xs font-bold tracking-wider uppercase rounded-sm hover:bg-[#d4ff3e] transition-colors">

              BROWSE COMPONENTS
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1374&auto=format&fit=crop"
                alt="About App.UI"
                className="w-full h-[700px] object-cover rounded-lg"
              />
              <button className="mt-8 px-6 py-3 bg-white text-black text-xs font-bold tracking-wider uppercase hover:bg-gray-200 transition-colors">
                VIEW GITHUB
              </button>
              <p className="mt-8 text-sm text-gray-400">[ EST. 2021 ]</p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* About Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold tracking-wide">[ ABOUT APP.UI ]</h2>
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-6">
                App.UI is an open-source UI component library created by developer Ayan Pandey.
                It provides ready-to-use, copy-paste UI components for modern frontend developers
                using React and Tailwind CSS. Our mission is to make building beautiful websites
                faster and easier by offering prebuilt UI blocks in one comprehensive library.
              </p>
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h3 className="text-sm font-bold tracking-wider mb-8">
                FEATURED IN DEVELOPER COMMUNITIES
              </h3>

              <div className="space-y-0">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group border-t border-gray-800 py-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4"
                  >
                    <span className="text-sm font-medium tracking-wide">
                      {feature.title}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">{feature.year}</span>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
                <div className="border-t border-gray-800"></div>
              </div>
            </div>

            {/* Mission Section */}
            <div>
              <h2 className="text-xl font-bold tracking-wide mb-6">[ OUR MISSION ]</h2>
              <p className="text-base leading-relaxed">
                To empower frontend developers, web designers, students, freelancers, and indie makers
                by providing a comprehensive collection of high-quality, customizable UI components.
                We believe in the power of open-source collaboration to accelerate web development and
                create stunning user experiences.
              </p>
            </div>

            {/* Platform Details */}
            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-sm font-bold tracking-wider mb-4 text-gray-400">
                  WHAT WE OFFER
                </h3>
                <p className="text-base leading-relaxed">
                  Our library includes essential UI components like navigation bars, hero sections,
                  feature sections, call-to-action blocks, testimonials, pricing cards, dashboards,
                  sidebars, and footers — all built with React and styled with Tailwind CSS for
                  maximum flexibility and performance.
                </p>
              </div>

              <div>

              </div>

              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm leading-relaxed text-gray-300 italic">
                  Every component is designed with modern best practices, accessibility in mind,
                  and full customization options. Simply copy, paste, and adapt to your project's
                  needs — no complex setup required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}