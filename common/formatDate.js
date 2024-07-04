export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const currentDate = new Date();

  // Tính số mili giây chênh lệch giữa hai ngày
  const timeDiff = currentDate - date;

  // Tính số mili giây trong một giờ
  const oneHour = 60 * 60 * 1000;

  // Tính số mili giây trong một ngày
  const oneDay = 24 * oneHour;

  // Tính số mili giây trong một tháng
  const oneMonth = 30 * oneDay;

  // Tính số mili giây trong một năm
  const oneYear = 365 * oneDay;

  if (timeDiff < oneHour) {
    const minutes = Math.floor(timeDiff / (60 * 1000));
    return `${minutes} m`;
  } else if (timeDiff < 23 * oneHour) {
    const hours = Math.floor(timeDiff / oneHour);
    return `${hours} h`;
  } else if (timeDiff < oneDay) {
    const days = Math.floor(timeDiff / oneDay);
    return `${days} d`;
  } else if (timeDiff < 29 * oneDay) {
    const months = Math.floor(timeDiff / oneMonth);
    return `${months} months`;
  } else if (timeDiff < 1000 * oneYear) {
    const years = Math.floor(timeDiff / oneYear);
    return `${years} y`;
  } else if (timeDiff < oneYear) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  } else {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}

export function formatDateCreate(inputDate) {
  const date = new Date(inputDate);

  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const dayName = days[date.getDay()];

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${dayName}, ${day}/${month}/${year} vào lúc ${hours}:${minutes}`;
}
