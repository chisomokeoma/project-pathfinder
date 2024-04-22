"use client"

import { Accordion } from '@mantine/core'
import React from 'react'

export default function AccordionSection() {
  return (
    <Accordion
    defaultValue="customization"
    styles={{
      root: {
        width: "550px",
      },
      label: {
        color: "#4B0082",
        fontSize: "20px",
        fontWeight: 500,
      },
      content: {
        color: "#1C1A4A",
        fontSize: "16px",
        fontWeight: 400,
      },
    }}
  >
    <Accordion.Item value="customization">
      <Accordion.Control>
        What is PathFinders all about?
      </Accordion.Control>
      <Accordion.Panel>
        PathFinders is a platform that connects mentees with mentors
        from diverse industrious and also offers learning resources to
        develop an individual’s skills.
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="flexibility">
      <Accordion.Control>Why choose us?</Accordion.Control>
      <Accordion.Panel>
        Configure components appearance and behavior with vast amount
        of settings or overwrite any part of component styles
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="flexibility">
      <Accordion.Control>Why choose us?</Accordion.Control>
      <Accordion.Panel>
        Configure components appearance and behavior with vast amount
        of settings or overwrite any part of component styles
      </Accordion.Panel>
    </Accordion.Item>
    <Accordion.Item value="focus-ring">
      <Accordion.Control>
        How we provide these services?
      </Accordion.Control>
      <Accordion.Panel>
        With new :focus-visible pseudo-class focus ring appears only
        when user navigates with keyboard
      </Accordion.Panel>
    </Accordion.Item>
  </Accordion>
  )
}
