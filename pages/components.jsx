"use client";

import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import StatusPill from "../components/ui/StatusPill";
import Chip from "../components/ui/Chip";
import EmptyState from "../components/ui/EmptyState";
import Skeleton from "../components/ui/Skeleton";

export default function ComponentsPage() {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="typo-page-title-30">UI Kit</h1>
          <p className="typo-desc-14 mt-1">Reusable components and states.</p>
        </div>

        <Card className="p-6">
          <h2 className="typo-section-18 mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="typo-section-18 mb-4">Status Pills</h2>
          <div className="flex flex-wrap gap-3">
            <StatusPill status="Approved" />
            <StatusPill status="In Review" />
            <StatusPill status="Pending" />
            <StatusPill status="Rejected" />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="typo-section-18 mb-4">Chips</h2>
          <div className="flex flex-wrap gap-3">
            <Chip>Strategy & Planning</Chip>
            <Chip tone="teal">In Progress</Chip>
            <Chip tone="blue">Completed</Chip>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="typo-section-18 mb-4">Empty State</h2>
          <EmptyState
            title="No items found"
            description="Try adjusting your filters."
            actionLabel="Reset Filters"
            onAction={() => {}}
          />
        </Card>

        <Card className="p-6">
          <h2 className="typo-section-18 mb-4">Skeletons</h2>
          <div className="space-y-3">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </Card>
      </div>
    </Layout>
  );
}
