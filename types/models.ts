export interface User {
  avatar?: string;
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
  company?: Company;
  metrics?: UserMetrics;
}

export type UserFormType = Pick<
  User,
  | "avatar"
  | "createdAt"
  | "email"
  | "fullname"
  | "id"
  | "status"
  | "type"
  | "updatedAt"
  | "username"
>;

export type SubscriptionFormType = Subscription;

export type EcardFormType = Ecard;

export type CompanyFormType = Company;

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

export interface Ecard {
  backgroundImage: string;
  carousel?: Array<string>;
  details?: EmployeeInfo;
  map?: string;
  qr?: string;
  services?: Array<Service>;
  video?: string;
}

export interface Company {
  companyName?: string;
  companyUsername?: string;
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
  Pick<User, "avatar" | "type" | "username" | "fullname"> &
  Pick<Company, "companyUsername">;

export type AdminUserRow = Pick<
  User,
  "avatar" | "createdAt" | "email" | "fullname" | "username" | "status" | "type"
> &
  Pick<Company, "companyName" | "companyUsername">;

export type AdminUsersList = Array<AdminUserRow>;
