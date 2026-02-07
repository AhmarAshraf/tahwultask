export type TimelineStatus = "completed" | "in-progress" | "upcoming";

export type TimelineItem = {
  id: number;
  title: string;
  date: string;
  month: string;
  status: TimelineStatus;
};

export type SummaryStat = {
  id: number;
  title: string;
  value: string;
  icon: string;
};

export type ProgressStepStatus =
  | "completed"
  | "in-progress"
  | "pending"
  | "not-started"
  | "partially-uploaded"
  | "fully-uploaded"
  | "delayed";

export type ProgressStep = {
  number: number;
  status: ProgressStepStatus;
};

export type ProgressStepInput =
  | number
  | {
      number?: number;
      step?: number;
      status?: ProgressStepStatus;
    };

export type ProgressSubItem = {
  name: string;
  status: ProgressStepStatus;
  steps: ProgressStepInput[];
};

export type ProgressStatusItem = {
  id: number;
  name: string;
  progress: number;
  type?: string;
  subItems: ProgressSubItem[];
};

export type PerformancePoint = {
  month: string;
  value: number;
};

export type Performer = {
  id: number;
  name: string;
  role: string;
  score: number;
  avatar?: string;
};

export type RecentActivity = {
  id?: number;
  title: string;
  time: string;
  type?: string;
};

export type AuditReadiness = {
  percentage: number;
  overdueSids: number;
  missingEvidence: number;
};

export type EvidenceRowStatus =
  | "Approved"
  | "Pending Review"
  | "Rejected"
  | "In Review"
  | "Pending";

export type EvidenceRow = {
  docNumber: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  dueDate: string;
  status: EvidenceRowStatus;
};

export type Comment = {
  author: string;
  avatar: string;
  comment: string;
  date: string;
};

export type Leader = {
  name: string;
  role: string;
  avatar?: string;
};

export type PerspectiveRequirement = {
  title: string;
  items?: string[];
};

export type Perspective = {
  id: string;
  name: string;
  category: string;
  description: string;
  progress: number;
  totalEvidence: number;
  underReview: number;
  inProgress: number;
  completed: number;
  objective: string;
  requirements: PerspectiveRequirement[];
  evidenceDocuments: string;
  relatedRegulations: string;
  scope: string;
  leaders: Leader[];
  evidence: EvidenceRow[];
  comments: Comment[];
  recentActivities: RecentActivity[];
};

export type TrackingSummaryMetric = {
  label: string;
  value: string;
  icon: string;
  color: "blue" | "green" | "yellow" | "gray";
};

export type TrackingRowStatus =
  | "Completed"
  | "In Progress"
  | "Under Review"
  | "Pending";

export type TrackingRow = {
  id: number;
  criterion: string;
  category: string;
  progress: number;
  documents: number;
  status: TrackingRowStatus;
  owner: string;
  dueDate: string;
  lastUpdated: string;
};

export type TrackingTeamMember = {
  name: string;
  initials: string;
  criteria: number;
  score: number;
};

export type TrackingDeadline = {
  name: string;
  date: string;
  days: number;
};

export type TrackingRiskAlert = {
  type: "High" | "Medium" | "Low";
  message: string;
  color: "red" | "yellow" | "blue";
};
