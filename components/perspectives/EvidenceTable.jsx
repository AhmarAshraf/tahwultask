const statusClassMap = {
  approved: "status-approved",
  "pending review": "status-pending",
  rejected: "status-rejected",
};

export default function EvidenceTable({ rows }) {
  return (
    <div className="bg-white rounded-xl card-shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Document Number",
                "Document Name",
                "Document Lead",
                "Document Preparer",
                "Date",
                "Due Date",
                "Status",
              ].map((label, index) => (
                <th
                  key={label}
                  className={`text-left py-3 px-4 typo-table-head-14 ${
                    index === 0 ? "rounded-l-lg" : ""
                  } ${index === 6 ? "rounded-r-lg" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <span>{label}</span>
                    <img
                      src="/icons/sort-az.png"
                      alt=""
                      className="w-[12px] h-[12px]"
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((doc, index) => (
              <tr key={index} className="border-b border-gray-100 last:border-0">
                <td className="py-5 px-4 typo-table-cell-14">
                  {doc.docNumber}
                </td>
                <td className="py-5 px-4">
                  <span className="typo-docname-14">{doc.name}</span>
                </td>
                <td className="py-5 px-4 typo-table-cell-14">
                  {doc.lead}
                </td>
                <td className="py-5 px-4 typo-table-cell-14">
                  {doc.preparer}
                </td>
                <td className="py-5 px-4 typo-table-cell-muted-14">
                  {doc.date}
                </td>
                <td className="py-5 px-4 typo-table-cell-muted-14">
                  {doc.dueDate}
                </td>
                <td className="py-5 px-4">
                  <span
                    className={`status-badge ${
                      statusClassMap[doc.status.toLowerCase()] || "status-pending"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
