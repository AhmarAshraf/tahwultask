import { MessageSquare, Send } from "lucide-react";

export default function CommentsPanel({ comments, showIcon = true }) {
  return (
    <div className="bg-white min-h-[433px] rounded-xl p-6 card-shadow">
      <h3 className="typo-heading-16 mb-4 flex items-center">
        {showIcon && <MessageSquare className="w-5 h-5 mr-2" />}
        Comments
      </h3>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-4 border border-gray-200 rounded-lg p-4"
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
      </div>
      <textarea
        className="w-full h-[120px] resize-none border border-gray-200 rounded-lg p-3 typo-table-cell-14 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent mt-4"
        placeholder=""
      />
      <button className="mt-4 inline-flex items-center gap-[10px] w-[175px] h-[34px] px-[24px] rounded-[8px] bg-primary hover:bg-primary-dark text-white typo-button-12 transition-colors">
        <Send className="w-4 h-4" />
        Post Comment
      </button>
    </div>
  );
}
