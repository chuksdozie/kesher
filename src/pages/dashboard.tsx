import Card from "@/components/Card";
import { useGetUser } from "@/hooks";
// import { HiMiniBanknotes } from "react-icons/hi2";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

export default function Dashboard(): React.JSX.Element {
  const user: string = useGetUser();
  return (
    <section className="mt-20">
      <h1 className="text-3xl font-bold p-4">Welcome {user},</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <Card
          title="Total Revenue"
          value={150000}
          color={"green"}
          icon={TiArrowSortedUp}
        />
        <Card
          title="Total Expenditure"
          value={150000}
          color={"red"}
          icon={TiArrowSortedDown}
        />
        <Card
          title="Available Balance"
          value={150000}
          color={"blue"}
          icon={HiOutlineBanknotes}
        />
      </div>
    </section>
  );
}
