import VenueShowcaseCard from "@/components/portal/VenueShowcaseCard";
import { mockCuratedVenues } from "@/lib/mockData";
import EventLogistics from "@/components/portal/EventLogistics";

export default async function VenuePage({
  params,
}: {
  params: Promise<{ eventId: string; guestId: string }>;
}) {
  const { eventId } = await params;
  const venues = mockCuratedVenues.filter((v) => v.eventId === eventId);

  return (
    <div className="space-y-12 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Curated Venues
        </h1>
        <p className="text-gray-600 mt-2">
          Explore the handpicked hotels for your event - carefully selected by
          our team
        </p>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-purple-900">
              Agent-Curated Selection
            </h3>
            <p className="text-sm text-purple-800 mt-1 leading-relaxed">
              These venues have been specially selected and negotiated by our
              event agents to ensure the best experience for your group.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <VenueShowcaseCard key={venue.id} venue={venue} />
        ))}
      </div>

      {venues.length === 0 && (
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <p className="text-gray-600">No venues available yet</p>
        </div>
      )}

      {/* Event Logistics Section - Deep Space Container */}
      <div className="mt-16 p-8 rounded-[2rem] bg-[#020617] relative overflow-hidden ring-1 ring-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -ml-32 -mb-32 pointer-events-none" />
        <EventLogistics />
      </div>
    </div>
  );
}
