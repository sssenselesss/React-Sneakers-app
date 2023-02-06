const FormatMoney = (value) => {
    return  Intl.NumberFormat("ru-RU").format(parseInt(value)) + " руб.";
  };

  export  default FormatMoney