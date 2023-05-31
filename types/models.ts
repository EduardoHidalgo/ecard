export interface User {
  avatar?: string;
  companyName?: string;
  companyUsername?: string;
  createdAt: Date;
  ecard?: Ecard;
  email: string;
  fullname: string;
  id: string;
  status: "banned" | "deleted" | "disabled" | "missingData" | "show";
  subscription?: Subscription;
  type: "enterprise" | "nested" | "individual";
  updatedAt: Date;
  username: string;
}

export interface Subscription {
  createdAt: string;
  monthsSubscribed: Array<{
    startDate: Date;
    price: number;
  }>;
  price: number;
  status: "subscribed" | "payPending" | "payRejected" | "free" | "canceled";
  statusUpdatedAt: Date;
}

export interface UserMetrics {
  callClicks: number;
  contactClicks: number;
  ecardUniqueViews: number;
  ecardViews: number;
  emailClicks: number;
  endAt: string;
  qrClicks: number;
  servicesClicks: Array<number>;
  startAt: string;
  userId: number;
  videoClicks: number;
  websiteClicks: number;
  whatsappClicks: number;
}

export type Ecard = ECardCompany | ECardIndividual;

export interface ECardCompany {
  carousel?: Array<string>;
  details?: EmployeeInfo;
  company?: Company;
  map?: string;
  qr?: string;
  services?: Array<Service>;
  video?: string;
}

export interface ECardIndividual {
  carousel?: Array<string>;
  details?: IndividualInfo;
  map?: string;
  qr?: string;
  services?: Array<Service>;
  video?: string;
}

export interface Company {
  description?: string;
  imageContent?: string;
  logo?: string;
  slogan?: string;
  website?: string;
}

export interface EmployeeInfo {
  email?: string;
  jobPosition?: string;
  phone?: string;
  whatsapp?: string;
}

export interface IndividualInfo {
  email?: string;
  denomination?: string;
  phone?: string;
  whatsapp?: string;
}

export interface Service {
  image: string;
  label: string;
  link?: string;
}

export type SubAlert = Pick<Subscription, "statusUpdatedAt" | "status"> &
  Pick<User, "avatar" | "type" | "username" | "fullname" | "companyUsername">;

export type AdminUserRow = Pick<
  User,
  | "avatar"
  | "companyName"
  | "companyUsername"
  | "createdAt"
  | "email"
  | "fullname"
  | "username"
  | "status"
  | "type"
>;

export type AdminUsersList = Array<AdminUserRow>;
