import { CompanyForm } from "./companyForm";
import { EcardForm } from "./ecardForm";
import { SubscriptionForm } from "./subscriptionForm";
import { UserForm } from "./userForm";

export default function AdminUserDetailPage() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto py-16 space-y-8 sm:px-0 px-6">
      <UserForm />
      <SubscriptionForm />
      <CompanyForm />
      <EcardForm />
    </div>
  );
}
