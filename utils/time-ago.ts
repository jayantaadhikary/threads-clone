export function timeAgo(date: string): string {
  const now = new Date();
  const diffInMs = now.getTime() - new Date(date).getTime();

  const diffinSecs = Math.round(diffInMs / 1000);
  const diffInMinutes = Math.round(diffinSecs / 60);
  const diffInHours = Math.round(diffInMinutes / 60);
  const diffInDays = Math.round(diffInHours / 24);

  if (diffinSecs < 60) {
    return `${diffinSecs} s`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} min`;
  } else if (diffInHours < 24) {
    return `${diffInHours} h`;
  } else {
    return `${diffInDays} days`;
  }
}
