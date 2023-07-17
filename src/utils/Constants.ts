export const dangerColor="#DC4C64";

export const BASE_API_URL="https://64b398fa0efb99d862682664.mockapi.io/";


export   const options = {
    responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      ticks: {
        display: false,
      },
      border:{
        display:false
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      border:{
        display:false
      },
      grid: {
        display: false,
      },
    },
  },
  };


  export   const StockOptions = {
    responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      ticks: {
        display: true,
      },
      border:{
        display:false
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      border:{
        display:false
      },
      grid: {
        display: false,
      },
    },
  },
  };