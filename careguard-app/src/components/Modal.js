import React from 'react';

const Modal = ({
  isOpen,
  onRequestClose,
  searchQuery,
  setSearchQuery,
  searchIncidents,
  searchResults,
  styles, // Receive the styles object as a prop
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const modalContentStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={modalStyles}>
        <div style={modalContentStyles}>
          <button onClick={onRequestClose} className="modal-close-button">
            Close
          </button>
          {/* Place your search input field and search button here */}
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput} // Use the styles object for styling
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" style={styles.searchButton} onClick={searchIncidents}>
            Search
          </button>

          {/* Display search results here */}
          <div>
            {searchResults.map((result) => (
              <div key={result.id}>
                {/* Render each search result item */}
                <p>{result.title}</p>
              </div>
            ))}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

