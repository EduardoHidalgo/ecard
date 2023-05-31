import { notFound } from "next/navigation";

import { STUB_INDIVIDUAL_USERS } from "@/lib/stubs/users";

export async function generateStaticParams(): Promise<Array<ParamsProps>> {
  // TODO replace with the fetching off all users and mapping their usernames.
  return STUB_INDIVIDUAL_USERS;
}

export interface ParamsProps {
  slug: string;
}

async function getEcard({ slug }: ParamsProps): Promise<Object | never> {
  // TODO replace with the users's fetch.
  const users: Array<ParamsProps> = STUB_INDIVIDUAL_USERS;

  if (users.some((o) => o.slug === slug) === false) return notFound();

  return {};
}

export default async function IndividualEcardPage({
  params,
}: {
  params: ParamsProps;
}) {
  const { slug } = params;

  // TODO: replace this some stub, and then with the fetch of ecard.
  const ecard = await getEcard(params);

  return <h1>User Ecard Page: {slug}</h1>;
}
