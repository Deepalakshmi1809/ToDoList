export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function isToday(date) {
  const today = new Date();
  const taskDate = new Date(date);

  return (
    today.getDate() === taskDate.getDate() &&
    today.getMonth() === taskDate.getMonth() &&
    today.getFullYear() === taskDate.getFullYear()
  );
}

export function isOverdue(date) {
  const today = new Date();
  const taskDate = new Date(date);

  today.setHours(0, 0, 0, 0);
  taskDate.setHours(0, 0, 0, 0);

  return taskDate < today;
}