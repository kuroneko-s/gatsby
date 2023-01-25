const dateCalculator = {
  second(num: number) {
    return num / 1024;
  },
  minute(num: number) {
    return this.second(num) / 60;
  },
  hour(num: number) {
    return this.minute(num) / 60;
  },
  day(num: number) {
    return this.hour(num) / 24;
  },
  month(num: number) {
    return this.day(num) / 30;
  },
  year(num: number) {
    return this.month(num) / 12;
  },
};

export const isSecond = (date: number) => {
  const second = dateCalculator.second(date);

  if (second < 1) {
    return { result: true, text: "1초" };
  } else if (second >= 60) {
    return { result: false, text: "60초 초과" };
  } else if (second > 1 && second < 60) {
    return { result: true, text: `${Math.floor(second)}초` };
  } else {
    return { result: false, text: "undefined" };
  }
};

export const isMinute = (date: number) => {
  const minute = dateCalculator.minute(date);

  if (minute <= 1) {
    return {
      result: true,
      text: "1분",
    };
  } else if (minute > 1 && minute < 60) {
    return {
      result: true,
      text: `${Math.floor(minute)}분`,
    };
  } else if (minute >= 60) {
    return {
      result: false,
      text: "60분 초과",
    };
  } else {
    return {
      result: false,
      text: "undefined",
    };
  }
};

export const isHour = (date: number) => {
  const hour = dateCalculator.hour(date);

  if (hour <= 1) {
    return {
      result: true,
      text: "1시간",
    };
  } else if (hour <= 23) {
    return {
      result: true,
      text: `${Math.floor(hour)}시간`,
    };
  } else if (hour === 24) {
    return {
      result: true,
      text: "24시간",
    };
  } else if (hour > 24) {
    return {
      result: false,
      text: "24시간 초과",
    };
  } else {
    return {
      result: false,
      text: "undefiend",
    };
  }
};

export const isDay = (date: number) => {
  const day = dateCalculator.day(date);

  if (day <= 31) {
    return {
      result: true,
      text: `${Math.floor(day)}일`,
    };
  } else if (day > 31) {
    return {
      result: false,
      text: "31일 초과",
    };
  } else {
    return {
      result: false,
      text: "undefined",
    };
  }
};

export const isMonth = (date: number) => {
  const month = dateCalculator.month(date);

  if (month >= 1 && month <= 12) {
    return {
      result: true,
      text: `${Math.floor(month)}개월`,
    };
  } else if (month > 12) {
    return {
      result: false,
      text: "12개월 초과",
    };
  } else {
    return {
      result: false,
      text: "undefined",
    };
  }
};

export const isYear = (date: number) => {
  const year = dateCalculator.year(date);

  if (year >= 1) {
    return {
      result: true,
      text: `${Math.floor(year)}년`,
    };
  } else {
    return {
      result: false,
      text: "undefined",
    };
  }
};

interface IResult {
  result: boolean;
  text: string;
}

const checker = (result: IResult) => {
  return result.result && result;
};

export default function useTime(date: number) {
  let result: IResult;

  result = isSecond(date);
  if (result.result) {
    return result;
  }

  result = isMinute(date);
  if (result.result) {
    return result;
  }

  result = isHour(date);
  if (result.result) {
    return result;
  }

  result = isDay(date);
  if (result.result) {
    return result;
  }

  result = isMonth(date);
  if (result.result) {
    return result;
  }

  result = isYear(date);
  if (result.result) {
    return result;
  }
}
