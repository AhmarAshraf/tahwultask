import type { Perspective } from "../../types/models";

type OverviewTabProps = {
  perspective: Perspective;
};

export default function OverviewTab({ perspective }: OverviewTabProps) {
  const rows = [
    { label: "Objective", content: perspective.objective },
    {
      label: "Implementation Requirements",
      content: (
        <div className="space-y-4">
          {perspective.requirements.map((req, index) => (
            <div key={index} className="space-y-2">
              <p className="typo-overview-title-15">{req.title}</p>
              {req.items && (
                <div className="space-y-1">
                  {req.items.map((item, idx) => (
                    <p key={idx} className="typo-overview-body-15">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ),
    },
    { label: "Evidence Documents", content: perspective.evidenceDocuments },
    { label: "Related Regulations", content: perspective.relatedRegulations },
    { label: "Scope", content: perspective.scope },
  ];

  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-[220px] top-0 bottom-0 w-px bg-gray-200 ml-3"></div>
      <div className="space-y-6">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 items-start"
          >
            <div className="bg-gray-100 rounded-lg px-6 py-4 typo-overview-label-15">
              {row.label}
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 typo-overview-body-15">
              {row.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
