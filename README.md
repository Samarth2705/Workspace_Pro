# 🏢 WorkSpace Pro

> A smart office workspace management system with role-based portals 
> for Admins, Employees, and Maintenance staff.

---

## 🌐 Live Pages

| File | Description |
|------|-------------|
| `WorkSpacePro_Homepage.html` | 🏠 Main landing page for all users |
| `login.html` | 🔐 Role-based login (Admin / Employee / Maintenance) |

---

## 👥 Team & Branch Structure

| Branch | Role | Files |
|--------|------|-------|
| [`admin`](../../tree/admin) | ⚙️ Admin | `admin.html` |
| [`user`](../../tree/user) | 👤 Employee | `employee.html`, `booking.html`, `my-bookings.html` |
| [`management`](../../tree/management) | 🔧 Maintenance | `maintenance.html` |

---

## 🔐 How Login Works

The login page (`login.html`) supports 3 roles:

- **Employee** → redirects to `employee.html`
- **Admin** → redirects to `admin.html`
- **Maintenance** → redirects to `maintenance.html`

---

## 📁 Full File Overview

| File | Branch | Purpose |
|------|--------|---------|
| `WorkSpacePro_Homepage.html` | `main` | Landing page |
| `WorkSpacePro_Homepage.jsx` | `main` | React version of homepage |
| `login.html` | `main` | Shared login for all roles |
| `admin.html` | `admin` | Admin dashboard & controls |
| `employee.html` | `user` | Employee dashboard |
| `booking.html` | `user` | Desk/resource booking page |
| `my-bookings.html` | `user` | View personal bookings |
| `maintenance.html` | `management` | Maintenance management panel |

---

## 🛠️ Technologies Used

- HTML5 / CSS3
- Vanilla JavaScript
- Google Fonts (Playfair Display, Outfit)

---

## 🚀 How to Run

1. Clone or download this repository
2. Open `WorkSpacePro_Homepage.html` in your browser
3. Click login and select your role
4. You will be redirected to your respective portal

---
