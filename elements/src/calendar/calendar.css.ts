export default `
  x-calendar {
    display: inline-block;
    border: 1px solid #ccc
  }

  x-calendar.small {
    width: 260px
  }

  x-calendar.small .x-date:has(.x-holiday):after {
    display: none
  }

  x-calendar .x-header {
    display: flex;
    padding: 12px 8px;
    font-weight: bold;
    justify-content: center
  }

  x-calendar .x-header button {
    background: rgba(0,0,0,0);
    border: none;
    box-shadow: none
  }

  x-calendar .x-header button.x-prev:before {
    content: "◀"
  }

  x-calendar .x-header button.x-today:before {
    content: "●"
  }

  x-calendar .x-header button.x-next:before {
    content: "▶"
  }

  x-calendar .x-header .x-month-year {
    display: flex;
    flex: 1;
    align-items: center;
    position: relative
  }

  x-calendar .x-header .x-month-year .x-years {
    margin-left: 12px
  }

  x-calendar .x-week-days-container {
    display: flex;
    padding: 0 4px
  }

  x-calendar .x-week-days-container .x-weekday {
    background: #ccc;
    width: 14.2857142857%;
    text-align: center;
    border: 1px solid #fff;
    border-width: 0 1px;
    padding: 4px
  }

  x-calendar .x-days-container {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px 12px 4px
  }

  x-calendar .x-days-container .x-weekday,x-calendar .x-days-container .x-date {
    line-height: 1.5em;
    box-sizing: border-box;
    width: 14.2857142857%;
    text-align: center;
    margin: 0
  }

  x-calendar .x-days-container .x-weekday[data-tooltip],x-calendar .x-days-container .x-date[data-tooltip] {
    border-bottom: 1px dotted rgba(0,0,0,0)
  }

  x-calendar .x-days-container .x-weekday:has(.x-holiday):after,x-calendar .x-days-container .x-date:has(.x-holiday):after {
    content: attr(data-tooltip);
    position: absolute;
    color: #d13101;
    font-size: x-small
  }

  x-calendar .x-days-container .x-weekday button,x-calendar .x-days-container .x-date button {
    background: rgba(0,0,0,0);
    border: none;
    box-shadow: none;
    width: 24px;
    height: 24px;
    padding: 0
  }

  x-calendar .x-days-container .x-weekday button:focus,x-calendar .x-days-container .x-date button:focus {
    background-color: unset;
    color: unset;
    box-shadow: #3751b5 0 0 0 2px
  }

  x-calendar .x-days-container .x-weekday button:disabled,x-calendar .x-days-container .x-date button:disabled {
    color: unset;
    opacity: .7
  }

  x-calendar .x-days-container .x-weekday button:not(.x-select).x-holiday,x-calendar .x-days-container .x-date button:not(.x-select).x-holiday {
    color: #d13101;
    font-weight: bold
  }

  x-calendar .x-days-container .x-weekday button .x-holiday:after,x-calendar .x-days-container .x-date button .x-holiday:after {
    position: absolute;
    content: attr(data-tooltip);
    font-size: small;
    color: #d13101
  }

  x-calendar .x-days-container .x-weekday button.x-current-date,x-calendar .x-days-container .x-date button.x-current-date {
    background-color: #eee;
    color: #333;
    border-radius: 50%
  }

  x-calendar .x-days-container .x-weekday button.x-select,x-calendar .x-days-container .x-date button.x-select {
    background-color: #d13101;
    color: #fff;
    border-radius: 50%
  }
`