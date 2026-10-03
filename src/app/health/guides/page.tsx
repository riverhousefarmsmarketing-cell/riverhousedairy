import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goat Care Guides | RiverHouse Dairy",
  description: "Basic goat care: new goat checklist, kidding basics, seasonal care and feeding basics, from the barn at RiverHouse Dairy in Chehalis, Washington.",
};

const guides = [
  {
    id: "new-owner",
    title: "New Goat Owner Checklist",
    subtitle: "Getting ready for your first goats",
    content: [
      {
        heading: "Before They Arrive",
        items: [
          "Sturdy fencing that goats can't climb over or squeeze through",
          "A dry, draft-free shelter with clean bedding",
          "A separate pen to keep new goats apart from your herd for the first few weeks",
          "Fresh, clean water every day",
          "Loose minerals made for goats",
          "Find a vet who sees goats before you need one",
        ],
      },
      {
        heading: "The First Few Weeks",
        items: [
          "Learn what normal looks like: eating, chewing cud, bright eyes, alert and curious",
          "Ask your vet about a basic health check and vaccinations",
          "Keep their feed the same at first and make any changes slowly",
          "Goats are herd animals, so never keep just one",
        ],
      },
    ],
  },
  {
    id: "kidding",
    title: "Kidding Basics",
    subtitle: "Getting ready for babies",
    content: [
      {
        heading: "Before Kidding",
        items: [
          "Talk with your vet ahead of time about what to expect and when to call",
          "Set up a clean, dry, quiet kidding pen",
          "Have clean towels and your vet's phone number handy",
        ],
      },
      {
        heading: "Signs She's Getting Close",
        items: [
          "Her udder fills up",
          "She's restless, pawing, or getting up and down",
          "She talks more or wants to be alone",
        ],
      },
      {
        heading: "During and After",
        items: [
          "Most does kid on their own. Watch quietly from a distance.",
          "If you're worried about how labor is going, call your vet",
          "Make sure kids are breathing, dry and warm",
          "Kids should nurse soon after birth. That first milk (colostrum) matters.",
        ],
      },
    ],
  },
  {
    id: "seasonal-pnw",
    title: "Seasonal Care",
    subtitle: "Through the year in western Washington",
    content: [
      {
        heading: "Spring",
        items: [
          "Watch for signs of worms as pastures green up, and ask your vet about testing",
          "Keep bedding dry. Wet spring mud is hard on hooves.",
          "Be ready for cold, wet nights if you have kids on the ground",
        ],
      },
      {
        heading: "Summer",
        items: [
          "Shade and cool, fresh water at all times",
          "Keep flies down around the barn",
          "Check and trim hooves. They grow faster in summer.",
        ],
      },
      {
        heading: "Fall",
        items: [
          "Breeding season begins for most does",
          "Get shelters ready for the rain",
        ],
      },
      {
        heading: "Winter",
        items: [
          "A dry shelter out of the wind and rain",
          "More hay when it's cold",
          "Keep water from freezing. Goats drink less when water is icy.",
        ],
      },
    ],
  },
  {
    id: "feeding",
    title: "Feeding Basics",
    subtitle: "Keep it simple",
    content: [
      {
        heading: "Every Goat",
        items: [
          "Good hay is the foundation of the diet",
          "Fresh water, always",
          "Loose minerals made for goats, not for sheep",
          "Change feed slowly",
        ],
      },
      {
        heading: "Milking Does",
        items: [
          "Milking does need more feed than dry does",
          "Ask your vet or feed store about a balanced ration",
        ],
      },
      {
        heading: "Bucks & Wethers",
        items: [
          "Go easy on grain",
          "If a buck or wether strains to pee, call your vet right away",
        ],
      },
    ],
  },
];

export default function GuidesPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-14">
          <nav className="mb-6 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/health" className="hover:text-white transition-colors">Goat Health</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Care Guides</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Care Guides</h1>
          <p className="mt-3 text-lg text-cream-300 max-w-2xl">Basic goat care from the barn at RiverHouse Dairy. A starting point, not medical advice. Your vet is your best resource.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-8 sm:px-12 py-12">
        {/* Guide nav */}
        <div className="flex flex-wrap gap-2 mb-12">
          {guides.map(g => (
            <a key={g.id} href={`#${g.id}`}
              className="text-sm font-medium text-forest border border-forest-200 bg-white rounded-full px-4 py-1.5 hover:bg-forest hover:text-white transition-colors">
              {g.title}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {guides.map(guide => (
            <section key={guide.id} id={guide.id} className="scroll-mt-24">
              <div className="mb-6 pb-4 border-b-2 border-forest">
                <h2 className="text-2xl font-bold text-forest">{guide.title}</h2>
                <p className="text-forest-600 mt-1">{guide.subtitle}</p>
              </div>
              <div className="space-y-8">
                {guide.content.map(section => (
                  <div key={section.heading}>
                    <h3 className="text-base font-bold text-forest mb-3 flex items-center gap-2">
                      <span className="h-1 w-4 bg-plum rounded-full" />
                      {section.heading}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-base text-forest-600 leading-relaxed">
                          <span className="text-plum shrink-0 mt-1 text-sm">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-gray-100 text-xs text-forest-600 leading-relaxed">
          <strong className="text-forest">Medical Disclaimer:</strong> These guides represent general best practices for goat management. Always consult a licensed veterinarian for medical decisions specific to your animals.
        </div>
      </div>
    </>
  );
}
