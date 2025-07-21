export const monthsNames = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
];

export const cutText = (text) => {
    return text.length >= 121 ? text.slice(0, 118) + "..." : text;
};

export const getDateName = (date) => {
    const mm = Number(date.slice(0, 2));
    const dd = date.slice(3, 5);
    const yy = date.slice(6);

    return `${dd} ${monthsNames[mm - 1]} ${yy}`;
};
