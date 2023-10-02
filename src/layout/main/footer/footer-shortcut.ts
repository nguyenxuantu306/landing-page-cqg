export type FooterContentColumn = {
  grid: number;
  title: string;
  shortcuts: { item: string; path: string; target: boolean }[];
};

export const footerShortcuts: FooterContentColumn[] = [
  {
    grid: 2,
    title: "Về chúng tôi",
    shortcuts: [
      {
        item: "Đội ngũ Anfin",
        path: "/doi-ngu-anfin/",
        target: false,
      },
      { item: "Sứ mệnh", path: "Sứ mệnh", target: false },
      {
        item: "Tuyển dụng",
        path: "https://www.anfin.vn/careers",
        target: false,
      },
      // {
      //   item: "Cộng tác cùng Anfin",
      //   path: "https://www.anfin.vn/chuong-trinh-anfin-affiliate-marketing",
      // },
      {
        item: "Hỗ trợ",
        path: "https://www.anfin.vn/cau-hoi-thuong-gap",
        target: false,
      },
    ],
  },
  {
    grid: 2,
    title: "Sản phẩm",
    shortcuts: [
      {
        item: "Cổ phiếu",
        path: "https://www.anfin.vn/san-pham-co-phieu-anfin",
        target: false,
      },
      {
        item: "Quỹ ETF",
        path: "https://www.anfin.vn/san-pham-quy-etf",
        target: false,
      },
      // { item: "Tích lũy", path: "https://www.anfin.vn/san-pham-tich-luy" },
      {
        item: "Cộng đồng",
        path: "https://www.anfin.vn/san-pham-cong-dong",
        target: false,
      },
    ],
  },
  {
    grid: 2,
    title: "Tin tức",
    shortcuts: [
      {
        item: "Kiến thức",
        path: "https://www.anfin.vn/huong-dan-dau-tu-chung-khoan-cho-nguoi-moi-bat-dau",
        target: false,
      },
      { item: "Blog", path: "https://www.anfin.vn/blogs", target: false },
      { item: "Sự kiện", path: "https://www.anfin.vn/su-kien", target: false },
    ],
  },
  {
    grid: 3,
    title: "Chính sách",
    shortcuts: [
      {
        item: "Bảo mật & chia sẻ thông tin",
        path: "https://www.anfin.vn/chinh-sach-bao-mat",
        target: false,
      },
      {
        item: "Hợp đồng điện tử",
        path: "https://www.anfin.vn/hubfs/anfin%20contact/H%E1%BB%A3p%20%C4%91%E1%BB%93ng%20h%E1%BB%A3p%20t%C3%A1c%20kinh%20doanh%20-%20Business%20Cooperation%20Contract%20-%20Saving.pdf",
        target: false,
      },
      {
        item: "Nguyên tắc tính năng cộng đồng",
        path: "https://www.anfin.vn/hubfs/dieu-khoan-su-dung-cong-dong.pdf",
        target: true,
      },
      {
        item: "Điều khoản - Điều kiện",
        path: "https://www.anfin.vn/dieu-khoan-su-dung",
        target: true,
      },
    ],
  },
];
