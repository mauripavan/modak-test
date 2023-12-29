export const dateToShow = ({
  startDate,
  endDate,
}: {
  startDate: number;
  endDate: number;
}) => {
  if (startDate === endDate) return endDate;
  else {
    const date = `${startDate} to ${endDate}`;
    return date;
  }
};
