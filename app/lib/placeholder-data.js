// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'admin@ucg.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Omar Solorzano',
    email: 'omar@solorzano.com',
    image_url: '/customers/omar.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Edson Hernandez',
    email: 'edson@hernandez.com',
    image_url: '/customers/edson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Victor Muñoz',
    email: 'victor@munoz.com',
    image_url: '/customers/victor.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2024-01-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2024-01-14',
  },
  {
    customer_id: customers[2].id,
    amount: 3040,
    status: 'paid',
    date: '2024-01-29',
  },
  {
    customer_id: customers[2].id,
    amount: 44800,
    status: 'paid',
    date: '2024-02-10',
  },
  {
    customer_id: customers[1].id,
    amount: 34577,
    status: 'pending',
    date: '2024-02-05',
  },
  {
    customer_id: customers[0].id,
    amount: 54246,
    status: 'pending',
    date: '2024-03-16',
  },
  {
    customer_id: customers[1].id,
    amount: 666,
    status: 'pending',
    date: '2024-02-27',
  },
  {
    customer_id: customers[0].id,
    amount: 32545,
    status: 'paid',
    date: '2024-01-09',
  },
  {
    customer_id: customers[2].id,
    amount: 1250,
    status: 'paid',
    date: '2024-03-17',
  },
  {
    customer_id: customers[1].id,
    amount: 8546,
    status: 'paid',
    date: '2024-02-07',
  },
  {
    customer_id: customers[0].id,
    amount: 500,
    status: 'paid',
    date: '2024-01-19',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2024-03-03',
  },
  {
    customer_id: customers[1].id,
    amount: 8945,
    status: 'paid',
    date: '2024-01-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2024-03-04',
  },
  {
    customer_id: customers[0].id,
    amount: 1000,
    status: 'paid',
    date: '2024-02-05',
  },
];

const revenue = [
  { month: 'Ene', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Abr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Ago', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dic', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
