import { MessageSquare, Send } from "lucide-react";
import EmptyState from "../ui/EmptyState";
import Skeleton from "../ui/Skeleton";

export default function CommentsPanel({ comments, showIcon = true, isLoading = false }) {
  const hasComments = Array.isArray(comments) && comments.length > 0;
  return (
    <div className="card-base min-h-[433px] p-6 card-shadow transition-shadow hover:card-shadow-hover">
      <h3 className="typo-heading-16 mb-4 flex items-center">
        {showIcon && <MessageSquare className="w-5 h-5 mr-2" />}
        Comments
      </h3>
      <div className="space-y-4">
        {isLoading &&
          Array.from({ length: 2 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="flex items-start justify-between gap-4 border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-start gap-3 w-full">
                <Skeleton className="w-8 h-8 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </div>
          ))}
        {!isLoading && hasComments &&
          comments.map((comment, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 border border-gray-200 rounded-lg p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="typo-table-cell-muted-14">
                    {comment.avatar}
                  </span>
                </div>
                <div>
                  <p className="typo-comment-author-14">{comment.author}</p>
                  <p className="typo-comment-body-14">{comment.comment}</p>
                </div>
              </div>
              <span className="typo-comment-date-12">{comment.date}</span>
            </div>
          ))}
        {!isLoading && !hasComments && (
          <EmptyState
            title="No comments yet"
            description="Be the first to leave a comment."
          />
        )}
      </div>
      <textarea
        aria-label="Add comment"
        className="w-full h-[120px] resize-none border border-gray-200 rounded-lg p-3 typo-table-cell-14 focus-ring mt-4"
        placeholder=""
      />
      <button
        className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white typo-button-12 transition-colors focus-ring active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        type="button"
        aria-label="Post comment"
      >
        <Send className="w-4 h-4" />
        Post Comment
      </button>
    </div>
  );
}
