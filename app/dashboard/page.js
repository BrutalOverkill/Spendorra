import Login from "@/components/Login";
import SubscriptionsDisplay from "@/components/SubscriptionsDisplay";
import SubscriptionSummary from "@/components/SubscriptionSummary";

export default function DashboardPage() {

  const isAuthenticated = false;

  if(!isAuthenticated) {
    return(
      <Login />
    )
  }


    return (
      <>
      <SubscriptionSummary />
      <SubscriptionsDisplay />
      </>
    );
  }
  