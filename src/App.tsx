import React, { useState } from "react";
import "./App.css";

interface Document {
  id: string;
  title: string;
  lastEdited: string;
  image: string;
}

const App: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      title: "Huawei Trip",
      lastEdited: "Entered 2 hours ago",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      title: "Switzerland Vacation",
      lastEdited: "Entered 2 months ago",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      title: "Bali Honeymoon",
      lastEdited: "Entered 12 months ago",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "4",
      title: "Bangalore Party Trip",
      lastEdited: "Entered a year ago",
      image:
        "https://images.unsplash.com/photo-1588416499018-d8c6ecea35e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuZ2Fsb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  const createNewDocument = () => {
    const newDoc: Document = {
      id: Date.now().toString(),
      title: "Untitled Trip",
      lastEdited: "Just now",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    };
    setDocuments([newDoc, ...documents]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <div className="logo">
            <span className="docs-logo">Travito</span>
            <span className="tagline">Your Travel Companion</span>
          </div>
        </div>
        <div className="header-center">
          <input
            type="text"
            placeholder="Search Trips and Tours"
            className="search-input"
          />
        </div>
        <div className="header-right">
          <button className="header-btn">Explore</button>
          <button className="header-btn">My Trips</button>
          <div className="profile-icon">
            <span>U</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="new-document-section">
          <div className="new-document-card" onClick={createNewDocument}>
            <div className="document-thumbnail new">
              <div className="plus-icon">
                <span>+</span>
                <div className="hover-effect"></div>
              </div>
              <div className="create-text">Create New Trip</div>
            </div>
          </div>
        </section>

        <section className="recent-documents">
          <h2>Recent Trips</h2>
          <div className="documents-grid">
            {documents.map((doc) => (
              <div key={doc.id} className="document-card">
                <div className="document-thumbnail">
                  <div
                    className="document-image"
                    style={{ backgroundImage: `url(${doc.image})` }}
                  >
                    <div className="image-overlay">
                      <span className="view-btn">View Trip</span>
                    </div>
                  </div>
                  <div className="document-info">
                    <h3>{doc.title}</h3>
                    <p>{doc.lastEdited}</p>
                    <div className="action-buttons">
                      <button className="action-btn edit">Edit</button>
                      <button className="action-btn share">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
