"use client"

import { DatePicker } from '@mantine/dates'
import React, { useState } from 'react'

export default function ScheduleDate() {
    const [value, setValue] = useState<Date | null>(null);
  return (
    <div className=' bg-[#ECE8FF] w-[360px] flex   '>
    <DatePicker size="lg" w='100%'  styles={{ day: {
       
    }
     
    }} allowDeselect value={value} onChange={setValue} />
  </div>
  )
}
