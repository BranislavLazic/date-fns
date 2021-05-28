var formatRelativeLocale = {
  lastWeek: function (date) {
    var day = date.getUTCDay()

    switch (day) {
      case 0:
        return "'prošle nedjelje u' p"
      case 3:
        return "'prošle srijede u' p"
      case 6:
        return "'prošle subote u' p"
      default:
        return "'prošli' EEEE 'u' p"
    }
  },
  yesterday: "'juče u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: function (date) {
    var day = date.getUTCDay()

    switch (day) {
      case 0:
        return "'sledeće nedjelje u' p"
      case 3:
        return "'sledeću srijedu u' p"
      case 6:
        return "'sledeću subotu u' p"
      default:
        return "'sledeći' EEEE 'u' p"
    }
  },
  other: 'P',
}

export default function formatRelative(token, date, _baseDate, _options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date)
  }

  return format
}
