// Mock data for the TAHWUL Dashboard

export const timelineData = [
  {
    id: 1,
    title: "Kickoff Workshop",
    date: "Jan 15",
    month: "Jan 15",
    status: "completed"
  },
  {
    id: 2,
    title: "Data Collection",
    date: "Mar 22",
    month: "Mar 22",
    status: "completed"
  },
  {
    id: 3,
    title: "Initial Phase",
    date: "May 8 - July 12",
    month: "May 8 - July 12",
    status: "completed"
  },
  {
    id: 4,
    title: "Verification",
    date: "Aug 20",
    month: "Aug 20",
    status: "in-progress"
  },
  {
    id: 5,
    title: "Completion Reviews",
    date: "Oct 5",
    month: "Oct 5",
    status: "upcoming"
  },
  {
    id: 6,
    title: "Cycle Conclusion",
    date: "Dec 18",
    month: "Dec 18",
    status: "upcoming"
  }
];

export const summaryStats = [
  {
    id: 1,
    title: "Overall Progress",
    value: "78.65%",
    icon: "/icons/progress.png"
  },
  {
    id: 2,
    title: "Total Criteria",
    value: "95",
    icon: "/icons/folder.png"
  },
  {
    id: 3,
    title: "Completed Criteria",
    value: "52",
    icon: "/icons/tick_folder.png"
  },
  {
    id: 4,
    title: "Evidence Documents",
    value: "386",
    icon: "/icons/safety.png"
  },
  {
    id: 5,
    title: "Evidence Completed",
    value: "302",
    icon: "/icons/tick_folder.png"
  },
  {
    id: 6,
    title: "Uploaded to GDA",
    value: "258",
    icon: "/icons/upload.png"
  }
];

