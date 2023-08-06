import Card from '../Card/Card';

function SkeletonCard() {
  return (
    <Card>
      <Card.Body>
        <div className="animate-pulse" data-testid="skeleton-card">
          <div className="rounded-full mx-auto h-32 w-32 flex-shrink-0 bg-slate-200 dark:bg-zinc-900" />
          <div className="mt-6">
            <div className="h-4 bg-slate-200 dark:bg-zinc-900 rounded mb-2" />
            <div className="h-4 bg-slate-200 dark:bg-zinc-900 rounded" />
          </div>

          <div className="mt-6">
            <div className="h-2 bg-slate-200 dark:bg-zinc-900 rounded mb-2" />
            <div className="h-2 bg-slate-200 dark:bg-zinc-900 rounded" />
          </div>
        </div>
      </Card.Body>
      <div className="animate-pulse grid grid-cols-2 gap-4 p-6">
        <div className="h-8 bg-slate-200 dark:bg-zinc-900 rounded mb-2" />
        <div className="h-8 bg-slate-200 dark:bg-zinc-900 rounded" />
      </div>
    </Card>
  );
}

export default SkeletonCard;
