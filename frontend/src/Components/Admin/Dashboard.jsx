import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const [totalUsers, setTotalUsers] = useState(0);  // State to hold total users count
    const stats = [
        { label: "Total Users", target: totalUsers, path: "/admin/getallusers" },
        { label: "Total Subscribers", target: 8, path: "/products" },
        { label: "Total Soon to Expire", target: 2, path: "/expiring" },
        { label: "Total Reviews", target: 169, path: "/reviews" },
        { label: "Total Revenue", target: 310, path: "/revenue", prefix: "₹" }
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        stats.forEach((stat, index) => {
            let count = 0;
            const step = Math.max(1, Math.floor(stat.target / 60)); // Smoother and slightly slower animation
            const interval = setInterval(() => {
                count += step;
                if (count >= stat.target) {
                    count = stat.target;
                    clearInterval(interval);
                }
                setCounts((prevCounts) => {
                    const newCounts = [...prevCounts];
                    newCounts[index] = count;
                    return newCounts;
                });
            }, 20); // Adjusted for smoother animation
        });
    }, []);

    return (
        <div className="dashboard container-fluid"> {/* Added more margin from the top */}
            <div className="row">
                <aside className="col-md-2 sidebar p-3">
                    <h2 className="text-danger">STREAMIT</h2>
                    <ul className="nav flex-column">
                        <li className="nav-item">Dashboard</li>
                        <li className="nav-item">Media Library</li>
                        <li className="nav-item">Genres</li>
                        <li className="nav-item">Movies</li>
                        <li className="nav-item">TV Shows</li>
                        <li className="nav-item">Videos</li>
                        <li className="nav-item">Live TV</li>
                        <li className="nav-item">Subscriptions</li>
                    </ul>
                </aside>
                <main className="col-md-10 p-5">
                    <h3 className="mb-4">Admin Dashboard</h3>
                    <div className="row g-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="col-md-3 card-box p-4 shadow rounded text-center mt-3"
                                onClick={() => navigate(stat.path)}
                                style={{ cursor: "pointer", backgroundColor: "#222", color: "#fff" }}
                            >
                                <h4>{stat.label}</h4>
                                <p className="big-number display-4 fw-bold" style={{ color: "#f8f9fa" }}> {/* Adjusted number color to match the theme */}
                                    {stat.prefix || ""}{counts[index]}
                                </p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;