export const progressStatus = [
  {
    id: 1,
    name: "Strategy And Planning",
    progress: 97.78,
    type: "Digital Transformation",
    subItems: [
      {
        name: "Digital Transformation",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" }
        ]
      },
      {
        name: "Digital Governance",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "in-progress" }
        ]
      },
      {
        name: "Enterprise Architecture",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Organization And Culture",
    progress: 70.83,
    subItems: [
      {
        name: "Digital Culture And Environment",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "completed" }
        ]
      },
      {
        name: "Leadership Development",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" }
        ]
      },
      {
        name: "Skills & Capacity Building",
        status: "in-progress",
        steps: [
          { number: 1, status: "in-progress" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Operations And Execution",
    progress: 80.0,
    subItems: [
      {
        name: "Business Processes",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
          { number: 4, status: "completed" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Business Continuity",
    progress: 90.59,
    subItems: [
      {
        name: "Risk Management",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
          { number: 5, status: "completed" }
        ]
      },
      {
        name: "Business Continuity",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "not-started" },
          { number: 3, status: "not-started" },
          { number: 4, status: "completed" },
          { number: 5, status: "completed" },
          { number: 6, status: "not-started" },
          { number: 7, status: "completed" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Information Technology",
    progress: 75.00,
    subItems: [
      {
        name: "Support Systems",
        status: "completed",
        steps: [
          { number: 1, status: "partially-uploaded" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
          { number: 5, status: "completed" }
        ]
      },
      {
        name: "IT Infrastructure",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" },
          { number: 5, status: "fully-uploaded" },
          { number: 6, status: "completed" },
          { number: 7, status: "completed" }
        ]
      },
      {
        name: "Cloud Infrastructure",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "fully-uploaded" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Comprehensive Governance",
    progress: 84.44,
    subItems: [
      {
        name: "Governance Platforms",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" }
        ]
      },
      {
        name: "Governance Platforms",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "not-started" },
          { number: 5, status: "completed" },
          { number: 6, status: "completed" },
          { number: 7, status: "completed" },
          { number: 8, status: "completed" },
          { number: 9, status: "completed" }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Channels And Services",
    progress: 100,
    subItems: [
      {
        name: "Service Quality",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" }
        ]
      },
      {
        name: "Digital Channels",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "completed" },
          { number: 4, status: "completed" }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Beneficiary Centralization",
    progress: 60.00,
    subItems: [
      {
        name: "User Engagement",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" },
          { number: 4, status: "in-progress" }
        ]
      },
      {
        name: "User Relationship",
        status: "in-progress",
        steps: [
          { number: 1, status: "in-progress" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" }
        ]
      },
      {
        name: "User Experience",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "completed" },
          { number: 4, status: "in-progress" },
          { number: 5, status: "completed" }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Government Data",
    progress: 87.50,
    subItems: [
      {
        name: "Data Governance",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" }
        ]
      },
      {
        name: "Data Usage & Availability",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "in-progress" },
          { number: 3, status: "in-progress" }
        ]
      },
      {
        name: "Open Data",
        status: "completed",
        steps: [
          { number: 1, status: "completed" },
          { number: 2, status: "completed" },
          { number: 3, status: "in-progress" }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Research And Innovation",
    progress: 17.65,
    subItems: [
      {
        name: "Innovation",
        status: "delayed",
        steps: [
          { number: 1, status: "delayed" },
          { number: 2, status: "delayed" },
          { number: 3, status: "delayed" },
          { number: 4, status: "delayed" }
        ]
      },
      {
        name: "Creative Solutions",
        status: "delayed",
        steps: [
          { number: 1, status: "in-progress" },
          { number: 2, status: "delayed" }
        ]
      }
    ]
  }
];

export const performanceData = [
  { month: "Jan", value: 78 },
  { month: "Feb", value: 68 },
  { month: "Mar", value: 75 },
  { month: "Apr", value: 42 },
  { month: "May", value: 95 },
  { month: "Jun", value: 72 },
  { month: "Jul", value: 55 },
  { month: "Aug", value: 88 },
  { month: "Sep", value: 70 },
  { month: "Oct", value: 58 },
  { month: "Nov", value: 95 },
  { month: "Dec", value: 72 }
];

export const topPerformers = [
  {
    id: 1,
    name: "Ahmed Al-Ali",
    role: "Strategy Perspective",
    score: 96,
    avatar: "/avatars/ahmed.png"
  },
  {
    id: 2,
    name: "Sarah Al-Khaled",
    role: "Beneficiary Perspective",
    score: 94,
    avatar: "/avatars/sarah.png"
  },
  {
    id: 3,
    name: "Mohammad Al-Mansour",
    role: "IT Perspective",
    score: 92,
    avatar: "/avatars/mohammad.png"
  }
];

export const recentActivities = [
  {
    id: 1,
    title: "Document \"Strategy_Review.Pdf\" Was Uploaded By Ahmed Khaled",
    time: "5 Mins Ago",
    type: "upload"
  },
  {
    id: 2,
    title: "Task \"Review Compliance Files\" Was Assigned To Mona Hamed",
    time: "10 Mins Ago",
    type: "assignment"
  },
  {
    id: 3,
    title: "New Criterion \"5.3 Digital Identity\" Was Created By Admin",
    time: "1 Hour Ago",
    type: "creation"
  }
];

export const perspectivesData = [
  {
    id: "strategy",
    name: "Digital Transformation Strategic Planning",
    category: "Strategy & Planning",
    description: "Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals",
    progress: 100,
    totalEvidence: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
    objective: "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
    requirements: [
      {
        title: "A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.",
        items: [
          "Strategic Initiatives, Programs, And Performance Indicators.",
          "C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.",
          "D. Required Competencies, Capabilities, And Skills Needed To Achieve The Strategy's Objectives."
        ]
      }
    ],
    evidenceDocuments: "Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.",
    relatedRegulations: "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).",
    scope: "All Government Entities.",
    leaders: [
      { name: "Ahmed Al-Ali", role: "Strategy Perspective", avatar: "/avatars/ahmed.png" },
      { name: "Sarah Al-Khaled", role: "Strategy Perspective", avatar: "/avatars/sarah.png" }
    ],
    evidence: [
      {
        docNumber: "5.4.1.1",
        name: "Digital_Transformation_Plan.Pdf",
        lead: "Ahmed Khaled",
        preparer: "Ahmed Khaled",
        date: "2025-08-01",
        dueDate: "2025-08-01",
        status: "Approved"
      },
      {
        docNumber: "5.4.1.2",
        name: "KPI_Framework.Xlsx",
        lead: "Mona Hamed",
        preparer: "Mona Hamed",
        date: "2025-08-01",
        dueDate: "2025-08-01",
        status: "Pending Review"
      },
      {
        docNumber: "5.4.1.3",
        name: "Roadmap_Version1.Docx",
        lead: "Rami AlSharif",
        preparer: "Rami AlSharif",
        date: "2025-08-01",
        dueDate: "2025-08-01",
        status: "Pending Review"
      }
    ],
    comments: [
      {
        author: "Sara Ibrahim",
        avatar: "E",
        comment: "Ensure The Plan Includes A Clear Governance Model.",
        date: "2025-08-05"
      },
      {
        author: "Mona Hamed",
        avatar: "M",
        comment: "Ensure The Plan Includes A Clear Governance Model.",
        date: "2025-08-05"
      }
    ],
    recentActivities: [
      {
        title: "Roadmap_Version1.Docx Uploaded By Rami AlSharif",
        time: "5 Mins Ago"
      },
      {
        title: "KPI_Framework.Xlsx Uploaded By Mona Hamed",
        time: "20 Mins Ago"
      },
      {
        title: "Digital_Transformation_Plan.Pdf Approved By Advisory Team",
        time: "1 Hour Ago"
      }
    ]
  }
];

export const auditReadiness = {
  percentage: 80,
  overdueSids: 12,
  missingEvidence: 5
};

export const trackingSummaryMetrics = [
  { label: 'Total Criteria', value: '95', icon: 'trend', color: 'blue' },
  { label: 'Completed', value: '52', icon: 'trend', color: 'green' },
  { label: 'In Progress', value: '28', icon: 'trend', color: 'yellow' },
  { label: 'Pending', value: '15', icon: 'trend', color: 'gray' }
];

export const trackingData = [
  {
    id: 1,
    criterion: 'Digital Transformation Strategic Planning',
    category: 'Strategy & Planning',
    progress: 100,
    documents: 4,
    status: 'Completed',
    owner: 'Ahmed Al-Ali',
    dueDate: '2025-08-01',
    lastUpdated: '2 hours ago'
  },
  {
    id: 2,
    criterion: 'Leadership Development',
    category: 'Organization & People',
    progress: 75,
    documents: 3,
    status: 'In Progress',
    owner: 'Sarah Al-Khaled',
    dueDate: '2025-09-15',
    lastUpdated: '1 day ago'
  },
  {
    id: 3,
    criterion: 'Risk Management Framework',
    category: 'Business Continuity',
    progress: 90,
    documents: 5,
    status: 'Under Review',
    owner: 'Mohammad Al-Mansour',
    dueDate: '2025-08-20',
    lastUpdated: '3 hours ago'
  },
  {
    id: 4,
    criterion: 'Cloud Infrastructure',
    category: 'Information Technology',
    progress: 60,
    documents: 6,
    status: 'In Progress',
    owner: 'Fatima Hassan',
    dueDate: '2025-10-01',
    lastUpdated: '5 hours ago'
  },
  {
    id: 5,
    criterion: 'Data Governance Policy',
    category: 'Government Data',
    progress: 85,
    documents: 4,
    status: 'Under Review',
    owner: 'Omar Abdullah',
    dueDate: '2025-08-25',
    lastUpdated: '1 hour ago'
  }
];

export const trackingTeamOverview = [
  { name: 'Ahmed Al-Ali', initials: 'AA', criteria: 4, score: 92 },
  { name: 'Sarah Al-Khaled', initials: 'SA', criteria: 3, score: 88 },
  { name: 'Mohammad Al-Mansour', initials: 'MA', criteria: 5, score: 90 },
  { name: 'Fatima Hassan', initials: 'FH', criteria: 2, score: 79 }
];

export const trackingDeadlines = [
  { name: 'Digital Transformation Plan', date: 'Aug 1, 2025', days: 3 },
  { name: 'KPI Framework', date: 'Aug 15, 2025', days: 17 },
  { name: 'Risk Management', date: 'Aug 20, 2025', days: 22 },
  { name: 'Cloud Migration', date: 'Sep 1, 2025', days: 34 }
];

export const trackingRiskAlerts = [
  { type: 'High', message: '3 criteria behind schedule', color: 'red' },
  { type: 'Medium', message: '5 documents pending review', color: 'yellow' },
  { type: 'Low', message: '2 team members at capacity', color: 'blue' }
];
