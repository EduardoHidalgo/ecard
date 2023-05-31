import { AdminUsersList } from "@/types/models";

export const STUB_INDIVIDUAL_USERS = [{ slug: "eduardo" }, { slug: "daniel" }];

export const STUB_ENTERPRISE_USERS = [
  { slug: "mycompany", username: "eduardo" },
  { slug: "mycompany", username: "daniel" },
];

export const STUB_ADMIN_USERS_LIST: AdminUsersList = [
  {
    type: "enterprise",
    status: "show",
    companyName: "Cola Cola",
    companyUsername: "cola-coca",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    createdAt: new Date(),
    email: "user@mail.com",
    fullname: "Leslie Alexander",
    username: "lesliealex",
  },
  {
    type: "nested",
    status: "missingData",
    companyName: "Cola Cola",
    companyUsername: "cola-coca",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    createdAt: new Date(),
    email: "user@mail.com",
    fullname: "Michael Foster",
    username: "foster",
  },
  {
    type: "individual",
    status: "disabled",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullname: "Dries Vincent",
    createdAt: new Date(),
    email: "user@mail.com",
    username: "dries",
  },
  {
    type: "individual",
    status: "deleted",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullname: "Lindsay Walton",
    createdAt: new Date(),
    email: "user@mail.com",
    username: "lindsay",
  },
  {
    type: "individual",
    status: "banned",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullname: "Courtney Henry",
    createdAt: new Date(),
    email: "user@mail.com",
    username: "courtneyhenry",
  },
];
