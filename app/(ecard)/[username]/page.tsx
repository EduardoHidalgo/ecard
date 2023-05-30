import { notFound } from "next/navigation";
import { STUB_USERS } from "@/lib/stubs/users";

export async function generateStaticParams(): Promise<Array<ParamsProps>> {
  // TODO replace with the fetching off all users and mapping their usernames.
  return STUB_USERS;
}

export interface ParamsProps {
  username: string;
}

async function getEcard(username: string): Promise<Object | never> {
  // TODO replace with the users's fetch.
  const users: Array<ParamsProps> = STUB_USERS;

  if (users.some((o) => o.username === username) === false) return notFound();

  return {};
}

export default async function UserEcardPage({
  params,
}: {
  params: ParamsProps;
}) {
  const { username } = params;

  // TODO: replace this some stub, and then with the fetch of ecard.
  const ecard = await getEcard(username);

  return <h1>User Ecard Page: {username}</h1>;
}
