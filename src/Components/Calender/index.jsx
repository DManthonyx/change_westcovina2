import React, {useState} from 'react';
import moment from 'moment'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  H1,
  Button
} from './style'

const Calender = () => {

  // state = {
  //   dateObject: moment(),
  //   today: new Date(),
  //   currentDay: new Date().getDay(),
  //   month: new Date().getMonth(),
  //   year: new Date().getFullYear(),
  // }
  const day = new Date();
  // const moment = moment()
  const [month, setMonth] = useState(day.getMonth())
  const [year, setYear] = useState(day.getFullYear())
  // const [moment, setMoment] = useState(moment())
  let monthAndYear = ''
  let currentDay = day.getDay();
  const months = ["Janruary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const daysInMonth = (month, year) =>  { 
    return new Date(year, month + 1, 0).getDate();
  }

  const weekDaysShort = moment.weekdaysShort();

  const next = () => {
    setMonth((month + 1) % 12)
    setYear((month === 11) ? year + 1 : year)
  }
  
  const previous = () => {
    setMonth((month === 0) ? 11 : month - 1)
    setYear((month === 0) ? year - 1 : year)
  }

  const calender = (month, year) => {
    let firstDay = (new Date(year, month)).getDay()
    let blanks = []
    for (let i = 0; i < firstDay; i++) {
      blanks.push(<Td>{''}</Td>)
    };
    let days = [];
    for (let d = 1; d <= daysInMonth(year, month); d++) {
      days.push(<Td key={d}>{d}</Td>);
    }
    let totalSlots = [...blanks, ...days]
    let rows = []
    let cells = []
    totalSlots.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [];  
        cells.push(day); 
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });
    for(let i = 0; i < rows.length; i++) {
      while(rows[i].length >= 1 && rows[i].length < 7) {
        rows[i].push(<Td>{''}</Td>)
      }
      if(rows[i].length === 0) {
        rows.splice(i,1)
      }
    }
    return rows
  }

    return (
        <Table>
          <Thead>
            <Button onClick={previous} className='prev'></Button>
            <H1>{`${months[month]}`}<br />{`${year}`}</H1>
            <Button onClick={next} className='next'></Button>
          </Thead>
          <Tbody>
          <Tr>
              {
                weekDaysShort.map((day, i) => {
                  return (
                    <Td key={i}>{day}</Td>
                  )
                })
              }
            </Tr>
            {
              calender(month, year).map((row, i) => {
                return <Tr key={i}>{row}</Tr>;
              })
            }
          </Tbody>
        </Table>
    );
  }

export default Calender;

