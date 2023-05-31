import { SubAlert } from "@/types/models";
import { Stats } from "@/types/stats";

export const STUB_ADMIN_MAIN_STATISTICS: Stats = [
  { name: "Nuevos clientes", stat: 452 },
  { name: "Vistas únicas", stat: 70302 },
];

export const STUB_ADMIN_MAIN_SUB_ALERTS: Array<SubAlert> = [
  {
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullname: "Leslie Alexander",
    status: "canceled",
    statusUpdatedAt: new Date(),
    username: "lesliealex",
    type: "solo",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullname: "Michael Foster",
    status: "canceled",
    statusUpdatedAt: new Date(),
    username: "foster",
    type: "company",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullname: "Dries Vincent",
    status: "payRejected",
    statusUpdatedAt: new Date(),
    username: "dries",
    type: "solo",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullname: "Lindsay Walton",
    status: "payPending",
    statusUpdatedAt: new Date(),
    username: "lindsay",
    type: "solo",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullname: "Courtney Henry",
    status: "payRejected",
    statusUpdatedAt: new Date(),
    username: "courtneyhenry",
    type: "company",
  },
];
