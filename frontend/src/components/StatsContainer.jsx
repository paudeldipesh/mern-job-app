import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import StatsItem from "./StatsItem";
import Wrapper from "../assets/wrappers/StatsContainer";

export default function StatsContainer({ defaultStats, monthlyApplications }) {
  const stats = [
    {
      title: "pending applications",
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "interview scheduled",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "job declined",
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatsItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
}
