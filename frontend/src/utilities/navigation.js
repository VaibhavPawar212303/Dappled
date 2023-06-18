import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiDocumentText,
  HiOutlineBookOpen
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "builds",
    label: "Builds",
    path: "/builds",
    icon: <HiOutlineCube />,
  },
  // {
  //   key: "Test Details",
  //   label: "Test Details",
  //   path: "/testDetails",
  //   icon: <HiOutlineBookOpen />,
  // },
];

export const DASHBOARD_BOTTOM_LINKS = [
  {
    key: "readme",
    label: "Help & Support",
    path: "/help",
    icon: <HiDocumentText />,
  },
];
