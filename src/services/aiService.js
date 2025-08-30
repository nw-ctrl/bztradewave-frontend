const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://5000-i9worpvlecsk8tpur3owu-78751ae2.manusvm.computer';

const aiService = {
  async getTradeNews(count = 3) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/trade-news?count=${count}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching AI trade news:", error);
      return { articles: [] };
    }
  },

  async getMarketInsights(topic = 'general') {
    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/market-insights?topic=${topic}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching AI market insights:", error);
      return { title: "AI Insights Unavailable", content: "Failed to load AI market insights. Please try again later.", isError: true };
    }
  },

  async checkAIStatus() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/status`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error checking AI status:", error);
      return { status: "offline" };
    }
  },

  formatNewsForDisplay(data) {
    if (!data || !data.articles) return [];
    return data.articles.map(article => ({
      id: article.id || Math.random(),
      title: article.title,
      summary: article.summary,
      category: article.category || 'market_analysis',
      date: article.date || new Date().toISOString().split('T')[0],
      readTime: article.read_time || '2 min read',
      views: article.views || Math.floor(Math.random() * 1000) + 100,
      relevanceScore: article.relevance_score || (Math.random() * 0.3 + 0.7).toFixed(2),
      impactLevel: article.impact_level || 'medium',
      isAiGenerated: true,
      isFeatured: false,
    }));
  },

  formatInsightsForDisplay(data) {
    if (!data) return null;
    return {
      title: data.title || "AI Market Insights",
      content: data.content || "No insights available.",
      timestamp: data.timestamp || new Date().toISOString(),
      source: data.source || "AI Model",
      isError: data.isError || false,
    };
  },
};

export default aiService;



  async refreshAIContent() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/auto-generate-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error refreshing AI content:", error);
      return { error: "Failed to refresh AI content" };
    }
  },

  async generateInsights(category = 'agriculture', count = 1) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/generate-insights`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category, count }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error generating AI insights:", error);
      return { error: "Failed to generate AI insights" };
    }
  },

