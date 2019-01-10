//Convert the time passed in minutes to
// h:min , ex : 120 => 2h 00min
export const runtimeConvertor = n => {
  if (n < 60) {
    return `${n}min`;
  }
  const mins = n % 60;
  const hours = Math.floor(n / 60);
  return `${hours}h ${mins > 9 ? mins : `0${mins}`}min`;
};
