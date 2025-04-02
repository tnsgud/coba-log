const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export default dateFormatter;