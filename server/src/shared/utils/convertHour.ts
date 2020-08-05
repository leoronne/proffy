export default function ToMinutes(time: string): number {
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinuets = hour * 60 + minutes;

  return timeInMinuets;
}
