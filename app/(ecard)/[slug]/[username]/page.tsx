import { notFound } from "next/navigation";

import { STUB_ENTERPRISE_USERS } from "@/lib/stubs/users";

export async function generateStaticParams(): Promise<Array<ParamsProps>> {
  // TODO replace with the fetching off all users and mapping their usernames.
  return STUB_ENTERPRISE_USERS;
}

export interface ParamsProps {
  slug: string;
  username: string;
}

async function getEcard({
  slug,
  username,
}: ParamsProps): Promise<Object | never> {
  // TODO replace with the users's fetch.
  const users: Array<ParamsProps> = STUB_ENTERPRISE_USERS;

  if (users.some((o) => o.slug === slug && o.username === username) === false)
    return notFound();

  return {};
}

export default async function UserEcardPage({
  params,
}: {
  params: ParamsProps;
}) {
  const { slug, username } = params;

  // TODO: replace this some stub, and then with the fetch of ecard.
  const ecard = await getEcard(params);

  return <h1>Enterprise Ecard Page: {slug} - {username}</h1>;
}
