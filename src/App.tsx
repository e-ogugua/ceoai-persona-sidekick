import { Brain, MessageCircle, Sparkles, Zap } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Emmanuel AI</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced AI assistant platform powered by cutting-edge machine learning
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Smart Conversations</h3>
            </div>
            <p className="text-gray-600">
              Engage in natural, intelligent conversations with advanced AI capabilities
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-purple-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">AI Insights</h3>
            </div>
            <p className="text-gray-600">
              Get intelligent insights and analysis powered by machine learning algorithms
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Lightning Fast</h3>
            </div>
            <p className="text-gray-600">
              Experience blazing-fast AI responses with optimized performance
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Start AI Chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
