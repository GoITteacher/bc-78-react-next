import OrderForm from "./OrderForm";
import WorkshopForm from "./WorkshopForm";
import TravelQuoteForm from "./TravelQuoteForm";
import SupportTicketForm from "./SupportTicketForm";
import ProductListingForm from "./ProductListingForm";
import GadgetRepairForm from "./GadgetRepairForm";
import EventProposalForm from "./EventProposalForm";

export default function App() {
  return (
    <main className="forms">
      <h1>Практичні форми</h1>
      {/* <OrderForm /> */}
      {/* <SupportTicketForm /> */}
      {/* <WorkshopForm /> */}
      <TravelQuoteForm />
      <ProductListingForm />
      <GadgetRepairForm />
      <EventProposalForm />
    </main>
  );
}
