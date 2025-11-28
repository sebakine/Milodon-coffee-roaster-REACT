import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container" style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          minHeight: '50vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          background: 'var(--bg-color)',
          color: 'var(--text-color)'
        }}>
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>¡Ups! Algo salió mal.</h2>
          <p style={{ marginBottom: '2rem' }}>Lo sentimos, ha ocurrido un error inesperado.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
            style={{
              padding: '0.8rem 1.5rem',
              background: 'var(--accent-color)',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Recargar página
          </button>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ whiteSpace: 'pre-wrap', marginTop: '2rem', textAlign: 'left', maxWidth: '800px' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
