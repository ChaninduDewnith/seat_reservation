import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import './interndashboard.css'; // your custom CSS

const InternDashboard = ({ employeeName = "Intern User" }) => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <div className="bg-white p-4 p-md-5 rounded-4 shadow-lg">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
          <div className="d-flex align-items-center">
            <h5 className="text-center flex-grow-1 fw-bold text-uppercase d-none d-md-block">
              Seat Reservation System
            </h5>
          </div>
          <h1 className="text-center flex-grow-1 fw-bold text-uppercase d-none d-md-block">
            Dashboard
          </h1>
          <div className="d-flex align-items-center">
            <div className="text-end me-3 d-none d-md-block">
              <h6 className="mb-0">{employeeName}</h6>
              <small className="text-muted">Online</small>
            </div>
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/login.png"
                  alt="User"
                  className="profile-pic"
                  style={{ width: "40px", borderRadius: "50%" }}
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => navigate('/login')}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* View Reservations */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-danger">
              <div className="card-header bg-danger bg-opacity-25 text-danger">
                <div className="d-flex align-items-center">
                  <i className="bi bi-people-fill fs-4 me-2"></i>
                  <h5 className="mb-0">View Reservations</h5>
                </div>
              </div>
              <div className="card-body">
                <a
                  onClick={() => navigate('/viewreservation')}
                  className="btn btn-danger w-100 rounded-pill fw-semibold"
                >
                  <i className="bi bi-people-fill me-2"></i> Access
                </a>
              </div>
            </div>
          </div>

          {/* Seat Reservation */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-success">
              <div className="card-header bg-success bg-opacity-25 text-success">
                <div className="d-flex align-items-center">
                  <i className="bi bi-person-badge fs-4 me-2"></i>
                  <h5 className="mb-0">Seat Reservation</h5>
                </div>
              </div>
              <div className="card-body">
                <a
                  onClick={() => navigate('/seatreservation')}
                  className="btn btn-success w-100 rounded-pill fw-semibold"
                >
                  <i className="bi bi-person-badge me-2"></i> Access
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top text-center">
          <p className="text-muted small mb-0">
            Seat Reservation System • v2.1.0 • © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternDashboard;
