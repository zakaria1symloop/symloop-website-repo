// src/services/apiService.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.100.36:8000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Accept': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Submit job application
  async submitApplication(applicationData) {
    const formData = new FormData();
    formData.append('name', applicationData.name);
    formData.append('email', applicationData.email);
    formData.append('job_title', applicationData.jobTitle);
    formData.append('cv', applicationData.cv);

    return this.makeRequest('/applications', {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header for FormData
    });
  }

  // Submit course enrollment
  async submitEnrollment(enrollmentData) {
    return this.makeRequest('/enrollments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrollmentData),
    });
  }

  // Submit company contact inquiry
  async submitCompanyContact(contactData) {
    return this.makeRequest('/company-contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
  }

  // Submit quote request
  async submitQuoteRequest(quoteData) {
    return this.makeRequest('/quote-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    });
  }

  // Submit consultation request
  async submitConsultationRequest(consultationData) {
    return this.makeRequest('/consultation-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consultationData),
    });
  }

  // Health check
  async healthCheck() {
    return this.makeRequest('/health');
  }

  // ChatGPT Integration - FIXED VERSION
  async sendChatMessage(messages, sessionId) {
    try {
      const response = await fetch(`${this.baseURL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          messages,
          sessionId
        })
      });

      // Get response data first
      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error('Failed to parse response JSON:', parseError);
        return {
          success: false,
          error: 'Invalid response format from server',
          fallback: true
        };
      }

      // Check if response is ok
      if (!response.ok) {
        // Extract error message from response data and return structured error
        const errorMessage = data?.error || data?.message || `HTTP ${response.status}: ${response.statusText}`;
        console.error('Chat API Error:', errorMessage);
        
        return {
          success: false,
          error: errorMessage,
          fallback: true
        };
      }

      // Return successful response
      return {
        success: true,
        message: data.message || data.response || 'Response received',
        ...data // Include any other data from the response
      };

    } catch (error) {
      console.error('Chat API Network Error:', error);
      
      // Return structured error response for fallback handling
      return {
        success: false,
        error: error.message || 'Network error occurred',
        fallback: true
      };
    }
  }

  // Log chat interaction for analytics
  async logChatInteraction(sessionId, userMessage, botResponse) {
    try {
      await fetch(`${this.baseURL}/chat/log`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          user_message: userMessage,
          bot_response: botResponse,
          timestamp: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error('Failed to log chat interaction:', error);
    }
  }

  // Get chat suggestions based on context
  async getChatSuggestions(context) {
    try {
      const response = await fetch(`${this.baseURL}/chat/suggestions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ context })
      });

      if (!response.ok) {
        throw new Error('Failed to get suggestions');
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to get chat suggestions:', error);
      return {
        suggestions: [
          "Voir vos services",
          "Demander un devis",
          "Parler à un commercial",
          "En savoir plus"
        ]
      };
    }
  }

  // Track page view for analytics
  async trackPageView(viewData) {
    try {
      const response = await fetch(`${this.baseURL}/analytics/page-view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(viewData)
      });

      if (!response.ok) {
        throw new Error('Failed to track page view');
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to track page view:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

export default new ApiService();