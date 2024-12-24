import React from 'react'
import DataTable from 'react-data-table-component';
import { Paper } from '@mantine/core';
import { Menu, Button, rem } from '@mantine/core';
import { Trash2, Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';

const columns = [
  {
    name: '#ID',
    selector: row => row.id,
  },
  {
    name: 'Brand',
    selector: row => row.brand,
    sortable: true
  },
  {
    name: 'Title',
    selector: row => row.name,
  },
  {
    name: 'Price',
    selector: row => row.price,
  },
  {
    name: 'Launch',
    selector: row => row.releaseYear,
  },
  {
    name: 'Action',
    cell: row => (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button>Action</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item leftSection={<Trash2 style={{ width: rem(14), height: rem(14) }} />}>
            <Link to={`/delete/${row.id}`}>Delete</Link>
          </Menu.Item>
          <Menu.Item leftSection={<Pencil style={{ width: rem(14), height: rem(14) }} />}>
          <Link to={`/edit/${row.id}`}>Edit</Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    ),
    Button:true
  },
];

const data = [
  { id: 1, name: "iPhone 14", brand: "Apple", price: "$999", releaseYear: 2023 },
  { id: 2, name: "Galaxy S23", brand: "Samsung", price: "$849", releaseYear: 2023 },
  { id: 3, name: "Pixel 7 Pro", brand: "Google", price: "$899", releaseYear: 2022 },
  { id: 4, name: "OnePlus 11", brand: "OnePlus", price: "$699", releaseYear: 2023 },
  { id: 5, name: "Xiaomi 13", brand: "Xiaomi", price: "$799", releaseYear: 2023 },
];




export default function Posts() {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='font-bold text-2xl uppercase text-center py-5'>Smartphones table</h1>
      <Paper shadow="xs" p="xl">
        <DataTable

          columns={columns}
          data={data}
          pagination={true}
          paginationPerPage={3}
        />
      </Paper>
    </div>
  )
}
