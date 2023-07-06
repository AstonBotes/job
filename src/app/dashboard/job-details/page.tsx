"use client";

import React from "react";
import { Card, Button, Avatar } from "antd";

const { Meta } = Card;

export default function Page() {
  return (
    <div style={{ background: "lightgray", height: "100vh" }}>
      <br></br>
      <Card title="Job title">
        <Meta
          avatar={
            <Avatar
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
              style={{ width: "80px" , height:'80px' }}
            />
          }
          title="Job Department"
          description="Location and date ending"
        />
        <br></br>

        <Card
          type="inner"
          title="About us, purpose, experience and qualifications"
          extra={<a href="#">More</a>}
        >
          <h1>About us</h1>
          <p>...</p>
          <br></br>

          <h1>Purpose</h1>
          <p>...</p>
          <br></br>

          <h1>Experience & Qualifications</h1>
          <p>...</p>
          <br></br>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Additional Information and Responsibilities"
          extra={<a href="#">More</a>}
        >
          <h1>Aditional Requirements</h1>
          <p>...</p>
          <br></br>

          <h1>Responsibilities</h1>
          <p>...</p>
          <br></br>
        </Card>
        <Card style={{ marginTop: 16 }}></Card>
        <br></br>
        <Button>Apply</Button>
      </Card>
    </div>
  );
}
