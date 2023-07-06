"use client";

import React from "react";
import { Card, Button, Avatar } from "antd";
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ShareAltOutlined } from '@ant-design/icons'

const { Meta } = Card;

interface DataType {
  key: string;
  name: string;
  date: string;
  address: string;
  tags: string;
}

const columns: ColumnsType<DataType> = [
  {
    // title: 'Job Title',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
    {
    // title: 'Location/City',
    dataIndex: 'address',
    key: 'address',
  },
  {
    // title: 'Last date to apply',
    dataIndex: 'date',
    key: 'date',
  },
  {
    // title: 'Job Code',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    // title: 'Icon and share button',
    key: 'action',
    render: () => (
      <Space size="middle" style={{alignItems: 'end'}}>
        <a href="#"><Avatar
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            /></a>
        <a href="#"><ShareAltOutlined /></a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Business Analyst',
    address: 'Sandton City',
    date: '30/07/2023',
    tags: 'IRC244647',
  },
];


export default function Page() {
  return (
    <div style={{ background: "lightgray", height: "100vh" }}>
      <br></br>
      <Card >
        <Table columns={columns} dataSource={data} />
        <br></br>

      </Card>
    </div>
  )
}