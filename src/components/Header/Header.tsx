import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [activeTab, setActiveTab] = useState("one-way");
  const [selectedFare, setSelectedFare] = useState("regular");

  return (
    <div className="horizontal-header">
      <div className="booking-container">
        <div className="header-title">
          Plan International and Domestic trips
        </div>

        <div className="trip-options">
          <div
            className={`option ${activeTab === "one-way" ? "active" : ""}`}
            onClick={() => setActiveTab("one-way")}
          >
            One Way
          </div>
          <div
            className={`option ${activeTab === "round-trip" ? "active" : ""}`}
            onClick={() => setActiveTab("round-trip")}
          >
            Round Trip
          </div>
        </div>

        <div className="booking-form">
          <div className="form-row">
            <div className="form-group from-group">
              <label>From</label>
              <div className="input-with-icon">
                <input type="text" value="Delhi" readOnly />
                <span className="city-code">DEL</span>
              </div>
              <div className="subtext">Delhi Airport India</div>
            </div>

            <div className="form-group departure-group">
              <label>Departure</label>
              <input type="text" value="30 Aug 2023" readOnly />
              <div className="subtext">Wednesday</div>
            </div>

            {activeTab === "round-trip" && (
              <div className="form-group return-group">
                <label>Return</label>
                <input
                  type="text"
                  value="Tap to add a return date for bigger discounts"
                  readOnly
                />
                <div className="subtext discount-text">
                  Add return for bigger discounts
                </div>
              </div>
            )}

            <div className="form-group search-group">
              <button className="search-btn">
                <span className="search-text">Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className="special-fares-section">
          <h3>Select a special fare</h3>
          <div className="fare-options">
            <div
              className={`fare-option ${
                selectedFare === "regular" ? "selected" : ""
              }`}
              onClick={() => setSelectedFare("regular")}
            >
              <div className="fare-title">Regular</div>
              <div className="fare-description">Regular fares</div>
            </div>

            <div
              className={`fare-option ${
                selectedFare === "student" ? "selected" : ""
              }`}
              onClick={() => setSelectedFare("student")}
            >
              <div className="fare-title">Student</div>
              <div className="fare-description">Extra discounts/baggage</div>
            </div>

            <div
              className={`fare-option ${
                selectedFare === "senior" ? "selected" : ""
              }`}
              onClick={() => setSelectedFare("senior")}
            >
              <div className="fare-title">Senior Citizen</div>
              <div className="fare-description">Up to ₹ 600 off</div>
            </div>

            <div
              className={`fare-option ${
                selectedFare === "armed" ? "selected" : ""
              }`}
              onClick={() => setSelectedFare("armed")}
            >
              <div className="fare-title">Armed Forces</div>
              <div className="fare-description">Up to ₹ 600 off</div>
            </div>

            <div
              className={`fare-option ${
                selectedFare === "medical" ? "selected" : ""
              }`}
              onClick={() => setSelectedFare("medical")}
            >
              <div className="fare-title">Doctor and Nurses</div>
              <div className="fare-description">Up to ₹ 600 off</div>
            </div>
          </div>
        </div>

        <div className="flight-protection">
          <label className="protection-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Add Flight Delay Protection
          </label>
          <span className="protection-text">
            Get compensation for delays of 1 hour or more
          </span>
          <span className="view-details">View Details</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
