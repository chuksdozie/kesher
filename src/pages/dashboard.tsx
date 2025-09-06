import React from "react";
import Card from "@/components/Card";
import { useGetUser } from "@/hooks";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

export default function Dashboard(): React.JSX.Element {
  const user: string = useGetUser();
  return (
    <section className="">
      <h1 className="text-xl font-semibold mt-4 text-primaryMain">
        Welcome {user},
      </h1>
      <p className="mb-6 text-base text-textSub">
        Get all kesher activities and updates in one place.
      </p>
      <div className="flex flex-wrap gap-4">
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
