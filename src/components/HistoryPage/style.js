import styled from "styled-components";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Container = styled.main`
    min-height: 100vh;
    padding: 90px 17px;

    background-color: #f2f2f2;

    display: flex;
    flex-direction: column;
    gap: 11px;

    h1 {
      font-weight: 400;
      font-size: 22.976px;
      line-height: 29px;
      color: #126BA5;
    }
`;

const StyledCalendar = styled(Calendar)`
  padding: 10px;

  border-radius: 10px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .react-calendar__navigation {
    padding-bottom: 30px;

    display: flex;
    gap: 21px;

    button {
      text-align: center;

      font-size: 13px;
    }
  }
  /* .react-calendar__month-view__weekdays {
    padding-bottom: 20px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;

      abbr {

      }
    } */

  /* .react-calendar__month-view__days {
    button {
      display: flex;
      justify-content: center;
      align-items: center;

      abbr {
        background: blue;
      }
    }
  } */
`;

export { Container, StyledCalendar };