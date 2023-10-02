import {
  AccountBalanceWallet,
  Groups,
  People,
  PieChart,
  Savings,
  Search,
  Settings,
  SignalCellularAlt,
  SvgIconComponent,
  SyncAlt,
  Wallet,
  WindowSharp,
  WorkHistory,
} from "@mui/icons-material";

export type NavItemConfig = {
  title: string;
  path: string;
  className: string;
  children?: { title: string; path: string }[];
};

export const navConfig: NavItemConfig[] = [
  {
    title: "Thị trường",
    path: "/app/market/VNINDEX",
    className: "",
  },
  {
    title: "Về Anfin",
    path: "https://www.anfin.vn/",
    className: "",
  },
  {
    title: "Heo Thần Kỳ",
    path: "/app/saving/",
    className: "",
  },
  {
    title: "Hỗ Trợ",
    path: "https://www.anfin.vn/cau-hoi-thuong-gap",
    className: "",
  },
  {
    title: "Mở tài khoản mới",
    path: "/register/",
    className: "download-App-From-iBoard",
  },
  {
    title: "Đăng nhập",
    path: "/login/",
    className: "login-iBoard",
  },
  {
    title: "profile",
    path: "",
    className: "",
    children: [
      {
        title: "[email]",
        path: "/",
      },
      { title: "Đăng xuất", path: "/login/" },
    ],
  },
];

export const navConfigNew: NavItemConfig[] = [
  {
    title: "Về Anfin",
    path: "/gioi-thieu-ve-anfin",
    className: "",
    children: [
      {
        title: "Giới thiệu",
        path: "/gioi-thieu-ve-anfin",
      },
      { title: "Sứ mệnh", path: "/su-menh/" },
      { title: "Đội ngũ", path: "/doi-ngu-anfin/" },
      { title: "Tuyển dụng", path: "https://www.anfin.vn/careers" },
    ],
  },
  {
    title: "Sản phẩm",
    path: "/",
    className: "",
    children: [
      {
        title: "Cổ Phiếu",
        path: "https://www.anfin.vn/san-pham-co-phieu-anfin",
      },
      { title: "Quỹ ETF", path: "https://www.anfin.vn/san-pham-quy-etf" },
      // {
      //   title: "Chứng Quyền",
      //   path: "https://www.anfin.vn/san-pham-chung-quyen",
      // },
      { title: "Web App", path: "/app/market/" },
      // { title: "Tích Luỹ", path: "https://www.anfin.vn/san-pham-tich-luy" },
      { title: "Cộng Đồng", path: "https://www.anfin.vn/san-pham-cong-dong" },
      { title: "Anfin GPT", path: "/san-pham/anfin-chat-gpt" },
      // { title: "Broker", path: "/san-pham/moi-gioi-dau-tu" },
    ],
  },
  {
    title: "Học & Đọc",
    path: "",
    className: "",
    children: [
      {
        title: "Vỡ Lòng Về Đầu Tư",
        path: "https://www.anfin.vn/huong-dan-dau-tu-chung-khoan-cho-nguoi-moi-bat-dau",
      },
      {
        title: "Blog Hay Mỗi Ngày",
        path: "/blogs",
      },
    ],
  },
  {
    title: "Giao dịch ngay",
    path: "/app/market/",
    className: "",
  },
];

export type SidebarLeftItemConfig = {
  title: string;
  path: string;
  Icon: SvgIconComponent;
  statusMobile: boolean;
};

export enum NonRoutingPath {
  Trade = "/trade/",
  Search = "/search/",
  History = "/app/history/",
  Deposit = "/app/deposit/",
  Statistic = "/app/statistic/",
  Portfolio = "/app/portfolio/",
  Community = "/community/",
  BrokerDashboard = "/app/broker-dashboard/",
}

export const sidebarLeft: SidebarLeftItemConfig[] = [
  {
    title: "Thị trường",
    path: "/app/market/",
    Icon: SignalCellularAlt,
    statusMobile: false,
  },
  {
    title: "Thống kê",
    path: "/app/statistic/",
    Icon: PieChart,
    statusMobile: true,
  },
  {
    title: "Danh mục",
    path: "/app/portfolio/",
    Icon: AccountBalanceWallet,
    statusMobile: true,
  },
  {
    title: "Lịch sử GD",
    path: "/app/history/",
    Icon: WorkHistory,
    statusMobile: true,
  },
  {
    title: "Nạp tiền",
    path: "/app/deposit/",
    Icon: Wallet,
    statusMobile: true,
  },
  {
    title: "Tích lũy",
    path: "/app/saving/",
    Icon: Savings,
    statusMobile: false,
  },
  {
    title: "Giao dịch",
    path: NonRoutingPath.Trade,
    Icon: SyncAlt,
    statusMobile: true,
  },
  {
    title: "Tìm kiếm",
    path: NonRoutingPath.Search,
    Icon: Search,
    statusMobile: false,
  },
  {
    title: "Cộng đồng",
    path: NonRoutingPath.Community,
    Icon: People,
    statusMobile: false,
  },
];

export const menuProfile: NavItemConfig[] = [
  {
    title: "profile",
    path: "",
    className: "",
    children: [
      {
        title: "[email]",
        path: "/",
      },
      {
        title: "Quản lý khách hàng",
        path: "/app/broker-dashboard",
      },
      { title: "Đăng xuất", path: "/login/" },
    ],
  },
];

export const navOverSeas: NavItemConfig[] = [
  {
    title: "About Vietnam",
    path: "aboutVietnam",
    className: "",
  },
  {
    title: "Trading Calculator",
    path: "tradingCalculator",
    className: "",
  },
  {
    title: "Our Values",
    path: "ourValues",
    className: "",
  },
  {
    title: "How to buy",
    path: "howToBuy",
    className: "",
  },
  {
    title: "Testimonials",
    path: "testimonials",
    className: "",
  },
  {
    title: "FAQ",
    path: "faq",
    className: "",
  },
  {
    title: "Join Now",
    path: "joinNow",
    className: "",
  },
];

export const brokerSidebarLeft: SidebarLeftItemConfig[] = [
  {
    title: "Tổng quan",
    path: "/app/broker-dashboard",
    Icon: WindowSharp,
    statusMobile: false,
  },
  {
    title: "Thành viên",
    path: "/app/broker-dashboard",
    Icon: Groups,
    statusMobile: true,
  },
  {
    title: "Hồ sơ",
    path: "/app/broker-dashboard",
    Icon: Settings,
    statusMobile: true,
  },
  {
    title: "Tín hiệu",
    path: "/app/broker-dashboard",
    Icon: SignalCellularAlt,
    statusMobile: true,
  },
];
