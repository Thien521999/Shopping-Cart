# Scripts để chạy trong lúc code

### `npm start`

Chạy app trong môi trường development.
truy cập http://localhost:3000 để xem app trong browser.

### `npm test`

Chạy app trong môi trường test

### `npm run build`

Build app ở chế độ production trong thư mục build (để deploy lên server)

# App được deploy trên vercel
Link: https://mini-shopping-cart.vercel.app/

# Các chức năng đang dùng

-Khởi tạo dự án từ đầu với create-react-app

-Dùng functional component + Hook

-Quản lý form hiệu quả với React Hook Form

-Làm giao diện nhanh và đơn giản với Material UI

-Quản lý state với Redux Toolkit

-Dùng thư viện axios gọi api lấy danh sách sản phẩm

-Authentication module: 
<ul>
  <li>đăng ký</li>
  <li>đăng nhập</li>
  <li>đăng xuất</li>
  <li>đăng ký thất bại báo lỗi</li>
  <li>Đăng nhập thành công hiển thị icon</li>
</ul>

-Shopping cart-Trang danh sách sản phẩm

<ul>
  <li>Viết Api lấy danh sách sản phẩm</li>
  <li>Làm skeletons cho danh sách sản phẩm</li>
  <li>Sắp xếp giá sản phẩm</li>
  <li>Lọc theo dịch vụ sản phẩm</li>
  <li>Lọc theo khoảng giá</li>
  <li>Đồng bộ filter trên URL</li>
  <li>Hỗ trợ nút back trên trình duyệt</li>
  <li>Them sản phâm vao giỏ hang</li>
  <li>An toàn render dư lieu HTML lên UI</li>
</ul>


# Idea Cart
Detail page
Click chon mua
Open Mini Cart
Go to Cart Page

Cart
-showMiniCart: true/false
cartItems -> item(product, quantity)

State tinh toan phu thuoc vao state co san
-CartItemCount
-CartTotal
->createSelector()
